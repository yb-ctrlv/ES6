//Object.freeze() 사용하기
//const 뿐아니라 let에도 사용이 가능하다.



function freezeObj(){
    const MATH_CONSTANTS = {
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS);//동결
    try{
        MATH_CONSTANTS.PI = 99;//freeze 하지않으면 값이 변한다!
    }catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();