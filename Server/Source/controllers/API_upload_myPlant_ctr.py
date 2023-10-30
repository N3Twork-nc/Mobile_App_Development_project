from Source import app
from Source.models_mvc.myRoom_model import MyPlant
from Source.security import Authentication
from fastapi import Depends


@app.put("/APIuploadMyPlant", dependencies=[Depends(Authentication().validate_token)])
def uploadMyPlant(data: MyPlant):
    data.insertPlant()
    return "Add plant successfully"