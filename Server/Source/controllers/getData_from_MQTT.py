import paho.mqtt.client as mqtt
import os

class MQTTClient:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message

    def on_connect(self, client, userdata, flags, rc):
        print("Connected to MQTT broker with result code: " + str(rc))
        client.subscribe("topic/example")

    def on_message(self, client, userdata, msg):
        print("Received message: " + str(msg.payload.decode()))

    def connect(self):
        self.client.connect(os.environ["BROKER"], 1883, 60)
        self.client.loop_start()

    def disconnect(self):
        self.client.loop_stop()
        self.client.disconnect()

    def publish(self, topic, message):
        self.client.publish(topic, message)

# Sử dụng lớp MQTTClient
client = MQTTClient("mqtt_broker_address")  # Thay mqtt_broker_address bằng địa chỉ broker MQTT
client.connect()

# Gửi thông điệp
client.publish("topic/example", "Hello, MQTT!")

# Ngắt kết nối
client.disconnect()