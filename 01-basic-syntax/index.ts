// const a: moduleA.IItemType = {id: 1, name: 'hello', groupdId: 123};

enum Tool {Pencil, Erase, Rect, Circle}

// const Tool1 = {
//   Pencil: 1,
//   Erase: 2,
//   Rect: 3,
//   Circle: 4
// };

class Test {
  isDone: boolean = false;
  decLiteral: number = 6;
  name: string = "bob";
  list: number[] = [1, 2, 3];

  isOk = false;

  testUndefined: undefined = undefined;
  testNull: null = null;
  

  constructor() {
    // testNull = 123;
  }

  setState(state: object) {

  }
}