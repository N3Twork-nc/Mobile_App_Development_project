from Source import app
from Source.models_mvc.editProfile_model import UpdateUserInfo
from Source.security import Authentication
from fastapi import Depends,UploadFile,HTTPException
import numpy as np
import cv2
from Source.config.config import container



@app.post("/editProfile")
def editProfile(data:UpdateUserInfo,username=Depends(Authentication().validate_token)):
    data.username=username
    data.insertInfo()
    return "Update info successfully"

@app.post("/uploadAvata")
async def uploadAvata(avata:UploadFile,username=Depends(Authentication().validate_token)):
    try:
        fileData = await avata.read()
        nparr = np.frombuffer(fileData, np.uint8)
        # Đọc ảnh từ mảng NumPy
        image = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)
        # Thay đổi kích thước ảnh
        resized_image = cv2.resize(image, (300, 300))
        # Chuyển đổi ảnh đã thay đổi kích thước thành binary
        resized_fileData = cv2.imencode('.jpg', resized_image)[1].tobytes()
        container.upload_blob(f'avata/{username}.jpg',resized_fileData,overwrite=True)
        return "Updata avata successfull"
    except Exception as e:
        print("Lỗi: ",str(e))
        raise HTTPException(status_code=400, detail="Upload avavta fail")
