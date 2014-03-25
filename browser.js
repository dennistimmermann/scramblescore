!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.scramblescore=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
/**
 *  Scramblescore, get a score how scrambled a word is and test if it suffices your requirements
 *
 *  Copyright 2014 Dennis Timmermann <dennis@tmrmn.com> License MIT
 */

var lib = {}

/**
 * simple bubblesort, returns how often it swapped. We can simpy use the charCode as values
 * @param  {Array} input
 * @return {Integer} times wapped
 * @api private
 */
function bubblesort(input) {

  var times = 0
    , swapped

  do{
    swapped = false
    for( var i = 0; i < input.length-1; i++) {
      if(input[i] > input[i+1]) {
        var tmp = input[i]
        input[i] = input[i+1]
        input[i+1] = tmp
        times++
        swapped = true
      }
    }
  } while(swapped)

  return times
}

/**
 * The scramblescore is simply the difference between how often bubblesort performed a swap
 *
 * Example:
 *     Scramblescore.score("ehllo", "hello")
 *     // 1
 *
 * @param  {String} input   possibly scrambled word
 * @param  {String} control control word
 * @return {Integer}        scramblescore
 * @api public
 */
lib.score = function (input, control) {
  return Math.abs(bubblesort(input.split(''))-bubblesort(control.split('')))
}

/**
 * Tests, if the two inputs don't exceed the given maxscore of scrambled letters
 *
 * Examples:
 *     Scramblescore.test("AJvascript", "JAvascript", 1)
 *     // true
 *
 *     Scramblescore.test("ehlol", "hello", 1)
 *     // false
 *
 * @param  {String} input    possibly scrambled word
 * @param  {String} control  control word
 * @param  {Integer} maxscore max scrambled letters
 * @return {Boolean}
 * @api public
 */
lib.test = function (input, control, maxscore) {
  // same length?
  if(input.length != control.length) return false

  // same letters?
  if(input.split('').sort().join() != control.split('').sort().join()) return false

  if(this.score(input, control) <= maxscore) return true

  return false
}

// export
module.exports = lib

},{}]},{},[1])
(1)
});