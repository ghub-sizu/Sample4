"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var appTalk = require("../app-talk");
describe("App.Talk", function () {
    it("GetGreeting Test", function () {
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 0, 0, 0, 0)), "Welcome back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 4, 59, 59, 999)), "Welcome back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 5, 0, 0, 0)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 11, 59, 59, 999)), "Good morning!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 12, 0, 0, 0)), "Good afternoon!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 15, 59, 59, 999)), "Good afternoon!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 16, 0, 0, 0)), "Good evening!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 21, 59, 59, 999)), "Good evening!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 22, 0, 0, 0)), "Welcome back!");
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 23, 59, 59, 999)), "Welcome back!");
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