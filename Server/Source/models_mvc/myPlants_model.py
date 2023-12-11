from pydantic import BaseModel, Field
from firebase_admin import db

class MyPlants(BaseModel):
    username: str
    id: str
    roomname: str = Field(alias="roomName")
    plantname: str = Field(alias="plantName")
    timeupload: str = Field(alias="timeUpload")

def get_user_plants(username: str):
    ref = db.reference(f'MyRoom/{username}')
    user_room_data = ref.get()
    all_user_plants = []

    if user_room_data:
        for room_name, plants in user_room_data.items():
            for plant_id, plant_data in plants.items():
                plant_data.update({'username': username, 'roomName': room_name, 'id': plant_id})
                user_plant = MyPlants(**plant_data)
                all_user_plants.append(user_plant)

    return all_user_plants
