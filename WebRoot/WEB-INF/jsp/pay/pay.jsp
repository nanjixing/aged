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
<div class="panel admin-panel">
    <form action="${ctx}/pay/findBySql" id="listform" method="post">
        <div class="padding border-bottom">
            <ul class="search" style="padding-left: 10px;">
                <li>
                    <input type="text" placeholder="请输入订单号" name="name" class="input" value="${obj.paySn}"
                           style="width: 250px;line-height: 17px;display: inline-block" />
                    <a href="javascript:void(0)" onclick="changeSearch()" class="button border-main icon-search">搜索</a>
                </li>
            </ul>
        </div>
    </form>
    <table class="table table-hover text-center">
        <tr>
           <th>sn</th>
            <th>pay_sn</th>
            <th>total_amount</th>
            <th>info</th>
            <th>status</th>
            <th>title</th>
            <th>refund_sn</th>
            <th>refund_amount</th>
            <th>refund_info</th>
            <th>item_order_id</th>
        </tr>
        <c:forEach items="${pagers.datas}" var="data" varStatus="l">
            <tr>
                <td>${data.sn}</td>
                <td>${data.paySn}</td>
                <td>${data.totalAmount}</td>
                <td>${data.info}</td>
                <td>${data.status}</td>
                <td>${data.title}</td>
                <td>${data.refundSn}</td>
                <td>${data.refundAmount}</td>
                <td>${data.refundInfo}</td>
                <td>${data.itemOrderId}</td>

                <td>
                    <a class="button border-red" href="${ctx}/pay/delete?id=${data.id}"><span class="icon-trash-o">删除</span> </a>
                </td>
                <td>
                    <c:if test="${data.status == 0}">
                        <a class="button border-red" href="${ctx}/pay/closePay?sn=${data.sn}"><span class="icon-trash-o">取消订单</span> </a>
                    </c:if>
                    <c:if test="${data.status  == 1}">
                        <a class="button border-red"><span class="icon-trash-o">已支付</span> </a>
                    </c:if>
                    <c:if test="${data.status == 3}">
                        <a class="button border-red"><span class="icon-trash-o">已取消</span> </a>
                    </c:if>
                </td>

            </tr>
        </c:forEach>
        <tr>
            <td colspan="8">
                <div class="pagelist">
                    <!--分页开始-->
                    <pg:pager url="${ctx}/pay/findBySql" maxIndexPages="5" items="${pagers.total}" maxPageItems="5" export="curPage=pageNumber">
                        <pg:last>
                            共${pagers.total}记录，共${pageNumber}页，
                        </pg:last>
                        当前第${curPage}页
                        <pg:first>
                            <a href="${pageUrl}">首页</a>
                        </pg:first>
                        <pg:prev>
                            <a href="${pageUrl}">上一页</a>
                        </pg:prev>
                        <pg:pages>
                            <c:choose>
                                <c:when test="${curPage eq pageNumber}">
                                    <font color="red">[${pageNumber}]</font>
                                </c:when>
                                <c:otherwise>
                                    <a href="${pageUrl}">${pageNumber}</a>
                                </c:otherwise>
                            </c:choose>
                        </pg:pages>
                        <pg:next>
                            <a href="${pageUrl}">下一页</a>
                        </pg:next>
                        <pg:last>
                            <c:choose>
                                <c:when test="${curPage eq pageNumber}">
                                    <font color="red">尾页</font>
                                </c:when>
                                <c:otherwise>
                                    <a href="${pageUrl}">尾页</a>
                                </c:otherwise>
                            </c:choose>
                        </pg:last>
                    </pg:pager>
                </div>
            </td>
        </tr>
    </table>
</div>
<script>
    function changeSearch(){
        $("#listform").submit();
    }
</script>
</body>

</html>