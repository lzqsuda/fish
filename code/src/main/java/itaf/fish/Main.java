package itaf.fish;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import itaf.core.runtime.BootStrap;
import itaf.runtime.container.JettyXmlContainer;

/**
 * 启动类
 * 
 * @author liuzhq
 *
 */
public class Main {
  protected static Logger log = LoggerFactory.getLogger(Main.class);

  public static void main(String[] args) {
    BootStrap.excute(new JettyXmlContainer());
  }

}
