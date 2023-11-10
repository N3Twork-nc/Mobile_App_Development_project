from Source import app
from Source.models_mvc.myRoom_model import MyPlant
from fastapi import UploadFile,Depends
from Source.security import Authentication
from datetime import datetime
from Source.config.config import container



@app.put("/APIuploadMyPlant")
async def uploadMyPlant(file:UploadFile,roomName:str,plantName:str,username=Depends(Authentication().validate_token)):
    data=MyPlant(roomName,plantName)
    now=datetime.now()
    data.username=username
    data.timeUpload=str(now)
    data.id=now.strftime("%Y%m%d%H%M%S")
    data.insertPlant()
    fileData = await file.read()
    container.upload_blob(f'myroom/{data.username}/{data.id}.png',fileData)
    return data.id