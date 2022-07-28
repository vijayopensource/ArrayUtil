"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
class ArrayHelper {
    static partition(numbers, n) {
        const result = new Array();
        if (numbers === null || numbers === undefined)
            return result;
        if (numbers.length === 0)
            return result;
        let remainingItems = numbers.length % n;
        const numberOfPartitions = Math.floor(numbers.length / n);
        for (let i = 0; i < numbers.length; i += numberOfPartitions) {
            var end = i + numberOfPartitions;
            if (remainingItems > 0) {
                end++;
                remainingItems--;
                result.push(numbers.slice(i, end));
                i++;
            }
            else {
                result.push(numbers.slice(i, end));
            }
        }
        return result;
    }
}
exports.ArrayHelper = ArrayHelper;
//# sourceMappingURL=ArrayHelper.js.map