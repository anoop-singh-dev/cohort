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

