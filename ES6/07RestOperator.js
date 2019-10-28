//나머지 연산자를 이용해 파라미터 받기!
// ...(+파라미터명!)


const sum = (function(){
    'use strict';
    return function sum(...args){
        
        return args.reduce((a,b) => a + b, 0);//0안붙이면 0이안나옴!
    };
})();

console.log(sum(1,2,3)); //6
console.log(sum(1,2,3,4)); // 10
console.log(sum(5)); // 5
console.log(sum()); //0


//나머지 연산자(...)를 이용해 array 복사하기

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2);//['JAN','FEB', 'MAR', 'APR', 'MAY']


