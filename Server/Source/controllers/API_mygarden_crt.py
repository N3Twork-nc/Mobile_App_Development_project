from Source import app
from Source.security import Authentication
from fastapi import Depends
from Source.models_mvc.myGarden_model import UploadGarden,DataGarden
from enum import Enum
from datetime import datetime

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
    

class Interval(Enum):
    DAY="1"
    WEEK="7"
    MONTH="30"
class TypeData(Enum):
    TEMPERATURE="Temperature"
    HUMIDITY="Humidity"
    LIGHT="Light"
    MOISTURE="Moisture"
@app.get("/APIGetDataGarden")
def getDataGarden(idGarden:str,type:TypeData,interval:Interval,username=Depends(Authentication().validate_token)):
    try: 
        garden=DataGarden(username,idGarden,str(type.value),int(interval.value))
        data=garden.getData()
        grouped_data = {}
        for date_str, value in data.items():
            if interval==Interval.DAY:
                date_obj = datetime.strptime(date_str,"%Y-%m-%d-%H:%M:%S")
                date_obj=date_obj.strftime("%Y-%m-%d:%H")
            else:
                date_obj = datetime.strptime(date_str, "%Y-%m-%d-%H:%M:%S")
                date_obj=date_obj.strftime("%Y-%m-%d")
            # Tạo hoặc cập nhật nhóm trong từ điển
            if date_obj in grouped_data:
                grouped_data[date_obj].append(value)
            else:
                grouped_data[date_obj] = [value]
        average_data = {}
        for date, values in grouped_data.items():
            average_data[date] = sum(values) / len(values)
        return {
            "Status":True,
            "Message":"Get data successful",
            "Data":average_data
        }
    except Exception as e:
        print(str(e))
        return {
            "Status":False,
            "Message":"Get data failed"
        }

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
