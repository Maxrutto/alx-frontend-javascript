#!/usr/bin/env node
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});

promiseA.then((val) => console.log("asynchronous logging has val: ", val));
console.log("Immediate logging");
