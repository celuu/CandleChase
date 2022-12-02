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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nclass Board {\n  constructor() {\n    const canvas = document.getElementById(\"candle-canvas\");\n    const ctx = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.grid = this.makeGrid();\n    this.print();\n    this.placeCandles();\n  }\n  makeGrid() {\n    const grid = [];\n    for (let i = 0; i < 10; i++) {\n      grid.push([]);\n      for (let j = 0; j < 20; j++) {\n        grid[i].push(null);\n      }\n    }\n    return grid;\n  }\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 20; colIdx++) {\n        marks.push(this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \");\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n    console.log(strs.join('\\n'));\n  }\n  isValidPos(pos) {\n    return 0 <= pos[0] && pos[0] < 10 && 0 <= pos[1] && pos[1] < 20;\n  }\n  isEmpty(pos) {\n    if (this.isValidPos(pos) && this.grid[pos[0]][pos[1]] === null) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  isSurroundingAreaEmpty(pos) {\n    let arrX = [1, -1];\n    let arrY = [1, -1];\n  }\n  placeCandles() {\n    let n = 10;\n    let placed = 0;\n    let newArr = [];\n    while (placed < n) {\n      let candleX = Math.floor(Math.random() * 10);\n      let candleY = Math.floor(Math.random() * 20);\n      let pos = [candleX, candleY];\n      if (this.isValidPos(pos) && this.isEmpty(pos)) {\n        newArr.push(pos);\n        this.grid[pos[0]][pos[1]] = \"X\";\n        placed++;\n      }\n    }\n    console.log(newArr);\n    console.log(this.grid);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO0lBQ1YsSUFBSWlCLENBQUMsR0FBRyxFQUFFO0lBQ1YsSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJQyxNQUFNLEdBQUcsRUFBRTtJQUVmLE9BQU9ELE1BQU0sR0FBR0QsQ0FBQyxFQUFDO01BQ2QsSUFBSUcsT0FBTyxHQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUU7TUFDOUMsSUFBSUMsT0FBTyxHQUFJSCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUU7TUFDOUMsSUFBSVgsR0FBRyxHQUFHLENBQUNRLE9BQU8sRUFBRUksT0FBTyxDQUFDO01BQzVCLElBQUcsSUFBSSxDQUFDYixVQUFVLENBQUNDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxHQUFHLENBQUMsRUFBQztRQUN6Q08sTUFBTSxDQUFDakIsSUFBSSxDQUFDVSxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDZixJQUFJLENBQUNlLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1FBQy9CTSxNQUFNLEVBQUU7TUFDWjtJQUNKO0lBQ0FULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxNQUFNLENBQUM7SUFDbkJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2IsSUFBSSxDQUFDO0VBQzFCO0FBY0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvY2FuZGxlX2NoYXNlL2JvYXJkLmpzPzU2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5kbGUtY2FudmFzXCIpO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfVxuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLm1ha2VHcmlkKCk7XG4gICAgICAgIHRoaXMucHJpbnQoKTtcbiAgICAgICAgdGhpcy5wbGFjZUNhbmRsZXMoKTtcbiAgICB9XG5cbiAgICBtYWtlR3JpZCgpe1xuICAgICAgICBjb25zdCBncmlkID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGdyaWQucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMjA7IGorKykge1xuICAgICAgICAgICAgICAgIGdyaWRbaV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbiAgICBwcmludCgpIHtcbiAgICAgICAgY29uc3Qgc3RycyA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb3dJZHggPSAwOyByb3dJZHggPCAxMDsgcm93SWR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJZHggPSAwOyBjb2xJZHggPCAyMDsgY29sSWR4KyspIHtcbiAgICAgICAgICAgICAgICBtYXJrcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93SWR4XVtjb2xJZHhdID8gdGhpcy5ncmlkW3Jvd0lkeF1bY29sSWR4XSA6IFwiIFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cnMucHVzaChgJHttYXJrcy5qb2luKCd8Jyl9XFxuYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhzdHJzLmpvaW4oJ1xcbicpKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkUG9zKHBvcykge1xuICAgICAgICByZXR1cm4gKDAgPD0gcG9zWzBdKSAmJlxuICAgICAgICAgICAgKHBvc1swXSA8IDEwKSAmJlxuICAgICAgICAgICAgKDAgPD0gcG9zWzFdKSAmJlxuICAgICAgICAgICAgKHBvc1sxXSA8IDIwKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcyl7XG4gICAgICAgIGlmKHRoaXMuaXNWYWxpZFBvcyhwb3MpICYmIHRoaXMuZ3JpZFtwb3NbMF1dW3Bvc1sxXV0gPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1N1cnJvdW5kaW5nQXJlYUVtcHR5KHBvcyl7XG4gICAgICAgIGxldCBhcnJYID0gWzEsIC0xXTtcbiAgICAgICAgbGV0IGFyclkgPSBbMSwgLTFdO1xuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcGxhY2VDYW5kbGVzKCl7XG4gICAgICAgIGxldCBuID0gMTA7XG4gICAgICAgIGxldCBwbGFjZWQgPSAwO1xuICAgICAgICBsZXQgbmV3QXJyID0gW11cblxuICAgICAgICB3aGlsZSAocGxhY2VkIDwgbil7XG4gICAgICAgICAgICBsZXQgY2FuZGxlWCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICAgICAgbGV0IGNhbmRsZVkgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBbY2FuZGxlWCwgY2FuZGxlWV07XG4gICAgICAgICAgICBpZih0aGlzLmlzVmFsaWRQb3MocG9zKSAmJiB0aGlzLmlzRW1wdHkocG9zKSl7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2gocG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcG9zWzBdXVtwb3NbMV1dID0gXCJYXCI7XG4gICAgICAgICAgICAgICAgcGxhY2VkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV3QXJyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkKTtcbiAgICB9XG5cbiAgICBcbiAgICBcblxuXG5cblxuXG5cblxuXG5cblxufSJdLCJuYW1lcyI6WyJCb2FyZCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJncmlkIiwibWFrZUdyaWQiLCJwcmludCIsInBsYWNlQ2FuZGxlcyIsImkiLCJwdXNoIiwiaiIsInN0cnMiLCJyb3dJZHgiLCJtYXJrcyIsImNvbElkeCIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZFBvcyIsInBvcyIsImlzRW1wdHkiLCJpc1N1cnJvdW5kaW5nQXJlYUVtcHR5IiwiYXJyWCIsImFyclkiLCJuIiwicGxhY2VkIiwibmV3QXJyIiwiY2FuZGxlWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhbmRsZVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/candle_chase/board.js\n");

/***/ }),

