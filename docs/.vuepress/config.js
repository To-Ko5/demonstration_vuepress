module.exports = {
    title: 'Demonstration VuePress',
    description: 'VuePress demonstration',
    base: '/demonstration_vuepress/',
    themeConfig: {
        nav: [
            { text: 'Top', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Contents1', link: '/contents1/' },
            { text: 'Contensts2', link: '/contents2/'}
          ],
        sidebar: [
          '/',
          '/about/',
          '/contents1/',
          '/contents2/'
        ]
    }
}