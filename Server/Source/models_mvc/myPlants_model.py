from pydantic import BaseModel
from firebase_admin import db
from Source.classes.azure_class import CustomFunctionAzure
from Source.config.config import container


class MyPlants():
    def __init__(self,username,roomName=None,idPlant=None):
        self.room_name=roomName
        self.id_plant=idPlant
        self.username=username
    def getPlants(self):
            ref=db.reference(f'MyRoom/{self.username}/{self.room_name}')
            data=ref.get()
            if data==None:
                return {}
            for key in data:
                if 'Data' in data[key]:
                    del data[key]['Data']
            return data
