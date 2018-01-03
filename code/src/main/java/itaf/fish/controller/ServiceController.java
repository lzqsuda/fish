package itaf.fish.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import itaf.core.dao.simple.ItafSqlMapClientTemplate;
import itaf.core.log.LogUtil;
import itaf.core.util.Assert;
import itaf.core.web.BaseController;
import itaf.core.web.context.WebContext;
import itaf.core.web.context.WebContextHolder;
import itaf.fish.CodeStringEnum;
import itaf.fish.FishSession;
import itaf.fish.entity.Competition;
import itaf.fish.entity.Enroll;
import itaf.fish.entity.Reward;
import itaf.fish.util.SequenceUtil;

@Controller
public class ServiceController extends BaseController {
  private Logger logger = LoggerFactory.getLogger(this.getClass());
  @Autowired
  private ItafSqlMapClientTemplate sqlmap;

  /**
   * 创建比赛
   * 
   * @param request
   * @return
   */
  @RequestMapping(value = "/addCompetition.json")
  public void addCompetition() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String code = SequenceUtil.getCompetitionCode();// 竞赛编号
    String name = context.getString("name");// 名称
    Date startTime = context.getDateTime("startTime");// 竞赛开始时间
    Date endTime = context.getDateTime("endTime");// 竞赛结束时间
    Date enrollStartTime = context.getDateTime("enrollStartTime");// 报名开始时间
    Date enrollEndTime = context.getDateTime("enrollEndTime"); // 报名结束时间
    String address = context.getString("address");// 地址
    //String status = context.getString("status");// 地址
    Integer allNum = context.getInteger("allNum");// 竞赛总人数
    Integer enrollNum = context.getInteger("enrollNum");// 报名人数
    String contactMobile = context.getString("contactMobile");// // 联系人电话
    String nrewardAmoutList = context.getString("nrewardAmoutList");// 普通奖金额列表，以逗号分隔
    String srewardMembernoList = context.getString("srewardMembernoList");// 特等奖人员微信号列表，以逗号分隔
    String srewardAmountList = context.getString("srewardAmountList");// 特等奖金额列表，以逗号分隔
    String contactName = context.getString("contactName");// 比赛联系人姓名
    Integer eqcoedNum = context.getInteger("eqcoedNum");// 二维码个数,标鱼数
    String note = context.getString("note");// 比赛联系人姓名

