"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var appTalk = require("../app-talk");
describe("App.Talk", function () {
    it("GetGreeting Test", function () {
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 1, 0, 0, 0)), "Hello!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 13, 0, 0, 0)), "Good evening!");
    });
});
// describe("Test Uuite 1", () => {
//     it("Test A", () => {
//         assert.ok(true, "This shouldn't fail");
//     });
//     it("Test B", () => {
//         assert.ok(1 === 1, "This shouldn't fail");
//         assert.ok(false, "This should fail");
//     });
// });
//# sourceMappingURL=test1.js.map