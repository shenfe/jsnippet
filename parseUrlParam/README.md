# parseUrlParam

解析url中的query参数。

## Usage

```js
const parseUrlParam = require('path/to/parseUrlParam');
parseUrlParam(); // 默认从当前url解析，返回一个对象（参数的键值对形式）
parseUrlParam('id'); // 从当前url解析名为id的参数值
parseUrlParam('http://some.domain.com/page?id=123'); // 从指定的url解析出参数键值对
parseUrlParam('id', 'http://some.domain.com/page?id=123'); // 从指定的url解析名为id的参数值
```

返回结果已经做了`decodeURIComponent`处理，无需再解码。
