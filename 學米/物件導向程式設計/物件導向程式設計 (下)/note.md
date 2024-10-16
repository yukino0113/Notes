# 1. 封裝
### 精神: 
    將 method, attribute, logic 包裝在類別內，透過類別的實體來實現外部物件無法了解內部物件的內部細節
使用者只能使用公開的方法(Publicly accessible method)
- 保護程式碼，避免被使用者修改
- 使用者只需要知道功能，不需要了解邏輯
- 可以使程式更易讀、好維護

```Typescript
class Dog{
    constructor(name, color){
        this.name = name;
        this.color = color;
        
        this.mouth = {
            bite: function(something){
                console.log(`Bite ${something}`);
            },
            eat: function(something){
                console.log(`Eat ${something}`);
            },
            bark:function(){
                console.log(`Woof!!`)
            }
        }
    }
    
    bark(){
        this.mouth.bark();
    }
    
    eat(something: string){
        this.mouth.bite(something);
    }
    
    bite(something: any) {
        let name = '';
        if (typeof someone === 'object' && someone.name)
            name = someone.name;
        if (typeof someone === 'string')
            name = someone;

        this.mouth.bite(name)

    }
}

```
# 2. 繼承
### 精神
    繼承原有的 class ，被繼承 class 所原有的屬性、方法、邏輯都可以為繼承的 class 所使用

### ES5 的繼承
```JS
// parent
function Parent(name, age){
    this.name = name;
    this.age = age;
    this.methodFunc = function () {};
}

// child
function Child(name, age){
    this.price = price;
}

Child.prototype = new Parent("name", 10);
```

### ES6 的繼承
```JS
// parent
class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.methodFunc = function () {};
    }
}

// child
class Child extends Parent{
    constructor(price, name, age){
        // Super 的建構只能放在 constructor 內
        super(name, age);
        this.price = price;
    }
}

```

# 3. 多型
### 精神:
    多型是利用[繼承]的特性，讓許多繼承相同類型的 child class 實作出各自功能的方式
### JS的多型:
    在強型別的語言當中會需要使用多型來實現彈性的介面設計，但在弱型別的語言中則相對不太重視

```C++
// C++
// 參數級別的多型
class Polymorph{
public:
    int constructor(){}
    
    // 參數級別的多型
    // 同一個 function 可以支援不同數量的輸入
    int func(int value) {return 1;}
    int func(int value, int value 2) {return 2;}
    int func(int value, int value2, int value3) {return 3;}
    
    // Function 級別的多型
    // 同一個 function 可以支援不同型別的輸入
    int func2 (int vaule) {return 1;}
    int func2 (bool value) {return 2;}
    int func2 (char value) {return 3;}
};



```
```JS
// 參數級別的多型
function a (...variable){
    if (variable.length === 1) return 1;
    if (variable.length === 2) return 2;
}
// Function 級別的多型
function b (varibale){
    if (typeof varibale === 'string') return '';
    if (typeof varibale === 'number') return 1;
    if (typeof varibale === 'boolean') return true0;
}
```

## JS 實踐
```JS
class AbstructClass {
    constructor() {}
    
    func1() {}
    func2() {}
    func3() {}
}

class ImpementClass extends AbstructClass(){
    constructor() {}
    // ... 
    func1 (){}
    func2 (){ return 1;}
}

class ImpementClass2 extends AbstructClass(){
    constructor() {}
    // ... 
    func1 (){}
    func2 (){ return 2;}
}

```


# 4. this
### 問題:
    1. 在任何地方都可以存取　this
    2. this 在脫離物件的情況下會難以掌握
    3. 脫離 object 的話，this 會有三種可能狀況
        - 瀏覽器中: window
        - Javascript 嚴格模式: undefined
        - Node.js: global
    4. this 的作用域與位置無關，只有跟「如何呼叫」有關
    -> ES6 引入了 Arrow function 語法
        - arrow function 本身沒有 this，在 function 中使用的 this，必定為「function 定義時就確定的值」

this 問題實例:
```JS
var hello = {
    vaule: 2,
    world: function (){
        return this.vaule
    }
}

console.log((hello.world)()); // this = hello, this.value = 2
console.log(hello.world()); // this = hello, this.value = 2
console.log((hello.world = hello.world)()); // function 本身被抽出來變成 global function，this = window, this.value = 1
console.log((false || hello.world)()); // function 本身被抽出來變成 global function，this = window, this.value = 1
console.log(hello.world(), hello.world()()); // function 本身被抽出來變成 global function，this = window, this.value = 1
```

### Arrow function 例子
```JS
(vaule, vaule2, vaule3) => {
    // code
};

// 單一參數傳入
vaule => return_value;

// 無參數傳入
() => return_vaule;
```

例子改寫
```JS
var hello = {
    vaule: 2,
    world: () => {
        return this.vaule
    }
}

console.log((hello.world)()); // this.value = 1
console.log(hello.world()); // this.value = 1
console.log((hello.world = hello.world)()); // this.value = 1
console.log((false || hello.world)()); // this.value = 1
console.log(hello.world(), hello.world()()); // this.value = 1
```

