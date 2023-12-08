from pydantic import BaseModel,Field,PrivateAttr
from datetime import datetime,time
from firebase_admin import db
import uuid
import json

class UploadGarden(BaseModel):
    name_garden:str
    cropType:str
    location:str

    def insertGarden(self,username):
        now=datetime.now()
        timeUpload=str(now)
        id_garden=now.strftime("%Y%m%d%H%M%S%f")
        ref=db.reference(f'MyGarden/{username}')
        ref.update({id_garden:{
            "NameGarden":self.name_garden,
            "CropType":self.cropType,
            "timeUpload":str(timeUpload),
            "location":self.location
        }})

    
    
class DataGarden():

    def __init__(self,username,idGarden,type):
        self.id_garden=idGarden
        self.username=username
        self.type=type
       
    def getData(self):
         ref=db.reference(f'MyGarden/{self.username}/{self.id_garden}/Data')
         data=ref.get()
         return data

    @staticmethod
    def insertData(path,data):
        try:
            ref=db.reference(f'MyGarden/{path}')
            timestamp=datetime.now()
            timestamp=timestamp.strftime("%Y-%m-%d-%H:%M:%S")
            ref.update({timestamp:data})
        except Exception as e:
            print("Garden data update failed",str(e)) 