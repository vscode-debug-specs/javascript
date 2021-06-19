import { bubbleSort } from "../../bubblesort_ts/bubble_sort";
import { describe, it } from "mocha";
import * as assert from "assert";

describe("bubble_sort ts", () => {
    it("sort list", () => {
        const list = [4, 3, 2, 1];
        bubbleSort(list);
        assert.strictEqual(list[0], 1);
        assert.strictEqual(list[1], 2);
        assert.strictEqual(list[2], 3);
        assert.strictEqual(list[3], 4);
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
