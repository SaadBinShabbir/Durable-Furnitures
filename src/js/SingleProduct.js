var url = window.location.href;
var params = url.split("=");
viewProduct(params[1]);

function changeImage(src) {
  document.getElementById("mainImage").src = src;
  document.getElementById("mainImageLink").href = src;
}
function updatePrice(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const newPrice = selectedOption.getAttribute("data-price");
  document.getElementById("productPrice").innerText = `Pkr ${newPrice}`;
}

function viewProduct(productId) {
  let new_id = parseInt(productId);
  const product = products.find((product) => product.id === new_id);
  const productDetail = document.getElementById("product-detail");

  productDetail.style.display = "block";

  const sizeOptions = product.variations
    .map(
      (variation) =>
        `<option value="${variation.size}" data-price="${variation.price}">${variation.size}</option>`
    )
    .join("");

  const imageOptions = product.images
    .map(
      (image) =>
        `<div class="swiper-slide"><img src="${image}" alt="" onclick="changeImage('${image}')"></div>`
    )
    .join("");

  const detailsSections = product.details
    .map(
      (detail) =>
        `<br><br><h4>${detail.heading}</h4>
        <ul>${detail.des
          .map((desc) => `<li><p>${desc}</p></li>`)
          .join("")}</ul>`
    )
    .join("");

  productDetail.innerHTML = `
    <div class="single-product-page">
      <div class="container"  id="exportContent">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="right-box">
              <div class="main-img-box">
                <a href="${
                  product.images[0]
                }" id="mainImageLink" data-lightbox="models">
                  <img src="${product.images[0]}" alt="${
    product.name
  }" id="mainImage" class="main-img img-fluid" />
                </a>
              </div>
              <div class="swiper pro-small-images">
                <div class="swiper-wrapper">
                    ${imageOptions}
                </div> 
                ${
                  product.images.length > 4
                    ? `
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                  `
                    : ""
                }   
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="px-lg-5">
              
              <br>
              <h2 class="mb-0">${product.name}</h2>
              <p class="d-none d-lg-block pro-des">${product.description}</p>
              <br>
              <table cellspacing="0" class="inputs">
                <tr><td><p><b>Brand:</b> ${product.brand}</p></td></tr>
                <tr><td><p><b>Category:</b> ${product.category}</p></td></tr>
                <tr><td><p><b>Sku:</b> ${product.sku}</p></td></tr>
                <tr>
                  <td><p><b>Size:</b></p></td>
                  <td align="right">
                    <select name="size" id="size" class="h-30" onchange="updatePrice(this)">
                      ${sizeOptions}
                    </select>
                  </td>
                </tr>
              </table>
              <br>
              <h2 id="productPrice">Pkr&nbsp;${product.variations[0].price}</h2>
              <br>
              <button 
                class="main-btn" 
                data-bs-toggle="modal" 
                data-bs-target="#addtocart">
                Add to Cart&nbsp;&nbsp; <i class="fa-solid fa-basket-shopping"></i>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button 
                class="main-btn" onclick="Export2Word('exportContent', '${
                  product.name
                }');">
                Download Details
                &nbsp;&nbsp; 
                <i class="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="pt-5 mt-5 des">
          <div class="des-title">
            <h4 class="px-2">Product Details</h4>
          </div>        
          <br><br>
          <h4>Description:</h4>
          <p>${product.description}</p>
                ${detailsSections}
        </div>
      </div>
    </div>
  `;

  // Initialize Swiper
  var swiper = new Swiper(".pro-small-images", {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    mousewheel: false,
    keyboard: true,
  });
}


















// Products Details Downloading Function Start

function Export2Word(element, filename = "") {
  var preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>`;

  var siteinformation = `
  <div> 
    <h2 class="text-center">Durable Furnitures</h2>
    <p>URL:&nbsp;&nbsp; ${window.location.href}</p>
  </div>
  `;

  var postHtml = "</body></html>";

  var html =
    preHtml +
    siteinformation +
    document.getElementById(element).innerHTML +
    postHtml;

  var blob = new Blob(["\ufeff", html], {
    type: "application/msword",
  });

  // Specify link url
  var url =
    "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

  // Specify file name
  filename = filename ? filename + ".doc" : "document.doc";

  // Create download link element
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
}

// Products Details Downloading Function End
