# domEvent

DOM事件监听，实现了delegation。适用于移动端，实现了tap事件。

参考了[Plain JavaScript event delegation](http://bdadam.com/blog/plain-javascript-event-delegation.html)。

## Usage

```js
const $on = require('path/to/domEvent');
$on(targetElement, eventName, handlerFunction);
$on(targetElement, eventName, selector, handlerFunction); // delegate
```

其中`targetElement`可以是元素也可以是选择器字符串；`eventName`是事件名字符串；`selector`是要delegate的子元素选择器字符串；`handlerFunction`是事件处理函数。
