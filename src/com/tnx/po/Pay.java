package com.tnx.po;

import java.io.Serializable;
import java.util.Date;

/**
 * @ClassName PayLog
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--04--22--15:12
 **/
public class Pay implements Serializable {
    public static final int pay_status_waiting = 0;//待支付
    public static final int pay_status_paid = 1;//已支付
    public static final int pay_status_refunded = 2;//退款
    public static final int pay_status_closed = 3;//关闭支付
    
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String sn;//支付记录编号
    private String paySn;
    private String totalAmount;
    private String info;
    private Integer status = pay_status_waiting;
    private String title;//标题
    private String refundSn;//退款编号
    private String refundAmount;//退款金额
    private String refundInfo;//退款原因
    private Integer itemOrderId;
    private Date addTime;//支付时间

    public Pay() {
    }

    public Pay(Integer id, String sn, String paySn, String totalAmount, String info, Integer status, String title, String refundSn, String refundAmount, String refundInfo, Integer itemOrderId, Date addTime) {
        this.id = id;
        this.sn = sn;
        this.paySn = paySn;
        this.totalAmount = totalAmount;
        this.info = info;
        this.status = status;
        this.title = title;
        this.refundSn = refundSn;
        this.refundAmount = refundAmount;
        this.refundInfo = refundInfo;
        this.itemOrderId = itemOrderId;
        this.addTime = addTime;
    }


    public Date getAddTime() {
        return addTime;
    }

    public void setAddTime(Date addTime) {
        this.addTime = addTime;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }

    public String getPaysn() {
        return paySn;
    }

    public void setPaysn(String paySn) {
        this.paySn = paySn;
    }

    public String getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRefundSn() {
        return refundSn;
    }

    public void setRefundSn(String refundSn) {
        this.refundSn = refundSn;
    }

    public String getRefundAmount() {
        return refundAmount;
    }

    public void setRefundAmount(String refundAmount) {
        this.refundAmount = refundAmount;
    }

    public String getRefundInfo() {
        return refundInfo;
    }

    public void setRefundInfo(String refundInfo) {
        this.refundInfo = refundInfo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPaySn() {
        return paySn;
    }

    public void setPaySn(String paySn) {
        this.paySn = paySn;
    }

    public Integer getItemOrderId() {
        return itemOrderId;
    }

    public void setItemOrderId(Integer itemOrderId) {
        this.itemOrderId = itemOrderId;
    }
}
