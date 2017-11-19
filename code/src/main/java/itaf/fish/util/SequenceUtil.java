package itaf.fish.util;

import itaf.core.sequence.ISequence;
import itaf.core.util.SpringContextUtil;

/**
 * Sequence工具类
 * 
 * @author liuzhq
 *
 */
public abstract class SequenceUtil {

  private static ISequence sequence;

  private static ISequence get() {
    if (sequence == null) {
      sequence = (ISequence) SpringContextUtil.getBean("sequence");
    }
    return sequence;
  }

  /**
   * 获取比赛编号
   * 
   * @return
   */
  public static String getCompetitionCode() {
    String seq = get().nextVal();
    return "1002" + seq;
  }

  /**
   * 获取二维码编号
   * @return
   */
  public static String getQrcode() {
    String seq = get().nextVal();
    return "1004" + seq;
  }



}