/***/ "./src/candle_chase/game.js":
/*!**********************************!*\
  !*** ./src/candle_chase/game.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/candle_chase/board.js\");\n\nclass Game {\n  constructor(canvas) {\n    // this.ctx = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.game = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FuZGxlX2NoYXNlL2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEI7QUFFYixNQUFNQyxJQUFJO0VBRXJCQyxXQUFXLENBQUNDLE1BQU0sRUFBQztJQUNmO0lBQ0EsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFBQ0MsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQUs7TUFBRUMsTUFBTSxFQUFFSCxNQUFNLENBQUNHO0lBQU0sQ0FBQztJQUM5RCxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJUCw4Q0FBSyxDQUFDRyxNQUFNLENBQUM7RUFDakM7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbmRsZS1jaGFzZS8uL3NyYy9jYW5kbGVfY2hhc2UvZ2FtZS5qcz8zNmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgICAgICAvLyB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7d2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0fVxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgQm9hcmQoY2FudmFzKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQm9hcmQiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/candle_chase/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _candle_chase_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candle_chase/game */ \"./src/candle_chase/game.js\");\n/* harmony import */ var _candle_chase_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candle_chase/board */ \"./src/candle_chase/board.js\");\n\n\n\n// const canvas = document.getElementById(\"candle-canvas\");\nlet startGame = new _candle_chase_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0U7O0FBRXpDO0FBQ0EsSUFBSUUsU0FBUyxHQUFHLElBQUlELDJEQUFLLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL2NhbmRsZV9jaGFzZS9nYW1lJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL2NhbmRsZV9jaGFzZS9ib2FyZCc7XG5cbi8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuZGxlLWNhbnZhc1wiKTtcbmxldCBzdGFydEdhbWUgPSBuZXcgQm9hcmQoKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiQm9hcmQiLCJzdGFydEdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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