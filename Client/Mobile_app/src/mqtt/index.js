import init from 'react_native_mqtt'
import {BROKER,BROKER_USERNAME,BROKER_PASSWORD,BROKER_PORT} from '@env';

 const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
};
init({
  size: 10000,
  storageBackend: myStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});


export default class MQTT{
  constructor(setData,data,username,idGarden){
    this.username=username
    this.idGarden=idGarden
    this.setData=setData
    this.data=data
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)
    const client = new Paho.MQTT.Client(BROKER,Number(BROKER_PORT), username+String(Math.random()));
    client.onMessageArrived = this.onMessageArrived;
    client.onConnectionLost = this.onConnectionLost;
    client.connect({ 
      onSuccess: this.onConnect,
      useSSL: true,
      userName:BROKER_USERNAME,
      password:BROKER_PASSWORD,
      reconnect:true,
      cleanSession:true,
      onFailure: (e) => {console.log("here is the error" , e); }
    });
    this.client=client
    this.state = {
      message: [''],
      client,
      messageToSend:'',
      isConnected: false,
    };
  }

  onMessageArrived(entry) {
    switch (entry.topic){
      case `${this.username}/${this.idGarden}/Data/Temperature`:
        this.data.temperature=Number(entry.payloadString)
        break;
      case `${this.username}/${this.idGarden}/Data/Humidity`:
        this.data.humidity=Number(entry.payloadString)
        break;
      case `${this.username}/${this.idGarden}/Data/Light`:
        this.data.light=Number(entry.payloadString)
        break;
      case `${this.username}/${this.idGarden}/Data/Moisture`:
        this.data.moisture=Number(entry.payloadString)
        break;
      case `${this.username}/${this.idGarden}/Broadcast/Led`:
        this.data.led=Number(entry.payloadString)
    }
    this.setData(this.data)
  }


  onConnect = () => {
    console.log("Connected MQTT BROKER!!!!");
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Temperature`);
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Humidity`);
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Light`)
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Moisture`)
    this.client.subscribe(`${this.username}/${this.idGarden}/Broadcast/Led`)
  };

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  controlLED(status)
  {
    try {
      this.data.led=!this.data.led
      this.setData(this.data)
      this.client.publish(`${this.username}/${this.idGarden}/Control/Led`, payload=String(Number(this.data.led)), qos=1)
    }
    catch
    {
      console.log("Đã xảy ra lỗi khi public message")
    }
  }
}