/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/candle_chase/board.js":
/*!***********************************!*\
  !*** ./src/candle_chase/board.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor() {\n    const canvas = document.getElementById(\"candle-canvas\");\n    const ctx = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.grid = this.makeGrid();\n    this.print();\n    this.placeCandles();\n  }\n  makeGrid() {\n    const grid = [];\n    for (let i = 0; i < 10; i++) {\n      grid.push([]);\n      for (let j = 0; j < 20; j++) {\n        grid[i].push(null);\n      }\n    }\n    return grid;\n  }\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 20; colIdx++) {\n        marks.push(this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \");\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n    console.log(strs.join('\\n'));\n  }\n  isValidPos(pos) {\n    return 0 <= pos[0] && pos[0] < 10 && 0 <= pos[1] && pos[1] < 20;\n  }\n  isEmpty(pos) {\n    if (this.grid[pos[0]][pos[1]] === null) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  isAvailableForPlacement(pos) {\n    if (!this.isValidPos(pos)) {\n      return false;\n    }\n    for (let i = -1; i < 2; i++) {\n      for (let j = -1; j < 2; j++) {\n        let newPos = [pos[0] + i, pos[1] + j];\n        if (this.isValidPos(newPos) && !this.isEmpty(newPos)) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n  placeCandles() {\n    let n = 10;\n    let placed = 0;\n    while (placed < n) {\n      let candleX = Math.floor(Math.random() * 10);\n      let candleY = Math.floor(Math.random() * 20);\n      let pos = [candleX, candleY];\n      console.log(pos);\n      if (this.isAvailableForPlacement(pos)) {\n        this.grid[pos[0]][pos[1]] = \"X\";\n        placed++;\n      }\n    }\n    console.log(this.grid);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FuZGxlX2NoYXNlL2JvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxLQUFLO0VBSXRCQyxXQUFXLEdBQUU7SUFDVCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFJLENBQUNDLFVBQVUsR0FBRztNQUFFQyxLQUFLLEVBQUVOLE1BQU0sQ0FBQ00sS0FBSztNQUFFQyxNQUFNLEVBQUVQLE1BQU0sQ0FBQ087SUFBTyxDQUFDO0lBQ2hFLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFO0lBQzNCLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0lBQ1osSUFBSSxDQUFDQyxZQUFZLEVBQUU7RUFDdkI7RUFFQUYsUUFBUSxHQUFFO0lBQ04sTUFBTUQsSUFBSSxHQUFHLEVBQUU7SUFDZixLQUFJLElBQUlJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFDO01BQ3ZCSixJQUFJLENBQUNLLElBQUksQ0FBQyxFQUFFLENBQUM7TUFDYixLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxFQUFFO1FBQ3hCTixJQUFJLENBQUNJLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3RCO0lBQ0o7SUFDQSxPQUFPTCxJQUFJO0VBQ2Y7RUFDQUUsS0FBSyxHQUFHO0lBQ0osTUFBTUssSUFBSSxHQUFHLEVBQUU7SUFDZixLQUFLLElBQUlDLE1BQU0sR0FBRyxDQUFDLEVBQUVBLE1BQU0sR0FBRyxFQUFFLEVBQUVBLE1BQU0sRUFBRSxFQUFFO01BQ3hDLE1BQU1DLEtBQUssR0FBRyxFQUFFO01BQ2hCLEtBQUssSUFBSUMsTUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxHQUFHLEVBQUUsRUFBRUEsTUFBTSxFQUFFLEVBQUU7UUFDeENELEtBQUssQ0FBQ0osSUFBSSxDQUNOLElBQUksQ0FBQ0wsSUFBSSxDQUFDUSxNQUFNLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDVixJQUFJLENBQUNRLE1BQU0sQ0FBQyxDQUFDRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQzlEO01BQ0w7TUFDQUgsSUFBSSxDQUFDRixJQUFJLENBQUUsR0FBRUksS0FBSyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUcsQ0FBQztJQUNyQztJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDaEM7RUFFQUcsVUFBVSxDQUFDQyxHQUFHLEVBQUU7SUFDWixPQUFRLENBQUMsSUFBSUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUNkQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRyxJQUNaLENBQUMsSUFBSUEsR0FBRyxDQUFDLENBQUMsQ0FBRSxJQUNaQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRztFQUNyQjtFQUVBQyxPQUFPLENBQUNELEdBQUcsRUFBQztJQUNSLElBQUcsSUFBSSxDQUFDZixJQUFJLENBQUNlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUM7TUFDbEMsT0FBTyxJQUFJO0lBQ2YsQ0FBQyxNQUFNO01BQ0gsT0FBTyxLQUFLO0lBQ2hCO0VBQ0o7RUFFQUUsdUJBQXVCLENBQUNGLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUNDLEdBQUcsQ0FBQyxFQUFFO01BQ3ZCLE9BQU8sS0FBSztJQUNoQjtJQUNBLEtBQUksSUFBSVgsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBQztNQUN2QixLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUM7UUFDeEIsSUFBSVksTUFBTSxHQUFHLENBQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR1gsQ0FBQyxFQUFFVyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdULENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQ1EsVUFBVSxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxNQUFNLENBQUMsRUFBRTtVQUNsRCxPQUFPLEtBQUs7UUFDaEI7TUFDSjtJQUNKO0lBQ0EsT0FBTyxJQUFJO0VBQ2Y7RUFHQWYsWUFBWSxHQUFFO0lBQ1YsSUFBSWdCLENBQUMsR0FBRyxFQUFFO0lBQ1YsSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFFZCxPQUFPQSxNQUFNLEdBQUdELENBQUMsRUFBQztNQUNkLElBQUlFLE9BQU8sR0FBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFFO01BQzlDLElBQUlDLE9BQU8sR0FBSUgsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFFO01BQzlDLElBQUlULEdBQUcsR0FBRyxDQUFDTSxPQUFPLEVBQUVJLE9BQU8sQ0FBQztNQUM1QmIsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQztNQUNoQixJQUFJLElBQUksQ0FBQ0UsdUJBQXVCLENBQUNGLEdBQUcsQ0FBQyxFQUFDO1FBQ2xDLElBQUksQ0FBQ2YsSUFBSSxDQUFDZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUMvQkssTUFBTSxFQUFFO01BQ1o7SUFDSjtJQUNBUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNiLElBQUksQ0FBQztFQUMxQjtBQWNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGxlLWNoYXNlLy4vc3JjL2NhbmRsZV9jaGFzZS9ib2FyZC5qcz81NmY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJke1xuXG5cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmRsZS1jYW52YXNcIik7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9XG4gICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMubWFrZUdyaWQoKTtcbiAgICAgICAgdGhpcy5wcmludCgpO1xuICAgICAgICB0aGlzLnBsYWNlQ2FuZGxlcygpO1xuICAgIH1cblxuICAgIG1ha2VHcmlkKCl7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAyMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFtpXS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuICAgIHByaW50KCkge1xuICAgICAgICBjb25zdCBzdHJzID0gW107XG4gICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDA7IHJvd0lkeCA8IDEwOyByb3dJZHgrKykge1xuICAgICAgICAgICAgY29uc3QgbWFya3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbElkeCA9IDA7IGNvbElkeCA8IDIwOyBjb2xJZHgrKykge1xuICAgICAgICAgICAgICAgIG1hcmtzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3dJZHhdW2NvbElkeF0gPyB0aGlzLmdyaWRbcm93SWR4XVtjb2xJZHhdIDogXCIgXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Rycy5wdXNoKGAke21hcmtzLmpvaW4oJ3wnKX1cXG5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cnMuam9pbignXFxuJykpO1xuICAgIH1cblxuICAgIGlzVmFsaWRQb3MocG9zKSB7XG4gICAgICAgIHJldHVybiAoMCA8PSBwb3NbMF0pICYmXG4gICAgICAgICAgICAocG9zWzBdIDwgMTApICYmXG4gICAgICAgICAgICAoMCA8PSBwb3NbMV0pICYmXG4gICAgICAgICAgICAocG9zWzFdIDwgMjApO1xuICAgIH1cblxuICAgIGlzRW1wdHkocG9zKXtcbiAgICAgICAgaWYodGhpcy5ncmlkW3Bvc1swXV1bcG9zWzFdXSA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzQXZhaWxhYmxlRm9yUGxhY2VtZW50KHBvcykge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvcyhwb3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gLTE7IGkgPCAyOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDwgMjsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zID0gW3Bvc1swXSArIGksIHBvc1sxXSArIGpdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRQb3MobmV3UG9zKSAmJiAhdGhpcy5pc0VtcHR5KG5ld1BvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHBsYWNlQ2FuZGxlcygpe1xuICAgICAgICBsZXQgbiA9IDEwO1xuICAgICAgICBsZXQgcGxhY2VkID0gMDtcblxuICAgICAgICB3aGlsZSAocGxhY2VkIDwgbil7XG4gICAgICAgICAgICBsZXQgY2FuZGxlWCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICAgICAgbGV0IGNhbmRsZVkgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBbY2FuZGxlWCwgY2FuZGxlWV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGVGb3JQbGFjZW1lbnQocG9zKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Bvc1swXV1bcG9zWzFdXSA9IFwiWFwiO1xuICAgICAgICAgICAgICAgIHBsYWNlZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZCk7XG4gICAgfVxuXG4gICAgXG4gICAgXG5cblxuXG5cblxuXG5cblxuXG5cbn0iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JpZCIsIm1ha2VHcmlkIiwicHJpbnQiLCJwbGFjZUNhbmRsZXMiLCJpIiwicHVzaCIsImoiLCJzdHJzIiwicm93SWR4IiwibWFya3MiLCJjb2xJZHgiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWRQb3MiLCJwb3MiLCJpc0VtcHR5IiwiaXNBdmFpbGFibGVGb3JQbGFjZW1lbnQiLCJuZXdQb3MiLCJuIiwicGxhY2VkIiwiY2FuZGxlWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhbmRsZVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/candle_chase/board.js\n");

/***/ }),

