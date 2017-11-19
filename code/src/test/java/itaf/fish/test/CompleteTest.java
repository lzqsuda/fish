package itaf.fish.test;

import itaf.core.util.DateUtil;
import itaf.fish.CodeStringEnum;
import itaf.fish.entity.Competition;
import itaf.fish.util.SequenceUtil;

public class CompleteTest {
  @SuppressWarnings("unused")
  private Competition getCompetition() {
    Competition comp = new Competition();
    comp.setCode(SequenceUtil.getCompetitionCode());
    comp.setName("张三");
    comp.setStartTime(DateUtil.getCurrentDate());
    comp.setEndTime(DateUtil.getCurrentDate());
    comp.setEnrollStartTime(DateUtil.getCurrentDate());
    comp.setEnrollEndTime(DateUtil.getCurrentDate());
    comp.setEndTime(DateUtil.getCurrentDate());
    comp.setAddress("中国苏州");
    comp.setStatus(CodeStringEnum.BIZ_101002.getValue());
    comp.setAllNum(100);
    comp.setEnrollNum(10);
    comp.setContactMobile("159121212");
    comp.setContactName("李四");
    comp.setEqcoedNum(2);
    comp.setNote("备注");
    comp.initCreateBO();
    return comp;
  }
}
