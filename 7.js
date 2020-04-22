"use strict";
/* Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
запишите результаты округления в объект с ключами 'floor' и 'ceil'.
 */
let roundNum = {
  number: null,

  setNumber: function (number, callback = function () {}) {
    this.number = number;
    callback();
  },
  ceil: function () {
    return Math.ceil(Math.sqrt(this.number));
  },

  floor: function () {
    return Math.floor(Math.sqrt(this.number));
  },
};

roundNum.setNumber(1);
roundNum.setNumber(2, function () {
  console.log("test");
});
console.log(roundNum.floor(), " " + " ", roundNum.ceil());
