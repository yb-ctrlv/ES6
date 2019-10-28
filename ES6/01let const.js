//var 를 대체하는 키워드
//var는 전역범위로 스크립트내에 어디서나 참조가능하였다.

var var1 = 1;
function varTest(){
    console.log(var1); //1
    if(var1 == 1){
        var var2 = 2;
    }

    console.log(var2); //2
}

//반면 블록 스코프변수인 let은 자신을 정의한 블록에서만 접근 가능

let let1 = 1;
function letTest() {
    console.log(let1); //1
    if(let1 == 1){
        let let2 = 2;
    }
    console.log(let2); // Reference Error Exception
}

//const

//기존 es는 따로 상수용 변수가 없어 대문자를 사용하여 구분해 주었다.
//ES6에서는 const를 사용하여 상수형으로 코딩이 가능

const TEST_CONST = 100;
console.log(TEST_CONST); //100
TEST_CONST = 1;//할당되지 않는다.
console.log(TEST_CONST);//100

//담긴 값이 불변을 뜻하는게 아니라, 단지 변수의 식별자가 재할당 될수 없다.

const ME = {
    "name" : "ES6"
}

console.log(ME.name);
ME.name = "ES7";
console.log(ME.name); // ES7, 객체 값 재할당.
ME = {}; // 변수 자체는 사수값으로 수정되지 않는다.
console.log(ME); //{name:'ES7'}