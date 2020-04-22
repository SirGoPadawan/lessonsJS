"use strict";
/* Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. */
let strings = {
  beforeStr: "aaa@bbb@ccc",
  neewStr: function () {
    return (this.newStr = this.beforeStr.replace(/@/g, "!"));
  },
};
console.log(strings.neewStr());
