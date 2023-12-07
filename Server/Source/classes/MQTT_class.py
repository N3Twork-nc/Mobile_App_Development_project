import paho.mqtt.client as mqtt
import paho
import os
from Source.models_mvc.myGarden_model import MyGarden


class MQTTData:
    def __init__(self):
        self.client = mqtt.Client(client_id=os.environ["BROKER_IDCLIENT"], userdata=None, protocol=mqtt.MQTTv5)
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message

    def on_connect(self,client, userdata, flags, rc, properties=None):
        print("Connected to MQTT broker with result code: " + str(rc))
        client.subscribe("#")

    def on_message(self,client, userdata, msg):
        print("Received message: " + str(msg.payload.decode()))
        topic=str(msg.topic)
        data=str(msg.payload.decode())
        if topic.split('/')[2]=="Data":
            MyGarden.insertData(topic,data)

        

    def connect(self):
        # enable TLS for secure connection
        self.client.tls_set(tls_version=paho.mqtt.client.ssl.PROTOCOL_TLS)
        # set username and password
        self.client.username_pw_set(os.environ["BROKER_USERNAME"], os.environ["BROKER_PASSWORD"])
        # connect to HiveMQ Cloud on port 8883 (default for MQTT)
        self.client.connect(os.environ["BROKER"], int(os.environ["BROKER_PORT"]))
        self.client.loop_start()

    def disconnect(self):
        self.client.loop_stop()
        self.client.disconnect()

    def publish(self, topic, message):
        self.client.publish(topic, message)

