package itaf.fish.entity;
import itaf.core.bean.domain.BaseObject;
/**
 * 
 * 系统名：工具生产代码 <br>
 * 子系统名： 系统 <br>
 * 模块名： 交易 <br>
 * 文件名：Member.java <br>
 * 功能说明: 会员, TB1001 <br>
 * 修改历史：
 * 
 * @author 自动生成  2017-10-07
 * @version 1.0 
 */
public  class Member  extends BaseObject{
/**
   * 
   */
  private static final long serialVersionUID = -5994065154986232950L;



 

   /** 对象Table属性 ****/
    private String name;//姓名  
    private String nkname;//昵称  
    private String idType;//识别类型  
    private String idNo;//识别号码  
    private String pwd;//密码  
  
  
   
  /*** get/set方法 ******/
  public String getName(){
    return this.name;
  }
  public void setName(String name){
     this.name=name;
  }
  public String getNkname(){
    return this.nkname;
  }
  public void setNkname(String nkname){
     this.nkname=nkname;
  }
  public String getIdType(){
    return this.idType;
  }
  public void setIdType(String idType){
     this.idType=idType;
  }
  public String getIdNo(){
    return this.idNo;
  }
  public void setIdNo(String idNo){
     this.idNo=idNo;
  }
  public String getPwd(){
    return this.pwd;
  }
  public void setPwd(String pwd){
     this.pwd=pwd;
  }
  
  
}
