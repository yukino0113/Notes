# SOLID 開發原則
    S: Single responsibility principle  單一職責
    O: Open-Close principle 開放封閉原則
    L: Liskov substitution principle 里氏替換原則
    I: Interface segragation principle 介面隔離原則
    D: Dependency inversion principle 依賴反轉原則

## Single responsibility 
- 不同意義的事情就應該分開
- 當有需求出現貨變動時，僅需要修改相關的區域
- 一個類別盡可能減少負責的職責

## Open-Close principle
- 藉由新增程式碼來擴充系統功能，而非「修改」目前已存在的程式碼 (例子: 由繼承來擴充)
- 隔離業務邏輯與附加邏輯

## Liskov substitution principle
- 相同 interface 或是 base-class 中的 「子 class」與「父 class」之間可以無痛替換
- 子 class 的限制不可以比父 class 寬鬆
- 父 class 所擁有的不變條件，必須被保留
- 實例：專案上某套件 A 更新了，會期望套件的更新不影響原有程式的運作，而非更新後程式就不能跑
- 
## Interface segragation principle
- 針對不同需求，應該只開放對應需求的介面
- 不應該在介面中提供過多對方用不到的功能


## Dependency inversion principle
- 外部的 class 在引用其他 class 時不應直接引用，而應透過 interface
- 外部的 class 引用 interface，這個 interface 由 「被引用的 class」實作，將兩個 class 的依賴拆分開

# Singleton 單例模式
- 確保 class 無論怎麼去 new 一個 class，都會拿到同一個 instance
- 例子：
  - 資料庫的 connection pool
  - API 收發工具 (ajax, axios)
  - 遊戲的「世界」場景
```JS
class Singleton {
    private static instance: Singleton;
    
    public static getInstance() {
        // 如果已有 instance 則返回該 instance，否則才能開新的
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    
    private constructor() {
        // 隱藏 constructor，如果要取得 instance，可以使用 getInstance 來取得
    }
    
    // code
}
```

# Factory mode 工廠模式
- 提供一個工廠介面，將產生 instance 的程式碼給 child class 各自實現
- 確保使用者不需要知道如何設計 class，只需要給予需要的 var 即可獲得相對的 instance
- 使用情境:
  - 一系列物件性質相近，只有少部分差異時
```Typescript
class simpleFactory {
    static getCar = (type: string) => {
        switch (type) {
            case "a":
                return new classA();
            case "b":
                return new classB();
        }
    }
}

const car = SimpleFactory.getCar("a")
const carb = SimpleFactory.getCar("b")
```

### 抽象工廠模式
```Typescript
class aFactory implements simpleFactory{
    static getCar(){
        return new A();
    }
}

class bFactory implements simpleFactory{
    static getCar(){
        return new B();
    }
}

const car = aFactory.getCar("a")
const car2 = bFactory.getCar("a")
```

# 觀察者模式
- 一群觀察者(Observers) 監聽/觀察 某個被觀察的對象 (Subject/Observed)，當被觀察者的狀態發生改變時，Subject 就會去通知所有觀察者資料被更新了
- 優點:
  - 比起讓 Observer 每隔一段時間去詢問是否有更新，讓 subject 更新時直接通知較有效率
  - 將程式碼的 observer 分離出來，使 subject 與 observer 之間的耦合度降低
```typescript
/**
 *  @param {string} id
 */
class xxxObserver{
    id: string;
    constructor() {
        this.id = String(~~(Math.random()*1000)).padStart(3, "0")
    }
    
    /**
     *  用來當 subject 發布消息時，可以用這個 function 來給予消息
     *  @param {string} any 保有 subject 發布消息的內容可以是任意的
     */ 
    update = (data: any) => {
        console.log(`observer: ${this.id} collected update data: ${data}`);
    }
}

class xxxSubject {
    private queue = <xxxObserver[]>[];
    
    register = (observer: Observer) => {
        this.queue.push(observer);
    };
    
    remove = (observer: Observer) => {
        const queue = this.queue;
        let len = queue.length;
        for (let i = 0;i < len;i++){
            if(queue[i] === observer){
                queue.splice(i, 1);
            }
        }
    }
    
    notify = (data: any) => {
        this.queue.forEach((observer) => observer.update(data))
    }
    
}

const subject = new xxxSubject();
const observer = new xxxObserver();
subject.register(observer)

// 只要 notify 一次，所有 observer 都會同時收到訊號
subject.notify("text")
subject.notify(JSON.stringify({foo:"bar"}))
```


# 生產者與消費者模式
  - 生產者與消費者之間完全解耦合
  - 在多線程實作依然容易實作

### 實作案例:
  - Message queue, RabbitMQ: 支持現在主流的程式語言: NodeJS, Go, java, C, C++, Python
  - NodeJS 的 BullJob (Job Schedular) -> Redis (In memory storage service => 快、輕、小) -> Cache
  - Python 的 Celery

```Typescript
const buffer = <any>[];
const MAX_BUFFER = 10;

class Producer {
  private buffer: any[];

  constructor(buffer: any[]) {
    this.buffer = buffer;
  }

  random = String(~~(Math.random() * 1000)).padStart(3, "0");

  start = () => {
    setInterval(() => {
      // 產生消息的緩衝區
      if (this.buffer.length >= MAX_BUFFER)
        return console.warn('Queue is full');

      const msg = 'Text:' + this.random();
      console.log('Generated:' + msg);
      this.buffer.push(msg)
    }, 1000);
  }
}

class Comsumer {
  private buffer: any[];

  constructor(buffer: any[]) {
      this.buffer = buffer;
  }
  
  start = (){
    setInterval(() => {
      if (this.buffer.length === 0) return console.warn('Queue is empty');
      const msg = this.buffer.shift();
      console.log('Consumed:' + msg);
    }, 1200);
  };
}

const buffer_monitor = setInterval(() => {
    console.log('Buffer size:', buffer.length);
}, 500);

const producer = new Producer(buffer);
const consumer = new Consumer(buffer);

producer.start();
consumer.start();
```

# 轉接器模式
  又稱為 Wrapper 模式，本質上是一個包裝器，用來將一個類別的介面轉換成另一個介面，讓原本不相容的類別可以一起工作
  - 用來解決不同介面之間的不相容問題

```Typescript
import rem = CSS.rem;

const returnValueWhatInput = (value: string) => value;

const returnValueWhatInputAdapter = (value: number) => {
  String.fromCharCode(returnValueWhatInput(value));
}
console.log(returnValueWhatInputAdapter(65));
```