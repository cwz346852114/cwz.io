import Vue from 'vue';

let Url = {
    serverUrl: 'https://api.h2o.cy-cube.com/api/ctos',//生产环境   
    // serverUrl: 'http://192.168.0.100:12188/api/ctos',//李传浩的本地
    // serverUrl: 'http://192.168.0.114:83/api/ctos',//吴杰
    // uploadUrl: '',
    // uploadUrl: 'http://192.168.0.100:12188/',
    uploadUrl: 'https://api.h2o.cy-cube.com',
    // imageUrl: '',
    // imageUrl: 'http://192.168.0.100:12188/',
    imageUrl: 'https://api.h2o.cy-cube.com',
}

Vue.prototype.$Url = Url;

export default Url;


