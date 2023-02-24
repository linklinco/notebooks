module.exports = {
    title: '木羽的树',
    description: '基于git的web笔记本',
    base: '/notebooks',   // 设置站点根路径
    dest: './gh-pages',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'JS学习笔记', link: '/learn-js/' },
        ],
        sidebar: {
            '/learn-js/': ['', 'vuepress使用指南'],
            //     '/js/': ['', 'abc-1'],
            //     '/guide/': ['', '中文', 'a1']
            // },
            sidebarDepth: 2,//左侧导航显示的层级
            lastUpdated: '最近更新',
        }
    }
}