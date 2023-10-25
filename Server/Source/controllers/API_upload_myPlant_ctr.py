from Source import app
from Source.models_mvc.myRoom_model import MyPlant

@app.put("/APIuploadMyPlant")
def uploadMyPlant(data: MyPlant):
    data.insertPlant()