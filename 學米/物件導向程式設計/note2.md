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


# 3. 多型


