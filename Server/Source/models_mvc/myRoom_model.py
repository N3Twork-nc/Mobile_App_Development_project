from pydantic import BaseModel
from firebase_admin import db

class MyPlant (BaseModel):
    username: str
    roomName: str
    plantName: str
    timeUpload: str


    def insertPlant(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}')
        ref.set({
            "plantName":self.plantName,
            "timeUpload":self.timeUpload
        })
    
    def deletePlant(self):
        a=0
