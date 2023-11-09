from firebase_admin import db

class MyPlant ():
    def __init__(self,roomName,plantName):
        self.roomName=roomName
        self.plantName=plantName
        self.username=None
        self.id=None
        self.timeUpload=None

    def insertPlant(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}')
        ref.update({self.id:{
            "plantName":self.plantName,
            "timeUpload":self.timeUpload,
        }})

    def deletePlant(self):
        a=0
