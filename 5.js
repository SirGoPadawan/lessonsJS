"use strict";
let assessments = [1, 5, 7, 11, 13, 14, 16, 31, 12, 27];
function arrNumbersEven(assessments) {
  let assesEven = [];
  for (let i = 0; i < assessments.length; i++) {
    if (assessments[i] % 2 == 0) assesEven.push(assessments[i]);
  }
  return assesEven;
}
function arrNumbersOdd(assessments) {
  let assesOdd = [];
  for (let i = 0; i < assessments.length; i++) {
    if (assessments[i] % 2 != 0) assesOdd.push(assessments[i]);
  }
  return assesOdd;
}
let assesEven = arrNumbersEven(assessments);
let assesOdd = arrNumbersOdd(assessments);
function comparison(assesEven, assesOdd) {
  return assesEven.length > assesOdd.length;
}
let message = comparison(assesEven, assesOdd) ? "YES" : "NO";
console.log(assesEven, "\n", assesOdd, "\n", message);
