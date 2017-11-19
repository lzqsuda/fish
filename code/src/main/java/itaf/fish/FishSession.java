package itaf.fish;

import itaf.core.web.ISession;

public class FishSession implements ISession  {

  private String userId;

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }
}
