const products = {
  product_category: "mobile",
  category_id: "1221321",
  product_items: [
    {
      product_title: "Samsung Galaxy",
      price: 20000,
      color: ["blue", "black"],
      product_id: "2323432",
      review: 5.0,
      product_desc: "Best mobile in the world",
      image:
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      product_title: "I phone",
      price: 80000,
      color: ["blue", "black"],
      product_id: "34324",
      review: 5.0,
      product_desc: "Best mobile in the world",
      image:
        "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      product_title: "MI Note 8",
      price: 22000,
      color: ["blue", "black", "white"],
      product_id: "6345453",
      review: 5.0,
      product_desc: "Best mobile in the world",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k7assy80/mobile/5/y/n/iqoo-3-5g-i1928-original-imafpkhufxg7vzdj.jpeg?q=70",
    },
    {
      product_title: "POCO",
      price: 25000,
      color: [],
      product_id: "423432",
      review: 5.0,
      product_desc: "Best mobile in the world",
      image:
        "https://i.gadgets360cdn.com/products/large/iqoo-3-db-386x800-1582613523.jpg",
    },
    {
      product_title: "Symphoni",
      price: 5000,
      color: [],
      product_id: "53232432",
      review: 2.0,
      product_desc: "Worst mobile in the world",
      image:
        "https://waltonbd.com/image/catalog/category-banner/mobile/smart-phone-half-block.jpg",
    },
  ],
};

const productItems = products.product_items; // getting product items

const getProduct = (item) => {
  return ` <div class="product-item">
              <div class="product-img">
                <img src="${item.image}" alt="product image" />
              </div>
              <div class="product-content">
                <h3>
                ${item.product_title}
                </h3>
                <p>${item.product_desc}</p>
                <p>Price:  ${item.price} taka</p>
                <p>
                  <span>Review:</span>
                  <span>${item.review}</span>
                </p>
              </div>
              <div class="product-btn-group">
                <button class="quick-view-product" id="quickView">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="make-favourite-product" id="makeFavourite">
                  <i class="fas fa-heart"></i>
                </button>
                <button class="add-to-cart" id="addToCart" onclick="addToCart(${item.product_id})">
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>`;
};

let best_product_div = document.getElementById("best_products");

const showProducts = (items) => {
  items.map((item) => {
    const productData = getProduct(item);

    best_product_div.innerHTML += productData;
  });
};

if (productItems.length > 0) {
  showProducts(productItems);
} else {
  document.getElementById(
    "best_products"
  ).innerHTML = `<h1 class="warning">No Products Found</h1>`;
}

/* Add to cart function */

const showCartValue = (itemsAmount) => {
  document.getElementById("cart_value").innerText = itemsAmount;
};
const removeCartItem = (el) => {
  el.parentNode.remove();
};

const cartItem = (item) => {
  const cartItemHtml = ` <li>
                  <span> ${item.product_title} </span>
                  <span> (${item.price} X ${item.amount}) </span>
                  <span> = </span>
                  <span> ${
                    Number(item.price) * Number(item.amount)
                  } taka </span>
                  <button class="danger-btn" onclick="removeCartItem(this)">X</button>
                </li>`;
  return cartItemHtml;
};

const getTotal = (item) => {
  return Number(item.price) * Number(item.amount);
};

/* show cart items */
const showCartItems = (data) => {
  let cartListUl = document.getElementById("cartlist");
  cartListUl.innerHTML = "";
  let total = 0;
  data.map((item) => {
    const cartItemHtml = cartItem(item);
    total += getTotal(item);
    document.getElementById("totalPrice").innerText = total;
    cartListUl.innerHTML += cartItemHtml;
  });
};

let cartItems = [];
const addToCart = (itemId) => {
  const cartData = productItems.find((item) => {
    if (itemId == item.product_id) {
      return item;
    }
  });

  let checkDuplicate = false;
  for (item of cartItems) {
    if (item.product_id == cartData.product_id) {
      checkDuplicate = true;
    }
  }

  if (checkDuplicate) {
    console.log("====== Duplicate found ========");
    cartData.amount += 1;
  } else {
    console.log("====== Duplicate not found ========");
    cartData.amount = 1;
    cartItems.push(cartData);
  }

  if (cartItems.length > 0) {
    showCartValue(cartItems.length);
    showCartItems(cartItems);
  }
};
