# formatTime

格式化时间字符串。

## Usage

```js
const formatTime = require('path/to/formatTime');
formatTime('yyyy年m月d日 H:MM:ss', 1523849611270);
```

### 参数

函数接受两个参数：

1. 格式字符串
1. 可（被`Date`构造函数）解析的日期字符串，或13位毫秒数、13位毫秒数字符串；可选，默认为当前日期时间

### 返回值

函数返回一个对象，包含以下属性：

| 属性 | 值 | 类型 |
| :---: | :---: | :---: |
| yyyy | 年份数字 | number |
| yy | （末）2位年份数字 | string |
| mm | 2位月份数字 | string |
| m | 月份数字 | number |
| dd | 2位日期数字 | string |
| d | 日期数字 | number |
| HH | 2位24小时制时钟数字 | string |
| H | 24小时制时钟数字 | number |
| hh | 2位12小时制时钟数字 | string |
| h | 12小时制时钟数字 | number |
| MM | 2位分钟数字 | string |
| M | 分钟数字 | number |
| ss | 2位秒钟数字 | string |
| s | 秒钟数字 | number |
| t | 上午或下午 | boolean |
| format | 传入的格式字符串 | string |
| result | 生成的结果字符串 | string |

格式字符串中包含的以上属性名会依次被替换成相应的属性值。

**注意：**

* 返回的对象还包含`toString`方法，方便其在转字符串类型时返回`result`属性的值。
* 当传入的日期字符串不能被解析成合法日期时，`result`属性值为空字符串，且除`format`、`result`、`toString`外，其余属性不在返回对象中定义。
