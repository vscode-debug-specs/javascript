const bubble_sort = require("../../bubblesort_js/bubble_sort");
const assert = require("assert");

describe("bubble_sort js", () => {
    it("sort list", () => {
        const list = [4, 3, 2, 1];
        bubble_sort.sort(list);
        assert.equal(list[0], 1);
        assert.equal(list[1], 2);
        assert.equal(list[2], 3);
        assert.equal(list[3], 4);
    });
});

describe("stop at exception js", () => {
    it("stop exception", () => {
        try {
            throw new Error("throw error");
            asset.fail();
        } catch (e) {}
    });
});
