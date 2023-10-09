from fastapi import FastAPI

app = FastAPI()

from Source.controllers import *
from Source.config.DB_config import *