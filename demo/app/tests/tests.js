var AppRater = require("nativescript-rater").AppRater;
var rater = new AppRater();

describe("greet function", function () {
  it("exists", function () {
    expect(rater.appLaunched).toBeDefined();
  });
});