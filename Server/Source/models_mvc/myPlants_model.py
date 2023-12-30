from pydantic import BaseModel, Field
from firebase_admin import db
from Source.classes.azure_class import CustomFunctionAzure
from Source.config.config import container

class MyPlants(BaseModel):
    username: str
    id: str
    roomname: str = Field(alias="roomName")
    plantname: str = Field(alias="plantName")
    timeupload: str = Field(alias="timeUpload")
    linkImg:str=None

def get_user_plants(username: str):
    ref = db.reference(f'MyRoom/{username}')
    user_room_data = ref.get()
    all_user_plants = []

    if user_room_data:
        for room_name, plants in user_room_data.items():
            for plant_id, plant_data in plants.items():
                plant_data.update({'username': username, 'roomName': room_name, 'id': plant_id})
                user_plant = MyPlants(**plant_data)
                link_blob=f"myroom/{username}/{plant_id}.jpg"
                blob=container.get_blob_client(link_blob)
                token=CustomFunctionAzure.generate_token_blob(blob)
                user_plant.linkImg=f'https://caothi.blob.core.windows.net/myplants/{link_blob}?{token}'
                all_user_plants.append(user_plant)

    return all_user_plants
