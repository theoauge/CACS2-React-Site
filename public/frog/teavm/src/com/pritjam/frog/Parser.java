package com.pritjam.frog;

import java.lang.Math;

public class Parser {
  
  public Parser() {
    
  }
  
  public int[] parsePheno(int[] phenoView) {
    int[] gametes = new int[4];
    int i = 0;
    for (int clr : phenoView) {
      gametes[i + 0] = Constants.phenoToGeno[clr][0];
      gametes[i + 1] = Constants.phenoToGeno[clr][1];
      i += 2;
    }
    return gametes;
  }
  
  public String getCommand(String input) {
    String command = input.toUpperCase().split(" ")[0];
    return command;
  }
  
  public int[] getIntArgs(String input) {
    String[] tokens = input.split(" ");
    int[] args = new int[tokens.length - 1];
    String command = tokens[0].toUpperCase();
    for (int i = 1; i < tokens.length; i++) {
      args[i-1] = Integer.parseInt(tokens[i]);
    }
    return args;
  }
  
  public int[] getClrArgs(String input) {
    String[] tokens = input.toUpperCase().split(" ");
    int[] args = new int[tokens.length];
    for (int i = 0; i < tokens.length; i++) {
      args[i] = Constants.colorsList.indexOf(tokens[i]);
    }
    return args;
  }
}