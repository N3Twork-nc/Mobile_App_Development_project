from Source import app
import uvicorn
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware.cors import CORSMiddleware
import threading
import time
# import paho.mqtt.server as mqtt


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.add_middleware(HTTPSRedirectMiddleware)
from datetime import datetime
if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8080)
