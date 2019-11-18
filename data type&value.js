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

//-(x + 1) 類似parseInt的功能 也相當於Math.floor()
console.log(~~'-1')  // -1
console.log(~'-1') //0
console.log(~~'0')   // 0
console.log(~'0')   // -1
console.log(~~'1')   // 1
console.log(~'1')   // -2
console.log(~~true)  // 1
console.log(~~false) // 0
console.log(~~null) // 0
console.log(~~undefined) // 0

//+- 也有parseFloat的功能
console.log(+'2.3') //2.3
console.log(-'2.3') //-2.3
console.log(+'0') //0
console.log(-'0') //0
console.log(+'foo') //NaN
console.log(+true) //1
console.log(+false) //0
console.log(+null) //0

//數字有最大最小界線，超過後數字不一定精確
console.log(999999999999999) //999999999999999
console.log(9999999999999999) //10000000000000000
const x = 0.2 + 0.1 //0.30000000000000004
const y = 0.3 - 0.1 //0.19999999999999998

//利用類似陣列的方法取字串
console.log('cat'.charAt(1)) //'a'
console.log('cat'[1]) //'a'

//跳脫字元以\讓他轉為字串
console.log('It\'s ok') //"It's ok"
console.log('This is a blackslash \\') //"This is a blackslash \"

//樣板字串可多行、加入字串變數 還有其他延伸的用法
console.log(`hello world`)

const firstName = 'Eddy'
console.log(`Hello ${firstName}!
Do you want some
rabbits tonight?`)

const x = 5
console.log(`5 + 3= ${x + 3}`)

//使用concat()串接
const aString = 'Wells'
const bString = aString.concat(' is a', ' handsome man')
console.log(bString)

let cString = 'Wells'
cString += ' is a'
cString += ' handsome man'
console.log(cString)

//字串與數字或布林相加時會轉成字串形
console.log('10'+1) //101
console.log(10+'1') //101

console.log( 3 + 4 + '5' ) //75
console.log( 4 + 3 + '5' + 3 ) //753
const c = (4+3+'5'+3)
console.log(typeof c) //string

const a = 6 + '' //string
const b = true + '' //string

//字串長度
const aString = 'Hello World!'
const bString = '你好'
console.log(aString.length) //12
console.log(bString.length) //2
console.log([1,5,8,8,2,8,2].length) //7
