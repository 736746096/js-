1、根据以下规律求100-999内相同的数

​		例：153 = 1^3	+ 5^3 +	3^3

2、求2000 -3000年中所有的闰年

```js
for(var i = 2000; i <= 3000; i++){
	if(i % 400 == 0){
        console.log(i);
    }else{
        if(i % 100 !== 0 && i % 4 == 0){
             console.log(i);
        }
    }
}
```

3、假设一张纸厚度0.1mm，对折多少次后可厚度可以超过1km

```js
var max = 1000000;
var h = 0.1;
var count = 0;
/*
while(true){
    h *=2;
    count++;
    if(h > max){
        console.log("对折"+count+"次");
        break;
    }
}
*/
for(var i = 1;;i++){
    h *=2;
    if(h > max){
        console.log("对折"+i+"次");
        break;
    }
}
```

4、求100 以内奇数和偶数

```jS
for(var i = 1; i <= 100; i++){
    if(i%2==0){
        console.log("偶数："+ i)
    }else{
        console.log("奇数："+ i)
    }
}
```

5、求100以内与7相关的数，并求这些数的和

```js
var sum = 0;
for(var i = 1;i < 100; i++){
    if(i%7==0||i%10==7||parseInt(i/10)==7){
		sum +=i;
    }
}
console.log(sum);
```

6、9*9乘法表

```js
for(var i = 1;i<=9;i++){
    for(var j = i;j <=9;j++){
        console.log(i +'*'+j+'='+i*j)
    }
}
```

