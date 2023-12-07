from pydantic import BaseModel
from datetime import datetime,time
from firebase_admin import db
import uuid
import json

class MyGarden(BaseModel):
    id_garden:str=None
    name_garden:str
    username:str=None
    cropType:str
    timeUpload:time
    location:str

    def insertGarden(self):
        now=datetime.now()
        self.timeUpload=str(now)
        self.id_garden=now.strftime("%Y%m%d%H%M%S%f")
        ref=db.reference(f'MyGarden/{self.username}')
        ref.update({self.id_garden:{
            "NameGarden":self.name_garden,
            "CropType":self.cropType,
            "timeUpload":str(self.timeUpload),
            "location":self.location
        }})

    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__)
