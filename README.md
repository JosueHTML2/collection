# Collection, created by Josué using JavaScript Arrays & Objects

## Getting started:
- Setting data.

 ```js
 const Collection  = require("@josue7/collection");
 const collection  = new Collection();

 collection.set("name", "Josué"); // Returns true if it does set in the data Array with no problem otherwise false.
 collection.set("surname", "Figueiredo");
 ```
 
 - Getting the data
 
 ```js
 collection.get("name"); // Returns the data: [{ name: 'Josué' }]
 ```
 
- Removing data

```js
  collection.remove("name"); // Returns nothing
```
 ## Props
 
 - data
```js
console.log(collection.data) // Returns the data: [{ key: 'surname', value: 'figueiredo', full: [{ surname: 'figeuiredo' }] }]
```
 
- size
```js
console.log(collection.size) // Returns the size of the collection, if it is 0  there is no data.
```
 
- cleared
```js
console.log(collection.cleared) // Returns how many times the collection was cleared
``` 
  
