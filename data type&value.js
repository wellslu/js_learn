console.log(typeof 37)//js的資料型態數字皆為number
console.log(typeof NaN)//NaN為number的空值
console.log(typeof '')//string
console.log(typeof (typeof 1))//string
console.log(typeof true)//boolean
console.log(typeof null)//物件的空值型態
console.log(typeof function(){})//function
console.log(1/0)//無限會顯示成無限
console.log(1/-0)//負無限會有一個負號
console.log(Infinity - Infinity)//無限檢無限會變成空值

console.log(Number.MAX_VALUE)//取最大值
console.log(Number.MIN_VALUE)//取最小值

console.log(0b10000000000000000000000000000000)//2進位法轉乘10進位
console.log(0o644)//8進位轉10進位
console.log(0xAA33BC)//16進位轉10進位

const decimalNumber = 125
console.log(decimalNumber.toString())//沒寫就是轉10進位
console.log(decimalNumber.toString(2))//10進位轉2進位
console.log(decimalNumber.toString(8))//10進位轉8進位
console.log(decimalNumber.toString(16))//10進位轉16進位

console.log(parseFloat("10.00"))//強制轉成float，但如果小數點後都是0將直接捨去
console.log(parseFloat("10.33"))//強制轉成float
console.log(parseFloat("34 45 66"))//只會取第一個數
console.log(parseFloat("40 years"))//會取第一個數
console.log(parseFloat("He was 40"))//開始不為數字則會出現空值的情況

console.log(Math.floor(10.5))//無條件捨去
console.log(Math.ceil(10.4))//無條件進位
console.log(Math.round(10.5))//四捨五入
console.log(Math.round(10.4))//四捨五入

console.log((3).toFixed(2))//小數點後面加2位0
console.log(typeof(3).toFixed(2))//用此種方法會自動轉成string
console.log(12345.6789.toFixed())//沒數字表小數點後第0位，且會四捨五入
