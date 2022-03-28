const eventEmitter = require("../lib/events");
require("./vendor");

eventEmitter.on("pickedUp", pickupFun);
eventEmitter.on("packageDeleiver", deleiveredFun);
eventEmitter.on("orderDelever", orderHandel);

function orderHandel(payload) {
  console.log(`DRIVER: picked up${payload.orderID}`);
  setTimeout(() => {
    eventEmitter.emit("pickedUp", payload);
  }, 3000);
}

function pickupFun(payload) {
  console.log(`EVENT: "in-transit"
  time:${new Date().toISOString()},
  payload: {
    store: ${payload.store},
    orderID: ${payload.orderID},
    customer: ${payload.customer},
    address: ${payload.address}
  }
  `);
  console.log(`DRIVER: delivered up order ${payload.orderID}`);
  setTimeout(() => {
    eventEmitter.emit("packageDeleiver", payload);
  }, 3000);
}

function deleiveredFun(payload) {
  // console.log(`DRIVER: delivered order ${payload.orderID}`);
  setTimeout(() => {
    eventEmitter.emit("packageDeleivered", payload);
  }, 100);
}
