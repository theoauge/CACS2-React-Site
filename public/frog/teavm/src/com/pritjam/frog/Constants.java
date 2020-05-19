package com.pritjam.frog;

import java.util.ArrayList;
import java.util.*;

public class Constants {
  public static final String[][] rybbw = 
  {// red    ylw    blu    blk    wht
    {"RED", "ORN", "PRP", "BLK", "RED"},
    {"ORN", "YLW", "GRN", "BLK", "YLW"},
    {"PRP", "GRN", "BLU", "BLK", "BLU"},
    {"BLK", "BLK", "BLK", "BLK", "GLS"},
    {"RED", "YLW", "BLU", "GLS", "WHT"}
  };
  
  public static final ArrayList<String> colorsList = new ArrayList<String>( Arrays.asList(
    "RED", "ORN", "YLW", "GRN", "BLU", "PRP", "WHT", "BLK", "GLS") );
  //  3      5      3      5      3      5      7      2      9
  public static final int[] prices = {
    3, 5, 3, 5, 3, 5, 7, 2, 9};
  
  public static int[][] phenoToGeno = {
    {0, 0},
    {1, 0},
    {1, 1},
    {2, 1},
    {2, 2},
    {0, 2},
    {4, 4},
    {3, 3},
    {4, 3} };
}