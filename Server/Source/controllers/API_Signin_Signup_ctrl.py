from Source import app
from Source.models_mvc.accoout_model import Account
import random
from Source.controllers.sendMail_class import Maill



@app.post('/signin')
async def signin(body: Account):
    result=body.checkAccount()
    if result==True:
        return "Login successfull"
    else: 
        return "Incorrect username or password!"
    
@app.post('/signup')
def signup(body:Account):
    user=body.existenceUsername()
    if user==True:
        return "Username already exists"
    email=body.existenceEmail()
    if email==True:
        return "Username already exists"
    OTP=random.randint(100000,999999)
    sendMail=Maill()
    sendMail.sendOTP(body.email,OTP)
    body.addOTP(OTP)
    return "Enter OTP"

    
@app.post('/signup/verify')
def verify(body:Account):
    result=body.checkOTP()
    if result==True:
        body.insertAccout()
        return "Signup successfull"
    return "Please re-enter OTP"
