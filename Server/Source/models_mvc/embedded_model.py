from pydantic import BaseModel

class Embedded(BaseModel):
    Temperature:float
    Humidity:float
    username:str
    gardenID:str

    def update():
        "a"