/***/ "./src/candle_chase/game.js":
/*!**********************************!*\
  !*** ./src/candle_chase/game.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/candle_chase/board.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    this.timer = 500;\n    this.winningScore = 100;\n    this.game = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FuZGxlX2NoYXNlL2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEI7QUFFYixNQUFNQyxJQUFJO0VBQ3JCQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsR0FBRztJQUN2QixJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJUCw4Q0FBSyxFQUFFO0VBQzNCO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvY2FuZGxlX2NoYXNlL2dhbWUuanM/MzZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gNTAwO1xuICAgICAgICB0aGlzLndpbm5pbmdTY29yZSA9IDEwMDtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEJvYXJkKCk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkJvYXJkIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4Iiwic2NvcmUiLCJ0aW1lciIsIndpbm5pbmdTY29yZSIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/candle_chase/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _candle_chase_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candle_chase/game */ \"./src/candle_chase/game.js\");\n/* harmony import */ var _candle_chase_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candle_chase/board */ \"./src/candle_chase/board.js\");\n\n\nconst canvas = document.getElementById(\"candle-canvas\");\nconst ctx = canvas.getContext('2d');\nlet startGame = new _candle_chase_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0U7QUFFekMsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDdkQsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsSUFBSUMsU0FBUyxHQUFHLElBQUlQLDBEQUFJLENBQUNLLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRsZS1jaGFzZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vY2FuZGxlX2NoYXNlL2dhbWUnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vY2FuZGxlX2NoYXNlL2JvYXJkJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5kbGUtY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxubGV0IHN0YXJ0R2FtZSA9IG5ldyBHYW1lKGN0eCk7Il0sIm5hbWVzIjpbIkdhbWUiLCJCb2FyZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnRHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;