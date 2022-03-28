"use strict";

const eventEmitter = require("./lib/events");

require("./app/driver");
require("./app/vendor");

setInterval(() => {
  eventEmitter.emit("ReadyToGo");
}, 5000);
