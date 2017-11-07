define(['jquery', './utils'], function ($) {
    $('form').on('submit', function () {
        console.log(1);
        var data = $(this).serialize();
        $.ajax({
            url: '/api/category/addTopCategory',
            type: 'post',
            data: data,
            success: function (info) {
                if (info.success) {
                    console.log(info);
                }
            }
        });
    })
});