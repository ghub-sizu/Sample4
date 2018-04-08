import assert = require('assert');

describe("Test Uuite 1", () => {
    it("Test A", () => {
        assert.ok(true, "This shouldn't fail");
    });

    it("Test B", () => {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
});
