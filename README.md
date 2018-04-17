# jsnippet

> 前端代码片段库，尤其适用于小页面、静态页面的模块。与parcel、webpack4等一起使用更佳。

## Philosophy

看不惯不同项目、不同模块各自为政的util、helper代码，试图用npm+git的方式统一。重复的工作应该用最好的代码复用来取代，并且应易于维护。适合基于本代码库建立前端团队的基础工具代码库。

## 编写snippet

* 一个snippet只专注于一件事情
* 放置在独立的子文件夹中
* 文件夹命名符合语义化，且构成一个合法变量名identifier
* 文件夹中放置`index.[ext]`文件，**尽可能做到单文件，至少不要依赖自己文件夹外的任何模块**
* 文件夹中还可以有`README.md`文件和`test.js`文件等，但都不作为index文件的依赖
* 不需要考虑语法特性问题，用最顺手或最酷炫的方式写，其他（babel、loader等工作）交给使用snippet的项目去做
* 如果不在README中对兼容性等适用范围加以说明，默认snippet代码经转译处理后适用于所有（值得考虑的）浏览器场景

## 使用snippet

### 添加依赖

对于一个项目，在`package.json`中加入以下依赖：

```json
"dependencies": {
    "@shenfe/jsnippet": "git@github.com:shenfe/jsnippet.git#tag_name"
}
```

### 使用

使用一个snippet：

```js
import someStuff from '@shenfe/jsnippet/someStuff'
```

建议像上面这样**按需引入**snippet。当你对其他snippet的质量和副作用不能保证时，仅仅引入自己放心的snippet是明智的。

当然，要像下面这样引入也可以，但如果没有treeshaking的话，会将所有snippet都引入：

```js
import { someStuff } from '@shenfe/jsnippet'
```

### 更新

在更新时，先将`tag_name`改成更新的tag名，然后执行：

```bash
$ npm install @shenfe/jsnippet --save
```

## 探索更多可能

如果自定义一套组件的编写和引用方式，则snippet还可以是前端组件的角色，包含html和css。类似于vue单文件组件那样。
