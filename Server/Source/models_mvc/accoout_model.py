from pydantic import BaseModel
from firebase_admin import db
import threading

class Account(BaseModel):
    username: str
    password: str=None
    email: str=None
    OTP: str=None


    def insertAccout(self):
        ref=db.reference('Accounts')
        user=ref.child(self.username)
        user.set({
            'username':f'{self.username}',
            'passord':f'{self.password}',
            'email':f'{self.email}'
        })

    def checkAccount(self):
        account=db.reference(f'Accounts/{self.username}').get()
        if account==None or account['password']!=self.password:
            return False
        return True

    def insertOTP(self):
        ref=db.reference('OPT')
        user=ref.child(self.username)
        user.set({
            'username':self.username,
            'password':f'{self.password}',
            'email':self.email,
            'otp':f'{self.OTP}'
        })
        def task():
            ref=db.reference(f'OTP/{self.username}').delete()

        # Hẹn giờ để thực hiện tác vụ sau 2 phút
        timer = threading.Timer(2*60, task)
        # Bắt đầu đếm ngược
        timer.start()

    def verifyEmail(self):
        OTP=db.reference(f'OTP/{self.username}').get()['otp']
        if OTP==self.OTP:
            return True
        return False

    def existenceUsername(self):
        ref=ref=db.reference('Accounts')
        result=ref.child(self.username).get()
        return result
    
    def existenceEmail(self):
        ref=db.reference('OPT')
        email=ref.order_by_child('email').equal_to(self.email)
        return email