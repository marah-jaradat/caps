"use strict";

const eventEmitter = require("../lib/events");
const { faker } = require("@faker-js/faker");
require("./driver");

eventEmitter.on("packageDeleivered", packageDeleivered);
eventEmitter.on("ReadyToGo", ReadyToGo);

function ReadyToGo() {
  const payload = {
    time: new Date().toISOString(),
    store: "My Store",
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()}`,
    address: `${faker.address.city()}`,
  };
  console.log(`EVENT: "pickup"
  time:${payload.time},
  payload: {
    store: ${payload.store},
    orderID: ${payload.orderID},
    customer: ${payload.customer},
    address: ${payload.address}
  }
  `);
  eventEmitter.emit("orderDelever", payload);
}

function packageDeleivered(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
  console.log(`EVENT: "delivered"
    time:${new Date().toISOString()},
    payload: {
      store: ${payload.store},
      orderID: ${payload.orderID},
      customer: ${payload.customer},
      address: ${payload.address}
    }
    `);
}
