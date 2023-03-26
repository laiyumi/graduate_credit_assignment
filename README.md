## Teaching Tip
# Asynchronous Programming: Callback, Promises, and Async 

The default of JavaScript is synchronous and single-threaded. But when we deal with complex contexts, asynchronous programming shortens the proceeding time and creates a better user experience on the client side. There are three common ways of asynchronous programming.


|  | Callback | Promises | Async/Await |
| ------------- | ------------- | ------------- | ------------- |
| Concept       | A function that’s passed as a value to another function, and it is only be executed when the event happens. | Like people make promises, a promise in JavaScript is something happens later. | A function that dose not have chain structure. It uses `async` to declare asynchrony and `await` to return promises. |
| Advantages    | Efficient in simple cases | Fits problems brought about by callback hell | Fits problems brought about by promises chaining. |
| Disdvantages  | When the cases become complex, it might result in a callback hell because of the nested structure. | chaining promises together like callbacks can get pretty bulky and confusing | ------------- |
| Outcome | return a function | `resole` Run and solve the promise; `reject` Error occurs | Calling an async function will always return a promise |


## Callback

Example 1: `(req, res, next)=>{res.send('Hello World!');}` is a callback function.
```cpp
router.get('/', (req, res, next)=>{
    res.send('Hello World!');
})
```
Example 2: The `setTimeOut()` is a typical callback function. The result is abdc.
```cpp
console.log("a");
console.log("b");
setTimeout(()=>{
    console.log("c");
},1000);
console.log("d");
```

## Promises
Promise constructor takes one argument that is a callback function. And this callback function takes two arguments `resolve or fulfill` and `reject`. 
```cpp
var calculator = new Promise((resolve, reject)=>{
    var x = 1;
    var y = 3;
    var z = 3;
    if(x + y == z){
        // when successful
        resolve("Correct!");
    } else {
        // when error
        reject("Wrong!");
    }
})
```
### Promise chain
These methods return promises, so they can be chained.

`.then()` method has two arguments, the first one is a callback for resovled cases, the second one is a callback for rejected cases. 
```cpp
calculator.then(((sucessMsg)=>{
    // handle success
    console.log(sucessMsg);
    }), ((errorMsg)=>{
    // handle error
    console.log(errorMsg);
}))
```

`.catch()` uses as an error handler when promise is rejected or something wrong happens. Since the promise chain proceeds even when `.then()` do not have a callback, so the chain can ignore all rejected callbacks until `.catch()`. This is a simple way to handle all errors.

```cpp
// This code outputs the same as above.
calculator.then(((sucessMsg)=>{
    // handle success
    console.log(sucessMsg);
})).catch((errorMsg)=>{
    // handle error
    console.log(errorMsg);
})
```

`.finally()` is a method being used when the promise is either solved or rejected, it returns an equivalent promise object. It has no argument. 
```cpp
.finally(()=>{
    console.log("Calculation completed!")
})
```

### Thenables
A thenable is an object that has a `.then()` method. All Promises are thenable object, however, not all thenable objects are promises. For example, Mongoose queries are thenable, so it can be used as promises.

## Async and Await
Declare an async function.
```cpp
async function asyncTask(){
  // Do something here
} 
```
Example: The result is "Before 100 After". If we delete `await `, then the result changes to "Before 0 After".
```cpp
async function start() {
    var sum = 0;
    console.log("Before");
    // Calling the asynchronous function
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            sum = 100;
            resolve(sum);
        }, 1000)
    });
    console.log(sum);
    console.log("After");
    // Expected output: Before 100 After
}
start();
```

## Practice
TBC