<%--
  Created by IntelliJ IDEA.
  User: xing
  Date: 2021/4/15
  Time: 14:01
  To change this template use File | Settings | File Templates.
--%>
<%--<%--%>
<%--    String path = request.getContextPath();--%>
<%--    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";--%>
<%--%>--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/taglibs.jsp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <%--    <base href="<%=basePath%>"/>--%>
    <title>管理员后台</title>
    <link rel="stylesheet" href="${ctx}/resource/css/pintuer.css">
    <link rel="stylesheet" href="${ctx}/resource/css/admin.css">
    <script src="${ctx}/resource/js/jquery.js"></script>
    <script src="${ctx}/resource/js/pintuer.js"></script>
</head>
<body style="background-color: #f2f9fd">
<div class="header bg-main">
    <div class="logo margin-big-left fadein-top">
        <h1>管理员后台</h1>
    </div>
    <div class="head-l">
        <a class="button button-little bg-green" href="" target="_blank">
            <span class="icon-home"></span>前台首页
        </a>
        <a class="button button-little bg-blue" href="" target="_blank">
            <span class="icon-wrench"></span>清除缓存
        </a>
        <%--        <a class="button button-little bg-red" href="mtuichu.html">--%>
        <a class="button button-little bg-red" href="${ctx}/login/login">
            <span class="icon-power-off"></span>退出登录
        </a>
    </div>
</div>
<div class="leftnav">
    <div class="leftnav-title"><strong><span class="icon-list">菜单列表</span> </strong></div>
    <h2><span class="icon-user"></span>基本设置 </h2>
    <ul style="display: block">
        <%--        针对item_category表，target目标值为iframe标签--%>
        <li><a href="${ctx}/itemCategory/findBySql" target="right"><span class="icon-caret-right"></span>类目管理</a></li>
        <li><a href="${ctx}/user/findBySql" target="right"><span class="icon-caret-right"></span>用户管理</a></li>
        <li><a href="${ctx}/item/findBySql" target="right"><span class="icon-caret-right"></span>商品管理</a></li>
        <li><a href="${ctx}/itemOrder/findBySql" target="right"><span class="icon-caret-right"></span>订单管理</a></li>
        <li><a href="${ctx}/news/findBySql" target="right"><span class="icon-caret-right"></span>公告管理</a></li>
        <li><a href="${ctx}/message/findBySql" target="right"><span class="icon-caret-right"></span>留言管理</a></li>
        <li><a href="${ctx}/pay/findBySql" target="right"><span class="icon-caret-right"></span>支付管理</a></li>

    </ul>
</div>
<ul class="bread">
    <li><a href="{:}" target="right" class="icon-home">首页</a></li>
    <li><a href="#">网站信息</a></li>
</ul>
<%--使用iframe框架自动增加滚轮--%>
<div class="admin">
    <iframe name="right" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
</div>

</body>
</html>
