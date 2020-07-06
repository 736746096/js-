## es5综合测试

##### 请说出下面方法的作用是什么呢？

foreach

> 循环遍历数组

push

> 在数组尾部添加数据

toString

> 数组方法，将数组转为字符串格式

join

> 将数组改为字符串格式

arr.indexOf

> 查找数组中的某个元素，有返回索引值，没有返回 -1

arr.sort

> 数组的排序方法，将数组按条件进行排序

split

> 将字符串转为数组，参数为分割符

replace

> 替换，第一个参数为索引值，第二个参数替换的值

slice

> 截取字符串的方法，第一个参数为索引值，第二个为索引值

substr

> 截取字符串的方法，第一个参数为索引值，第二个为长度



##### 完成下面要求

~~~js
var arr = [1,2,3,4,'dd']
// 1 将arr 数组变为字符串
arr.toString();

//2：将字符串颠倒
var res = '';
for(var i = arr.length-1; i >= 0; i--){
    res +=arr[i];
}
console.log(res);

//3：将字符串中 dd 替换为 FF
arr.replace('dd','FF')

~~~

~~~js
var arr = [1,1,1,1,2,2,2,3,3,3,3]
// arr 数组去重
function check(arr){
    var res = [];
	for(var i = 0; i < arr.length; i++){
        if(res.indexOf(arr[i]) == -1){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(check(arr));
~~~

~~~js
var arr = [{name:'zc'}]
// 实现深拷贝 ARR 
var ARR = [];
for(var i in arr){
    ARR.push(arr[i]);
}
console.log(ARR);

//	展开运算符
var ARR = [...arr];

//	递归深拷贝
var obj = {};
function deepCopy(newObj,oldObj){
    for(var i in arr){
        var item = arr[i];
        if(item instanceof Array){
            newObj[i] = [];
            deepCopy(newObj[i],item);
        }else if(item instanceof Object){
            newObj[i] = {};
            deepCopy(newObj[i],item);
        }else{
			newObj[i] = item;
        }
    }
    return newObj;
}
console.log(deepCopy(obj,arr))

~~~

~~~js
var str = 'abcdefghijklmnopqrstuvwxyz1234567890';
//随机输出6为的字符 
var res = '';
for(var i = 0; i < str.length; i++){
    var i = Math.random()*(str.length)
	res += str[i];
}
console.log(res);
~~~

~~~js
var str = 'djfqweurqwe432423edfssdfsd';
// 统计 d 字符再 str 中出现了多少次
var count = 0;
for(var i = 0; i < str.length; i++){
    if('d' == str[i]){
        count++;
    }
}
console.log(count);
~~~

~~~js
var str = 'dfjqwoerjowqejr'
// 统计每一个字符出现的次数
var obj = {};
for(var i in str){
    var chr = str[i];
    if(obj[chr]){
        obj[chr]++;
    }else{
        obj[chr] = 1;
    }
}
console.log(obj);
~~~

##### 函数封装

- 完成一个求数组中最大值的函数封装

  ```js
  function max(arr){
      var res = arr.sort(function(x,y){
          return y-x;
      });
      return res[0];
  }
  console.log(max([1,23,41,2,4,6,43]));
  ```

- 完成求任意两个随机数的函数

  ```js
  function randomNum(min,max){
      var x = Math.floor(Math.random()*(max-min+1)+min);
      var y = Math.floor(Math.random()*(max-min+1)+min);
      return x,y;
  }
  console.log(randomNum(1,10));	//	1-10之间的两个随机整数
  ```

- 数组去重封装

  ```js
  function check(arr){
      var res = [];
  	for(var i = 0; i < arr.length; i++){
          if(res.indexOf(arr[i]) == -1){
              res.push(arr[i]);
          }
      }
      return res;
  }
  console.log(check([1,2,3,2,12,3,5,2,3,5,4]));
  ```

  

##### 简答题

1 闭包是什么 闭包的优点和缺点是什么？

> 函数内嵌套一个函数，即函数内return 的值是一个函数
>
> 优点：可以在函数外部调用函数内部的变量，防止局部变量被污染，可以作为缓存结构，被引用的变量不会被垃圾回收机制回收
>
> 缺点：容易造成内存泄漏，影响页面性能

2：什么是作用域 

> 作用域分 全局作用域和局部作用域
>
> 全局作用域是指在全局下声明的变量或函数的存储环境
>
> 局部作用域是在函数执行时，形成一个执行期上下文，也就是局部作用域，用来存放函数内部声明的变量或函数

3：什么是作用域链

> 作用域链也叫scope，内部函数执行时，有自己的局部作用域，还有它父级作用域，以及往上的GO，全局作用域

4：如何解决闭包导致内存泄露呢?

> 第一种，可以用立即执行函数将闭包包括起来
>
> 第二种，在闭包使用结束后，将使用的变量赋值为 null ，清空闭包
>
> 第三种，fun()()，在没有变量引用时，让垃圾回收机制进行回收

5: 从作用域的角度 说一下 为什么闭包中外部可以访问内部的函数变量

> 闭包是将内部函数的作用域链的指针放到了外部被引用，作用域链中包含了内部函数的局部作用域，以及向上的父级作用域和全局作用域

6：谈一下你垃圾回收机制的认识

> 基本数据类型以及引用类型的指针都被系统存放到内存中的栈中，而堆是程序员人为创建的，垃圾回收机制是将栈中没有被引用到的数据进行回收清空，被引用到的则保留，

7：从内存角度谈谈你对闭包的认识

> 闭包是将内部函数的作用域链的指针存放到 栈中，然后在外部引用，作用域链中的变量都存放在堆中，

8：如何将一个类数组变为真数组？请写出 2中方法

> Array.from(arguments);
>
> var arr = [...arguments];

9：什么是递归呢？递归的弊端但是什么？

> 函数内自己调用自己
>
> 需要找规律，需要找出口，否则会死循环，影响程序性能

10：作用域是什么时候产生的呢？

> 全局作用域是在页面创建的时候产生的
>
> 局部作用域是在函数执行时，创建了执行期上下文，从而创建了局部作用域

11：请说出你判断thsi 指向的方法是什么呢？

> 全局下，if for [] {}中的this 指向window，立即指向函数，闭包中的this 也指向window
>
> call,apply,bind 改变this 的指向，参数决定this 的指向
>
> 函数监听中，this 指向触发事件的元素
>
> 对象中，谁调用，this 就指向谁
>
> 箭头函数中 this 指向父级作用域中的对象

12  谈谈你对原型 原型链 继承的认识

> 原型，对象和函数都有原型对象，普通对象通过 __ proto__来调用原型对象，函数对象通过prototype来调用原型对象，
>
> 原型对象就是对象的祖籍，可以通过给原型对象添加属性的方法，给子代对象或函数引用本身没有 的属性，
>
> 原型链，可以通过给 函数A的原型 赋值为函数B，在函数A中可以调用函数B中的属性

13 Function与 function的区别是什么

> 

14 什么是异步？

> 不是按照从上到下的的正常执行顺序，跳着执行程序

15：什么是回掉函数

> 给参数传入一个函数

16 请说一下你是如何理解 js 是解析型语言的

> 先解析是否有语法错误，有则报错停止执行下面的程序，再进行预编译环节，函数声明整体提升，变量 声明提升，
>
> 然后是执行，解析一行，执行一行，从上到下的顺序，异步除外

17：谈一下你对执行期上下文的认识

> 函数执行时创建的，就是局部作用域

18arguements 的作用是什么？

> 返回一个类数组，数组内的数据为实参

19 call apply bind 的区别是什么？

> 都是可以改变 this 的指向，
>
> call 和 apply 可以直接执行，bind 需要执行符合才能执行
>
> call 第一个参数为this指向的对象，第二~N个为传入的实参
>
> apply 第一个参数为this指向的对象，第二个参数为数组，传入实参
>
> bind只有一个参数，参数决定this指向

20 变量的使用规则是什么？

##### 按照要求写一下表达式

~~~js
// 如何判断x 不是一个数组
Array.isArray(x) 	//	false 则不是数组

// 如何判断一个x可能是数组 可能是对象
typeof x 

// 如何判断一个x 一定是对象
x.constructor == Object

// 如何做 x 的去反操操作
!x

// 如何让一个数组转化为字符串后 可能看到数组中的每个元素
var res = arr.toString();
for(var i in res){
    console.log(res[i]);
}

// 如何判断两个数组 完全相等
if(arr1 === arr2)
~~~



##### 写一下运算过程

~~~js
var res =(1>2)||(true>false)&&(!0);
//	res = false || true && true
//	res = true && true
//	res = true
~~~





##### 请写出下列程序的输出结果

~~~js
      var obj1 = {
        a: 1,
        say: function() {
          console.log([...arguments], "obj1");
          console.log(this);
          console.log(this.a);
        }
      };
      var obj2 = {
        a: 2,
        say: function(a, b, c) {
          console.log([...arguments], "obj2");
          console.log(this);
          console.log(this.a);
        }
      };

      obj1.say.call(obj2, 1, 2, 3, 4);	
		//	[1,2,3,4],"obj1"
		//	obj2{...}
		//	2
      obj2.say.apply(obj1, [1, 2, 3, 4, 5]);
		//	[1,2,3,4,5],"obj2"
		//	obj1{...}
		//	1

~~~

~~~js
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();
add(); 	//	1
add();	//	2
alert(add())	//	3
~~~

~~~js

  function foo() {
        var a = 1;
        return function() {
          console.log(++a);
        };
      }
 var res = foo();
 res()		//	3
~~~

