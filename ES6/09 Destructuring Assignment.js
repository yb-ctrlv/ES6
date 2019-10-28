//Object를 변수로 담기
//es5에서는
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

//es6로는
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54


//ex
//=========================================================
const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
  };
  const { start : { x: startX, y: startY }} = a;
  console.log(startX, startY); // 5, 6


//=========================================================
  //from Arrays
  let a = 8, b = 6;
(() => {
  "use strict";

 [b,a] = [a,b]
})();
console.log(a); //  6
console.log(b); //  8

//============================================================
    //Rest Operator(...)을 사용한 배열요소 Destructuring
    
    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
      "use strict";
      const [a,b,...arr] = list; // change this
      return arr;
    }
    const arr = removeFirstTwo(source);
    console.log(arr); // should be [3,4,5,6,7,8,9,10]
    console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
//============================================================
//function 파라미터 객체 Destructuring하기

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
    "use strict"; 
  
  
    return (({max,min})=>{
      return (max+min)/2;
    })
  
  })();
  console.log(stats); // object
  console.log(half(stats)); // 28.015