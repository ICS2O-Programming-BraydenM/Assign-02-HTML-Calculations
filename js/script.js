// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

// declare constants
const Pi = Math.PI

/**
 * This function calculates diameter and circumference of a circle
 */
function payClicked () {
  // get user input
  let radius = document.getElementById('length').value

  // calculate the diameter and circumference
  let diameter = radius * 2
  let circumference = radius * 2 * Pi

  // display the results
  document.getElementById('diameter').innerHTML = "The diameter of the circle would be " + diameter.toFixed(2)

  document.getElementById('circumference').innerHTML = "The circumference of the circle would be " + circumference.toFixed(2)
}