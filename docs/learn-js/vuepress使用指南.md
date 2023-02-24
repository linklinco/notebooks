# vuepress使用指南

## 使用步骤

1、安装`NVM`，下载node 16.13.0版本，更高或等低的版本可能会出现奇奇怪怪的bug

> `nvm`安装教程：
>
> 1. Windows设备：在[github](https://github.com/coreybutler/nvm-windows/releases)下载安装**nvm-windows.exe**
>
> 2. 安装完成后，在命令行输入`nvm -v`可以看到**nvm**的版本，如果看不到，可能是环境变量没有配置好。
>
> 3. 输入`nvm list available`既可以查询到所有可用的node版本。
>
>    ```shell
>     linco  nvm list available                                                                                                                                                     
>    |   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
>    |--------------|--------------|--------------|--------------|
>    |    19.7.0    |   18.14.2    |   0.12.18    |   0.11.16    |
>    |    19.6.1    |   18.14.1    |   0.12.17    |   0.11.15    |
>    |    19.6.0    |   18.14.0    |   0.12.16    |   0.11.14    |
>    |    19.5.0    |   18.13.0    |   0.12.15    |   0.11.13    |
>    |    19.4.0    |   18.12.1    |   0.12.14    |   0.11.12    |
>    |    19.3.0    |   18.12.0    |   0.12.13    |   0.11.11    |
>    |    19.2.0    |   16.19.1    |   0.12.12    |   0.11.10    |
>    |    19.1.0    |   16.19.0    |   0.12.11    |    0.11.9    |
>    |    19.0.1    |   16.18.1    |   0.12.10    |    0.11.8    |
>    |    19.0.0    |   16.18.0    |    0.12.9    |    0.11.7    |
>    |   18.11.0    |   16.17.1    |    0.12.8    |    0.11.6    |
>    |   18.10.0    |   16.17.0    |    0.12.7    |    0.11.5    |
>    |    18.9.1    |   16.16.0    |    0.12.6    |    0.11.4    |
>    |    18.9.0    |   16.15.1    |    0.12.5    |    0.11.3    |
>    |    18.8.0    |   16.15.0    |    0.12.4    |    0.11.2    |
>    |    18.7.0    |   16.14.2    |    0.12.3    |    0.11.1    |
>    |    18.6.0    |   16.14.1    |    0.12.2    |    0.11.0    |
>    |    18.5.0    |   16.14.0    |    0.12.1    |    0.9.12    |
>    |    18.4.0    |   16.13.2    |    0.12.0    |    0.9.11    |
>    |    18.3.0    |   16.13.1    |   0.10.48    |    0.9.10    |
>    ```
>
> 4. 输入`nvm install <16.18.0>`可以安装对应的node版本
>
> 5. `nvm list`可以查看已经安装完毕的node
>
> 6. `nvm use <16.18.0>`使用对应版本的node

2、安装好环境后，可以全部或部分安装`vuepress`

> 1. 先创建一个文件夹，进入文件夹
> 2. 使用`yarn init -y` 创建默认node包
> 3. 使用`yarn add vuepress -D`本地保存安装**vuepress**

3、**vuepress**的配置

3.1 在package中添加以下指令

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

这是输入`yarn docs:dev`便会启动一个服务器，可以看到由`vuepress`渲染后的界面了

3.2 VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

注意

请留意目录名的大写。

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
- `docs/.vuepress/public`: 静态资源目录,放例如网站icon之类的图像
- `docs/.vuepress/templates`: 存储 HTML 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

注意

当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件 (opens new window)](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)来修改，否则可能会导致构建出错。

**同时阅读:**

- [配置](https://www.vuepress.cn/config/)
- [主题](https://www.vuepress.cn/theme/)
- [默认主题配置](https://www.vuepress.cn/theme/default-theme-config.html)

[](https://www.vuepress.cn/guide/directory-structure.html#默认的页面路由)默认的页面路由

此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](https://www.vuepress.cn/api/cli.html#基本用法)），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

4、配置文件

```javascript
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/',   // 设置站点根路径
    dest: './gh-pages',//设置打包到哪个文件夹
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        // ['vuepress-plugin-autobar'],
        // ['permalink-pinyin']//pinyin
    ],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/linux/' },
            { text: '生活', link: '/myday/' },
            { text: '英语', link: '/life/' },
            { text: '学习', link: '/study/' },
        ],
        // 为以下路由添加左侧边栏
        sidebar: 'auto',
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated',
    }
}
```

```js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/',   // 设置站点根路径
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/hello/' },
            { text: 'External', link: '/js/' },
            { text: 'other', link: '/guide/' }
        ],
        sidebar: {
            '/hello/': ['', '一', 'b'],
            '/js/': ['', 'abc-1'],
            '/guide/': ['', '中文', 'a1']
        },//sidebar设置要和路径一样，并且README.md后面是小写的
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: '最近更新',
    }
}
```

5、在markdown中使用vue组件

`.vuepress / components` 中的任意 `* .vue` 文件都会自动注册为全局的异步组件。例如：

```text
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      └─ OtherComponent.vue
```

在任何 markdown 文件中，你可以直接使用这些组件（名称是从文件名推断的）：

```html
<demo-1/>
<OtherComponent/>


Hello this is <demo-1>

This is another component
```

6、上传GitHub pages

> gh-pages分支是GitHub提供的特殊分支，在该分支里的文件会所为静态网页被渲染到username.github.io/文件夹名路径下/
>
> 使用node安装gh-pages包
>
> 使用命令`gh-pages -d gh-pages`自动创建gh-pages分支并上传
