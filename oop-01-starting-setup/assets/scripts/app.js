class Product {
  // title = "DEFAULT";
  // // imageUrl;
  // description;
  // price;

  //we can create object with out having this

  constructor(title, desc, price) {
    this.title = title;
    // this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now </button>
    `;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    console.log(this.product);
    App.addProductToCart(this.product);
  }
  render() {
    const prdEl = document.createElement("li");
    prdEl.className = "product-item";
    prdEl.innerHTML = `
            <div>
            <div class = "product-item_content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart </button>
            </div>
            </div>
            `;
    const addCartButton = prdEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prdEl;
  }
}

class ProductList {
  product = [
    new Product("Pillowssss", "A soft pillow", 15),
    new Product("Carpet", "A carpet you might like", 15),
  ];

  constructor() {}
  render() {
    const productList = document.createElement("ul");
    productList.className = "product-list";
    for (const prod of this.product) {
      const productItem = new ProductItem(prod);
      const prdEl = productItem.render();
      productList.append(prdEl);
    }
    return productList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
