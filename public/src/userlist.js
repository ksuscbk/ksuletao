define(['jquery', 'template', './utils'], function ($, t) {
    // 获取用户列表
    $.ajax({
        url: '/api/user/queryUser',
        type: 'get',
        data: {page: 1, pageSize: 10},
        success: function (info) {
            // 后台返回的info就是对象形式的数据
            var html = t('userlist', info);

            $('tbody').html(html);
        }
    });

    // 用户启用禁用   DOM后添加的  选择事件委托来解决
    $('table').on('click', '.btn', function () {

        var _this = $(this);
        // 自定义属性获取当前用户信息
        var td = $(this).parent();
        var id = td.attr('data-id');

        var status = td.attr('data-status');
        status = Math.abs(status - 1);


        $.ajax({
            url: '/api/user/updateUser',
            type: 'post',
            data: {
                id: id,
                isDelete: status
            },
            success: function (info) {
                if (status == 1) {
                    _this.text('启用');
                    td.prev().text('是');
                } else {
                    _this.text('禁用');
                    td.prev().text('否');
                }
                // 保证数据库和页面一致
                td.attr('data-status', status);
                _this.toggleClass('btn-info btn-warning')
            }
        });
    });
})