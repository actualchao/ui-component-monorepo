# theme-wujc
> element component chalk theme.

基础组件默认样式包


## Installation
```shell
npm i theme-wujc -S
```

## Usage

Use Sass import
```css
@import 'theme-wujc';
```

Or Use webpack
```javascript
import 'theme-wujc';
```

## 1.按需引入 

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "~node_modules/theme-wujc/lib" //修改为我们的样式包路径
      }
    ]
  ]
}
```


## 2.在项目中改变 SCSS 变量
`theme-wujc` 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 `theme-wujc` 的样式变量。新建一个样式文件，例如 `variables.scss`，写入以下内容：
```html
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~theme-wujc/src/fonts';

@import "~theme-wujc/src/index";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element 编译好的 CSS 文件）：
```JS
import Vue from 'vue'
import Element from 'element-ui'
import './variables.scss'

Vue.use(Element)
```


>1. 需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element 中 icon 图标所在的相对路径即可。
> 2. 配合 `babel-plugin-component` 按需加载的时候需要修改 `babel` 配置为

   
```javascript
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        // "styleLibraryName": "~node_modules/theme-wujc/lib"
        "style": false
      }
    ]
  ]
  ```
