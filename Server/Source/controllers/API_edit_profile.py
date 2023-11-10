from Source import app
from Source.models_mvc.editProfile_model import UpdateUserInfo
from Source.security import Authentication
from fastapi import Depends


@app.put("/editProfile")
def editProfile(data:UpdateUserInfo):
    data.insertInfo()
    return "Update info successfully"