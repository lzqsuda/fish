package itaf.fish.entity;

import itaf.core.bean.domain.BaseObject;

/**
 * 
 * 系统名：工具生产代码 <br>
 * 子系统名： 系统 <br>
 * 模块名： 交易 <br>
 * 文件名：Enroll.java <br>
 * 功能说明: 报名参加钓鱼活动, TB1003 <br>
 * 修改历史：
 * 
 * @author 自动生成 2017-10-07
 * @version 1.0
 */
public class Enroll extends BaseObject {



  /**
  * 
  */
  private static final long serialVersionUID = -2951089957412762578L;
  /** 对象Table属性 ****/
  private String memberNo;// 会员ID（微信号）
  private String competitionId;// 比赛ID
  private Boolean isPay;// 已经付款



  /*** get/set方法 ******/
  public String getMemberNo() {
    return this.memberNo;
  }

  public void setMemberNo(String memberNo) {
    this.memberNo = memberNo;
  }

  public String getCompetitionId() {
    return this.competitionId;
  }

  public void setCompetitionId(String competitionId) {
    this.competitionId = competitionId;
  }

  public Boolean getIsPay() {
    return this.isPay;
  }

  public void setIsPay(Boolean isPay) {
    this.isPay = isPay;
  }


}
