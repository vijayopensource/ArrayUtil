export class ArrayHelper {
   public static partition(numbers: Array<number>, n: number): Array<Array<number>> {
       const result = new Array<Array<number>>();

       if (numbers === null || numbers === undefined) return result;
       if (numbers.length === 0) return result;

       //no of partitions
       const numberOfPartitions = Math.floor(numbers.length / n);

       //extra items, needs to be allocated to no of partitions
       let remainingItems = numbers.length % n;


       for (let i = 0; i < numbers.length; i += numberOfPartitions) { //include extra item pointer
           var end = i + numberOfPartitions;

           //has extra items
           if (remainingItems > 0) {
               end++; //move end pointer 
               remainingItems--;
               result.push(numbers.slice(i, end));
               i++; //move start pointer
           } else {
               result.push(numbers.slice(i, end));
           }
       }
       return result;
    }
}
