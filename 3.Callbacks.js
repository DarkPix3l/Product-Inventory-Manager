//-------Part 3: JS Callbacks

/*  Create a function processOrder that takes three arguments:

        ⦾ orderId (string): The ID of the order.
        ⦾ callback (function): A callback function to execute after processing the order.
        ⦾ delay (number): The delay in milliseconds before executing the callback.
        ⦾ Inside the function, simulate processing the order by logging the order ID and the current date and time.
        ⦾ Use setTimeout to execute the callback after the specified delay.
        ⦾ The callback should simulate additional steps like payment confirmation and shipping notification. */

function processOrder(orderId, callback, delay) {
  console.log(`Processing order: ${orderId}`);
  const date = new Date();

  setTimeout(() => {
    callback(date);
    console.log(`Order shipped: ${orderId} at ${date}`);
  }, 2000);
}

processOrder("ORDER123", (date) => {}, 3000);
