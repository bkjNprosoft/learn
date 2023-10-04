
namespace ThrottlingDebouncing {

  /**
 * 쓰로틀링(throttling)
 * 함수가 실행되는 동안 다시 호출되지 않도록 하는 기술이다. 
 * 성능 최적화, 실행 횟수에 제한을 둘 때 사용한다.
 */
  let throttlingTimer: number = null;
  function throttling(func: Function, time: number = 200) {
    if (!throttlingTimer) {
      throttlingTimer = setTimeout(() => {
        func();
        throttlingTimer = null;
      }, time);
    }
  }

  throttling(() => console.log('throttling 1')); // 호출됨
  throttling(() => console.log('throttling 2'));
  throttling(() => console.log('throttling 3'));

  /**
   * 디바운싱(debouncing)
   * 연이어 호출되는 함수들 중에 마지막 또는 첫 번째 함수만 호출 되도록 하는 기술이다.
   */
  let debouncingTimer: number = null;
  function debouncing(func: Function, time: number = 200) {
    clearTimeout(debouncingTimer);
    debouncingTimer = setTimeout(() => {
      func();
    }, time);
  }

  debouncing(() => console.log('debouncing 1'));
  debouncing(() => console.log('debouncing 2'));
  debouncing(() => console.log('debouncing 3')); // 호출 됨

}