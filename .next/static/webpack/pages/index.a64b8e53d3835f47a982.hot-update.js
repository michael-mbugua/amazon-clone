/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/moringa/Desktop/Amazon-clone/Amazon-git/amazon-clone/src/components/ProductFeed.js\";\n\n\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          image = _ref2.image,\n          description = _ref2.description,\n          price = _ref2.price,\n          category = _ref2.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:col-span-2\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            image = _ref3.image,\n            description = _ref3.description,\n            price = _ref3.price,\n            category = _ref3.category;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n          id: id,\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), products.slice(5, products.length).map(function (_ref4) {\n      var id = _ref4.id,\n          title = _ref4.title,\n          image = _ref4.image,\n          description = _ref4.description,\n          price = _ref4.price,\n          category = _ref4.category;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY2F0ZWdvcnkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvQixzQkFFSTtBQUFLLGFBQVMsRUFBQyx5RkFBZjtBQUFBLGVBQ0tBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBb0JDLEdBQXBCLENBQXdCO0FBQUEsVUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsVUFBS0MsS0FBTCxTQUFLQSxLQUFMO0FBQUEsVUFBV0MsS0FBWCxTQUFXQSxLQUFYO0FBQUEsVUFBaUJDLFdBQWpCLFNBQWlCQSxXQUFqQjtBQUFBLFVBQTZCQyxLQUE3QixTQUE2QkEsS0FBN0I7QUFBQSxVQUFtQ0MsUUFBbkMsU0FBbUNBLFFBQW5DO0FBQUEsMEJBQ3JCLDhEQUFDLDZDQUFEO0FBRUEsVUFBRSxFQUFFTCxFQUZKO0FBR0EsYUFBSyxFQUFFQyxLQUhQO0FBSUEsYUFBSyxFQUFFRyxLQUpQO0FBS0EsbUJBQVcsRUFBRUQsV0FMYjtBQU1BLGdCQUFRLEVBQUVFLFFBTlY7QUFPQSxhQUFLLEVBQUVIO0FBUFAsU0FDS0YsRUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBeEIsQ0FETCxlQVlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUcsRUFBQyxpQ0FBdEM7QUFBd0UsU0FBRyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSixlQWFJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFDS0gsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUNBQyxHQURBLENBQ0k7QUFBQSxZQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxZQUFLQyxLQUFMLFNBQUtBLEtBQUw7QUFBQSxZQUFXQyxLQUFYLFNBQVdBLEtBQVg7QUFBQSxZQUFpQkMsV0FBakIsU0FBaUJBLFdBQWpCO0FBQUEsWUFBNkJDLEtBQTdCLFNBQTZCQSxLQUE3QjtBQUFBLFlBQW1DQyxRQUFuQyxTQUFtQ0EsUUFBbkM7QUFBQSw0QkFDRCw4REFBQyw2Q0FBRDtBQUVBLFlBQUUsRUFBRUwsRUFGSjtBQUdBLGVBQUssRUFBRUMsS0FIUDtBQUlBLGVBQUssRUFBRUcsS0FKUDtBQUtBLHFCQUFXLEVBQUVELFdBTGI7QUFNQSxrQkFBUSxFQUFFRSxRQU5WO0FBT0EsZUFBSyxFQUFFSDtBQVBQLFdBQ0tGLEVBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQztBQUFBLE9BREo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosRUEyQktILFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBaUJELFFBQVEsQ0FBQ1MsTUFBMUIsRUFBa0NQLEdBQWxDLENBQXNDO0FBQUEsVUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsVUFBS0MsS0FBTCxTQUFLQSxLQUFMO0FBQUEsVUFBV0MsS0FBWCxTQUFXQSxLQUFYO0FBQUEsVUFBaUJDLFdBQWpCLFNBQWlCQSxXQUFqQjtBQUFBLFVBQTZCQyxLQUE3QixTQUE2QkEsS0FBN0I7QUFBQSxVQUFtQ0MsUUFBbkMsU0FBbUNBLFFBQW5DO0FBQUEsMEJBQ25DLDhEQUFDLDZDQUFEO0FBRUEsVUFBRSxFQUFFTCxFQUZKO0FBR0EsYUFBSyxFQUFFQyxLQUhQO0FBSUEsYUFBSyxFQUFFRyxLQUpQO0FBS0EsbUJBQVcsRUFBRUQsV0FMYjtBQU1BLGdCQUFRLEVBQUVFLFFBTlY7QUFPQSxhQUFLLEVBQUVIO0FBUFAsU0FDS0YsRUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1DO0FBQUEsS0FBdEMsQ0EzQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUEyQ0g7O0tBNUNRSixXO0FBOENULCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IHByb2R1Y3RzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0byc+XG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCw0KS5tYXAoKHtpZCx0aXRsZSxpbWFnZSxkZXNjcmlwdGlvbixwcmljZSxjYXRlZ29yeX0pPT4oXG4gICAgICAgICAgICAgICAgPFByb2R1Y3QgXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4tZnVsbCcgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2R5elwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4tMic+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDQsNSlcbiAgICAgICAgICAgICAgICAubWFwKCh7aWQsdGl0bGUsaW1hZ2UsZGVzY3JpcHRpb24scHJpY2UsY2F0ZWdvcnl9KT0+KFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdCBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoNSxwcm9kdWN0cy5sZW5ndGgpLm1hcCgoe2lkLHRpdGxlLGltYWdlLGRlc2NyaXB0aW9uLHByaWNlLGNhdGVnb3J5fSk9PihcbiAgICAgICAgICAgICAgICA8UHJvZHVjdCBcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});