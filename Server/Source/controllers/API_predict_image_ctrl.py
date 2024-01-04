from Source import app
from fastapi import UploadFile,HTTPException
import numpy as np
from io import BytesIO
from PIL import Image
from Source.models_mvc.json_info_model import JsonInfo
from model_train.load_model import Model
from Source.security import Authentication
from fastapi import Depends
from Source.config.config import container
from Source.classes.azure_class import CustomFunctionAzure


    
@app.post('/APIPredictPlants',dependencies=[Depends(Authentication().validate_token)])
async def prediectPlants(file: UploadFile):
    #Đọc dữ liệu
    contents = await file.read()
    #chuyển binary về numpy
    img = Image.open(BytesIO(contents))
    img = img.resize((150, 150))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    #Dự đoán
    result=Model.PredictPlants(img_array)
    if result==-1:
        raise HTTPException(status_code=204, detail="Can't predict")
    info=JsonInfo.get_info_plants(result)
    info["cover"]=[]
    for i in range(1,4):
        blob=container.get_blob_client(f"infoPlants/{result}_{i}.jpg")
        token=CustomFunctionAzure.generate_token_blob(blob)
        (info["cover"]).append(f'https://caothi.blob.core.windows.net/myplants/infoPlants/{result}_{i}.jpg?{token}')
    return info

@app.get('/APIGetInfoPlant/{plantname}', dependencies=[Depends(Authentication().validate_token)])
async def get_plant_info(plantname: str):
    try:
        index=JsonInfo.get_index_plant(plantname)
        plant_info = JsonInfo.get_info_plants(index)
        plant_info["cover"]=[]
        for i in range(1,4):
            blob=container.get_blob_client(f"infoPlants/{index}_{i}.jpg")
            token=CustomFunctionAzure.generate_token_blob(blob)
            (plant_info["cover"]).append(f'https://caothi.blob.core.windows.net/myplants/infoPlants/{index}_{i}.jpg?{token}')
        return plant_info
    except Exception as e:
        print("Lỗi: ",e)
        raise HTTPException(status_code=204, detail="Get detail fail")
