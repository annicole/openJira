import mongoose from "mongoose";


/*
0 = disconnected
1= connected
2= conecting
3= disconecting
*/

const mongoConnection = {
    isConnected: 0
}

export const connect = async() =>{
    if(mongoConnection.isConnected){
        console.log('ya estamos conectados')
        return;
    }

    if(mongoose.connections.length > 0){
        mongoConnection.isConnected = mongoose.connections[0].readyState;
    }

    if(mongoConnection.isConnected === 1){
        console.log('usando conexion anterior');
        return;
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConnection.isConnected = 1;
    console.log('Conectando con mongodb')
}

export const disconnect = async() =>{

    if(mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
    console.log('desconectado de mongodb')
}