"use strict";

const { faker } = require("@faker-js/faker");

let myStore = {
  store: "My store",
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};

module.exports = myStore;
