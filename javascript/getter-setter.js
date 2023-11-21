{
  // 클래스의 getter, setter 그리고 접근 제어자를 알아보자
  class Fruit {
    #dd = 'zzz';
    get name() {
      return `Like a ${this._name}`;
    }
    set name(newName) {
      this._name = newName;
    }

    get dd() {
      return this.#dd;
    }
  }
  /* 
    클래스의 getter, setter만으로는 private 접근 제어가 불가능
    ES2022에 추가된 기능으로 변수의 이름에 #을 붙혀서 private 접근 제어자를 사용할 수 있다.
   */
  const fruit = new Fruit();
  fruit._name = 'public fruit';
  console.log(fruit.name);
  console.log(fruit.dd);

  function FruitFunc(newName = 'fruit') {
    let name = newName;
    const getName = () => name;
    const setName = (newName) => { name = newName };
    return {
      setName,
      getName
    }
  }

  const fruit2 = FruitFunc('apple');
  console.log(fruit2.getName());

  fruit2.setName('banana');
  console.log(fruit2.getName());

  const fruit3 = FruitFunc('orange');
  console.log(fruit3.getName());
}