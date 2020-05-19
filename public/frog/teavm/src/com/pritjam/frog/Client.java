package com.pritjam.frog;

import java.util.Scanner;
import java.util.ArrayList;
import java.lang.Math;
import java.io.*;
import java.util.*;
import java.util.Base64;
import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;

@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate{
  
  PunnetMixer mendel = new PunnetMixer();
  FroggyDex dex = new FroggyDex();
  Megabox boxes = new Megabox();
  Parser parser = new Parser();
  int money = 50;
  int currentBox = 0;
  int feed = 20;
  //here we go
  private String commandField = "";
  private String primaryArg = "";
  private String secondaryArg = "";
  private String outputField = "";
  String command = "";
  
  public void setCommandField(String input){
    this.commandField = input;
  }
  
  public void setOutputField(String output) {
    this.outputField = output;
  }
  
  public void setPrimaryArg(String primary) {
    this.primaryArg = primary;
  }
  
  public void setSecondaryArg(String secondary) {
    this.secondaryArg = secondary;
  }
  
  public String getCommandField() {
    return commandField;
  }
  
  public String getOutputField() {
    return outputField;
  }
  
  public String getPrimaryArg() {
    return primaryArg;
  }
  
  public String getSecondaryArg() {
    return secondaryArg;
  }
  
  public void gameLoop() throws IOException, FileNotFoundException, ClassNotFoundException {
    switch(commandField.toUpperCase()) {
      case "MOVE":
        boxes.addFrog(boxes.remove(currentBox, Integer.parseInt(primaryArg)), Integer.parseInt(secondaryArg));
        break;
        
      case "BREED":
        Frog frog1 = boxes.getFrog(currentBox, Integer.parseInt(primaryArg));
        Frog frog2 = boxes.getFrog(currentBox, Integer.parseInt(secondaryArg));
        if (frog1.getMaturity() == 3 && frog2.getMaturity() == 3) {
          Frog newFrog = mendel.cross(frog1, frog2);
          boxes.addFrog(newFrog, currentBox);
          String[] phenotype = newFrog.getPhenotype();
          dex.achieveFrog(phenotype);
          setOutputField("Frog " + Integer.parseInt(primaryArg) + " bred with frog " + Integer.parseInt(secondaryArg) + " to produce a new frog!");
        }
        else { setOutputField("Frogs need to be fully grown (Maturity 3) to breed!"); }
        break;
        
      case "VIEW":
        String toDisplay = "Money: " + money + "    Feed: " + feed;
        toDisplay += "   Current Box: " + currentBox + "\n";
        for (int i = 0; i < boxes.getBoxSize(currentBox); i++) {
          toDisplay += (i + ": " + boxes.getFrog(currentBox, i).getPhenotype()[0] + ", Maturity: " + boxes.getFrog(currentBox, i).getMaturity());
          toDisplay += "\n";
        }
        setOutputField(toDisplay);
        break;
        
      case "HELP":
        setOutputField("Here are the recognized commands:\nBreed <index1> <index2>\nFeed <index>\nMove <index> <destination box>\nSwitch <box to switch to>\nView (This command lists all frogs in the currently selected box)\nRelease <index>\nBuy (arguments are \nFroggydex (shows all frogs unlocked)");
        break;
        
      case "FROGGYDEX":
        setOutputField(dex.frogsToString() );
        break;
        
      case "FEED":       
        if ( feed > 0 && !boxes.getFrog(currentBox, Integer.parseInt(primaryArg)).feed() ) {
        feed--;
        setOutputField(":yum:, feed frog " + Integer.parseInt(primaryArg) + " and increased its maturity by 1");
        
      }
        else { setOutputField("That frog is already fully grown!"); }
        break;
        
      case "RELEASE":
        setOutputField("Are you sure? (Y/N)");
        if (commandField.toUpperCase().equals("Y")) {
          boxes.remove(currentBox, Integer.parseInt(primaryArg));
          setOutputField("Done.");
        }
        else { setOutputField("Release Cancelled."); }
        break;
        
      case "SWITCH":
        currentBox = Integer.parseInt(primaryArg);
        setOutputField("Switched to box " + Integer.parseInt(primaryArg));
        break;
        
      case "BUYFEED":
        
        if(money > Integer.parseInt(primaryArg) * 2) {
        feed += Integer.parseInt(primaryArg);
        money -= Integer.parseInt(primaryArg) * 2;
        setOutputField("Pleasure doing business with you!");
      }
        else { setOutputField("Not enough money! Feed costs 2 money each."); }
        break;
      case "PRICE":
        String whatToView = primaryArg + " " + secondaryArg;
        int[] phenoView = parser.getClrArgs(whatToView);
        int price = 69;
        price = Constants.prices[phenoView[0]] * Constants.prices[phenoView[1]];
        setOutputField("That frog costs: " + price);
        break;
      case "BUYFROG":
        String whatToBuy = primaryArg +  " " + secondaryArg;
        int[] phenoBuy = parser.getClrArgs(whatToBuy);
        int[] phenoReal = parser.parsePheno(phenoBuy);
        int cost = Constants.prices[phenoBuy[0]] * Constants.prices[phenoBuy[1]];
        if (cost < money) {
          setOutputField("Pleasure doing business with you!");
          money -= cost;
          boxes.addFrog(new Frog(phenoReal), currentBox);
        }
        else { setOutputField("That's too expensive for you. Make more money first!"); }
        break;
        
      default:
        setOutputField("Not a recognized command! Type \"Help\" for a list of commands.");
    }
    
    
    setCommandField("");
    setPrimaryArg("");
    setSecondaryArg("");
  }
  
  public void init() {
    int randomThree = (int) (Math.random() * 3);
    for (int i = 0; i < 4; i++) {
      if ( i != randomThree) {
        boxes.addFrog(new Frog(i), 0);
      }
    }
    
    for (int i = 0; i < 3; i++) {
      String[] phenotype = boxes.getFrog(currentBox, i).getPhenotype();
      dex.achieveFrog(phenotype);
    }
  }
  
  
  public static void main(String[] args){
    Client client = new Client();
    client.bind("application-content");
    client.init();
  }
}