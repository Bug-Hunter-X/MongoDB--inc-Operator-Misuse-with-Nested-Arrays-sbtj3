```javascript
// Correct usage of the $ operator to update an array element
db.collection.updateOne({"_id":1, "arrayField":{$elemMatch: {element: 2}}}, {$inc: {"arrayField.$.element":1}}); 
```