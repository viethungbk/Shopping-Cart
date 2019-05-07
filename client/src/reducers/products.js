// import * as Types from "./../constants/Message";

var inittialState = [
    {
        id: 1,
        brand : "Samsung",
        name : "Samsung Note 9",
        img : "assets/images/products/samsung-note-9.jpg",
        img_hover : "assets/images/products/samsung-note-9.2.jpg",
        price : 1000000,
        price_before_discount : 1500000,
        iventory : 50,
        rating : 5
    },
    {
        id: 2,
        brand : "Iphone",
        name : "Iphone XS max plus",
        img : "assets/images/products/iphone-xs-max.jpg",
        img_hover : "assets/images/products/iphone-xs-max-hover.jpg",
        price : 30000000,
        price_before_discount : 3500000,
        iventory : 30,
        rating : 2
    },
    {
        id: 3,
        brand : "Huawei",
        name : "Huawei P30 Pro",
        img : "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover : "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 2000000,
        price_before_discount : 3000000,
        iventory : 20,
        rating : 1
    },
    {
        id: 4,
        brand : "Iphone",
        name : "Iphone XS max plus",
        img : "assets/images/products/iphone-xs-max.jpg",
        img_hover : "assets/images/products/iphone-xs-max-hover.jpg",
        price : 30000000,
        price_before_discount : 3500000,
        iventory : 30,
        rating : 3
    },
    {
        id: 5,
        brand : "Huawei",
        name : "Huawei P30 Pro",
        img : "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover : "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 2000000,
        price_before_discount : 3000000,
        iventory : 20,
        rating : 2
    }
];

const products = (state = inittialState, action) => {
    switch (action.type) {
        
        default: return [...state];
    }
}

export default products;