package pritjam;

import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;
import java.lang.Math;

@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate {
  int userGuess = 4;
  private String outputString = "";
  int rand = 4;
  public final String[][] winStatus = {
    {"It's a Tie!", "You Lose! The computer picked Paper!", "You Win! The computer picked Scissors!"},//you pick rock 
    {"You Win! The computer picked Rock!", "It's a Tie!", "You Lose! The computer picked Scissors!"},  //you pick paper
    {"You Lose! The computer picked Rock!", "You Win! The computer picked paper!", "It's a Tie!"}//you pick scissors
  };
  
  public static void main(String[] args) {
    Client client = new Client();
    client.bind("application-content");
  }
  
  public String getOutputString() {
    return outputString;
  }
  
  public void setOutputString(String output) {
    this.outputString = output;
  }
  
  public void rock() {//rock = 0
    rand = (int) (Math.random() * 3);
    userGuess = 0;
    setOutputString(winStatus[userGuess][rand]);
  }
  
  public void paper() {//paper = 1
    rand = (int) (Math.random() * 3);
    userGuess = 1;
    setOutputString(winStatus[userGuess][rand]);
  }
  
  public void scissors() {//scissors = 2
    rand = (int) (Math.random() * 3);
    userGuess = 2;
    setOutputString(winStatus[userGuess][rand]);
  }
  
}
