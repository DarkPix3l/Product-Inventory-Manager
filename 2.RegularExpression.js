//Part 2: JS Regular Expressions

/* Create a function validateProductSKU that checks if a product SKU is valid.

    ⦾ A valid SKU should:
    ⦾ Start with 3 uppercase letters (representing the product category).
    ⦾ Followed by a hyphen.
    ⦾ End with 6 digits (representing the product ID).
    ⦾ Use a regular expression to validate the SKU.
    ⦾ Log the result to the console. 
*/

function validateProductSKU(sku) {
  const regex = /^[A-Z]{3}-[0-9]{6}$/;
  const isValid = regex.test(sku);

  if (isValid) {
    console.log(`Valid SKU: ${sku}`);
  } else {
    console.log(`Invalid SKU: ${sku}`);
  }
}

validateProductSKU("ABC-123456");
validateProductSKU("123-ABCDEF");
