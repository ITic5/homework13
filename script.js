const productsWrapper = document.getElementById("products");
const searchInput = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

fetch("https://dummyjson.com/products?limit=99&sortBy=price&orderBy=asc")
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        for (let product of data.products) {
            appendProductsToWrapper(product);
        }
    });

function appendProductsToWrapper(product){
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h3");
    productTitle.innerText = product.title;

    let productPrice = document.createElement("h5");
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productPrice);
    productsWrapper.append(singleProduct);
}

//HOMEWORK

searchButton.addEventListener("click", function(){

    let query = searchInput.value.trim();

    fetch("https://dummyjson.com/products/search?q=" + query)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            productsWrapper.innerHTML = "";
            for (let product of data.products) {
                appendProductsToWrapper(product);
            }
        });
});