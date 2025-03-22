//Part 7: Higher-Order Array Methods
/* 
        ⦾ Use the fetched products from Step 6.
        ⦾ Calculate and log the following statistics:
        ⦾ Total number of products.
        ⦾ Average price of products.
        ⦾ Most expensive product.
        ⦾ Cheapest product.
        ⦾ Use higher-order array functions like reduce, map, and sort. */

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const totalProducts = products.length;
    const averagePrice =
      products.reduce((sum, product) => sum + product.price, 0) / totalProducts;
    const mostExpensiveProduct = products.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    const cheapestProduct = products.reduce((min, product) =>
      product.price < min.price ? product : min
    );

    console.log("Total number of products:", totalProducts);
    console.log("Average price of products: $" + averagePrice.toFixed(2));
    console.log(
      "Most expensive product:",
      mostExpensiveProduct.title,
      "- $" + mostExpensiveProduct.price
    );
    console.log(
      "Cheapest product:",
      cheapestProduct.title,
      "- $" + cheapestProduct.price
    );

    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    console.log("Products sorted by price:");
    sortedProducts.forEach((product) => {
      console.log(`${product.title} - $${product.price}`);
    });
  })
  .catch((error) => console.log("Error fetching products:", error));
