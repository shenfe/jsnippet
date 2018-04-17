# toast

在显示区域中央弹出提示信息，后自动消失。适用于移动端。

## Usage

```js
const toast = require('path/to/toast');
toast('hello world', {
    style: {}, // 覆盖弹框样式，css属性键值对
    delay: 2000, // 弹出后显示多久再消失，单位为毫秒
    callback: () => {} // 弹框消失后异步执行的回调
});
```

其中，第一个参数为弹框元素的innerHTML，第二个参数为可选项配置。
