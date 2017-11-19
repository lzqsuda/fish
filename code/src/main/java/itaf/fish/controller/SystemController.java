package itaf.fish.controller;

import itaf.core.log.LogUtil;
import itaf.core.util.Assert;
import itaf.core.web.BaseController;
import itaf.core.web.context.WebContext;
import itaf.core.web.context.WebContextHolder;
import itaf.fish.FishSession;
import itaf.fish.entity.User;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SystemController extends BaseController {

  private Logger logger = LoggerFactory.getLogger(this.getClass());


  @Autowired
  private SqlMapClientTemplate sqlmap;

  
  @RequestMapping("/login.json")
  public void login() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String userid = context.getString("userid");// 用户名
    String pwd = context.getString("pwd");// 密码
    Assert.notNull(userid, "用户名不能为空");
    Assert.notNull(pwd, "密码不能为空");
    User iu = new User();
    iu.setEmployeeNo(userid);
    LogUtil.debug(logger, "Input data: Userid={0},Pwd={1}", userid, pwd);
    // 查询数据库
    @SuppressWarnings("unchecked")
    List<User> userList = this.sqlmap.queryForList("User.findList", iu);
    Assert.notEmpty(userList, "用户名不存在");
    User ou = userList.get(0);
    Assert.isTrue(ou.getPassword().equals(iu.getPassword()) == false, "密码不正确");
    // 创建会话
    FishSession session = new FishSession();
    session.setUserId(userid);
    context.setSession(session);    
    // 返回页面数据
    super.submitSuccess();
  }
  
  
 



}
