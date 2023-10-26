from pydantic import BaseModel
from firebase_admin import db
import threading

class Account(BaseModel):
    fullname: str=None
    username: str
    password: str=None
    email: str=None
    OTP:str=None


    def insertAccount(self):
        ref=db.reference('Accounts')
        user=ref.child(self.username)
        user.set({
            'fullname':f'{self.fullname}',
            'username':f'{self.username}',
            'email':f'{self.email}',
            'password':f'{self.password}'
        })
        ref=db.reference(f'OTP/{self.username}').delete()

    def checkAccount(self):
        account=db.reference(f'Accounts/{self.username}').get()
        if account==None or account['password']!=self.password:
            return False
        return True

    def insertOTP(self,OTP):
        ref=db.reference('OTP')
        user=ref.child(self.username)
        user.set({
            'fullname':f'{self.fullname}',
            'username':self.username,
            'password':f'{self.password}',
            'email':self.email,
            'otp':f'{OTP}'
        })
        def task():
            ref=db.reference(f'OTP/{self.username}').delete()

        # Hẹn giờ để thực hiện tác vụ sau 2 phút
        timer = threading.Timer(30*60, task)
        # Bắt đầu đếm ngược
        timer.start()

    def verifyEmail(self):
        try : 
            OTP=db.reference(f'OTP/{self.username}').get()['otp']
            if OTP==self.OTP:
                return True
        except: 
            return False
        return False

    def existenceUsername(self):
        ref=ref=db.reference('Accounts')
        result=ref.child(self.username).get()
        return result
    
    def existenceEmail(self):
        ref=db.reference('Accounts')
        try:
            email=ref.order_by_child('email').equal_to(self.email)['username']
            return email
        except:
            return None
