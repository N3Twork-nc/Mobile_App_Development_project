from Source import app
from Source.models_mvc.accoout_model import Account

@app.post('/login')
async def login(item: Account):
    result=item.insertAccout()
    if result==True:
        return "Create account successful"
    else: 
        return "Username already exists!"