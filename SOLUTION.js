'use strict';

function balancedParens(n) {
  let array = [];
  for (let i = 0; i < n * 2; i++) i < n ? array.push('(') : array.push(')');
  let result = [[].concat(array).join('')];

  function addResult(index, arrBefore, arrAfter) {
    let newArr = [].concat(arrBefore);
    for (
      let newIndex = index + 1;
      newIndex <= index * 2 && newIndex < arrBefore.length;
      newIndex++
    ) {
      newArr[newIndex] = '(';
      newArr[newIndex - 1] = ')';
      result.push(newArr.concat(arrAfter).join(''));
      addResult(
        index - 1,
        newArr.slice(0, newIndex),
        newArr.slice(newIndex).concat(arrAfter),
      );
    }
  }
  addResult(n - 1, array, []);

  return result;
}
