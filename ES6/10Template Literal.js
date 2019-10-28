//만든 obj를 string으로 편하게 사용하기!
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

  //주의! 따옴표가 아니라 물결표의 `입니다.
  
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.


  //===============
  //array.map으로 응용
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
 
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray);