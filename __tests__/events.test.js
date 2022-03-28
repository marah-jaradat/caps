"use strict";

const events = require("../lib/events");
const { faker } = require("@faker-js/faker");

let myStore = {
  store: "my store",
  orderID: faker.datatype.uuid(),
  customer: faker.name.findName(),
  address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
};

describe("testing events", () => {
  let consoleSpy;
  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  it("orderHandling testing", async () => {
    events.emit("is ready to go ", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("pickup eventEmmiter test", async () => {
    events.emit("pickup", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("in-transit eventEmitter testing", async () => {
    events.emit("in-transit", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("delivered eventEmitter testing", async () => {
    events.emit("delivered", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
