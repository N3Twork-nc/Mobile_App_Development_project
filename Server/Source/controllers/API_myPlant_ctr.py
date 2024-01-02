from Source import app
from Source.models_mvc.myPlants_model import MyPlants,Schedule
from fastapi import UploadFile, Depends, Path, HTTPException
from Source.security import Authentication
from datetime import datetime
from Source.config.config import container
import numpy as np
import cv2
from Source.classes.azure_class import CustomFunctionAzure


@app.put("/APIuploadMyPlant")
async def uploadMyPlant(file:UploadFile,roomName:str,plantName:str,username=Depends(Authentication().validate_token)):
    now=datetime.now()
    data=MyPlants(username=username,roomName=roomName,plantName=plantName,timeUpload=str(now),idPlant=now.strftime("%Y%m%d%H%M%S"))
    data.insertPlant()
    fileData = await file.read()
    nparr = np.frombuffer(fileData, np.uint8)
    # Đọc ảnh từ mảng NumPy
    image = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)
    # Thay đổi kích thước ảnh
    resized_image = cv2.resize(image, (300, 200))
    # Chuyển đổi ảnh đã thay đổi kích thước thành binary
    resized_fileData = cv2.imencode('.jpg', resized_image)[1].tobytes()
    container.upload_blob(f'myroom/{data.username}/{data.id}.jpg',resized_fileData)
    return {"id":data.id,
                 "timeUpload":data.timeUpload,
                 "room":roomName,
                 "plantname":plantName}

@app.get("/APIMyPlant/{roomName}")  # Sử dụng Path để lấy roomName từ URL
def getPlants(roomName: str = Path(...), username=Depends(Authentication().validate_token)):
    try:
        garden = MyPlants(username, roomName)
        data = garden.getPlants()
        for id in data:
            path=f'myroom/{username}/{id}.jpg'
            blob=container.get_blob_client(path)
            token=CustomFunctionAzure.generate_token_blob(blob)
            data[id]['Img']=f'https://caothi.blob.core.windows.net/myplants/{path}?{token}'
        # Xử lý dữ liệu ở đây nếu cần thiết trước khi trả về (ví dụ: loại bỏ thông tin không cần thiết)
        return data
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=204, detail="Get my plant fail")
        

@app.put("/API_schedule")
def schedule(schedule:Schedule,username=Depends(Authentication().validate_token)):
    try:
        schedule.username=username
        schedule.inserSchedule()
        return "Add successful scheduling"
    except Exception as e:
       raise HTTPException(status_code=400, detail="Add scheduling failed")

@app.get('/API_get_count_plants')
def countPlant(username=Depends(Authentication().validate_token)):
    try:
        plat=MyPlants(username=username)
        data=plat.countPlant()
        return data
    except Exception as e:
        print(str(e))
        raise HTTPException(status_code=204, detail="Get count my plant fail")
        
    

