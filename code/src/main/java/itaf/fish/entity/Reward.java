package itaf.fish.entity;
import java.math.BigDecimal;
import itaf.core.bean.domain.BaseObject;
/**
 * 
 * 系统名：工具生产代码 <br>
 * 子系统名： 系统 <br>
 * 模块名： 交易 <br>
 * 文件名：Reward.java <br>
 * 功能说明: 钓鱼奖金发放, TB1004 <br>
 * 修改历史：
 * 
 * @author 自动生成  2017-10-08
 * @version 1.0 
 */
public  class Reward  extends BaseObject{

 

   /**
   * 
   */
  private static final long serialVersionUID = -982525746981865771L;
  /** 对象Table属性 ****/
    private String memberNo;//微信号  
    private String competitionId;//比赛ID  
    private String qrcode;//二维码编号  
    private BigDecimal rewardAmount;//中奖金额  
    private Integer orderNo;//排序号码  
  
  
   
  /*** get/set方法 ******/
  public String getMemberNo(){
    return this.memberNo;
  }
  public void setMemberNo(String memberNo){
     this.memberNo=memberNo;
  }
  public String getCompetitionId(){
    return this.competitionId;
  }
  public void setCompetitionId(String competitionId){
     this.competitionId=competitionId;
  }
  public String getQrcode(){
    return this.qrcode;
  }
  public void setQrcode(String qrcode){
     this.qrcode=qrcode;
  }
  public BigDecimal getRewardAmount(){
    return this.rewardAmount;
  }
  public void setRewardAmount(BigDecimal rewardAmount){
     this.rewardAmount=rewardAmount;
  }
  public Integer getOrderNo(){
    return this.orderNo;
  }
  public void setOrderNo(Integer orderNo){
     this.orderNo=orderNo;
  }
  
  
}
