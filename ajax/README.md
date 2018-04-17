# ajax

简单的ajax实现。适用于移动端；同域简单请求的情况下适用于任何浏览器。

## Usage

```js
const ajax = require('path/to/ajax');
ajax({
    method: 'post',
    url: '//some.domain.com/api/user/update',
    data: {
        id: 123,
        name: 'Tom'
    },
    contentType: 'application/json',
    withCredentials: true,
    success: data => {},
    error: xhr => {}
});
```
