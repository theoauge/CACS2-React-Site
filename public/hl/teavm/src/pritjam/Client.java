package pritjam;

import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;
import java.lang.Math;

@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate {
  private int guess = 0;
  private String outputField = "";
  int target = 0;
  
  public static void main(String[] args) {
    Client client = new Client();
    client.bind("application-content");
    client.init();
  }
  
  public String getOutputField() {
    return outputField;
  }
  
  public String getGuess() {
    return (guess + "");
  }
  
  public void setOutputField(String output) {
    this.outputField = output;
  }
  
  public void setGuess(String guessSet) {
    this.guess = Integer.parseInt(guessSet);
    if (guess == target) {
      setOutputField("You guessed the number! Press the reset button to reset.");
    }
    else if (guess < target) {
      setOutputField("You're too low!");
    }
    else if (guess > target) {
      setOutputField("You're too high!");
    }
  }
  
  public void init() {
    this.target = (int) (Math.random() * 100);
  }
}
