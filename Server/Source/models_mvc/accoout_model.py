from pydantic import BaseModel
from firebase_admin import db
import threading

class Account(BaseModel):
    username: str
    password: str
    email: str=None
    OTP:str=None

    def checkAccount(sefl):
        ref=db.reference(f"Accounts/{sefl.username}")
        userData=ref.get()
        if userData==None:
            return False
        if userData['password']!=sefl.password:
            return False
        return True

    def insertAccout(sefl):
        ref=db.reference('Accounts')
        checkUsername=sefl.existenceUsername()
        if checkUsername==None:
            new_user_ref = ref.child(sefl.username)
            new_user_ref.set({
                'username': sefl.username,
                'password': sefl.password,
                'email':sefl.email
            })
            return True
        else: 
            return False
        
    def addOTP(sefl,OTP):
        ref=db.reference("OTP_email").child(sefl.username)
        ref.set(f"{OTP}")
        def deleteOTP():
            ref=db.reference(f'OTP_email/{sefl.username}')
            ref.delete()
        # Hẹn giờ tác vụ sau 2 phút để xóa OTP
        timer = threading.Timer(2*60,deleteOTP)
        timer.start()

    def checkOTP(sefl):
        ref=db.reference(f"OTP_email/{sefl.username}")
        OTP=ref.get()
        if OTP==None or OTP!=f"{sefl.OTP}":
            return False
        return True
    
    def existenceUsername(sefl):
        ref=ref=db.reference('Accounts')
        user=ref.child(sefl.username).get()
        if user==None:
            return False
        return True
    
    def existenceEmail(sefl):
        ref=ref=db.reference('Accounts')
        user=ref.order_by_child('email').equal_to(sefl.email)
        if user==None:
            return False
        return True
