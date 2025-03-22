//-------Part 4: JS Intervals

/* Create a function monitorInventory that takes three arguments:

        ⦾ productId (string): The ID of the product.
        ⦾ callback (function): A callback function to execute repeatedly.
        ⦾ interval (number): The interval in milliseconds between executions.
        ⦾ Use setInterval to execute the callback repeatedly at the specified interval.
        ⦾ Log the product ID and the current date and time each time the callback runs.
        ⦾ Simulate random stock level changes (e.g., increase or decrease by 1-5 units) and pass the updated stock level to the callback. */

function monitorInventory(orderId, callback, delay) {
  console.log(`Processing orders:`);

  const date = new Date();
  let stock = 30;
  //const orderIds [];  //later
  let xxx = setInterval(() => {
    callback(date, stock--);

    if (stock === -1) {
      clearInterval(xxx);
      console.log("no procucts left");
    }
  }, delay);
}

monitorInventory(
  "PROD123",
  (date, stock) => console.log(date, `stock left ${stock}`),
  100
);
