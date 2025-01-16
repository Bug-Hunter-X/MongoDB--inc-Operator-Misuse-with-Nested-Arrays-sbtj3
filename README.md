# MongoDB $inc Operator with Nested Arrays
This example demonstrates an error in using the `$inc` operator to update a specific element within a nested array in MongoDB. The `$inc` operator is not designed to directly update nested array elements; it is designed to increment numerical values in the root document level. 

The `bug.js` file shows the incorrect implementation, while `bugSolution.js` provides the corrected approach using the `$` positional operator to target the correct element.

## How to reproduce the bug:
1. Create a MongoDB collection.
2. Insert a document with a nested array field, example `{"arrayField": [1,2,3]}`
3. Execute the code in `bug.js`.
4. Observe that the update operation does not work as intended.

## Solution:
The solution in `bugSolution.js` demonstrates the correct use of the `$` positional operator.