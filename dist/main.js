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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nconst gridWidth = 20;\nconst gridHeight = 10;\nclass Board {\n  constructor(candleCanvas, screenCanvas) {\n    this.candleCanvas = candleCanvas;\n    this.screenCanvas = screenCanvas;\n    this.candleCtx = candleCanvas.getContext('2d');\n    this.screenCtx = screenCanvas.getContext('2d');\n    this.dimensions = {\n      width: screenCanvas.width,\n      height: screenCanvas.height\n    };\n    this.grid = this.makeEmptyGrid();\n    this.applyScreen(this.screenCtx);\n    this.populateAndPlaceCandles();\n  }\n  applyScreen(ctx) {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n  removeScreen(x, y) {\n    this.screenCtx.globalCompositeOperation = \"destination-out\";\n    this.screenCtx.shadowBlur = 20;\n    this.screenCtx.shadowColor = \"white\";\n    this.screenCtx.beginPath();\n    this.screenCtx.arc(x, y, 20, 0, 2 * Math.PI, false);\n    this.screenCtx.fill();\n    this.screenCtx.lineWidth = 5;\n    this.screenCtx.stroke();\n  }\n  makeEmptyGrid() {\n    let grid = [];\n    for (let i = 0; i < gridHeight; i++) {\n      grid.push([]);\n      for (let j = 0; j < gridWidth; j++) {\n        grid[i].push(null);\n      }\n    }\n    return grid;\n  }\n  isValidPos(pos) {\n    return 0 <= pos[0] && pos[0] < gridHeight && 0 <= pos[1] && pos[1] < gridWidth;\n  }\n  isEmpty(pos) {\n    if (this.grid[pos[0]][pos[1]] === null) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  isAvailableForPlacement(pos) {\n    if (!this.isValidPos(pos)) {\n      return false;\n    }\n    for (let i = -1; i < 2; i++) {\n      for (let j = -1; j < 2; j++) {\n        let newPos = [pos[0] + i, pos[1] + j];\n        if (this.isValidPos(newPos) && !this.isEmpty(newPos)) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n  populateAndPlaceCandles() {\n    let n = 10;\n    let placed = 0;\n    while (placed < n) {\n      let candleRow = Math.floor(Math.random() * gridHeight);\n      let candleCol = Math.floor(Math.random() * gridWidth);\n      let pos = [candleRow, candleCol];\n      if (this.isAvailableForPlacement(pos)) {\n        let gridPosition = this.calculateXY(pos);\n        console.log(gridPosition.x);\n        placed++;\n        this.addCandles(gridPosition.x, gridPosition.y);\n        this.removeScreen(gridPosition.x, gridPosition.y);\n      }\n    }\n  }\n  calculateXY(pos) {\n    let row = pos[0];\n    let col = pos[1];\n    let hash = {};\n    let x = this.dimensions.width * (col / gridWidth);\n    hash[\"x\"] = x;\n    let y = this.dimensions.height * (row / gridHeight);\n    hash[\"y\"] = y;\n    return hash;\n  }\n  addCandles(x, y) {\n    let candles = new Image();\n    candles.src = './assets/candles.png';\n    candles.onload = () => {\n      this.candleCtx.drawImage(candles, x, y, 50, 50);\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0UsR0FBRyxHQUFHLHNCQUFzQjtJQUVwQ0YsT0FBTyxDQUFDRyxNQUFNLEdBQUcsTUFBTTtNQUNuQixJQUFJLENBQUNuRCxTQUFTLENBQUNvRCxTQUFTLENBQUNKLE9BQU8sRUFBRWxDLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDbkQsQ0FBQztFQUNMO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvY2FuZGxlX2NoYXNlL2JvYXJkLmpzPzU2ZjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3JpZFdpZHRoID0gMjA7XG5jb25zdCBncmlkSGVpZ2h0ID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJke1xuXG4gICAgY29uc3RydWN0b3IoY2FuZGxlQ2FudmFzLCBzY3JlZW5DYW52YXMpe1xuICAgICAgICB0aGlzLmNhbmRsZUNhbnZhcyA9IGNhbmRsZUNhbnZhcztcbiAgICAgICAgdGhpcy5zY3JlZW5DYW52YXMgPSBzY3JlZW5DYW52YXM7XG4gICAgICAgIHRoaXMuY2FuZGxlQ3R4ID0gY2FuZGxlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuc2NyZWVuQ3R4ID0gc2NyZWVuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IHNjcmVlbkNhbnZhcy53aWR0aCwgaGVpZ2h0OiBzY3JlZW5DYW52YXMuaGVpZ2h0IH1cbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy5tYWtlRW1wdHlHcmlkKCk7XG4gICAgICAgIHRoaXMuYXBwbHlTY3JlZW4odGhpcy5zY3JlZW5DdHgpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlQW5kUGxhY2VDYW5kbGVzKCk7XG4gICAgfVxuXG4gICAgYXBwbHlTY3JlZW4oY3R4KXtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlU2NyZWVuKHgsIHkpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5DdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1vdXRcIjtcbiAgICAgICAgdGhpcy5zY3JlZW5DdHguc2hhZG93Qmx1ciA9IDIwO1xuICAgICAgICB0aGlzLnNjcmVlbkN0eC5zaGFkb3dDb2xvciA9IFwid2hpdGVcIjtcblxuICAgICAgICB0aGlzLnNjcmVlbkN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5zY3JlZW5DdHguYXJjKHgsIHksIDIwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjcmVlbkN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuc2NyZWVuQ3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIHRoaXMuc2NyZWVuQ3R4LnN0cm9rZSgpO1xuICAgIH1cblxuXG4gICAgbWFrZUVtcHR5R3JpZCgpIHtcbiAgICAgICAgbGV0IGdyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkSGVpZ2h0OyBpKyspe1xuICAgICAgICAgICAgZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFdpZHRoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBncmlkW2ldLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cbiAgICBpc1ZhbGlkUG9zKHBvcykge1xuICAgICAgICByZXR1cm4gKDAgPD0gcG9zWzBdKSAmJlxuICAgICAgICAgICAgKHBvc1swXSA8IGdyaWRIZWlnaHQpICYmXG4gICAgICAgICAgICAoMCA8PSBwb3NbMV0pICYmXG4gICAgICAgICAgICAocG9zWzFdIDwgZ3JpZFdpZHRoKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcyl7XG4gICAgICAgIGlmKHRoaXMuZ3JpZFtwb3NbMF1dW3Bvc1sxXV0gPT09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0F2YWlsYWJsZUZvclBsYWNlbWVudChwb3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRQb3MocG9zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IC0xOyBpIDwgMjsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8IDI7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvcyA9IFtwb3NbMF0gKyBpLCBwb3NbMV0gKyBqXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUG9zKG5ld1BvcykgJiYgIXRoaXMuaXNFbXB0eShuZXdQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVBbmRQbGFjZUNhbmRsZXMoKXtcbiAgICAgICAgbGV0IG4gPSAxMDtcbiAgICAgICAgbGV0IHBsYWNlZCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHBsYWNlZCA8IG4pe1xuICAgICAgICAgICAgbGV0IGNhbmRsZVJvdyA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBncmlkSGVpZ2h0KSk7XG4gICAgICAgICAgICBsZXQgY2FuZGxlQ29sID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdyaWRXaWR0aCkpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IFtjYW5kbGVSb3csIGNhbmRsZUNvbF07XG4gICAgICAgICAgICBpZiAodGhpcy5pc0F2YWlsYWJsZUZvclBsYWNlbWVudChwb3MpKXtcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVYWShwb3MpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRQb3NpdGlvbi54KTtcbiAgICAgICAgICAgICAgICBwbGFjZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENhbmRsZXMoZ3JpZFBvc2l0aW9uLngsIGdyaWRQb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNjcmVlbihncmlkUG9zaXRpb24ueCwgZ3JpZFBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlWFkocG9zKXtcbiAgICAgICAgbGV0IHJvdyA9IHBvc1swXTtcbiAgICAgICAgbGV0IGNvbCA9IHBvc1sxXTtcbiAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICBsZXQgeCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aCAqIChjb2wvZ3JpZFdpZHRoKTtcbiAgICAgICAgaGFzaFtcInhcIl0gPSB4XG4gICAgICAgIGxldCB5ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAqIChyb3cvZ3JpZEhlaWdodCk7XG4gICAgICAgIGhhc2hbXCJ5XCJdID0geVxuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG5cbiAgICBhZGRDYW5kbGVzKHgsIHkpIHtcbiAgICAgICAgbGV0IGNhbmRsZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY2FuZGxlcy5zcmMgPSAnLi9hc3NldHMvY2FuZGxlcy5wbmcnO1xuXG4gICAgICAgIGNhbmRsZXMub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5kbGVDdHguZHJhd0ltYWdlKGNhbmRsZXMsIHgsIHksIDUwLCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJncmlkV2lkdGgiLCJncmlkSGVpZ2h0IiwiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImNhbmRsZUNhbnZhcyIsInNjcmVlbkNhbnZhcyIsImNhbmRsZUN0eCIsImdldENvbnRleHQiLCJzY3JlZW5DdHgiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJncmlkIiwibWFrZUVtcHR5R3JpZCIsImFwcGx5U2NyZWVuIiwicG9wdWxhdGVBbmRQbGFjZUNhbmRsZXMiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlbW92ZVNjcmVlbiIsIngiLCJ5IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwic2hhZG93Qmx1ciIsInNoYWRvd0NvbG9yIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImxpbmVXaWR0aCIsInN0cm9rZSIsImkiLCJwdXNoIiwiaiIsImlzVmFsaWRQb3MiLCJwb3MiLCJpc0VtcHR5IiwiaXNBdmFpbGFibGVGb3JQbGFjZW1lbnQiLCJuZXdQb3MiLCJuIiwicGxhY2VkIiwiY2FuZGxlUm93IiwiZmxvb3IiLCJyYW5kb20iLCJjYW5kbGVDb2wiLCJncmlkUG9zaXRpb24iLCJjYWxjdWxhdGVYWSIsImNvbnNvbGUiLCJsb2ciLCJhZGRDYW5kbGVzIiwicm93IiwiY29sIiwiaGFzaCIsImNhbmRsZXMiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/candle_chase/board.js\n");

/***/ }),

