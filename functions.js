function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi: " + productName + ", Adet: " + quantity);
}
addToCart(10);


function addToCart2(productName, quantity, unitPrice) {

}

function addToCart3(product) {
    console.log("Ürün: " + product.productName);
    console.log("Adet: " + product.quantity);
    console.log("Fiyat: " + product.unitPrice);
}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);

function addToCart4(products) {
    console.log(products);
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 },
]

addToCart4(products);


let numbers = [30,50,60,80,15,500,600,900];

console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population: "10M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "7M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Rize", "Artvin"],
    ]
]

console.log(icAnadolu);
console.log(marmara);
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity;
({productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity} = {
    productName: "Elma", unitPrice: 10, quantity: 5, 
})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)