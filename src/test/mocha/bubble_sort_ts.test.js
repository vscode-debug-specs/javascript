"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubble_sort_1 = require("../../bubblesort_ts/bubble_sort");
const mocha_1 = require("mocha");
const assert_1 = __importDefault(require("assert"));
mocha_1.describe("bubble_sort ts", () => {
    mocha_1.it("sort list", () => {
        const list = [4, 3, 2, 1];
        bubble_sort_1.bubbleSort(list);
        assert_1.default.equal(list[0], 1);
        assert_1.default.equal(list[1], 2);
        assert_1.default.equal(list[2], 3);
        assert_1.default.equal(list[3], 4);
    });
});
mocha_1.describe("stop at exception ts", () => {
    mocha_1.it("stop exception", () => {
        try {
            throw new Error("throw error");
            assert_1.default.fail();
        }
        catch (e) { }
    });
});
//# sourceMappingURL=bubble_sort_ts.test.js.map