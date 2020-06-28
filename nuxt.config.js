
module.exports = {
    router: {
        base:'/cwz',
        mode:"history"
    },
    mode:'spa',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
    generate:{
       dir:'docs',
       subFolders:false
    },
    css: [
    ],
    build: {
        assetsPublicPath: './'
    },
    plugins: [
        {
            src:'~/plugins/main.js',
            ssr:false
        }
    ],
    server: {
        // port: 5745,
        // host: '116.62.179.118',
        // default: 80
        // default: localhost
    },
}   