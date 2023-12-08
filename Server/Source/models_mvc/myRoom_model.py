from firebase_admin import db
from pydantic import BaseModel
from enum import Enum
from datetime import time,date,datetime


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


class FrequencyType(Enum):
    DATE = "Ngày"
    WEEK = "Tuần"
    MONTH="Tháng"
    YEAR = "Năm"

class ActionType(Enum):
    Watering="Tưới nước"
    Manure="Bón phân"

class Schedule (BaseModel):
    id_plant:str
    username:str
    roomName:str
    timeStart:time
    dateStart:date
    frequency:int
    frequencyType:FrequencyType
    action:ActionType

    def inserSchedule(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}/{self.id_plant}/Schedule')
        key=datetime.now().strftime("%Y%m%d%H%M%S")
        ref.update({key:{
            "timeStart":str(self.timeStart),
            "dateStart":str(self.dateStart),
            "frequency":self.frequency,
            "frequencyType":str(self.frequencyType.value),
            "action":str(self.action.value)
        }})
        return key
