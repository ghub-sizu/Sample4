import assert = require('assert');
import appTalk = require('../app-talk')

describe("App.Talk", () => {
    it("GetGreeting Test", ()=> {
        assert.equal( appTalk.App.Talk.GetGreeting(new Date(2018,1,1,1,0,0,0)), "Hello!");
        assert.equal( appTalk.App.Talk.GetGreeting(new Date(2018,1,1,13,0,0,0)), "Good evening!");
    })
})

// describe("Test Uuite 1", () => {
//     it("Test A", () => {
//         assert.ok(true, "This shouldn't fail");
//     });

//     it("Test B", () => {
//         assert.ok(1 === 1, "This shouldn't fail");
//         assert.ok(false, "This should fail");
//     });
// });
