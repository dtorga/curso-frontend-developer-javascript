const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLogo = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('#carrito');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
menuLogo.addEventListener('click', toggleMenu);
carritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu(){
    const isCarritoOpen = !menuCarrito.classList.contains('inactive');
    
    if(isCarritoOpen){
        menuCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

function toggleMenu(){
    const isCarritoOpen = !menuCarrito.classList.contains('inactive');

    if(isCarritoOpen){
        menuCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleMenuCarrito(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    };
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    menuCarrito.classList.toggle('inactive');
};
   
const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Moto',
    price: 620,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Auto',
    price: 10330,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src',product.img);
    
        productCard.appendChild(productImage);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
        
        productInfo.appendChild(productInfoDiv)
      
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        
        
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
        
        productInfoDiv.append(productInfoPrice,productInfoName);
        
        const productFigure = document.createElement('figure');
        
        productInfo.appendChild(productFigure);
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
        
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);