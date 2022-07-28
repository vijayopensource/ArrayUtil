"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelper_1 = require("./ArrayHelper");
const numbers = [1, 2, 3, 4, 5];
var result = ArrayHelper_1.ArrayHelper.partition(numbers, 3);
result.forEach(x => console.log(`[${x.toString()}]`));
//# sourceMappingURL=app.js.map