"use strict";

// require("./app/vendor");
const driver = require("./app/driver");
setInterval(() => {
  driver.orderHandling();
}, 4000);
