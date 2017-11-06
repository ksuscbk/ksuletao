require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min',
        ng: 'assets/nprogress/nprogress',
        echarts: 'assets/echarts/echarts.min'
    },

    // 如果某个第三方类库不支持AMD，我们可以通过shim来实现类似模块的用法
    shim: {
        uploadify: {
            // exports可以将非模块的方法和属性向外公开
            // exports: {
            
            // },
                // 通过deps可以依赖其他模块
            deps: ['jquery']
        }
    }
});

require(['ng', 'jquery'], function(ng, $) {
    ng.start();
    ng.done();

    $(document).ajaxStart(function () {
        ng.start();
    }).ajaxStop(function () {
        ng.done();
    })
});