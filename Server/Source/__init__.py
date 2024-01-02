from fastapi import FastAPI, WebSocket

app = FastAPI()

from Source.config.config import *
from Source.controllers import *
