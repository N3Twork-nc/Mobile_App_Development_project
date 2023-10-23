from Source import app
from fastapi import FastAPI, File, UploadFile
import numpy as np
from io import BytesIO
from PIL import Image
from model_train.load_model import Model

@app.post('/APIPredictPlants')
async def prediectPlants(file: UploadFile):
    #Đọc dữ liệu
    contents = await file.read()
    #chuyển binary về numpy
    img = Image.open(BytesIO(contents))
    img = img.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    #Dự đoán
    result=Model.PredictPlants(img_array)
    print(result)