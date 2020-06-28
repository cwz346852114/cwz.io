
module.exports = {
    router: {
        base:'/cwz.io',
    },
    mode:'universal',
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