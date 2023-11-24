from fastapi import FastAPI
from fastapi_mqtt import FastMQTT, MQTTConfig

app = FastAPI()

mqtt_config = MQTTConfig()

mqtt = FastMQTT(
    config=mqtt_config
)

mqtt.init_app(app)


from Source.config.config import *
from Source.controllers import *
