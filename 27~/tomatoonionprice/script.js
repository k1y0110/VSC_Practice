function addTax(price, func) {
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
};

const price1 = function price1(taxPrice){
console.log("トマトの税込価格は" + taxPrice + "円です。")
};
addTax(101,price1);

const price2 = function price2(taxPrice){
    console.log("玉ねぎの税込価格は" + taxPrice + "円です。")
};
addTax(125,price2);