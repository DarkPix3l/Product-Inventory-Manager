//-------Part 5: JS Promises

/* Create a function restockProduct that returns a promise.
        ⦾ The promise resolves if the restocking is successful.
        ⦾ The promise rejects if the restocking fails (e.g., due to supplier issues).
        ⦾ Simulate an asynchronous operation using setTimeout.
        ⦾ Log the result of the promise using both .then/.catch and async/await. 
*/

function restockProduct(productId) {
  return new Promise((resolve, reject) => {
    console.log(`Starting restocking for product: ${productId}...`);

    setTimeout(() => {
      const isSuccessful = Math.random() > 0.5;

      if (isSuccessful) {
        resolve(`Restocking successful for product: ${productId}`);
      } else {
        reject(`Restocking failed for product: ${productId}. Supplier issue.`);
      }
    }, 1000);
  });
}
restockProduct("PROD123")
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

async function handleRestock() {
  try {
    const result = await restockProduct("PROD456");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
handleRestock();
