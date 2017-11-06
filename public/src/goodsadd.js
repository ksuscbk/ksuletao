define(['jquery', 'template', './utils', 'uploadify'], function ($, t) {
    $('form').on('submit', function () {
        var _this = $(this);
        $.ajax({
            url: '/api/product/addProduct',
            type: 'post',
            data: _this.serialize(),
            
            success: function (info) {
                if (info.success) {
                    location.href = '/goods_list.php';
                }
            }
        });

        return false;
    });

    // 上传文件
    $('#upfile').uploadify({
        buttonText: '',
        width: 120,
        height: 120,
        itemTemplate: '<div></div>',
        // flash在哪
        swf: '/public/assets/uploadify/uploadify.swf',
        // 接收地址
        uploader: '/api/product/addProductPic',
        // 
        fileObjName: 'pic1',
        // 成功
        onUploadSuccess: function (file, data) {
            var res = JSON.parse(data);
            $('.preview img').attr('src', 'http://localhost:3000' + res.picAddr);
            // 把图片的位置通过隐藏表单提交
            $('input[name="pic"]').val(res.picAddr);
        }
    });

    // 品牌列表
    $.ajax({
        url: '/api/category/querySecondCategoryPaging',
        type: 'get',
        data: {page: 1, pageSize: 100},
        success: function (info) {
            var html = t('brands', info);
            $('.brand').append(html);
        }
    });
    
})