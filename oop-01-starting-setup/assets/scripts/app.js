class Product {
  title = "DEFAULT";
  // imageUrl;
  description;
  price;

  constructor(title, desc, price) {
    this.title = title;
    // this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  product: [
    new Product("Pillowssss", "A soft pillow", 15),
    // { title: "Pillow", price: 15, description: "A soft pillow" },
    { title: "Carpet", price: 15, description: "A carpet you might like" },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.className = "product-list";
    for (const prod of this.product) {
      const prdEl = document.createElement("li");
      prdEl.className = "product-item";
      prdEl.innerHTML = `
            <div>
            <div class = "product-item_content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart </button>
            </div>
            </div>
            `;
      productList.append(prdEl);
    }
    renderHook.append(productList);
  },
};

productList.render();
