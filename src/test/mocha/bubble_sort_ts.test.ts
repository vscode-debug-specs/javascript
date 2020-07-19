import { bubbleSort } from "../../bubblesort_ts/bubble_sort";
import { describe, it } from "mocha";
import assert from "assert";

describe("bubble_sort ts", () => {
    it("sort list", () => {
        const list = [4, 3, 2, 1];
        bubbleSort(list);
        assert.equal(list[0], 1);
        assert.equal(list[1], 2);
        assert.equal(list[2], 3);
        assert.equal(list[3], 4);
    });
});

describe("stop at exception ts", () => {
    it("stop exception", () => {
        try {
            throw new Error("throw error");
            assert.fail();
        } catch (e) { }
    });
});
