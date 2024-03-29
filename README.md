## Computer Graphics Learning Tip
# Asynchronous Programming: Callback, Promises, and Async

By default, JavaScript operates synchronously and within a single thread, meaning it can only execute one task at a time. In synchronous programming, each task is executed in sequence, one after the other. This can be inefficient when dealing with complex operations that take a long time to complete, such as network requests or file I/O because the program has to wait for the current task to finish before moving on to the next one. This can cause the program to become unresponsive and lead to a poor user experience, particularly on the client side. Asynchronous, on the other hand, allows the program to continue executing other tasks while waiting for a long-running operation to complete. This can significantly reduce processing time and improve the user experience on the client side, as the program can respond to user input and update the UI while waiting for operations to complete in the background.

There are three commonly used methods for asynchronous programming in JavaScript: callbacks, promises, and async/await.

|  | Callback | Promises | async / await |
| ------------- | ------------- | ------------- | ------------- |
| Concept       | A function that’s passed as a value to another function, and it is only be executed when the event happens. | Like people make promises, a promise in JavaScript is something happens later. | A function that dose not have chain structure. It uses `async` to declare asynchrony and `await` to return promises. |
| Advantages    | Efficient in simple cases | Fits problems brought about by callback hell | Fits problems brought about by promises chaining. |
| Disdvantages  | When the cases become complex, it might result in a callback hell because of the nested structure. | chaining promises together like callbacks can get pretty bulky and confusing | Cannot run on some old environments |
| Outcome | return a function | `resolve` Run and solve the promise; `reject` Error occurs | return a promise |

## 1. Callback
Example 1: `(req, res, next) => { res.send('Hello World!'); }` is a callback function.

```javascript
router.get('/', (req, res, next)=>{
    res.send('Hello World!');
});
```
Example 2: The `setTimeOut()` is a typical callback function. The result is abdc.

```javascript
console.log("a");
console.log("b");
setTimeout(() => {
    console.log("c");
}, 1000);
console.log("d");
```

## 2. Promises
Promise constructor takes one argument that is a callback function. And this callback function takes two arguments `resolve or fulfill` and `reject`.

```javascript
var calculator = new Promise((resolve, reject) => {
    var x = 1;
    var y = 3;
    var z = 3;
    if(x + y == z) {

        // when successful
        resolve("Correct!");
    } else {

        // when error
        reject("Wrong!");
    }
});
```

### 2.1 Promise chain
These methods return promises, so they can be chained.

`.then()` method has two arguments, the first one is a callback for resovled cases, the second one is a callback for rejected cases.
```javascript
calculator.then(((sucessMsg) => {

    // handle success
    console.log(sucessMsg);
    }), ((errorMsg) => {

    // handle error
    console.log(errorMsg);
}))
```

`.catch()` uses as an error handler when promise is rejected or something wrong happens. Since the promise chain proceeds even when `.then()` do not have a callback, so the chain can ignore all rejected callbacks until `.catch()`. This is a simple way to handle all errors.

```javascript
// This code outputs the same as above.
calculator.then((sucessMsg) => {

    // handle success
    console.log(sucessMsg);
}).catch((errorMsg) => {

    // handle error
    console.log(errorMsg);
});
```

`.finally()` is a method being used when the promise is either solved or rejected, it returns an equivalent promise object. It has no argument.
```javascript
.finally(() => {
    console.log("Calculation completed!")
})
```

### 2.2 Thenables
A thenable is an object that has a `.then()` method. All Promises are thenable object, however, not all thenable objects are promises. For example, Mongoose queries are thenable, so it can be used as promises.

## 3. Async and Await
`async` should be declared before `await`. In this example, the `asyncOperation()` returns a Promise. The `await` keyword is used to wait for that Promise to be resolved before assigning the result to the result variable.

```javascript
async function asyncFunction() {
  const result = await asyncOperation();
  console.log(result);
}
```

Example: The result is "Before 100 After". If we delete `await `, then the result changes to "Before 0 After".

```javascript
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

Notice: Async function is a block code, so it doesn’t affect program execution.

## 4. Practice
### 4.1 Task: Use asynchronous function to build a simple weather app.
### 4.2 Requirements:
1. You can use [weatherApp.js](./Practice/weatherApp.js) as a starter code.
2. Implement at least one asynchronous function.
3. Use `consolo.log` to display the weather result.

## 5. Related Resources
Some resources that might help you through the practice.
1. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [A Beginner’s Guide to JavaScript async/await, with Examples](https://www.sitepoint.com/javascript-async-await/#differentwaysofdeclaringasyncfunctions)
3. [Node.js Readline() Module](https://nodejs.org/api/readline.html)
