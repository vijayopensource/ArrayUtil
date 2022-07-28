"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelper_1 = require("../../ArrayHelper");
describe('Array helper', () => {
    it('partition', () => {
        const data = [1, 2, 3, 4, 5];
        const numberOfPartitions = 3;
        const result = ArrayHelper_1.ArrayHelper.partition(data, numberOfPartitions);
        const output = [[1, 2], [3, 4], [5]];
        expect(result.length).toEqual(numberOfPartitions);
        expect(result).toEqual(output);
    });
});
//# sourceMappingURL=ArrayHelper.test.js.map