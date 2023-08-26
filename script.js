
document.addEventListener("DOMContentLoaded", function() {
let cardContainer = document.querySelector("#categories");

const data= [
    {id: 1, name: 'All Categories',Image:"images/categories.png",link:'categories/all.html'},
    {id: 2, name: 'Coffe',Image:"images/coffe.png", link:'categories/coffe.html'},
    {id: 3, name: 'Tea',Image:"images/tea.png" ,link:'categories/tea.html'},
    {id: 4, name: 'Juice',Image:"images/juice.png" ,link:'categories/juice.html'},
    {id: 5, name: 'Smoothies',Image:"images/smoothies.png" ,link:'categories/smoothies.html'},
    {id: 6, name: 'Milkshake',Image:"images/milkshake.png" ,link:'categories/milkshake.html'},
 ];

    data.forEach(item  => {
        let card = document.createElement('div');
        card.innerHTML = 
        `<a href="${item.link}" class="text-decoration-none link">
        <div class="col col-sm-12 ">
        <div class="card bg-dark shadow-lg w-75">
        <img src="${item.Image}" class="card-img-top bg-white"  alt="">
        <div class="card-body">
        <h5 class="card-title text-white h5">${item.name}</h5>
        </div>
        </div>
        </div>
        </a>`;
        cardContainer.appendChild(card);
    })
});
