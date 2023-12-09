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
            "Status":True,
            "Message":"Successful garden upload",
        }
    except Exception as e:
        print(str(e))
        return {
            "Status":False,
            "Message":"Garden upload failed"
        }
    
@app.get("/APIGetDataGarden")
def getDataGarden(idGarden:str,type:str,username=Depends(Authentication().validate_token)):
    garden=DataGarden(username,idGarden,type)
    data=garden.getData()
    return data

@app.get("/APIGetDetailGarden")
def getDetail(username=Depends(Authentication().validate_token)):
    try:
        garden=DataGarden(username)
        data=garden.getDatail()
        return data
    except Exception as e:
        print(str(e))
        return {
            "Status":False,
            "Message":"Retrieving garden information failed"
        }
