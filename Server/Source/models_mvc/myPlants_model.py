from pydantic import BaseModel
from firebase_admin import db
from enum import Enum
from datetime import time,date,datetime

class FrequencyType(Enum):
    DATE = "Ngày"
    WEEK = "Tuần"
    MONTH="Tháng"
    YEAR = "Năm"

class ActionType(Enum):
    Watering="Tưới cây"
    Manure="Bón phân"
    soilReplacement="Thay đất"
    leafPruning="Tỉa lá"

class RoomName(Enum):
    LivingRoom="Phòng khách"
    Kitchen="Nhà bếp"
    Garden="Sân vườn"
    BedRoom="Phòng ngủ"


class MyPlants():
    def __init__(self,username:str,roomName:RoomName=None,plantName=None,idPlant=None,timeUpload=None):
        self.roomName=roomName
        self.plantName=plantName
        self.username=username
        self.id=idPlant
        self.timeUpload=timeUpload

    def getPlants(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}')
        data=ref.get()
        if data==None:
            return {}
        return data
    def getAllPlants(self):
        ref=db.reference(f'MyRoom/{self.username}')
        data=ref.get()
        if data==None:
            return {}
        return data
    def countPlant(self):
        ref= ref=db.reference(f'MyRoom/{self.username}')
        data=ref.get()
        return {
            'Phòng khách':len(data['Phòng khách']) if 'Phòng khách' in data else 0,
            'Nhà bếp':len(data['Nhà bếp']) if 'Nhà bếp' in data else 0,
            'Phòng ngủ':len(data['Phòng ngủ']) if 'Phòng ngủ' in data else 0,
            'Sân vườn':len(data['Sân vườn']) if 'Sân vườn' in data else 0,
            'Lưu trữ':len(data['Lưu trữ']) if 'Lưu trữ' in data else 0
        }
    def insertPlant(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}')
        ref.update({self.id:{
            "plantName":self.plantName,
            "timeUpload":self.timeUpload,
        }})

    def deletePlant(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}/{self.id}')
        # print(f'MyRoom/{self.username}/{self.roomName}/{self.id}')
        ref.delete()

    def getSchedule(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName}/{self.id}/Schedule')
        data=ref.get()
        return data




class Schedule (BaseModel):
    id_plant:str
    username:str=None
    roomName:RoomName
    timeStart:time
    dateStart:date
    frequency:int
    frequencyType:FrequencyType
    action:ActionType
    note:str=None

    def inserSchedule(self):
        ref=db.reference(f'MyRoom/{self.username}/{self.roomName.value}/{self.id_plant}/Schedule')
        ref.push({
            "timeStart":str(self.timeStart),
            "dateStart":str(self.dateStart),
            "frequency":self.frequency,
            "frequencyType":str(self.frequencyType.value),
            "action":str(self.action.value),
            "note":self.note
        })
        return True
