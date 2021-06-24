<%@ page language="java" import="java.util.*" pageEncoding="utf-8" isErrorPage="true" %>
<%response.setStatus(HttpServletResponse.SC_OK);%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>404 Not Found</title>
    <meta http-equiv="refresh" content="5;url=${ctx}/test1_war_exploded/login/uIndex">
<style type="text/css">
    <!--
    .t {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        color: #CC0000;
    }
    .c {
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 11px;
        font-weight: normal;
        color: #000000;
        line-height: 18px;
        text-align: center;
        border: 1px solid #CCCCCC;
        background-color: #FFFFEC;
    }
    body {
        background-color: #FFFFFF;
        margin-top: 100px;
    }
    -->
</style>
</head>
<body>
<div align="center">
    <h2><span class="t">404 Not Found</span></h2>
    <table border="0" cellpadding="8" cellspacing="0" width="460">
        <tbody>
        <tr>
            <td class="c">The requested URL was not found on this server.</td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>