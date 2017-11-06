define(['jquery'], function($) {
    // 检测登陆
    $.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function(info) {
            if (info.error) {
                location.href = '/login.php';
            }
        }
    });

    // 退出登录
    $('.logout').on('click', function () {
        $.ajax({
            url: '/api/employee/employeeLogout',
            type: 'get',
            success: function (info) {
                if (info.success) {
                    location.href = '/login.php';
                }
            }
        });
    })

    // 添加点击动画效果增强用户体验
    $('.navs a + ul').prev().on('click', function () {
        $(this).next().slideToggle();
    })
});