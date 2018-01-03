package itaf.fish;

import java.util.ArrayList;
import java.util.List;

public enum CodeStringEnum {

  /** 业务 **/
  BIZ_100000("100","表删除标志","100000","是"),
  BIZ_100001("100","表删除标志","100001","否"),
  BIZ_101002("101","活动状态","101001","活动创建"),
  BIZ_101003("101", "活动状态", "101002","活动开始"),
  BIZ_101004("101","活动状态","101003","活动结束"),
  BIZ_102001("102","管理员角色","102001","超级管理员"),
  BIZ_102002("102","管理员角色","102002","普通管理员");
  

  /*** 对象属性 *****/
  private String typeVal;//类型值
  private String typeDesc;//类型描述
  private String value;// 代码值
  private String desc;// 代码中文描述
  
  
  CodeStringEnum(String typeVal,String typeDesc,String value, String desc ) {
    this.typeVal = typeVal;
    this.typeDesc=typeDesc;
    this.value = value;
    this.desc = desc;
  }


  /**
   * 根据CodeTypeEnum获取CodeStringEnum
   * @param codeTypeEnum
   * @return
   */
  public static List<CodeStringEnum> findByCodeType(final String codeTypeVal) {
    List<CodeStringEnum> list = new ArrayList<CodeStringEnum>();
    for (CodeStringEnum item : values()) {
      if (item.getTypeVal().equals(codeTypeVal)) {
        list.add(item);
      }
    }
    return list;
  }

  
  
  
  /**
   * 根据CodeType获取CodeString
   * 
   * 
   */
  public static CodeStringEnum findByValue(final String value) {
    for (CodeStringEnum item : values()) {
      if (item.getValue().equals(value)) {
        return item;
      }
    }
    return null;
  }


  /** 以下是GET/SET方法 ***/
  
  public String getValue() {
    return value;
  }


  public void setValue(String value) {
    this.value = value;
  }


  public String getDesc() {
    return desc;
  }


  public void setDesc(String desc) {
    this.desc = desc;
  }


  public String getTypeVal() {
    return typeVal;
  }


  public void setTypeVal(String typeVal) {
    this.typeVal = typeVal;
  }


  public String getTypeDesc() {
    return typeDesc;
  }


  public void setTypeDesc(String typeDesc) {
    this.typeDesc = typeDesc;
  }


  

  
  



}
