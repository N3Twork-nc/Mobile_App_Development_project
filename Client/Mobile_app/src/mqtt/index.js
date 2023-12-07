import init from 'react_native_mqtt'
import {BROKER,BROKER_USERNAME,BROKER_PASSWORD,BROKER_PORT} from '@env';

 const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];r
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
  constructor(setData,data,userName,password){
    this.setData=setData
    this.data=data
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)
    const client = new Paho.MQTT.Client(BROKER,Number(BROKER_PORT), userName+String(Math.random()));
    client.onMessageArrived = this.onMessageArrived;
    client.onConnectionLost = this.onConnectionLost;
    client.connect({ 
      onSuccess: this.onConnect,
      useSSL: true,
      userName:BROKER_USERNAME,
      password:BROKER_PASSWORD,
      reconnect:true,
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
      case "garden/temperature":
        this.data.temperature=Number(entry.payloadString)
        break;
      case "garden/humidity":
        this.data.humidity=Number(entry.payloadString)
        break;
      case "garden/light":
        this.data.light=Number(entry.payloadString)
        break;
      case "garden/moisture":
        this.data.moisture=Number(entry.payloadString)
        break;
    }
    this.setData(this.data)
  }


  onConnect = () => {
    console.log("Connected MQTT BROKER!!!!");
    this.client.subscribe('garden/temperature');
    this.client.subscribe('garden/humidity')
    this.client.subscribe('garden/light')
    this.client.subscribe('garden/moisture')
  };

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
}