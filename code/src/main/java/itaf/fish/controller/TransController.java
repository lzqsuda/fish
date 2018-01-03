package itaf.fish.controller;

import java.math.BigDecimal;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ibatis.SqlMapClientTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;

import itaf.core.exception.ItafException;
import itaf.core.log.LogUtil;
import itaf.core.web.BaseController;
import itaf.core.web.context.WebContext;
import itaf.core.web.context.WebContextHolder;
import itaf.fish.ExceptionEnum;
import itaf.fish.entity.Competition;
import itaf.fish.entity.Enroll;
import itaf.fish.entity.Reward;

@Controller
public class TransController extends BaseController {
  private Logger logger = LoggerFactory.getLogger(this.getClass());
  @Autowired
  private SqlMapClientTemplate sqlmap;

  /**
   * 报名
   */
  @RequestMapping(value = "/enroll.json")
  public void enroll() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String competitionId = context.getString("competitionId");// 比赛id
    String memberNo = context.getString("memberNo");// 会员微信号
    Enroll enroll = new Enroll();
    enroll.setCompetitionId(competitionId);
    enroll.setMemberNo(memberNo);
    enroll.setIsPay(false);
    enroll.initCreateBO();
    LogUtil.debug(logger, "input data{0}", enroll.toString());
    // 判断是否已经报名
    Enroll param=new Enroll();
    param.setCompetitionId(competitionId);
    param.setMemberNo(memberNo);
    int cout=(int)this.sqlmap.queryForObject("Enroll.isnew",param);
    if(cout>0){
      throw new ItafException(ExceptionEnum.ENROLL_DUP_ERROR);
    }
    //报名
    this.sqlmap.insert("Enroll.insert", enroll);
    // 返回页面数据
    this.submitSuccess();
  }


  /**
   * 获奖
   */
  @RequestMapping(value = "/reward.json")
  public void reward() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String qrcode = context.getString("qrcode");// 二维码
    String competitionId = context.getString("competitionId");// 比赛id
    String memberNo = context.getString("memberNo");// 会员微信号
    Assert.notNull(competitionId, "活动编号不存在,不存在！");
    Assert.notNull(memberNo, "微信编号,不存在！");
    LogUtil.debug(logger, "输入信息competitionId={0},memberNo={1}", competitionId, memberNo);
    //是否已经抽奖
    Reward param = new Reward();
    param.setCompetitionId(competitionId);
    param.setMemberNo(memberNo);
    int count=(int)this.sqlmap.queryForObject("Reward.isnew", param);
    if(count>0){
      throw new ItafException(ExceptionEnum.REWARD_DUP_ERROR);
    }
    // 获取比赛
    Competition comp = (Competition) this.sqlmap.queryForObject("Competition.findOne", competitionId);
    // 插入奖金
    BigDecimal rewardAmount = comp.getRewardAmount(memberNo);
    Reward reward = new Reward();
    reward.setCompetitionId(competitionId);
    reward.setMemberNo(memberNo);
    reward.setRewardAmount(rewardAmount);
    reward.setQrcode(qrcode);
    reward.initCreateBO();
    this.sqlmap.insert("Reward.insert", reward);
    // 更新活动奖金列表
    comp.removeNRewardAmout(memberNo);
    this.sqlmap.update("Competition.update", comp);
    // 返回页面数据
    this.submitSuccess();
  }



  /**
   * 抽奖生成
   */
  @SuppressWarnings("unchecked")
  @RequestMapping(value = "/reward2.json")
  public void reward2() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String qrcode = context.getString("qrcode");// 二维码
    String code = context.getString("code");// 微信编号
    Assert.notNull(qrcode, "二维码,不存在！");
    Assert.notNull(code, "微信编号,不存在！");
    LogUtil.debug(logger, "输入信息qrcode={0},code={1}", qrcode, code);
    // 根据qrcode获取奖金信息
    Reward reward = new Reward();
    reward.setQrcode(qrcode);
    List<Reward> retList = this.sqlmap.queryForList("Reward.findList", reward);
    Assert.notEmpty(retList, "二维码,不存在！");
    // 更新奖金
    reward = retList.get(0);
    Assert.hasText(reward.getMemberNo(), "该二维码已经被扫描");
    reward.setMemberNo(code);
    reward.initUpateBO();
    this.sqlmap.update("Reward.update", reward);
    // 返回页面数据
    this.submitSuccess();
  }
}
