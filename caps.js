"use strict";

require("./app/vendor");
const eventEmitter = require("./lib/events");
const orderHandling = require("./app/driver");

setInterval(() => {
  eventEmitter.orderHandling;
}, 5000);
