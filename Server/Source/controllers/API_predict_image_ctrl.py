from Source import app
from fastapi import UploadFile
import numpy as np
from io import BytesIO
from PIL import Image
from model_train.load_model import Model
from Source.security import Authentication
from fastapi import Depends

@app.post('/APIPredictPlants',dependencies=[Depends(Authentication().validate_token)])
async def prediectPlants(file: UploadFile):
    #Đọc dữ liệu
    contents = await file.read()
    #chuyển binary về numpy
    img = Image.open(BytesIO(contents))
    img = img.resize((256, 256))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    #Dự đoán
    result=Model.PredictPlants(img_array)
    print(str(result[0]))
    return str(result[0])
