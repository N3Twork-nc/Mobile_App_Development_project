from Source import app
from Source.security import Authentication
from fastapi import Depends
from Source.models_mvc.myGarden_model import UploadGarden,DataGarden
import json

@app.put("/APIUploadMyGarden")
def UploadMyGarden(garden:UploadGarden,username=Depends(Authentication().validate_token)):
    try:
        garden.insertGarden(username)
        return {
            "Erro":False,
            "Message":"Successful garden upload",
        }
    except Exception as e:
        print(str(e))
        return {
            "Erro":True,
            "Message":"Garden upload failed"
        }
    
@app.get("/APIGetDataGarden")
def getDataGarden(idGarden:str,type:str,username=Depends(Authentication().validate_token)):
    garden=DataGarden(username,idGarden,type)
    data=garden.getData()
    return data
