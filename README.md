# jsnippet

> 前端代码片段库，尤其适用于小页面、静态页面的模块。与parcel、webpack4等一起使用更佳。适合基于本代码库建立前端团队的基础工具代码库。

## 对编写snippet的要求

* 放置在独立的子文件夹中
* 文件夹命名符合语义化，且构成一个合法变量名identifier
* 文件夹中放置`index.[ext]`文件，尽可能无其他依赖
* 文件夹中还可以有`README.md`文件和`test.js`文件等，但都不作为index文件的依赖
* **尽可能做到单文件，至少不要依赖自己文件夹外的任何模块**

如果不在README中对兼容性等适用范围加以说明，默认snippet中的js代码经babel转译后适用于所有（值得考虑的）浏览器场景。

## 使用snippet

对于一个项目，在`package.json`中加入以下依赖：

```json
"dependencies": {
    "@shenfe/jsnippet": "git@github.com:shenfe/jsnippet.git#tag_name"
}
```

使用一个snippet：

```js
import someStuff from '@shenfe/jsnippet/someStuff'
```

建议像上面这样按需引入snippet。当你对其他snippet的质量和副作用不能保证时，仅仅引入自己放心的snippet是明智的。

当然要这样引入也可以：

```js
import { someStuff } from '@shenfe/jsnippet'
```
