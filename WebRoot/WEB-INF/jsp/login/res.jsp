<%@page language="java" contentType="text/html; character=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>首页</title>
    <link type="text/css" rel="stylesheet" href="${ctx}/resource/user/css/style.css">
    <script src="${ctx}/resource/user/js/jquery-1.8.3.min.js"></script>
    <script src="${ctx}/resource/user/js/jquery.luara.0.0.1.min.js"></script>
</head>
<body>

<div class="width100 hidden_yh" style="border-top: 1px solid #ddd">
    <div class="width1200 hidden_yh center_yh" style="margin-top: 75px">
        <form action="${ctx}/login/toRes" name = "form1" method="post" onsubmit="return cbCheck();">
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">用户名：</span>
                <input type="text" id = "userName"name="userName" placeholder="请输入您的用户名" style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh" required>
            </div>
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">设置密码：</span>
                <input type="password" id = "passWord" name="passWord"  placeholder="建议至少使用两种字符组合" style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh" required>
            </div>
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">确认密码：</span>
                <input type="password" id = "passWord1" name="passWord1" placeholder="建议至少使用两种字符组合" style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh" required>
            </div>
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">手机号：</span>
                <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"  maxlength="11" id="phone" name="phone" placeholder="建议使用常用的手机" data-validate="required:请填写电话"style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh" required>
            </div>

            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">电子邮箱：</span>
                <input type="email"id="email" name="email" placeholder="请输入邮箱"  style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh"required>

            </div>
<%--            点击获取验证码--%>
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">        </span>
                <button onclick = "ecfunction()"style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh">发送验证码</button>
            </div>
            <div class="center_yh hidden_yh" style="width: 475px;margin-bottom: 40px;">
                <span style="margin-right: 40px;height: 42px;line-height: 42px;width: 100px;" class="left_yh block_yh tright">输入邮箱验证码：</span>
                <input type="text"id="emailcode" name="emailCode" placeholder="请输入验证码"  style="border:1px solid #c9c9c9;width: 292px;height: 42px;font-size: 16px;text-indent: 22px;" class="left_yh" required>
            </div>
            <p class="font14 c_66" style="text-indent: 500px;margin-top: 30px;">
                <input type="checkbox" id="cb">我已阅读并同意<a href="#" class="red">《注册协议》</a>和<a href="#" class="red">《隐私保护政策》</a>
            </p>
            <input type="submit" value="提交" class="ipt_tj" style="width: 295px;height: 44px;margin-left: 500px;">

        </form>
    </div>
</div>
<c:if test="${tores_ec_fail == 0}">
    <script type="text/javascript">
        alert("验证的邮箱不是同一个邮箱");
    </script>
</c:if>
<c:if test="${tores_ec_fail == 1}">
    <script type="text/javascript">
        alert("验证码超时,请重新获取");
    </script>
</c:if>
<c:if test="${tores_ec_fail == 2}">
    <script type="text/javascript">
        alert("验证码错误");
    </script>
</c:if>
<c:if test="${tores_ec_fail == 3}">
    <script type="text/javascript">
        alert("手机号已被注册");
    </script>
</c:if>

<script type="text/javascript">

    function cbCheck(){
        var flag = document.getElementById("cb").checked;
        var passWord = document.form1.passWord.value;
        var passWord1 = document.form1.passWord1.value;
        var phone = document.form1.phone.value;

        if (flag){
            if(phone.length < 11){
                alert("您的电话号码必须输入11位");
                return false;
            }
            if(password.length < 6){
                alert("您的密码必须大于6位");
                return false;
            }
            if(passWord != passWord1){
                alert("两次密码输入不一致");
                return false;
            }
            return true;
        }else{
            console.log(document.form1.passWord.value);
            console.log(document.form1.passWord1.value);
            console.log(document.form1.phone.value);
            alert("同意协议才能够注册");
            return false;
        }

    }

    //邮件验证码校验,使用ajax异步请求验证
    function ecfunction(){
        var email = document.form1.email.value;
        if(email == ''){
            alert("邮箱不能为空");
        }
        $.ajax({
            type:"GET",
            url:"${ctx}/login/genCode.do",
            data:{
                "emailCheck":email
            },
            success:function (result) {
                if(result.gencodemsg==1){
                    alert("验证码生成错误");
                }else if(result.gencodemsg == 2){
                    alert("请检查邮箱是否可用");
                }else if(result.gencodemsg == 3){
                    alert("验证码发送成功");
                }

            }
        });

    }
</script>
<%@include file="/common/ufooter.jsp"%>
</body>
</html>



















