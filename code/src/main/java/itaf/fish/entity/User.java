package itaf.fish.entity;

import itaf.core.bean.domain.BaseObject;

/**
 * 
 * 系统名：工具生产代码 <br>
 * 子系统名： 系统 <br>
 * 模块名： 交易 <br>
 * 文件名：User.java <br>
 * 功能说明: 用户, TB9101 <br>
 * 修改历史：
 * 
 * @author 自动生成 2017-10-07
 * @version 1.0
 */
public class User extends BaseObject {



  /**
  * 
  */
  private static final long serialVersionUID = -3368319938133886390L;
  /** 对象Table属性 ****/
  private String employeeNo;// 员工编号
  private String password;// 密码
  private String email;// 电子邮箱
  private String name;// 姓名
  private String department;// 部门



  /*** get/set方法 ******/
  public String getEmployeeNo() {
    return this.employeeNo;
  }

  public void setEmployeeNo(String employeeNo) {
    this.employeeNo = employeeNo;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDepartment() {
    return this.department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }


}
