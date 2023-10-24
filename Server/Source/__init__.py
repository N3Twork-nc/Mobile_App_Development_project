from fastapi import FastAPI

app = FastAPI()

from Source.config.config import *
from Source.controllers import *
