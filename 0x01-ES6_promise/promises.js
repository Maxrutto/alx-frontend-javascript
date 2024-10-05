#!/usr/bin/env node
function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("https://example.com/");
    }, 2000);
  });
}

async function main() {
  const result = await doSomething();
  console.log(result);
}

main();
