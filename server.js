console.log("Server");
const express = require('express');
const app = express();
app.listen(3000, callbackWhenCreateSuccess);
app.get("/endpoint", callbackWhenGetEndpoint)
app.get('/', function(request, response) {
    response.send('Hello World')
})

function travebien() {
    sotien = 100000;
    return sotien
}

function kotravegica() {
    //thuc hien 1 hanh dong gi do;
}

function hamcangido(tien) {
    sotienthang = tien * 70
    return sotienthang;
}

function callbackWhenCreateSuccess() {
    console.log('listening on 3000')
}

function callbackWhenGetEndpoint() {
    console.log('Get endpoint')
}