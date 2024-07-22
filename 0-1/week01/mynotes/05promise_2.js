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

//callback syntax
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

// Promise (then) syntax

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

//Async/await syntax

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