/***/ "./src/candle_chase/game.js":
/*!**********************************!*\
  !*** ./src/candle_chase/game.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/candle_chase/board.js\");\n\nconst boardCanvas = document.getElementById(\"candle-canvas\");\nconst screenCanvas = document.getElementById(\"screen-canvas\");\nclass Game {\n  constructor() {\n    this.score = 0;\n    this.timer = 500;\n    this.winningScore = 100;\n    this.game = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](boardCanvas, screenCanvas);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FuZGxlX2NoYXNlL2dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDNUQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFFOUMsTUFBTUUsSUFBSTtFQUNyQkMsV0FBVyxHQUFFO0lBQ1QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEdBQUc7SUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsR0FBRztJQUN2QixJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJViw4Q0FBSyxDQUFDQyxXQUFXLEVBQUVHLFlBQVksQ0FBQztFQUNwRDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FuZGxlLWNoYXNlLy4vc3JjL2NhbmRsZV9jaGFzZS9nYW1lLmpzPzM2ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuXG5jb25zdCBib2FyZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuZGxlLWNhbnZhc1wiKTtcbmNvbnN0IHNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyZWVuLWNhbnZhc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDUwMDtcbiAgICAgICAgdGhpcy53aW5uaW5nU2NvcmUgPSAxMDA7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBCb2FyZChib2FyZENhbnZhcywgc2NyZWVuQ2FudmFzKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQm9hcmQiLCJib2FyZENhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JlZW5DYW52YXMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJzY29yZSIsInRpbWVyIiwid2lubmluZ1Njb3JlIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/candle_chase/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _candle_chase_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candle_chase/game */ \"./src/candle_chase/game.js\");\n/* harmony import */ var _candle_chase_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candle_chase/board */ \"./src/candle_chase/board.js\");\n\n\nlet startGame = new _candle_chase_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0U7QUFHekMsSUFBSUUsU0FBUyxHQUFHLElBQUlGLDBEQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW5kbGUtY2hhc2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL2NhbmRsZV9jaGFzZS9nYW1lJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL2NhbmRsZV9jaGFzZS9ib2FyZCc7XG5cblxubGV0IHN0YXJ0R2FtZSA9IG5ldyBHYW1lKCk7Il0sIm5hbWVzIjpbIkdhbWUiLCJCb2FyZCIsInN0YXJ0R2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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