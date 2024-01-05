from Source import app
from Source.models_mvc.account_model import Account
import random
from Source.classes.mail_class import Mail
from fastapi import HTTPException
from Source.security import Authentication 
from Source.config.config import container
from Source.classes.azure_class import CustomFunctionAzure

#Log in
@app.post('/APIsignin')
async def signin(request: Account):
    result=request.checkAccount()
    if result==True:
        token = Authentication().generate_token(request.username)
        info=request.getInfoAccout()
        path=f'avata/{request.username}.jpg'
        blob=container.get_blob_client(path)
        tokenBlob=CustomFunctionAzure.generate_token_blob(blob)
        info["avata"]=f'https://caothi.blob.core.windows.net/myplants/{path}?{tokenBlob}'
        info.pop('password',None)
        return {
            'info':info,
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
