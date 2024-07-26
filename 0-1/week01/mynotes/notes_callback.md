# Function

- A function in javascript is a set of statements that performs a task or calculates  a value.
- It should thake some input and return an output where there is some obvious relationship between the input and the outout.

**Syntax**

```

function findSum(n){
    let ans = 0; 
    for(let i = 1; i<n; i++){
        ans = ans + 1
    }

    retutn ans;
}

```

# Callback Function

- you can call one function inside another function

```
function squre(n) {
    return n*n;
}

function sumOfSquares(a,b) {
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}

console.log(sumOfSquares(1,2));


```

- Now I extend above code something like below

```
    function squre(n) {
        return n*n;
    }

    function cube(n) {
        return n * n * n;
    }

    function sumOfSquares(a,b) {
        const val1 = square(a);
        const val2 = square(b);

        return val1 + val2;
    }

    function sumOfCubes(a,b) {
        const val1 = cube(a);
        const val2 = cube(b);

        return val1 + val2;
    }

    console.log(sumOfCubes(1,2));

```

- Is DRY (Don't Repeat Yourself) being violated here (upper code) ? - **Yes**
  
```
      function squre(n) {
        return n*n;
      }


      function cube(n) {
        return n * n * n;
      }

      sumOfSomething(a, b, fn) {
        const val1 = fn(a);
        const val2 = fn(b);

        return val1 + val2;
      }

      someofSomething(a, b, square)

```

  - That we can say this (sumOfSomething) isa callBack function