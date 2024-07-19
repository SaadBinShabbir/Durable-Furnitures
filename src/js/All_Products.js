function AllProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "col-md-3 text-start py-3 m-lg-3";
      productCard.innerHTML = `
          <img
            class="img-fluid product-card-image"
            src="${product.images[0]}"
            alt="${product.name}"
          />
          <h5 class="product-card-brand mt-3">${product.brand}</h5>
          <h5 class="mt-1 product-card-name">${product.name}</h5>
          <div class="product-star-rating mt-1">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            (2,749)
          </div>
          <h4 class="mt-1 product-card-price">Pkr ${product.variations[0].price}</h4>
          <p class="mt-3 product-card-des">${product.description}</p>
          <a href="productDetail.html?id=${product.id}"> 
          <button class="btn-view mt-3">
          Add to Cart 
            <i class="fa-solid fa-basket-shopping"></i>
          </button>
          </a>
        `;
      productList.appendChild(productCard);
    });
  }
  document.addEventListener("DOMContentLoaded", AllProducts);
  