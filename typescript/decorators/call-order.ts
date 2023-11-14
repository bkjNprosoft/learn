/**
 * 데코레이터 호출 순서를 확인해보자.
 */
namespace DecoratorCallOrder {
  function classDecorator() {
    console.log('class');
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      console.log('class decorator');
      return class extends constructor { };
    };
  }

  function methodDecorator() {
    console.log('method');
    return function (target: any, property: any, descriptor: any) {
      console.log('method decorator');
    };
  }

  function propertyDecorator(writable: boolean = true) {
    console.log('property');
    return function (target: any, decoratedPropertyName: any): any { 
      console.log('property decorator');
    };
  }

  function parameterDecorator() {
    console.log('parameter');
    return function (target: any, methodName: string, paramIdx: number) { 
      console.log('parameter decorator');
    };
  }

  @classDecorator() // 4
  class Test {
    @propertyDecorator() // 1
    property = 'property';

    @methodDecorator() // 2
    test(@parameterDecorator() param1: string) { // 3
    }
  }

  /**
   * - Console Log -
   * property
   * property decorator
   * method
   * parameter
   * parameter decorator
   * method decorator
   * class
   * class decorator
   * 
   * 데코레이터 팩토리 표현의 경우 아래 순서와 같다.
   * property -> method -> parameter -> class
   * 데코레이터 결과는 아래 순서와 같다.
   * property -> parameter -> method -> class
   */
}
