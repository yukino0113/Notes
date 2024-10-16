/*
媽媽請小強買東西
	請買 2 個蘋果回來，如果雞蛋特價的話就買 1 打

背景：
	雞蛋 一個 5 元，特價 3 元
	蘋果一個 60 元

題目：
	請將 「請買 2 個蘋果回來，如果雞蛋特價的話就買 1 打」以 OOP 實現

提示：
	你應該會需要小明的物件，並具有購買東西的方法
	你應該會需要雞蛋、蘋果的物件，並且能夠知道是否特價
 */

const Ming = {
    buy: function (store){
        if(store.checkItemOnSale('egg')){
            console.log(`Ming buy 12 eggs for $${store.item.egg.salePrice * 12}`);
        }else{
            console.log(`Ming buy 2 apple for $${store.item.egg.salePrice * 2}`);
        }
    }
};

class Items {
    price: number;
    onSale: boolean;
    salePrice: number;

    constructor(price: number, onSale: boolean, salePrice: number) {
        this.price = price;
        this.onSale = onSale;
        this.salePrice = salePrice;
    }
}

const Store = function (){
    this.item = {
        egg: new Items(5, true, 3),
        apple: new Items(60, false, 40)
    }
    this.checkItemOnSale = function (itemName: string): boolean {
        return this.item[itemName]?.onSale === true;
    }
}

new Ming.buy(new Store())