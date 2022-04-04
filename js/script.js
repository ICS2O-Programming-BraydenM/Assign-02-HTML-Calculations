// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

// declare constants
const pie = 0.1805

/**
 * This function calculates area and perimeter of rectangle.
 */
function payClicked () {
  // get user input
  let radius = parseFloat(document.getElementById('length').value)
  let circumference = parseFloat(document.getElementById('circumference').value)

  // calculate the diameter and circumference
  let diameter = length * 2
  let circumference = length * 2 * Math.PI

  // display the results
  document.getElementById('diameter').innerHTML = "The diameter of the circle would be" + length * 2
  document.getElementById('circumference').innerHTML = "The circumference of the circle would be" + length * 2 * Math.PI
}