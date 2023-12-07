from Source import app
from Source.security import Authentication
from fastapi import Depends
from Source.models_mvc.myGarden_model import MyGarden
import json

@app.put("/APIUploadMyGarden")
def UploadMyGarden(garden:MyGarden,username=Depends(Authentication().validate_token)):
    try:
        garden.username=username
        garden.insertGarden()
        print(garden.to_json())
        return {
            "Erro":False,
            "Message":"Successful garden upload",
            "Data":json.dumps(garden.__dict__)
        }
    except Exception:
        return {
            "Erro":True,
            "Message":"Upload a faulty garden"
        }