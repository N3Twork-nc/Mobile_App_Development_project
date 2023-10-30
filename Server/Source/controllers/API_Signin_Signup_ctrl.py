from Source import app
from Source.models_mvc.account_model import Account
import random
from Source.controllers.mail_class import Mail
from fastapi import HTTPException
from Source.security import Authentication 


@app.post('/APIsignin')
async def signin(request: Account):
    result=request.checkAccount()
    if result==True:
        print(f'[x] request_data: {request.__dict__}')
        token = Authentication().generate_token(request.username)
        return {
            'token': token
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")


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
        body.insertAccount()
        return "Signup successfull"
    return "Please re-enter OTP"
