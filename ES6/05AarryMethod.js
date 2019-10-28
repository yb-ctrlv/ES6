//Array.map()

let arr1 = [1,4,9,16];

const map1 = arr1.map(x=>x*2);

console.log(map1);
//expected output : Array [2, 8, 18, 32]

//Array.map() 조금꼬아서!
var kvArray = [ {key:1, value:10},
                {key:2, value:20},
                {key:3, value:30}];

var reformattedArray = kvArray.map(obj =>{
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
// reformattedArray is now [{1:10},{2:20},{3:30}]

//Array.filter()
let words = ['a','aa','aaa','aaaa','aaaaa','aaaaaa'];

const result = words.filter(wrod => words.length >4);

console.log(result); // Array['aaaaa','aaaaaa'];


//Array.reduce
const arr1 = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1+2+3+4
console.log(arr1.reduce(reducer)); // 10

// 5+1+2+3+4
console.log(arr1.reduce(reducer,5));// 15