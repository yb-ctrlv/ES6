//arrow function

//항상 익명함수이며, 생성자를 사용할 수 없다.

//이전방식
var plus = function(a,b){
    var result = a+b;
    return result;
}

//arrow function 방식

let plus =(a,b) =>{
    let result = a+b;
    return result;
}

//특징1 간결한 구문

var result = function(a,b){return a*b;}
var result2 = (a,b) => a*b;

//특징2 arrow function의 this 값은 해당 스코프의 this값과 같다.
//기존 es5에서의 this는 주로 self(that)이나 bind를 사용하여 this를 속박하고있다
function phone(){
    var self = this,
    name = "Galaxy s",
    version = 6;

    versionUp = function(){
        console.log(this);
        self.version++;
    };
}

//ES6에서는 이런 번거로움을 줄이고 arrow function을 감싸고있는 블록을 this로 가리킨다
function phone(){
    this.sName = "Galaxy s";
    this.sVersion = 0;

    test => {
        console.log(this);
        this.versin++;
    }
}