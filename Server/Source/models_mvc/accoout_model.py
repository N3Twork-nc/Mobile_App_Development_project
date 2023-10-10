from pydantic import BaseModel
from firebase_admin import db

class Account(BaseModel):
    username: str
    password: str
    email: str=None
    def insertAccout(sefl):
        ref=db.reference('Accounts')
        checkUsername=sefl.existenceUsername()
        if checkUsername==None:
            new_user_ref = ref.child(sefl.username)
            new_user_ref.set({
                'username': sefl.username,
                'password': sefl.password
            })
            return True
        else: 
            return False

    def existenceUsername(sefl):
        ref=ref=db.reference('Accounts')
        result=ref.child(sefl.username).get()
        return result