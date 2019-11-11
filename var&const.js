console.log('Hello')//顯示Hello
window.alert('Hello')//用警告顯示
alert('Hello')//等同上面
document.write('Hello')//在html寫下hello
document.getElementById("demo").innerHTML = 'Hello'//在html裡id為demo的地方寫hello
//同上一行效果，但是是以節點去做的
const newText = document.createTextNode('Hello')
const demo = document.getElementById("demo")
demo.appendChild(newText)

const a = 10//常值
let b = 5//變數
b = 6//變數是可以改變的

//常數盡量分開命名
const items = getItems()
const goSportsTeam = true
const dragonball = 'z'
console.log(dragonball)
