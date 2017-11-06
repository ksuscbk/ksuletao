<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    <?php include './common/style.html'; ?>
    
</head>
<body>
    
    <!-- 侧边栏 -->
    <?php include './common/aside.html'; ?>
    
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <?php include './common/aside.html'; ?>
            
            <!-- 讲师资料 -->
            <div class="body">
                <div class="goods-add">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">商品封面</label>
                            <div class="col-xs-2 preview">
                                <img src="/images/default.png">
                                <input type="file" id="upfile">
                                <div class="cover">
                                    <i class="fa fa-upload"></i>                  
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">商品名称</label>
                            <div class="col-xs-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">所属品牌</label>
                            <div class="col-xs-5">
                                <select name="" class="form-control input-sm">
                                    <option value="">河北省</option>
                                    <option value="">山东省</option>
                                    <option value="">北京市</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">商品价格</label>
                            <div class="col-xs-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">优惠价格</label>
                            <div class="col-xs-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">库存量</label>
                            <div class="col-xs-5">
                                <input type="text" class="form-control input-sm">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="col-xs-3 control-label">商品描述</label>
                            <div class="col-xs-5 ckeditor">
                                <textarea name="" rows="5" class="form-control input-sm"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-8">
                                <a href="javascript:;" class="btn btn-success btn-sm pull-right">保 存</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php include './common/script.html'; ?>
    
</body>
</html>