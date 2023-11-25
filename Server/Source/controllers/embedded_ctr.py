from Source import app
from Source.models_mvc.embedded_model import Embedded

@app.post("/embedded/uploadTemAndHum")
def uploadTemAndHum(data:Embedded):
    data.update()
    return "Successfully"