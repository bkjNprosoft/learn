namespace UtilNumber {

  function floor(num: number, fixed: number): number {
    if (num == null || fixed == null) {
      return undefined;
    }

    let fixedNum = 1;
    for (let i = 0; i < fixed; ++i) {
      fixedNum *= 10;
    }

    return Math.floor(num * fixedNum) / fixedNum;
  }
  console.log(floor(0.2193545, 2)); // 0.21
}