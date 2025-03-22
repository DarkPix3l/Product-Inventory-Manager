//Part 6: Fetch API
/*         
        ⦾ Use the Fetch API to fetch product data from a public API (e.g., FakeStoreAPI).
        ⦾ Fetch a list of products and filter them based on:
        ⦾ Price range (e.g., between 10 and 50).
        ⦾ Category (e.g., "electronics").
        ⦾ Log the filtered product names and prices.
*/

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => {
    console.log("Single Product:");
    console.log(json);
  })
  .catch((error) => console.log("Error fetching single product:", error));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const filteredProducts = products.filter(
      (product) =>
        product.price >= 10 &&
        product.price <= 50 &&
        product.category === "electronics"
    );

    console.log("\nFiltered Products:");
    filteredProducts.forEach((product) => {
      console.log(`Product Name: ${product.title}, Price: $${product.price}`);
    });
  })
  .catch((error) => console.log("Error fetching products:", error));
