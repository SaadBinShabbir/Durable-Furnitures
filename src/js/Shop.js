let productDiv = document.querySelector(".proo");
var categorylistDiv = document.querySelector(".shop-category-list");
let allCat = [];

let displayProduct = async (allCheckCat = []) => {
  let prooData = products;
  productDiv.innerHTML = "";

  prooData.forEach((element) => {
    // Category Data
    if (!allCat.includes(element.category)) {
      categorylistDiv.innerHTML += `              
      <label for="" class="d-block pt-4">
       <p> <input type="checkbox" onclick='shopCategoryFilter("")' value="${element.category}" /> ${element.category}</p>
      </label>`;
      allCat.push(element.category);
    }

    if (allCheckCat.length == 0) {
      allCheckCat = allCat;
    }

    if (allCheckCat.includes(element.category)) {
      // Product Data
      productDiv.innerHTML += `
      <div class="proo-items">
          <img
            class="img-fluid product-card-image"
            src="${element.images[0]}"
            alt="${element.name}"
          />
          <h5 class="product-card-brand mt-3">${element.brand}</h5>
          <h5 class="mt-1 product-card-name">${element.name}</h5>
          <div class="product-star-rating mt-1">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            (2,749)
          </div>
          <h4 class="mt-1 product-card-price">Pkr ${element.variations[0].price}</h4>
          <p class="mt-3 product-card-des">${element.description}</p>
          <a href="productDetail.html?id=${element.id}"> 
            <button class="btn-view mt-3">
              Add to Cart 
              <i class="fa-solid fa-basket-shopping"></i>
            </button>
          </a>
      </div>
    `;
    }
  });
};
displayProduct();

let shopCategoryFilter = () => {
  let categoryCheckInput = document.querySelectorAll("input[type='checkbox']");
  let checkCategoryData = [];
  categoryCheckInput.forEach((e) => {
    if (e.checked) {
      checkCategoryData.push(e.value);
    }
  });
  displayProduct(checkCategoryData);
};
