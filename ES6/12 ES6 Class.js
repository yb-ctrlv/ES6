//ES5 객체생성과정
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
  console.log(zeus.targetPlanet); //Jupiter;

//ES6 Class는 자바와 달리 객체지향 패러다임의 완전한 클래스기반구현이 아니다!
class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);//Jupiter;


//================================================================
//getter, setter 사용하기

function makeClass() {
    "use strict";
    /* Alter code below this line */
   class Thermostat{
      constructor(farenheit){
        this.farenheit = farenheit;
      }
      get temperature(){
        return 5 / 9 * (this.farenheit - 32);
      }
      set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
    }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass(); //class 생성
  const thermos = new Thermostat(76); // farenheit값이 76인 객체생성
  let temp = thermos.temperature; // temperature get을통해서 계산된 값이 나온다.
  
  thermos.temperature = 26; //temperature set을 통해서 접근되며 farenheit값이 수정된다.
  temp = thermos.temperature; // return 26
  console.log(thermos.farenheit)// 78.8