from Source import app
from Source.models_mvc.myRoom_model import MyPlant
from fastapi import UploadFile,Request,Depends,Header
from Source.security import Authentication,reusable_oauth2
from datetime import datetime
from azure.storage.blob import BlobServiceClient
import os


@app.put("/APIuploadMyPlant")
async def uploadMyPlant(file:UploadFile,roomName:str,plantName:str,username=Depends(Authentication().validate_token)):
    print(file)
    data=MyPlant(roomName,plantName)
    now=datetime.now()
    data.username=username
    data.timeUpload=str(now)
    print(data.timeUpload)
    data.id=now.strftime("%Y%m%d%H%M%S")
    data.insertPlant()
    fileData = await file.read()
    container=BlobServiceClient.from_connection_string(os.environ['storage_connection_string']).get_container_client('myplants')
    container.upload_blob(f'myroom/{data.username}/{data.id}.png',fileData)
    return data.id