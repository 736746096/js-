## 选择器
> 选中 html元素
- document.getElementsByClassName()
- ...

## 获取属性
元素对象.属性

## 修改元素中内容
元素对象.innerHTML = '新内容'

## 设置 css样式
行内样式
> 元素对象.style.css属性 = '值'

添加 class类名
> 元素对象.className = 'class类名重新赋值'  (注意写全)

## 获取 html元素样式兼容性
~~~js
 //  获取样式兼容性问题
        function getStyle(el){
            if(el.currentStyle){     // IE
                return el.currentStyle;
            }else{  //  其他浏览器
                return getComputedStyle(el,null);
            }
        }
~~~