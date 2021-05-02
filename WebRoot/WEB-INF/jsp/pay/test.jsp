<%@page language="java" contentType="text/html; character=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/common/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>管理员后台</title>
    <link rel="stylesheet" href="${ctx}/resource/css/pintuer.css">
    <link rel="stylesheet" href="${ctx}/resource/css/admin.css">
    <script src="${ctx}/resource/js/jquery.js"></script>
    <script src="${ctx}/resource/js/pintuer.js"></script>
</head>
<body>
<%--先点添加再点执行功能--%>
<a href="${ctx}/pay/test">测试</a>
<br>
<a href="${ctx}/pay/exAdd?orderItemId=37">测试添加支付订单</a>
<br>
<form action="${ctx}/pay/toPay" method = "post">
    <input type = "hidden" name = "id" value="${obj.id}"/>
    <input type = "hidden" name = "sn" value="${obj.sn}"/>
    <input type = "hidden" name = "totalAmount" value="${obj.totalAmount}"/>
    <input type = "hidden" name = "title" value="${obj.title}"/>
    <input type = "hidden" name = "info" value="${obj.info}"/>
    <input type="submit">测试执行支付订单</form>
</form>
<br>
<%--传入sn查询--%>
<a href="${ctx}/pay/refund?sn=${obj.sn}">查看订单</a>
<br>
<form action="${ctx}/pay/refund" method = "post">
<%--    <input type = "hidden" name = "id" value="${obj.id}"/>--%>
    <input type = "text" name = "sn" value=""/>
<%--    <input type = "hidden" name = "totalAmount" value=""/>--%>
<%--    <input type = "hidden" name = "title" value="${obj.title}"/>--%>
<%--    <input type = "hidden" name = "refundInfo" value=""/>--%>
    <input type="submit">退款</form>
</form>
<c:if test="${refund_msg} != null">
    <font>${refund_msg}</font>
</c:if>

<%--<a href="${ctx}/pay/toPay?pay=${obj}">测试执行支付订单</a>--%>
<c:if test="${flag} == 0 ">
    <font>${msg}</font>
</c:if>
</body>
</html>