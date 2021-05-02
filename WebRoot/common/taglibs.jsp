<%--
  Created by IntelliJ IDEA.
  User: xing
  Date: 2021/4/15
  Time: 14:43
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri ="/WEB-INF/tlds/c.tld"%>
<%@ taglib prefix="fmt" uri ="/WEB-INF/tlds/fmt.tld"%>
<%@ taglib prefix="fn" uri ="/WEB-INF/tlds/fn.tld"%>
<%@ taglib prefix="pg" uri ="/WEB-INF/tlds/pager-taglib.tld"%>
<%--contextPath路径用ctx引入--%>
<c:set var = "ctx" value = "${pageContext.request.contextPath}"/>
<script>
    var ctx = "${ctx}";
</script>