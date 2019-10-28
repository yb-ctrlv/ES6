//기본 파라미터 설정하기!


const increment = (function(){
    'use strict';
    return function increment(number, value = 1){
        return number + value;
    }
})();
console.log(increment(5,2)); // return : 7
console.log(increment(5))// return :6