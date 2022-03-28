"use strict";
const eventEmitter = require("../events");
const vendor = require("./vendor");

// Event Handler
eventEmitter.on("pickup", pickupFun);
eventEmitter.on("in-transit", inTransitFun);
eventEmitter.on("delivered", deliveredFun);

function orderHandling() {
  eventEmitter.emit("picking up orders", {
    event: "pickup",
    time: new Date().toString(),
    payload: vendor,
  });
}

function pickupFun(payload) {
  console.log("EVENT", payload);
  console.log(`DRIVER : picked up ${payload.payload.orderID} `);
  setTimeout(() => {
    eventEmitter.emit("in-transit", payload), 1000;
  });
}

function inTransitFun(payload) {
  payload.event = "in-transit";
  payload.time = new Date().toString();
  console.log("EVENT", payload);
  setTimeout(() => {
    eventEmitter.emit("]elivered", payload), 3000;
  });
}

function deliveredFun(payload) {
  payload.event = "delivered";
  payload.time = new Date().toString();
  console.log(`DRIVER : delivered up ${payload.payload.orderID}`);
  console.log(`VENDOR : Thank you for delivering ${payload.payload.orderID}`);
  console.log("EVENT", payload);
}
module.exports = { orderHandling };
