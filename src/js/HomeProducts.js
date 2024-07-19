HomeProds();

function HomeProds(categoryId = "Sofas") {
  const productCats = products.filter((proCat) => proCat.category == categoryId);

  const categoryname = document.getElementById("categorynameheading");

  const productListCat = document.getElementById("product-Cat-card");
  productListCat.innerHTML = "";
  let prodLen = 1;
  for (const productCat of productCats) {
    if (prodLen <= 6) {
        
      const productCatcard = document.createElement("div");
      productCatcard.className = "col-md-3 text-start py-3 m-lg-3";
      productCatcard.innerHTML = `
      <img
        class="img-fluid product-card-image"
        src="${productCat.images[0]}"
        alt="${productCat.name}"
      />
      <h5 class="product-card-brand mt-3">${(productCat.brand)}</h5>
      <h5 class="mt-1 product-card-name">${productCat.name}</h5>
      <div class="product-star-rating mt-1">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        (2,749)
      </div>
      <h4 class="mt-1 product-card-price">Pkr ${
        productCat.variations[0].price
      }</h4>
      <p class="mt-3 product-card-des">${productCat.description}</p>
      <a href="productDetail.html?id=${productCat.id}"> 
      <button class="btn-view mt-3">
      Add to Cart 
        <i class="fa-solid fa-basket-shopping"></i>
      </button>
      </a>
    `;
    productListCat.appendChild(productCatcard);
    
    }else {
        break;
      }
    prodLen++;
  };
}
