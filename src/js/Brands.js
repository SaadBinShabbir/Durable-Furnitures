var brands_url = window.location.href;
var brands_params = brands_url.split("=");
var brands =  brands_params[1];

viewbrandsWiseProduct(brands);

function viewbrandsWiseProduct(brandsId) {
  const productbrands = products.filter((proBrand) => proBrand.brand == brandsId);
  console.log(productbrands); 

  const brandname = document.getElementById("brandnameheading");
  brandname.innerHTML = `${brands}`; 

  
  const productListBrand = document.getElementById("product-Brand-card");
  productListBrand.innerHTML = "";
  productbrands.forEach((productbrands) => {
    const productbrandscard = document.createElement("div");
    productbrandscard.className = "col-md-3 text-start py-3 m-lg-3";
    productbrandscard.innerHTML = `
      <img
        class="img-fluid product-card-image"
        src="${productbrands.images[0]}"
        alt="${productbrands.name}"
      />
      <h5 class="product-card-brand mt-3">${productbrands.brand}</h5>
      <h5 class="mt-1 product-card-name">${productbrands.name}</h5>
      <div class="product-star-rating mt-1">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        (2,749)
      </div>
      <h4 class="mt-1 product-card-price">Pkr ${productbrands.variations[0].price}</h4>
      <p class="mt-3 product-card-des">${productbrands.description}</p>
      <a href="productDetail.html?id=${productbrands.id}"> 
      <button class="btn-view mt-3">
      Add to Cart 
        <i class="fa-solid fa-basket-shopping"></i>
      </button>
      </a>
    `;
    productListBrand.appendChild(productbrandscard);})
}