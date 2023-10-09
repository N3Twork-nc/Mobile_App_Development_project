from Source import app

@app.get('/')
def test():
    return "Test" 
@app.post('/a')
def test():
    return "post"