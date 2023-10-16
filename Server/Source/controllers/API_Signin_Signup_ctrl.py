from Source import app
from Source.models_mvc.accoout_model import Account
import random
from Source.controllers.mail_class import Mail



@app.post('/APIsignin')
async def signin(body: Account):
    result=body.checkAccount()
    if result==True:
        return "Login successfull"
    else: 
        return "Incorrect username or password!"


#Create account   
@app.put('/APIsignup')
def signup(body:Account):
    user=body.existenceUsername()
    if user!=None:
        return "Username already exists"
    email=body.existenceEmail()
    if email!=None:
        return "Email already exists"
    OTP=random.randint(1000,9999)
    sendMail=Mail()
    sendMail.sendOTP(body.email,OTP)
    body.insertOTP(OTP)
    return "Enter OTP"


#verify  
@app.post('/APIsignup')
def verify(body:Account):
    result=body.verifyEmail()
    if result==True:
        body.insertAccout()
        return "Signup successfull"
    return "Please re-enter OTP"
