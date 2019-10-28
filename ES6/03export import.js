//import, export
//import - 다른 스크립트의 특정 함수, 객체, primitives를 사용하기 위해 들여오는 키워드
//export - 반대로 스크립트 내의 특정 함수, 객체, primitives를 내보내는 키워드

//math.js
function plus(x,y){
    return x+y;
}

const doublePI = Math.PI * 2;
export{plus, doublePI}

//다른 스크립트에서(impotMath.js)

import{plus, doublePI} from 'math';
console.log(plus(3,4)); //7
console.log(doublePI); //6.283185307179586


//default 를 사용한 export와 import

//my.js
export default function plus(x,y){
    return x+y;
}

//다른 스크립트에서(importMy.js)
import plus from 'my';
console.log(plus(1,1)); //2

//그외 import 표현식
/*
import * as name from "module-name";
import {member as alias} from "module-name";
import {member1, member2} from "module-name";
import {member1, member2 as alias2 , [...]} from "module-name";
import defaultMember, { member [, [...]]} from "module-name";
import defaultMember, * as name from "module-name";
import "module-name"
 */
//그외 export 표현식
/*
export {variable1 as name1, variable2 as name2, ... , nameN};
exprot let name1, name2, ..., nameN;
export let name1 = ..., name2 = ..., ..., nameN;

export {name1 as default, ...};
export * from ...;
export {name1, name2, ..., nameN} from ...;
exprot { import1 as name1, import2 as name2, ... , nameN } from ...;
*/