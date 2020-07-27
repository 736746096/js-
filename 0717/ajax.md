### 交互过程
<img src='./img/ajax.png>

### 服务器
- ip：找到服务器
- 端口号：找到服务
- /a/b  找到接口：要 json 数据

一个【服务器】可以启动【多个服务】，一个服务可以写【多个接口】，每个接口可以【响应数据】，数据格式为 xml 或 json格式

### 浏览器是如何发送请求
1：通过【请求地址】 找接口
  - 404没找到 地址错误，或者找到了，没响应
2：按照接口要求接口接通接口
  - 要求一：指定【请求方式】 get post pull delete
  - 要求二：需要【请求参数】 数据格式有：json格式  json字符串 json对象

以上都满足后：接口接通，服务器处理请求  ---> 服务端开发人员的工作

### 如何接收响应并处理
1：怎么接收？
    1.1 响应内容：全部放在 XMLHttpRequest 对象中
    1.2 通过监听【响应事件】XMLHttpRequest.onreadystatechange
    1.3 在响应事件处理函数内部：处理响应数据
        - XMLHttpRequest.status  获取 http状态码
        - XMLHttpRequest.readyStatus  获取状态
        - XMLHttpRequest.response 获取【响应体】中数据 (json数据 or xml)

2：怎么处理？
   2.1 根据 dom结构，分析页面需要的数据结构
   2.2 将响应数据加工处理，得到符合页面的数据结构
   2.3 通过事件处理，完成 js动态交互

3：注意事项：
    交互是异步的，事件处理函数，ajax请求
    响应处理需要等待响应成功，再处理
        - 1：dom处理在响应处理函数里面写
        - 2：要么在回调函数中处理 dom，在响应处理函数中【执行回调函数】，并传入实参响应数据，
        - 3：在回调函数的方法体中，接收【响应数据】，并进行 dom处理


### 有没有什么状态是记录请求与响应的过程
- 0  请求准备中，   open() 之前     (前端开发工作)
- 1  发送请求       send() 之后     (前端开发工作)
- 2  服务器处理中   (java开发的工作)
- 3  响应发出       (java开发的工作)
- 4  响应成功，浏览器接收响应        (前端开发工作)

### http 状态码
代表了通信中的问题：
- 200  成功
- 400  前端bug
- 404  大多数为地址错误，或者没有响应
- 500  服务器错误