# cookie

读写cookie。

修改自[wmhilton/vanilla-cookies.js](https://gist.github.com/wmhilton/7256c66c4e28f02c018e)。

## Usage

```js
const $cookie = require('path/to/cookie');
$cookie.set('name', 'value', { /**/ }); // 设置指定cookie值
$cookie.get('name'); // 读取指定cookie值
$cookie.get(); // 读取所有（非HttpOnly的）cookie值，返回一个对象（键值对）
$cookie.remove('name'); // 删除指定cookie
```

其中，`set`方法的第三个参数为一个option对象，可以有以下属性：

| 属性 | 含义 | 数据类型 | 实例 |
| :---: | :--- | :---: | :--- |
| `expires` | 过期时间 | Date | `new Date(+new Date() + 1000*60*60*24)` |
| `path` | 路径 | string | `/` |
| `domain` | 域 | string | `.domain.com` |
| `secure` | 是否只在https时传送 | boolean | `true` |
