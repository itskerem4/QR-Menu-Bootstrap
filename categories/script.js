

document.addEventListener("DOMContentLoaded", function() {
    let cardContainer = document.querySelector("#categories");
        
            
    const data =[
        {id: 1, categories:"coffe", name: 'Cappuccino',Image:"../images/cappuccino.jpg",price:"2$"},
        {id: 2, categories:"coffe",name: 'Espresso',Image:"../images/espresso.jpg",price:"2$"},
        {id: 3, categories:"coffe",name: 'Latte',Image:"../images/latte.jpg" ,price:"2$"},
        {id: 4, categories:"coffe",name: 'Mocha',Image:"../images/mocha.jpg" ,price:"2$"},
        {id: 5, categories:"coffe",name: 'Americano',Image:"../images/americano.jpg" ,price:"2$"},
        {id: 6, categories:"coffe",name: 'Macchiato',Image:"../images/macchiato.jpg" ,price:"2$"},
        {id: 7, categories:"coffe",name: 'Affogato',Image:"../images/affogato.jpg" ,price:"2$"},  
        {id: 8, categories:"tea",name: 'Turk Tea',Image:"../images/turktea.jpg" ,price:"2$"},
        {id: 9, categories:"tea",name: 'Green Tea',Image:"../images/greentea.jpg" ,price:"2$"},
        {id: 10, categories:"tea",name: 'Black Tea',Image:"../images/blacktea.jpg" ,price:"2$"},
        {id: 11, categories:"tea",name: 'Herbal Tea',Image:"../images/herbaltea.jpg" ,price:"2$"},
        {id: 12, categories:"tea",name: 'Oolong Tea',Image:"../images/oolongtea.jpg" ,price:"2$"},
        {id: 13, categories:"tea",name: 'White Tea',Image:"../images/whitetea.jpg" ,price:"2$"},
        {id: 14, categories:"tea",name: 'Yellow Tea',Image:"../images/yellowtea.jpg" ,price:"2$"},
        {id: 15, categories:"jucie",name: 'Apple Juice',Image:"../images/applejuice.jpg" ,price:"2$"},
        {id: 16, categories:"jucie",name: 'Orange Juice',Image:"../images/orangejuice.jpg" ,price:"2$"},
        {id: 17, categories:"jucie",name: 'Pineapple Juice',Image:"../images/pineapplejuice.jpg" ,price:"2$"},
        {id: 18, categories:"jucie",name: 'Mango Juice',Image:"../images/mangojuice.jpg" ,price:"2$"},
        {id: 19, categories:"jucie",name: 'Strawberry Juice',Image:"../images/strawberryjuice.jpg" ,price:"2$"},
        {id: 20, categories:"jucie",name: 'Grape Juice',Image:"../images/grapejuice.jpg" ,price:"2$"},
        {id: 21, categories:"jucie",name: 'Watermelon Juice',Image:"../images/watermelonjuice.jpg" ,price:"2$"},
        {id: 22, categories:"smoothie",name: 'Apple Smoothie',Image:"../images/applesmoothie.jpg" ,price:"2$"},
        {id: 23, categories:"smoothie",name: 'Orange Smoothie',Image:"../images/orangesmoothie.jpg" ,price:"2$"},
        {id: 24, categories:"smoothie",name: 'Pineapple Smoothie',Image:"../images/pineapplesmoothie.jpg" ,price:"2$"},
        {id: 25, categories:"smoothie",name: 'Mango Smoothie',Image:"../images/mangosmoothie.jpg" ,price:"2$"},
        {id: 26, categories:"smoothie",name: 'Strawberry Smoothie',Image:"../images/strawberrysmoothie.jpg" ,price:"2$"},
        {id: 27, categories:"smoothie",name: 'Grape Smoothie',Image:"../images/grapesmoothie.jpg" ,price:"2$"},
        {id: 28, categories:"smoothie",name: 'Watermelon Smoothie',Image:"../images/watermelonsmoothie.jpg" ,price:"2$"},
        {id: 29, categories:"milkshake",name: 'Apple Milkshake',Image:"../images/applemilkshake.jpg" ,price:"2$"},
        {id: 30, categories:"milkshake",name: 'Orange Milkshake',Image:"../images/orangemilkshake.jpg" ,price:"2$"},
        {id: 31, categories:"milkshake",name: 'Pineapple Milkshake',Image:"../images/pineapplemilkshake.jpg" ,price:"2$"},
        {id: 32, categories:"milkshake",name: 'Mango Milkshake',Image:"../images/mangomilkshake.jpg" ,price:"2$"},
        {id: 33, categories:"milkshake",name: 'Strawberry Milkshake',Image:"../images/strawberrymilkshake.jpg" ,price:"2$"},
        {id: 34, categories:"milkshake",name: 'Grape Milkshake',Image:"../images/grapemilkshake.jpg" ,price:"2$"},
        {id: 35, categories:"milkshake",name: 'Watermelon Milkshake',Image:"../images/watermelonmilkshake.jpg" ,price:"2$"},
    ]
        const coffeUrl="http://localhost:5500/categories/coffe.html"
        const teaUrl="http://localhost:5500/categories/tea.html"
        const juiceUrl="http://localhost:5500/categories/juice.html"
        const smoothieUrl="http://localhost:5500/categories/smoothies.html"
        const milkshakeUrl="http://localhost:5500/categories/milkshake.html"
        const allUrl="http://localhost:5500/categories/all.html"

        if(this.documentURI === allUrl){
        data.forEach(item => {
            let card = document.createElement('div');
            card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
            <div class="col col-sm-12 ">
            <div class="card bg-dark shadow-lg w-75">
            <img src="${item.Image}" class="card-img image-px bg-white"  alt="">
            <div class="card-body">
            <h5 class="card-title text-white h5">${item.name}</h5>
            <p class="card-text text-white">${item.price}</p>
            </div>
            </div>
            </div>
            </a>`;
            cardContainer.appendChild(card);
        })}
       
        if(this.documentURI === coffeUrl){
        data.forEach(item => {
            if(item.categories === "coffe"){
            let card = document.createElement('div');
            card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
            <div class="col col-sm-12 ">
            <div class="card bg-dark shadow-lg w-75">
            <img src="${item.Image}" class="card-img-top bg-white"  alt="">
            <div class="card-body">
            <h5 class="card-title text-white h5">${item.name}</h5>
            <p class="card-text text-white">${item.price}</p>
            </div>
            </div>
            </div>
            </a>`;
            cardContainer.appendChild(card);
        }
        })}
        if(this.documentURI === teaUrl){
        data.forEach(item => {
                if(item.categories === "tea"){
                let card = document.createElement('div');
                card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
                <div class="col col-sm-12 ">
                <div class="card bg-dark shadow-lg w-75">
                <img src="${item.Image}" class="card-img-top bg-white"  alt="">
                <div class="card-body">
                <h5 class="card-title text-white h5">${item.name}</h5>
                <p class="card-text text-white">${item.price}</p>
                </div>
                </div>
                </div>
                </a>` ;
                cardContainer.appendChild(card);
        }
        })}
        if(this.documentURI === juiceUrl){
        data.forEach(item => {
            if(item.categories === "jucie"){
            let card = document.createElement('div');
            card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
            <div class="col col-sm-12 ">
            <div class="card bg-dark shadow-lg w-75">
            <img src="${item.Image}" class="card-img-top bg-white"  alt="">
            <div class="card-body">
            <h5 class="card-title text-white h5">${item.name}</h5>
            <p class="card-text text-white">${item.price}</p>
            </div>
            </div>
            </div>
            </a>` ;
            cardContainer.appendChild(card);
        }
        })}
        if(this.documentURI === smoothieUrl){
        data.forEach(item => {
            if(item.categories === "smoothie"){
            let card = document.createElement('div');
            card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
            <div class="col col-sm-12 ">
            <div class="card bg-dark shadow-lg w-75">
            <img src="${item.Image}" class="card-img-top bg-white"  alt="">
            <div class="card-body">
            <h5 class="card-title text-white h5">${item.name}</h5>
            <p class="card-text text-white">${item.price}</p>
            </div>
            </div>
            </div>
            </a>` ;
            cardContainer.appendChild(card);
        }
        })}

        if(this.documentURI === milkshakeUrl){
            data.forEach(item => {
            if(item.categories === "milkshake"){
            let card = document.createElement('div');
            card.innerHTML = `<a href="${item.link}" class="text-decoration-none link">
            <div class="col col-sm-12 ">
            <div class="card bg-dark shadow-lg w-75">
            <img src="${item.Image}" class="card-img-top bg-white"  alt="">
            <div class="card-body">
            <h5 class="card-title text-white h5">${item.name}</h5>
            <p class="card-text text-white">${item.price}</p>
            </div>
            </div>
            </div>
            </a>` ;
            cardContainer.appendChild(card);
        }
        })}
        
        });
    