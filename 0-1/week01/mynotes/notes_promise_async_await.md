# What are comman async function that js provied by defalt?

- setTimeout
- fs.readFile - to read a file from your filesystem
- fetch - to fetch some data from an API endpoint

## Example of sync function

```
function findSum(n) {
    let ans = 0;
    for(let i = 0; i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}
```
##  Example of async function

## **Example 1** 

```

function findSum(n) {
    let ans = 0;
    for(let i = 0; i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    return findSum(100);
}
// Calling an async function

setTimeout(findSumTill100, 1000)

```
## **Example 2**

```
const fs = require("fs")

fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);
})
```

# Promises

**Promises are syntactical sugar that make this code slightly more readable**

## How can we create an asynchronous function of our own?

```
const fs = require("fs");
function anoopReadFile() {
  console.log("inside a file");
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve")
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

var a = anoopReadFile();
console.log(a)
a.then(onDone);
```

## What even is promise?

**It is just a class that makes callbacks and async functions slightly more readable, whenever you create it, you need to pass in a function as the first argument which has reslove as the first argument.**

**e.g:**

```
let p = new Promise(function(reslove){
  reslove("hi there)
});
p.then(function(){
  console.log(p);
})
```
### **Question: Why even make it async seems like you are just doing somethings that can be done with a normal function**

**Answer: You actually can, but you will need to pass in a callback which is what promises help you write in a cleaner fashion.**

**Intimidating async function:** 

```
function anoopAsyncFunction(){
    let p =  new Promise(function(reslove){
        setTimeout(reslove,2000)
    });
    return p;
}

const value anoopAsyncFunction()
value.then(function(){
    console.log('hi there')
})

```

**Simple function**

```
function anoopAsyncFunction(callback){
    setTimeout(callback,2000)
}

anoopAsyncFunction(function(){
    console.log("hello!");
});
```

# Async await

**Again, just syntactic sugar, Still uses callbacks/Promises under te hood**

**Normal syntax**
```
function anoopAsyncFunction() {
    let p  = new Promise(function(reslove){
        // do some asyn logic here
        reslove("hi there!")
    })

    return p;
}
function main(){
    anoopAsyncFunction().then(function(value){
        console.log(value)
    })
}
main();
```

**Async/await syntax**
```
function anoopAsyncFunction(){
 let p = new Promise(function(reslove){
   //do some async logic here
   console.log("hi there!")
 })
 return p;
}

async function main(){
    const value = await anoopAsyncFunction();
    console.log(value);
}
main();
```

```Note 1: No callbacks, no .then syntax in async/await ```

```Note 2:(await) Usually used on the caller side, not on the side where you define as async function ```

**Play with below code on replit**

```
function anoopAsyncFunction() {
  let p = new Promise(function (reslove) {
    //do some async logic here
    setTimeout(function () {
      console.log("hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  let value = await anoopAsyncFunction();
  // let value = anoopAsyncFunction()
  // value.then(function(value){
  //   console.log(value);
  // })
  console.log("hi there 1");
}
main();

console.log("after main");

```

``` ## In fact, all three(callback, Promise (then), Async/await) are very similar and do same things.```

**callback syntax**

```
function anoopAsyncFunction(callback){
    //do some async logic here
    callback("hi there !");
}

async function main(){
    anoopAsyncFunction(function(value){
        console.log(value)
    })
}
main();
```
**Promise (then) syntax**

```
function anoopAsyncFunction(){
    let p = new Promise(function(reslove){
    //do some async logic here
    callback("hi there !");
    })
    return p;

}

 function main(){
    anoopAsyncFunction().then(function(value){
        console.log(value);
    });
}
main();
```

**Async/await syntax**

```
function anoopAsyncFunction(){
    let p = new Promise(function(reslove){
     //do some async logic here
    callback("hi there !");
    })
  return p;
}

 async function main(){
   const value = await anoopAsyncFunction();
   console.log(value);
}
main();
```







