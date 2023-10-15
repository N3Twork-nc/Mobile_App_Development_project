from Source import app
import uvicorn
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware

app.add_middleware(HTTPSRedirectMiddleware)

if __name__ == '__main__':
    uvicorn.run(app, host="localhost", port=8000, ssl_keyfile="./key/key.pem", ssl_certfile="./key/cert.pem")