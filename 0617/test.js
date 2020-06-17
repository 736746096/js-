var person = {
    name:'aaa'
}
//  需求 即要看到person 具体内容 又要阻止下面代码执行
//  打断调试 watch 监听某一个变量 是否声明 以及赋值的过程
//  没声明  no available 有声明 初始 undefined  值的变化
console.log(person)
console.log('=============');
var _name='bb';
console.log(_name)
var num = 1;
// alert(num);
var num1=2;
// alert(num1);
var sum =num+num1;
// alert(sum);
// console.log(2&&3);
// '',0,undefined,NaN,null,转换为boolean为  false

//  字符串的长度不能决定大小
//  一般字符串的第一个字符决定大小
//  "abc">"aabc"

// var a="a";
// console.log(a.charCodeAt())