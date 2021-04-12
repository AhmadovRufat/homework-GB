class Product {
    constructor (product) {
        let {title, price=0, id, img = 'https://placehold.it/100x50'} = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

render() {
        return `<div class="product-item">
                  <img class="product-img" src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }
}

class ProductsList {
    constructor (container = ".products") {
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData();
        this._render();
        // this.totalPrice();
    }


 _fetchData() {
    this.data = [
        { id: 1, title: 'Notebook', price: 2000, img: 'img/notebook.jpg' },
        { id: 2, title: 'Keyboard', price: 200, img: 'img/keyboard.jpg' },
        { id: 3, title: 'Mouse', price: 100, img: 'img/mouse.jpg' },
        { id: 4, title: 'Gamepad', img: 'img/gamepad.jpg' },
    ];
 } 

 _render() {
    for (let dataEl of this.data) {
        const product = new Product(dataEl);
        this.products.push(product);
        this.container.insertAdjacentHTML('beforeend', product.render())
    }
}

//   totalPrice() {
//     for (let i=0; i < this.products.length; i++) { 
//     let totalPrice = 0;
//     totalPrice = totalPrice + this.price  //ne znayu chti zdes dobavit chtob vitashit price iz klassa Product
//   }
//      }
}

class Cart {
    constructor () {
        this.items = [];
    }

    push(cartItem) {
        this.items.push(cartItem);
    }

    delete (id) {

    }

    get totalPrice() {
        return 0;
    }
}

class CartItem {
    constructor(good) {
        this.good = good;
    }
}


const list = new ProductsList();
const cart = new Cart();
const addToCart = (good) => cart.push(new CartItem(good))


// const fetch = (method, url) => {
//     let xhr;

//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             console.log(xhr.responseText);
//             console.log(xhr.responseXML)
//         }
//     }

//     xhr.open(method, url);
//     xhr.timeout = 15000;

//     xhr.send();
// }

// const URL = "https://jsonplaceholder.typicode.com/photos";
// fetch('GET', URL);


const text = "Everything is amazing. 'Rufat, how come you are so upset?' What happened? 'I kinda unlucky' Don't know what though";
const replacing = text.replace(/\B'|'\B/g, "\"");
console.log(replacing);