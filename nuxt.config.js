
module.exports = {
    router: {
        base:'/guanwang',
        mode:"history"
    },
    mode:'Universal',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
  
    generate:{
        router:[
            '/home',
            '/richText'
        ]
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