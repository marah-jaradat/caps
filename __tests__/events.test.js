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
  const myStore = "testing";
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing ReadyToGo", async () => {
    events.emit("orderDelever ", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("packageDeleivered test", async () => {
    events.emit("packageDeleivered", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("pickupFun testing", async () => {
    events.emit("packageDeleiver", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("deleiveredFun testing", async () => {
    events.emit("packageDeleivered", myStore);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
