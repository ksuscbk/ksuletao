<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    <?php include './common/style.html'; ?>
    
</head>
<body>
    <!-- 登录 -->
    <div class="login">
        <div class="login-wrap">
            <div class="avatar">
                <img src="/uploads/monkey.png" class="img-circle" alt="">
            </div>
            <form action="" class="col-xs-offset-1 col-xs-10">
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
                    <input type="text" class="form-control" name="username" placeholder="用户名">
                </div>
                <div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
                    <input type="password" name="password" class="form-control" placeholder="密码">
                </div>
                <button type="submit"  class="btn btn-lg btn-primary btn-block">登 录</button>
            </form>
        </div>
    </div>
    <?php include './common/script.html'; ?>
    
    <script>
        require(['src/login']);
    </script>   
</body>
</html>