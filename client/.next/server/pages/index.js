"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBYyxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQ3ZCLElBQUksSUFBNkIsRUFBRTtRQUMvQixnQkFBZ0I7UUFFaEIsT0FBT0QsbURBQVksQ0FBQztZQUNoQkcsT0FBTyxFQUFFLGlFQUFpRTtZQUMxRUMsT0FBTyxFQUFFSCxHQUFHLENBQUNHLE9BQU87U0FDdkIsQ0FBQyxDQUFDO0tBQ04sTUFBTSxFQUtOO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQoeyByZXEgfSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gb24gdGhlIHNlcnZlclxyXG5cclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG9uIHRoZSBicm93c2VyXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJhc2VVcmw6ICcvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    // axios.get('/api/users/currentuser').catch((err) => {\n    // console.log(err.message);\n    // })\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are Signed In\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Documents\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 26\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT Signed In\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Documents\\\\Desktop\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 54\n    }, undefined);\n};\n// server side rendering service\nLandingPage.getInitialProps = async (context)=>{\n    const { data  } = await (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context).get(\"/api/users/currentuser\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxFQUFFQyxXQUFXLEdBQUUsR0FBSztJQUNyQyx1REFBdUQ7SUFDbkQsNEJBQTRCO0lBQ2hDLEtBQUs7SUFDTCxPQUFPQSxXQUFXLGlCQUFHLDhEQUFDQyxJQUFFO2tCQUFDLG1CQUFpQjs7Ozs7aUJBQUssaUJBQUUsOERBQUNBLElBQUU7a0JBQUMsdUJBQXFCOzs7OztpQkFBSyxDQUFDO0NBQ25GO0FBRUQsZ0NBQWdDO0FBQ2hDRixXQUFXLENBQUNHLGVBQWUsR0FBRyxPQUFNQyxPQUFPLEdBQUs7SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNTiw2REFBVyxDQUFDSyxPQUFPLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0lBQ3pFLE9BQU9ELElBQUk7Q0FDZCxDQUFDO0FBRUYsaUVBQWVMLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gXCIuLi9hcGkvYnVpbGQtY2xpZW50XCI7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuICAgIC8vIGF4aW9zLmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAvLyB9KVxyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyID8gPGgxPllvdSBhcmUgU2lnbmVkIEluPC9oMT46IDxoMT5Zb3UgYXJlIE5PVCBTaWduZWQgSW48L2gxPjtcclxufTtcclxuXHJcbi8vIHNlcnZlciBzaWRlIHJlbmRlcmluZyBzZXJ2aWNlXHJcbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYnVpbGRDbGllbnQoY29udGV4dCkuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7Il0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImgxIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();