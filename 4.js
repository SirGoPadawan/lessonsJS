"use strict";

function petaOlen(n) {
  let s = 9 - n;
  let str = n + "9" + s;
  return str;
}
console.log(petaOlen(6));
