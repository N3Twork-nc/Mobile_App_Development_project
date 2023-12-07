from Source import app
from Source.models_mvc.myRoom_model import MyPlant
from fastapi import UploadFile,Depends
from Source.security import Authentication
from datetime import datetime
from Source.config.config import container
import numpy as np
import cv2
from Source.models_mvc.myRoom_model import Schedule

@app.put("/APIuploadMyPlant")
async def uploadMyPlant(file:UploadFile,roomName:str,plantName:str,username=Depends(Authentication().validate_token)):
    data=MyPlant(roomName,plantName)
    now=datetime.now()
    data.username=username
    data.timeUpload=str(now)
    data.id=now.strftime("%Y%m%d%H%M%S")
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


@app.put("/API_schedule")
def schedule(schedule:Schedule):
    return schedule.inserSchedule()