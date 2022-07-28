import { ArrayHelper } from "./ArrayHelper";

const numbers: Array<number> = [1, 2, 3, 4, 5];
var result = ArrayHelper.partition(numbers, 3);
result.forEach(x => console.log(`[${x.toString()}]`));


