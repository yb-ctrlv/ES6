//필드를 이용한 literal 객체 간단하게 만들기
//수정전
const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // change code above this line
  };

  //수정후
  const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {name,age,gender };
    // change code above this line
  };


  //es6에는 function은 function을 생략가능하다.
  //수정전
  const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };

  //수정후
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };

  