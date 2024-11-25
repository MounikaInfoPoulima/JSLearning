const myPromise = new Promise((resolve, reject) => {
    const success = true;  // Simulate success or failure
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed!");
    }
  });
  
  myPromise
    .then(result => console.log(result))
    .catch(err => console.log(err));
  