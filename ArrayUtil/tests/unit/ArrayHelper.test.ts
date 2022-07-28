import { ArrayHelper } from "../../ArrayHelper";
describe('Array helper', () => {

    const scenarios = [
        {
            numbers: [1, 2, 3, 4, 5],
            partitions:3,
            expectedNoOfPartitions: 3,
            expectedPartitions: [[1, 2], [3, 4], [5]]
        },
        {
            numbers: [],
            partitions: 3,
            expectedNoOfPartitions: 0,
            expectedPartitions: []
        },
        {
            numbers: [1, 2, 3, 4, 5,6,7,8,9,10],
            partitions: 4,
            expectedNoOfPartitions: 4,
            expectedPartitions: [[1,2,3],[4,5,6], [7,8],[9,10]]
        },
    ];

    scenarios.forEach(scenario => {
        it(`should partition data of: ${scenario.numbers}  with n partitions ${scenario.partitions
            } returns n partitions ${scenario.expectedNoOfPartitions}}`,
            () => {
                const result = ArrayHelper.partition(scenario.numbers, scenario.partitions);
                expect(result.length).toEqual(scenario.expectedNoOfPartitions);
                expect(result).toEqual(scenario.expectedPartitions);
            });
    });
});