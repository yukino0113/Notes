# 1. OOP 簡介
## 1.1 什麼是 OOP

- OOP 是一種軟體開發風格
- 將資料類比為現實世界的 「物件」
- 將函數化的資料處理方式類比為現實世界的互動關係
``` Javascript
// FOP
var people
var water
var cup

function drink(){
    return `drink ${water}`;
}

function pickUp(people, cup){
    return `${people} get ${cup}`;
}

function action(people, water, cup){
    console.log(
	    pickUp(people, cup), drink(water)
    );
}
```

```Javascript
// OOP
var people = {
    name: "human",
    pickUp: function(cup){
        return people.name + "take" + "cup.name";
    },
    drink: function(cup){
        return `drink ${cup.thingInside.name}`;
    }
}

var cup = {
    name: "cup",
    thinginside: null,
    fillIn: function(thing) {
        this.thingInside = thing
    }
}

var water = {
    name: "water";
}

cup.fillIn(water);

console.log(people.pickUp(cup) + people.drink(cup))
```
### OOP 三大概念
#### 封裝：
- 將相關的程式碼、資料分門別類，落實 DRY (Don't repeat yourself)
#### 繼承：
- 將原有的程式法重複使用或擴充
#### 多型：
- 所有繼承相同類別的物件，使用相同的方法，但具有不同功能
## 1.2 OOP in JS

- 所有的類別都是物件 （如 integer, string 等等）
- JS 使用 「prototype chain」層層繼承與擴充物件
	- 參考閱讀：
		- [Javascript继承机制的设计思想](https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
		- [JS基本觀念: 原型鏈(prototype chain)](https://medium.com/@mengchiang000/js%E5%9F%BA%E6%9C%AC%E8%A7%80%E5%BF%B5-%E5%8E%9F%E5%9E%8B%E9%8F%88-prototype-chain-96c742893795)


# 2. Object & constructor (建構函數)
### 


# 3. ES6: 變數宣告


# 4. ES6: 變數的解構賦值


# 5. ES6: 板模字串


# 6. ES6: Class 型別

// TODO: LiveServer download