    Competition comp = new Competition();
    comp.setCode(code);
    comp.setName(name);
    comp.setStartTime(startTime);
    comp.setEndTime(endTime);
    comp.setEnrollStartTime(enrollStartTime);
    comp.setEndTime(enrollEndTime);
    comp.setAddress(address);
    comp.setStatus(CodeStringEnum.BIZ_100001.getValue());
    comp.setAllNum(allNum);
    comp.setEnrollNum(enrollNum);
    comp.setContactMobile(contactMobile);
    comp.setContactName(contactName);
    comp.setNrewardAmoutList(nrewardAmoutList);
    comp.setSrewardMembernoList(srewardMembernoList);
    comp.setSrewardAmountList(srewardAmountList);
    comp.setEqcoedNum(eqcoedNum);
    comp.setNote(note);
    comp.initCreateBO();
    LogUtil.debug(logger, "input data{0}", comp.toString());
    // 访问数据库
    this.sqlmap.insert("Competition.insert", comp);
    this.submitSuccess();
  }

  /**
   * 查询比赛列表
   */
  @SuppressWarnings("unchecked")
  @RequestMapping(value = "/getCompetitionList.json")
  public void getCompetitionList() {
    // 获取参数
    WebContext context = WebContextHolder.getWebContext();
    String status = context.getString("status");// 竞赛状态
    String isEnroll = context.getString("isme");// 是否需要查询当前用户的已经参加的活动
    // 业务处理
    List<Competition> compList = null;
    if (null != isEnroll && isEnroll.equals("1")) {
      FishSession session = (FishSession) context.getSession();
      Assert.notNull(session, "会话为NUll");
      String userid = session.getUserId();
      compList = getCompetionByUserid(userid);
    } else {
      Competition param = new Competition();
      param.setStatus(status);
      compList = this.sqlmap.queryForList("Competition.findList", param);
    }
    // 返回数据
    this.submitSuccess(compList);
   
  }
  
  

  private List<Competition> getCompetionByUserid(String userid) {
    Enroll param = new Enroll();
    param.setMemberNo(userid);
    @SuppressWarnings("unchecked")
    List<Enroll> enrollList = this.sqlmap.queryForList("Enroll.findList", param);
    List<Competition> compList = new ArrayList<Competition>();
    for (Enroll item : enrollList) {
      Competition comp = (Competition) this.sqlmap.queryForObject("Competition.findOne", item.getCompetitionId());
      compList.add(comp);
    }
    return compList;
  }


  /**
   * 获取单条比赛
   */
  @RequestMapping(value = "/getCompetitionItem.json")
  public void getCompetitionItem() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String id = context.getString("id");// 竞赛编号
    Assert.notNull(id, "id 不能为空！");
    LogUtil.debug(logger, "input data{0}", id);
    // 查询数据库
    Competition comp = (Competition) this.sqlmap.queryForObject("Competition.findOne", id);
    // 返回数据
    this.submitSuccess(comp);
  }

  @RequestMapping(value = "/updateCompetitionItem.json")
  public void updateCompetitionItem() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String id = context.getString("id");
    String code = context.getString("code");// 竞赛编号
    String name = context.getString("name");// 名称
    Date startTime = context.getDateTime("startTime");// 竞赛开始时间
    Date endTime = context.getDateTime("endTime");// 竞赛结束时间
    Date enrollStartTime = context.getDateTime("enrollStartTime");// 报名开始时间
    Date enrollEndTime = context.getDateTime("enrollEndTime"); // 报名结束时间
    String address = context.getString("address");// 地址
    String status = context.getString("status");// 地址
    Integer allNum = context.getInteger("allNum");// 竞赛总人数
    Integer enrollNum = context.getInteger("enrollNum");// 报名人数
    String contactMobile = context.getString("contactMobile");// // 联系人电话
    String nrewardAmoutList = context.getString("nrewardAmoutList");// 普通奖金额列表，以逗号分隔
    String srewardMembernoList = context.getString("srewardMembernoList");// 特等奖人员微信号列表，以逗号分隔
    String srewardAmountList = context.getString("srewardAmountList");// 特等奖金额列表，以逗号分隔
    String contactName = context.getString("contactName");// 比赛联系人姓名
    Integer eqcoedNum = context.getInteger("eqcoedNum");// 二维码个数
    String note = context.getString("note");// 比赛联系人姓名

    Competition comp = new Competition();
    comp.setId(id);
    comp.setCode(code);
    comp.setName(name);
    comp.setStartTime(startTime);
    comp.setEndTime(endTime);
    comp.setEnrollStartTime(enrollStartTime);
    comp.setEndTime(enrollEndTime);
    comp.setAddress(address);
    comp.setStatus(status);
    comp.setAllNum(allNum);
    comp.setEnrollNum(enrollNum);
    comp.setContactMobile(contactMobile);
    comp.setContactName(contactName);
    comp.setNrewardAmoutList(nrewardAmoutList);
    comp.setSrewardMembernoList(srewardMembernoList);
    comp.setSrewardAmountList(srewardAmountList);
    comp.setEqcoedNum(eqcoedNum);
    comp.setNote(note);
    comp.initUpateBO();
    LogUtil.debug(logger, "input data{0}", comp.toString());
    // 访问数据库
    this.sqlmap.update("Competition.update", comp);
    // 返回数据
    this.submitSuccess();
  }


  /**
   * 删除比赛
   */
  @RequestMapping(value = "/removeCompetitionItem.json")
  public void removeCompetitionItem() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String id = context.getString("id");
    Competition comp = new Competition();
    comp.setId(id);
    comp.intDeleteBO();
    // 访问数据库
    this.sqlmap.update("Competition.delete", comp);
    // 返回数据
    this.submitSuccess();
  }

  /**
   * 生成二维码
   */
  @RequestMapping(value = "/generateQrcode.json")
  public void generateQrcode() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String competitionId = context.getString("competitionId");
    Assert.notNull(competitionId, "competitionId 不能为Null");
    // 逻辑处理
    Competition comp = (Competition) this.sqlmap.queryForObject("Competition.findOne", competitionId);
    Assert.notNull(comp, "比赛不存在");
    List<String> erCodeList = new ArrayList<String>();
    for (int i = 0; i < comp.getEqcoedNum(); i++) {
      erCodeList.add(SequenceUtil.getQrcode());
    }
    // 返回页面
    this.submitSuccess(erCodeList);


  }

  /**
   * 开始比赛
   */
  @RequestMapping(value = "/beginCompetition.json")
  public void beginCompetition() {
    // 获取数据
    WebContext context = WebContextHolder.getWebContext();
    String competitionId = context.getString("competitionId");
    // 获取比赛列表
    Competition comp = (Competition) this.sqlmap.queryForObject("Competition.findOne", competitionId);
    Assert.notNull(comp, "比赛不存在！");
    Assert.notNull(comp.getNrewardAmoutList(), "普通奖金额: 不存在！");
    Assert.notNull(comp.getSrewardAmountList(), "特等奖金额: 不存在！");
    Assert.notNull(comp.getEqcoedNum(), "二维码个数不存在！");
    // 插入Reward表
    String[] nrewardAmoutList = comp.getNrewardAmoutList().split(",");
    String[] srewardAmoutList = comp.getSrewardAmountList().split(",");
    List<String> rewList = new ArrayList<String>();
    CollectionUtils.mergeArrayIntoCollection(nrewardAmoutList, rewList);
    CollectionUtils.mergeArrayIntoCollection(srewardAmoutList, rewList);
    BigDecimal[] rewArray = dispathReward(rewList, comp.getEqcoedNum());
    for (int i = 0; i < rewArray.length; i++) {
      Reward reward = new Reward();
      reward.setCompetitionId(competitionId);
      reward.setRewardAmount(rewArray[i]);
      reward.setOrderNo(i);
      reward.initCreateBO();
      LogUtil.debug(logger, "input data{0}", reward.toString());
      // 访问数据库
      this.sqlmap.insert("Reward.insert", reward);
    }
    this.submitSuccess();
  }

  /**
   * 分配奖金
   * 
   * @param rewardList
   * @param qnum
   * @return
   */
  private BigDecimal[] dispathReward(List<String> rewardList, int qnum) {
    BigDecimal[] rarray = new BigDecimal[qnum];
    return rarray;
  }


}
