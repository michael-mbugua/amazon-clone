/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/image */ \"./node_modules/next/dist/client/image.js\");\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-format */ \"./node_modules/react-currency-format/lib/currency-format.js\");\n/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/moringa/Desktop/Amazon-clone/Amazon-git/amazon-clone/src/components/Product.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\n\nvar Product = function Product(_ref) {\n  _s();\n\n  var id = _ref.id,\n      image = _ref.image,\n      title = _ref.title,\n      category = _ref.category,\n      price = _ref.price,\n      description = _ref.description;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),\n      rating = _useState[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5),\n      hasPrime = _useState2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contain\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex\",\n      children: Array(rating).fill().map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n          className: \"h-5  text-yellow-500\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_format__WEBPACK_IMPORTED_MODULE_3___default()), {\n        quantity: price,\n        currency: \"KSH\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, _this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: \"\",\n        src: \"https://links.papareact.com/fdw\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"FREE Next-day Delivery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \"Add to Basket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Product, \"27m2ymQV2saoVO/jldGJb5Bpq20=\");\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz9iZTI2Il0sIm5hbWVzIjpbIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImNhdGVnb3J5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFDLENBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFDLENBQWpCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlEO0FBQUE7O0FBQUEsTUFBL0NDLEVBQStDLFFBQS9DQSxFQUErQztBQUFBLE1BQTVDQyxLQUE0QyxRQUE1Q0EsS0FBNEM7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLGtCQUM5Q0MsK0NBQVEsQ0FDbkJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBZVosVUFBVSxHQUFFQyxVQUFaLEdBQXlCLENBQXhDLENBQVgsSUFBeURBLFVBRHRDLENBRHNDO0FBQUEsTUFDdERZLE1BRHNEOztBQUFBLG1CQUk1Q0osK0NBQVEsQ0FDckJDLElBQUksQ0FBQ0UsTUFBTCxLQUFjLEdBRE8sQ0FKb0M7QUFBQSxNQUl0REUsUUFKc0Q7O0FBTTdELHNCQUNBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDSTtBQUFBLGdCQUFJUjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLCtEQUFEO0FBQU8sU0FBRyxFQUFFRixLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUlJO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNLVSxLQUFLLENBQUNGLE1BQUQsQ0FBTCxDQUNBRyxJQURBLEdBRUFDLEdBRkEsQ0FFSSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSw0QkFDRCw4REFBQyw0REFBRDtBQUFXLG1CQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQztBQUFBLE9BRko7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFZSTtBQUFBLGdCQUFJWDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSixlQWFJO0FBQUEsNkJBQ0ksOERBQUMsOERBQUQ7QUFBZ0IsZ0JBQVEsRUFBRUQsS0FBMUI7QUFBaUMsZ0JBQVEsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKLEVBZ0JLTyxRQUFRLGlCQUNMO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBa0IsV0FBRyxFQUFDLGlDQUF0QjtBQUF3RCxXQUFHLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQlIsZUFzQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUEwQkgsQ0FoQ0Q7O0dBQU1aLE87O0tBQUFBLE87QUFrQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvZGlzdC9jbGllbnQvaW1hZ2UnO1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1cnJlbmN5Rm9ybWF0IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdCc7XG5jb25zdCBNQVhfUkFUSU5HPTU7XG5jb25zdCBNSU5fUkFUSU5HPTE7XG5cbmNvbnN0IFByb2R1Y3QgPSAoe2lkLGltYWdlLHRpdGxlLGNhdGVnb3J5LHByaWNlLGRlc2NyaXB0aW9ufSkgPT4ge1xuICAgIGNvbnN0IFtyYXRpbmddPXVzZVN0YXRlKFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKE1BWF9SQVRJTkcgLU1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXG4gICAgKVxuICAgIGNvbnN0IFtoYXNQcmltZV09dXNlU3RhdGUoXG4gICAgICAgIE1hdGgucmFuZG9tKCk8MC41KVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgPHA+e2NhdGVnb3J5fTwvcD5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuXG4gICAgICAgIDxoND57dGl0bGV9PC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcbiAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgIC5tYXAoKF8saSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiAgY2xhc3NOYW1lPSdoLTUgIHRleHQteWVsbG93LTUwMCcvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1cnJlbmN5Rm9ybWF0IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJLU0hcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aGFzUHJpbWUgJiYoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPScnIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgPHA+RlJFRSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uPkFkZCB0byBCYXNrZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});