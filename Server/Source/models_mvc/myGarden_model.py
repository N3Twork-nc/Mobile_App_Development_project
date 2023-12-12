from pydantic import BaseModel
from datetime import datetime,timedelta
from firebase_admin import db
import random

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

    def __init__(self,username,idGarden=None,type=None,interval=None):
        self.id_garden=idGarden
        self.username=username
        self.type=type
        self.interval=interval
       
    def getData(self):
        ref=db.reference(f'MyGarden/{self.username}/{self.id_garden}/Data/{self.type}')
        timeQuery=datetime.now()-timedelta(days=self.interval)
        query = ref.order_by_key().start_at(timeQuery.strftime("%Y-%m-%d-%H:%M:%S"))
        data=query.get()
        return data

    def getDatail(self):
        ref=db.reference(f'MyGarden/{self.username}')
        data=ref.get()
        if data==None:
            return {}
        for key in data:
            if 'Data' in data[key]:
                del data[key]['Data']
        return data
    def deleteGarden(self):
        ref=db.reference(f'MyGarden/{self.username}/{self.id_garden}')
        ref.delete()

    @staticmethod
    def insertData(path,data):
        try:
            ref=db.reference(f'MyGarden/{path}')
            timestamp=datetime.now()
            timestamp=timestamp.strftime("%Y-%m-%d-%H:%M:%S")
            ref.update({timestamp:float(data)})
        except Exception as e:
            print("Garden data update failed",str(e)) 