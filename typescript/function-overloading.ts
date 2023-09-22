interface Dodo {
  (value: number): object;
  (value: string, value2: string): object;
}

const dodo: Dodo = (value: number | string, value2: string = 'none'): object => { return { num: value, str: value2 } };

function tt(callback: Dodo, num: number | string, str: string = 'aaa') {
  if (typeof num === 'string') {
    return callback(num, str);
  } else {
    return callback(num);
  }
}

const result = tt(dodo, 'asd');
console.log(result);

class Fruit {
  private _name: string;

  constructor(name = 'fruit') {
    this._name = name;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  dodo(val: number);
  dodo(val: string);
  dodo(val: number, str: string);
  dodo(val, str?): object {
    if (str) {
      return { val, str };
    } else if (['number', 'string'].includes(typeof val)) {
      return { val };
    } 
  }
}

const fruit = new Fruit();
console.log(fruit.dodo(0, 'a'));