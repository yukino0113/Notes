interface ITest {
  test1: string;
  test2: number;

  print: (arg: string[]) => boolean;
}

class Test implements ITest {
  public test1: string;
  public test2: number;

  constructor(test1: string, test2: number) {
    this.test1 = test1;
    this.test2 = test2;
  }

  print = (arg: string[]) => {
    console.log(this.test1, this.test2, arg);

    return Boolean(arg.length);
  };
}

const testIns = new Test("hollo world", 123);

console.info(testIns.print(["3", " 3"]));
