package itaf.fish.entity;

import java.math.BigDecimal;
import java.util.Date;
import itaf.core.bean.domain.BaseObject;

/**
 * 
 * 系统名：工具生产代码 <br>
 * 子系统名： 系统 <br>
 * 模块名： 交易 <br>
 * 文件名：Competition.java <br>
 * 功能说明: 比赛，竞赛, TB1002 <br>
 * 修改历史：
 * 
 * @author 自动生成 2017-10-07
 * @version 1.0
 */
public class Competition extends BaseObject {
  /**
   * 
   */
  private static final long serialVersionUID = -4753865619910961369L;



  /** 对象Table属性 ****/
  private String code;// 竞赛编号
  private String name;// 名称
  private Date startTime;// 竞赛开始时间
  private Date endTime;// 竞赛结束时间
  private Date enrollStartTime;// 报名开始时间
  private Date enrollEndTime;// 报名结束时间
  private String address;// 地址
  private String status;// 状态
  private Integer allNum;// 竞赛总人数
  private Integer enrollNum;// 报名人数
  private String contactMobile;// 联系人电话
  private String contactName;// 比赛联系人姓名
  private String nrewardAmoutList;// 普通奖金额列表，以逗号分隔
  private String srewardMembernoList;// 特等奖人员微信号列表，以逗号分隔
  private String srewardAmountList;// 特等奖金额列表，以逗号分隔
  private Integer eqcoedNum;// 二维码个数
  private String note;// 备注



  /*** get/set方法 ******/
  public String getCode() {
    return this.code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Date getStartTime() {
    return this.startTime;
  }

  public void setStartTime(Date startTime) {
    this.startTime = startTime;
  }

  public Date getEndTime() {
    return this.endTime;
  }

  public void setEndTime(Date endTime) {
    this.endTime = endTime;
  }

  public Date getEnrollStartTime() {
    return this.enrollStartTime;
  }

  public void setEnrollStartTime(Date enrollStartTime) {
    this.enrollStartTime = enrollStartTime;
  }

  public Date getEnrollEndTime() {
    return this.enrollEndTime;
  }

  public void setEnrollEndTime(Date enrollEndTime) {
    this.enrollEndTime = enrollEndTime;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getStatus() {
    return this.status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Integer getAllNum() {
    return this.allNum;
  }

  public void setAllNum(Integer allNum) {
    this.allNum = allNum;
  }

  public Integer getEnrollNum() {
    return this.enrollNum;
  }

  public void setEnrollNum(Integer enrollNum) {
    this.enrollNum = enrollNum;
  }

  public String getContactMobile() {
    return this.contactMobile;
  }

  public void setContactMobile(String contactMobile) {
    this.contactMobile = contactMobile;
  }

  public String getContactName() {
    return this.contactName;
  }

  public void setContactName(String contactName) {
    this.contactName = contactName;
  }

  public String getNrewardAmoutList() {
    return this.nrewardAmoutList;
  }

  public void setNrewardAmoutList(String nrewardAmoutList) {
    this.nrewardAmoutList = nrewardAmoutList;
  }

  public String getSrewardMembernoList() {
    return this.srewardMembernoList;
  }

  public void setSrewardMembernoList(String srewardMembernoList) {
    this.srewardMembernoList = srewardMembernoList;
  }

  public String getSrewardAmountList() {
    return this.srewardAmountList;
  }

  public void setSrewardAmountList(String srewardAmountList) {
    this.srewardAmountList = srewardAmountList;
  }

  public Integer getEqcoedNum() {
    return this.eqcoedNum;
  }

  public void setEqcoedNum(Integer eqcoedNum) {
    this.eqcoedNum = eqcoedNum;
  }

  public String getNote() {
    return this.note;
  }

  public void setNote(String note) {
    this.note = note;
  }

  /**
   * 获取中金金额
   * 
   * @param memberNo
   * @return
   */
  public BigDecimal getRewardAmount(String memberNo) {
    String[] nrewardAmoutList = this.getNrewardAmoutList().split(",");
    String[] srewardAmoutList = this.getSrewardAmountList().split(",");
    int i = this.getSrewardMembernoList().indexOf(memberNo);// 如果是特等奖
    if (i >= 0) {
      return new BigDecimal(srewardAmoutList[0]);
    } else {
      String reward = "0";
      if (nrewardAmoutList.length > 0) {
        reward = nrewardAmoutList[0];
      }
      return new BigDecimal(reward);
    }


  }
  /**
   * 删除开始的奖金列表
   */
  public void removeNRewardAmout(String memberNo) {
    int i = this.getSrewardMembernoList().indexOf(memberNo);// 如果是特等奖
    if (i < 0) {
      removeNRewardAmout();
    }
  }

  /**
   * 删除开始的奖金列表
   */
  public void removeNRewardAmout() {
    String[] nrewardAmoutList = this.getNrewardAmoutList().split(",");
    StringBuffer sb = new StringBuffer("");
    for (int i = 1; i < nrewardAmoutList.length; i++) {
      sb.append(nrewardAmoutList[i]).append(",");
    }
    String nl = sb.substring(0, sb.length() - 1);
    this.setNrewardAmoutList(nl);
  }

}
