// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null

function averageNumber(){
    let summaOfNumber = 0;
    for (let i = 0; i < arguments.length; i++) {
      if( arguments[i] === undefined){
        return null}
       summaOfNumber += arguments[i]
    }
    return summaOfNumber/arguments.length
  }
  console.log(averageNumber(1,2,3,4,5,6));
  
  // }
  // 2) Замінити усі максимальні значення в масиві на значення 0
  
  const nums2 = [7,3,3,2,5,7];
  
  function getMax(array) {
    let maxnElem = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxnElem) {
        maxnElem = array[i];
      }
    }
    return maxnElem;
  }
  
  function changeMinElem(array) {
  let maxnElem = getMax(array);
   for (let i = 0; i < array.length; i++) {
    if( array[i] === maxnElem){
      array[i] = 0;}}
    }
  
  changeMinElem(nums2);
  console.log(nums2);