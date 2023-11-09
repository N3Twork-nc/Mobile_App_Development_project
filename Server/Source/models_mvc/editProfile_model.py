from pydantic import BaseModel
from firebase_admin import db

class UpdateUserInfo(BaseModel):
    username: str
    fullName: str
    gender: str
    phoneNumber: str
    address: str

    def insertInfo(self):
        ref=db.reference(f'Accounts/{self.username}')
        ref.update({
            "fullname": self.fullName,
            "gender":self.gender,
            "phoneNumber":self.phoneNumber,
            "address":self.address,
        })
