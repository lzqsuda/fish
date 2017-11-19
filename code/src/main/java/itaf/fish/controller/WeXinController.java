package itaf.fish.controller;

import java.io.IOException;
import java.io.OutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import itaf.core.CoreExceptionEnum;
import itaf.core.exception.ItafException;
import itaf.core.log.LogUtil;
import itaf.core.web.BaseController;
import itaf.core.web.context.WebContext;
import itaf.core.web.context.WebContextHolder;
import itaf.fish.FishSession;

@Controller
public class WeXinController extends BaseController {
  private Logger logger = LoggerFactory.getLogger(this.getClass());

  /**
   * 微信首页
   */
  @RequestMapping(value = "/wexinMain.json")
  public String wexinMain() {
    // 获取微信信息
    WebContext context = WebContextHolder.getWebContext();
    String code = context.getString("code");// 微信id
    LogUtil.error(logger, "微信信息：" + code);
    // 创建会话
    FishSession session = new FishSession();
    session.setUserId(code);
    context.setSession(session);
    context.setSession(session);
    // 跳转首页
    return "redirect:/www/main.html";
  }

  /**
   * 微信Token
   */
  @RequestMapping("/wexinToken.json")
  // @ResponseBody
  public void wexinToken() {
    WebContext context = WebContextHolder.getWebContext();
    String signature = context.getString("signature");// 微信加密签名
    String timestamp = context.getString("timestamp"); // 时间戳
    String nonce = context.getString("nonce");// 随机数
    String echostr = context.getString("echostr");// 随机字符串
    LogUtil.debug(logger, "wexinToken input data:signature={0},timestamp={1},nonce={2},echostr={3}", signature, timestamp, nonce, echostr);

    // Assert.notNull(echostr, "echostr 不能为空");
    // 通过检验signature对请求进行校验，若校验成功则原样返回echostr，表示接入成功，否则接入失败
    // if (signature != null && CheckoutUtil.checkSignature(signature, timestamp, nonce)) {
    // PrintWriter print = null;
    OutputStream os = null;
    try {
      os = context.getResponse().getOutputStream();
      // print=context.getResponse().getWriter();
      os.write(echostr.getBytes());
      os.flush();
      // print.flush();
    } catch (IOException e) {
      e.printStackTrace();
      throw new ItafException(CoreExceptionEnum.IO_EXCEPTION, e);
    } finally {
      if (os != null) {
        try {
          os.close();
        } catch (IOException e) {
          e.printStackTrace();
          throw new ItafException(CoreExceptionEnum.IO_EXCEPTION, e);
        }
      }
    }
    // }


  }


}
