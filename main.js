/* JSON = Javascript Object Notation */
/* 
JSON must not have any function,
JSON must start with {}
JSON properties and value will be enclose by ""
JSON can have string, float, integer, array, object, boolean
*/
/* JS OBJECT */

const products = {
  product_category: "mobile",
  category_id: "1221321",
  product_items: [
    {
      product_title: "Samsung Galaxy",
      price: 20000,
      color: ["blue", "black"],
      product_id: "2323432",
    },
    {
      product_title: "I phone",
      price: 80000,
      color: ["blue", "black"],
      product_id: "34324",
    },
    {
      product_title: "MI Note 8",
      price: 22000,
      color: ["blue", "black", "white"],
      product_id: "6345453",
    },
    {
      product_title: "POCO",
      price: 25000,
      color: ["blue", "black", "red"],
      product_id: "423432",
    },
  ],
};

// console.log(products.product_items);

//JS Object to JSON
// const productToJson = JSON.stringify(products);
// console.log(productToJson);

//JSON to JS Object
// console.log("json to object = ", JSON.parse(productToJson));
