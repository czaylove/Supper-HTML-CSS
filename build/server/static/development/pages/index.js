module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Introduction/index.tsx":
/*!*******************************************!*\
  !*** ./components/Introduction/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Introduction = () => __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction"
}, __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__head"
}, __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, " Zmooz"), __jsx("span", {
  className: "jsx-1464691626" + " " + "introduction__slash"
}, " / "), __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, " Connect")), __jsx("hr", {
  className: "jsx-1464691626"
}), __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__content"
}, __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__logo"
}, __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, __jsx("img", {
  alt: "",
  src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMzEyIiBoZWlnaHQ9IjI2LjQxOSIgdmlld0JveD0iMCAwIDE0MS4zMTIgMjYuNDE5Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzJjMmUzMztmaWxsLXJ1bGU6ZXZlbm9kZH0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHBhdGggaWQ9Inptb296IiBkPSJNMS44NzQgNS4yNzlhLjI0My4yNDMgMCAwIDEtLjI3NC0uMjcyVi44ODNhLjIzNy4yMzcgMCAwIDEgLjI3NC0uMjY0aDE3LjM0NWEuMjQ2LjI0NiAwIDAgMSAuMjIxLjEyNy4yNjIuMjYyIDAgMCAxIDAgLjI3Mkw3Ljg2IDIxLjJoOC43NjZhMS42MzEgMS42MzEgMCAwIDEgMS4xODIuNDg1IDEuNiAxLjYgMCAwIDEgLjQ4NCAxLjE3M3YyLjczYS4yNDIuMjQyIDAgMCAxLS4yNzEuMjcySC4yNzVhLjI0Ny4yNDcgMCAwIDEtLjIzOC0uMTM2LjI0Ny4yNDcgMCAwIDEgMC0uMjY0bDExLjYtMjAuMTc4em0yMS44OTUgMy4xODlBNy42NSA3LjY1IDAgMCAxIDI2LjYzNCAyLjIgMTAuNzExIDEwLjcxMSAwIDAgMSAzMy42MTYuMDI0IDEwLjcxNiAxMC43MTYgMCAwIDEgNDAuNiAyLjJxLjI5NC4yNDIuNTM2LjQ4NWMuMTc5LS4xNjIuMzU3LS4zMjQuNTUzLS40ODVBMTAuNjkgMTAuNjkgMCAwIDEgNDguNjc0LjAyNGExMC43NTEgMTAuNzUxIDAgMCAxIDYuOTkgMi4xNzYgNy42NSA3LjY1IDAgMCAxIDIuODY1IDYuMjY3djE3LjExN2EuMjQzLjI0MyAwIDAgMS0uMjcyLjI3MmgtMi43M2ExLjYgMS42IDAgMCAxLTEuMTc0LS40ODUgMS42NDQgMS42NDQgMCAwIDEtLjQ4NC0xLjE4MVY4LjQ2OGEzLjIzNyAzLjIzNyAwIDAgMC0xLjEzMS0yLjY2MSA2LjM3MyA2LjM3MyAwIDAgMC00LjA2NC0xLjEyMyA2LjMgNi4zIDAgMCAwLTQuMDU1IDEuMTIzIDMuMjI2IDMuMjI2IDAgMCAwLTEuMTQ5IDIuNjYxdjE3LjExNmMwIC4xNzktLjA4NS4yNzItLjI2My4yNzJoLTQuMTI0Yy0uMTcgMC0uMjU0LS4wOTMtLjI1NC0uMjcyVjguNDY4YTMuMjI2IDMuMjI2IDAgMCAwLTEuMTQ5LTIuNjYxIDYuMzQxIDYuMzQxIDAgMCAwLTQuMDY0LTEuMTIzIDYuMyA2LjMgMCAwIDAtNC4wNTYgMS4xMjMgMy4yNDMgMy4yNDMgMCAwIDAtMS4xNCAyLjY2MXYxNy4xMTZhLjIzOS4yMzkgMCAwIDEtLjI3Mi4yNzJoLTQuMTI0Yy0uMTcgMC0uMjU1LS4wOTMtLjI1NS0uMjcyVjguNDY4ek03Ni40NDUuMDI0YTEyLjcwNiAxMi43MDYgMCAwIDEgOS4zMjggMy44NjkgMTIuNzM1IDEyLjczNSAwIDAgMSAzLjg3NyA5LjM0NSAxMi43MzIgMTIuNzMyIDAgMCAxLTMuODc3IDkuMzQ1IDEzLjIxOSAxMy4yMTkgMCAwIDEtMTguNjczIDAgMTIuNzU2IDEyLjc1NiAwIDAgMS0zLjg2OS05LjM0NUExMi43NiAxMi43NiAwIDAgMSA2Ny4xIDMuODkzIDEyLjczMiAxMi43MzIgMCAwIDEgNzYuNDQ1LjAyNHptNi4wMzggNy4xNmE4LjU2MSA4LjU2MSAwIDAgMC0xMi4wOTIgMCA4LjI2MyA4LjI2MyAwIDAgMC0yLjUwOCA2LjA1NCA4LjI3NCA4LjI3NCAwIDAgMCAyLjUwOCA2LjA0NiA4LjU2MSA4LjU2MSAwIDAgMCAxMi4wOTIgMCA4LjI0IDguMjQgMCAwIDAgMi41MDgtNi4wNDYgOC4yMzEgOC4yMzEgMCAwIDAtMi41MDgtNi4wNTR6TTEwNS45NS4wMjRhMTIuNzA1IDEyLjcwNSAwIDAgMSA5LjMyOCAzLjg2OSAxMi43MzIgMTIuNzMyIDAgMCAxIDMuODc4IDkuMzQ1IDEyLjczIDEyLjczIDAgMCAxLTMuODc4IDkuMzQ1IDEzLjIxOSAxMy4yMTkgMCAwIDEtMTguNjczIDAgMTIuNzU3IDEyLjc1NyAwIDAgMS0zLjg2OS05LjM0NSAxMi43NiAxMi43NiAwIDAgMSAzLjg2OS05LjM0NUExMi43MzMgMTIuNzMzIDAgMCAxIDEwNS45NS4wMjR6bTYuMDM4IDcuMTZhOC41NjEgOC41NjEgMCAwIDAtMTIuMDkyIDAgOC4yNjMgOC4yNjMgMCAwIDAtMi41MDggNi4wNTQgOC4yNzMgOC4yNzMgMCAwIDAgMi41MTIgNi4wNDYgOC41NjEgOC41NjEgMCAwIDAgMTIuMDkyIDAgOC4yNCA4LjI0IDAgMCAwIDIuNTA4LTYuMDQ2IDguMjMxIDguMjMxIDAgMCAwLTIuNTA4LTYuMDU0em0xMS43MTgtMS45YS4yNDMuMjQzIDAgMCAxLS4yNzItLjI3MlYuODgzYS4yMzcuMjM3IDAgMCAxIC4yNzItLjI2NGgxNy4zNDVhLjI0Ni4yNDYgMCAwIDEgLjIyMS4xMjcuMjYyLjI2MiAwIDAgMSAwIC4yNzJMMTI5LjY5MSAyMS4yaDguNzY3YTEuNjMxIDEuNjMxIDAgMCAxIDEuMTgyLjQ4NSAxLjYgMS42IDAgMCAxIC40ODQgMS4xNzN2Mi43M2EuMjQyLjI0MiAwIDAgMS0uMjcxLjI3MmgtMTcuNzQ2YS4yNjguMjY4IDAgMCAxLS4yMzgtLjRsMTEuNi0yMC4xNzh6IiBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC4wMDEgLS4wMjQpIi8+Cjwvc3ZnPgo=",
  className: "jsx-1464691626" + " " + "introduction__name"
})), __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, __jsx("img", {
  alt: "",
  src: "data:image/png;base64,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",
  className: "jsx-1464691626" + " " + "introduction__img"
})))), __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__details"
}, __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__details__title"
}, __jsx("h4", {
  className: "jsx-1464691626"
}, "Welcome to Zmoooz"), __jsx("p", {
  className: "jsx-1464691626"
}, "Download our app to create, watch and share great stories !")), __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__details__imgstore"
}, __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, __jsx("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png",
  alt: "",
  className: "jsx-1464691626"
})), __jsx("a", {
  href: "#",
  className: "jsx-1464691626"
}, __jsx("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png",
  alt: "",
  className: "jsx-1464691626"
}))), __jsx("div", {
  className: "jsx-1464691626" + " " + "introduction__details__text"
}, __jsx("p", {
  className: "jsx-1464691626"
}, "At Zmooz, there is no limits for stories creators:"), __jsx("ul", {
  className: "jsx-1464691626"
}, __jsx("li", {
  className: "jsx-1464691626"
}, "Create unlimited stories very easily"), __jsx("li", {
  className: "jsx-1464691626"
}, "Videos can be as long as you wish"), __jsx("li", {
  className: "jsx-1464691626"
}, "Your stories last forever (and not one day \u2026)"), __jsx("li", {
  className: "jsx-1464691626"
}, "Embed stories on your website !")), __jsx("h4", {
  style: {
    color: '#ff471e'
  },
  className: "jsx-1464691626"
}, "Profressional publisher or advertiser?"), __jsx("p", {
  className: "jsx-1464691626"
}, "Contact us to learn how to generate new vevenues with your stories !"), __jsx("h4", {
  className: "jsx-1464691626"
}, "Try and enjoy it now !"), __jsx("h4", {
  className: "jsx-1464691626"
}, __jsx("i", {
  className: "jsx-1464691626"
}, __jsx("b", {
  className: "jsx-1464691626"
}, "- The Zmooz Team"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1464691626"
}, ".introduction.jsx-1464691626{width:26.8%;height:100%;position:fixed;font-size:16px;font-family:arial;}.introduction__head.jsx-1464691626{font-size:18px;padding-left:15px;color:#878da3;}.introduction__head.jsx-1464691626 a.jsx-1464691626{-webkit-text-decoration:none;text-decoration:none;color:#3f476b;font-size:15px;font-family:arial;}.introduction__head.jsx-1464691626 a.jsx-1464691626:hover{-webkit-text-decoration:underline;text-decoration:underline;}.introduction__content.jsx-1464691626{padding-top:10%;}.introduction__content.jsx-1464691626 .introduction__logo.jsx-1464691626{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.introduction__content.jsx-1464691626 .introduction__logo.jsx-1464691626 a.jsx-1464691626{padding-top:20px;}.introduction__content.jsx-1464691626 .introduction__name.jsx-1464691626{width:185px;height:35px;}.introduction__content.jsx-1464691626 .introduction__img.jsx-1464691626{width:110px;height:64px;}.introduction__details.jsx-1464691626{padding-top:10%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:70px;}.introduction__details__title.jsx-1464691626{width:85%;}.introduction__details__title.jsx-1464691626 h4.jsx-1464691626{padding-bottom:10px;}.introduction__details.jsx-1464691626 img.jsx-1464691626{width:140px;height:45px;}.introduction__details__imgstore.jsx-1464691626{width:75%;padding-top:10px;}.introduction__details__imgstore.jsx-1464691626 a.jsx-1464691626{padding-left:20px;}.introduction__details__text.jsx-1464691626{width:85%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:30px;}.introduction__details__text.jsx-1464691626 ul.jsx-1464691626{list-style:none;padding:19px;}.introduction__details__text.jsx-1464691626 ul.jsx-1464691626 li.jsx-1464691626{line-height:1;}.introduction__details__text.jsx-1464691626 ul.jsx-1464691626 li.jsx-1464691626::before{content:'\u2022';color:#ff471e;display:inline-block;font-size:20px;width:1em;margin-left:-1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdXhzdGF5L0Rlc2t0b3Avem1vb3ovY29tcG9uZW50cy9JbnRyb2R1Y3Rpb24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFTyxBQUd1QixBQU9HLEFBS00sQUFNSyxBQUdWLEFBR0gsQUFLSSxBQUdMLEFBSUEsQUFJSSxBQU1OLEFBR1UsQUFHUixBQUlGLEFBSVEsQUFHUixBQU9NLEFBSUYsQUFHRixVQTlCZCxBQVVtQixBQU9KLEVBL0RELEFBZ0NBLEFBSUEsQUFnQkEsQUF5QkUsRUFIaEIsQ0FuRW9CLENBY3BCLEFBbUJlLEFBOEJBLENBekNmLENBK0JBLEVBWEEsSUFoRGlCLEFBZ0NqQixBQUlBLEFBZ0JBLEVBeUJ1QixDQXJCdkIsRUFjQSxJQS9EZ0IsTUFOQyxRQU9qQixBQXNFaUIsR0FuRUQsSUFUSSxNQWVwQixFQThEWSxFQW5FSyxRQVRqQixBQTZFbUIsRUF6REssS0FWSixLQW1ESSxLQWlCeEIsQ0F6Q3dCLE9BMUJ4Qix1REFVcUIsVUF5Q0YsTUF4QkMsV0F5QnBCLE9BeEJBLDJEQWpCQSIsImZpbGUiOiIvVXNlcnMvbHV4c3RheS9EZXNrdG9wL3ptb296L2NvbXBvbmVudHMvSW50cm9kdWN0aW9uL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25fX2hlYWRcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCI+IFptb296PC9hPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uX19zbGFzaFwiPiAvIDwvc3Bhbj5cbiAgICAgIDxhIGhyZWY9XCIjXCI+IENvbm5lY3Q8L2E+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25fX2NvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uX19sb2dvXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImludHJvZHVjdGlvbl9fbmFtZVwiXG4gICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhOREV1TXpFeUlpQm9aV2xuYUhROUlqSTJMalF4T1NJZ2RtbGxkMEp2ZUQwaU1DQXdJREUwTVM0ek1USWdNall1TkRFNUlqNEtJQ0FnSUR4a1pXWnpQZ29nSUNBZ0lDQWdJRHh6ZEhsc1pUNEtJQ0FnSUNBZ0lDQWdJQ0FnTG1Oc2N5MHhlMlpwYkd3Nkl6SmpNbVV6TXp0bWFXeHNMWEoxYkdVNlpYWmxibTlrWkgwS0lDQWdJQ0FnSUNBOEwzTjBlV3hsUGdvZ0lDQWdQQzlrWldaelBnb2dJQ0FnUEhCaGRHZ2dhV1E5SW5wdGIyOTZJaUJrUFNKTk1TNDROelFnTlM0eU56bGhMakkwTXk0eU5ETWdNQ0F3SURFdExqSTNOQzB1TWpjeVZpNDRPRE5oTGpJek55NHlNemNnTUNBd0lERWdMakkzTkMwdU1qWTBhREUzTGpNME5XRXVNalEyTGpJME5pQXdJREFnTVNBdU1qSXhMakV5Tnk0eU5qSXVNall5SURBZ01DQXhJREFnTGpJM01rdzNMamcySURJeExqSm9PQzQzTmpaaE1TNDJNekVnTVM0Mk16RWdNQ0F3SURFZ01TNHhPREl1TkRnMUlERXVOaUF4TGpZZ01DQXdJREVnTGpRNE5DQXhMakUzTTNZeUxqY3pZUzR5TkRJdU1qUXlJREFnTUNBeExTNHlOekV1TWpjeVNDNHlOelZoTGpJME55NHlORGNnTUNBd0lERXRMakl6T0MwdU1UTTJMakkwTnk0eU5EY2dNQ0F3SURFZ01DMHVNalkwYkRFeExqWXRNakF1TVRjNGVtMHlNUzQ0T1RVZ015NHhPRGxCTnk0Mk5TQTNMalkxSURBZ01DQXhJREkyTGpZek5DQXlMaklnTVRBdU56RXhJREV3TGpjeE1TQXdJREFnTVNBek15NDJNVFl1TURJMElERXdMamN4TmlBeE1DNDNNVFlnTUNBd0lERWdOREF1TmlBeUxqSnhMakk1TkM0eU5ESXVOVE0yTGpRNE5XTXVNVGM1TFM0eE5qSXVNelUzTFM0ek1qUXVOVFV6TFM0ME9EVkJNVEF1TmprZ01UQXVOamtnTUNBd0lERWdORGd1TmpjMExqQXlOR0V4TUM0M05URWdNVEF1TnpVeElEQWdNQ0F4SURZdU9Ua2dNaTR4TnpZZ055NDJOU0EzTGpZMUlEQWdNQ0F4SURJdU9EWTFJRFl1TWpZM2RqRTNMakV4TjJFdU1qUXpMakkwTXlBd0lEQWdNUzB1TWpjeUxqSTNNbWd0TWk0M00yRXhMallnTVM0MklEQWdNQ0F4TFRFdU1UYzBMUzQwT0RVZ01TNDJORFFnTVM0Mk5EUWdNQ0F3SURFdExqUTROQzB4TGpFNE1WWTRMalEyT0dFekxqSXpOeUF6TGpJek55QXdJREFnTUMweExqRXpNUzB5TGpZMk1TQTJMak0zTXlBMkxqTTNNeUF3SURBZ01DMDBMakEyTkMweExqRXlNeUEyTGpNZ05pNHpJREFnTUNBd0xUUXVNRFUxSURFdU1USXpJRE11TWpJMklETXVNakkySURBZ01DQXdMVEV1TVRRNUlESXVOall4ZGpFM0xqRXhObU13SUM0eE56a3RMakE0TlM0eU56SXRMakkyTXk0eU56Sm9MVFF1TVRJMFl5MHVNVGNnTUMwdU1qVTBMUzR3T1RNdExqSTFOQzB1TWpjeVZqZ3VORFk0WVRNdU1qSTJJRE11TWpJMklEQWdNQ0F3TFRFdU1UUTVMVEl1TmpZeElEWXVNelF4SURZdU16UXhJREFnTUNBd0xUUXVNRFkwTFRFdU1USXpJRFl1TXlBMkxqTWdNQ0F3SURBdE5DNHdOVFlnTVM0eE1qTWdNeTR5TkRNZ015NHlORE1nTUNBd0lEQXRNUzR4TkNBeUxqWTJNWFl4Tnk0eE1UWmhMakl6T1M0eU16a2dNQ0F3SURFdExqSTNNaTR5TnpKb0xUUXVNVEkwWXkwdU1UY2dNQzB1TWpVMUxTNHdPVE10TGpJMU5TMHVNamN5VmpndU5EWTRlazAzTmk0ME5EVXVNREkwWVRFeUxqY3dOaUF4TWk0M01EWWdNQ0F3SURFZ09TNHpNamdnTXk0NE5qa2dNVEl1TnpNMUlERXlMamN6TlNBd0lEQWdNU0F6TGpnM055QTVMak0wTlNBeE1pNDNNeklnTVRJdU56TXlJREFnTUNBeExUTXVPRGMzSURrdU16UTFJREV6TGpJeE9TQXhNeTR5TVRrZ01DQXdJREV0TVRndU5qY3pJREFnTVRJdU56VTJJREV5TGpjMU5pQXdJREFnTVMwekxqZzJPUzA1TGpNME5VRXhNaTQzTmlBeE1pNDNOaUF3SURBZ01TQTJOeTR4SURNdU9Ea3pJREV5TGpjek1pQXhNaTQzTXpJZ01DQXdJREVnTnpZdU5EUTFMakF5TkhwdE5pNHdNemdnTnk0eE5tRTRMalUyTVNBNExqVTJNU0F3SURBZ01DMHhNaTR3T1RJZ01DQTRMakkyTXlBNExqSTJNeUF3SURBZ01DMHlMalV3T0NBMkxqQTFOQ0E0TGpJM05DQTRMakkzTkNBd0lEQWdNQ0F5TGpVd09DQTJMakEwTmlBNExqVTJNU0E0TGpVMk1TQXdJREFnTUNBeE1pNHdPVElnTUNBNExqSTBJRGd1TWpRZ01DQXdJREFnTWk0MU1EZ3ROaTR3TkRZZ09DNHlNekVnT0M0eU16RWdNQ0F3SURBdE1pNDFNRGd0Tmk0d05UUjZUVEV3TlM0NU5TNHdNalJoTVRJdU56QTFJREV5TGpjd05TQXdJREFnTVNBNUxqTXlPQ0F6TGpnMk9TQXhNaTQzTXpJZ01USXVOek15SURBZ01DQXhJRE11T0RjNElEa3VNelExSURFeUxqY3pJREV5TGpjeklEQWdNQ0F4TFRNdU9EYzRJRGt1TXpRMUlERXpMakl4T1NBeE15NHlNVGtnTUNBd0lERXRNVGd1TmpjeklEQWdNVEl1TnpVM0lERXlMamMxTnlBd0lEQWdNUzB6TGpnMk9TMDVMak0wTlNBeE1pNDNOaUF4TWk0M05pQXdJREFnTVNBekxqZzJPUzA1TGpNME5VRXhNaTQzTXpNZ01USXVOek16SURBZ01DQXhJREV3TlM0NU5TNHdNalI2YlRZdU1ETTRJRGN1TVRaaE9DNDFOakVnT0M0MU5qRWdNQ0F3SURBdE1USXVNRGt5SURBZ09DNHlOak1nT0M0eU5qTWdNQ0F3SURBdE1pNDFNRGdnTmk0d05UUWdPQzR5TnpNZ09DNHlOek1nTUNBd0lEQWdNaTQxTVRJZ05pNHdORFlnT0M0MU5qRWdPQzQxTmpFZ01DQXdJREFnTVRJdU1Ea3lJREFnT0M0eU5DQTRMakkwSURBZ01DQXdJREl1TlRBNExUWXVNRFEySURndU1qTXhJRGd1TWpNeElEQWdNQ0F3TFRJdU5UQTRMVFl1TURVMGVtMHhNUzQzTVRndE1TNDVZUzR5TkRNdU1qUXpJREFnTUNBeExTNHlOekl0TGpJM01sWXVPRGd6WVM0eU16Y3VNak0zSURBZ01DQXhJQzR5TnpJdExqSTJOR2d4Tnk0ek5EVmhMakkwTmk0eU5EWWdNQ0F3SURFZ0xqSXlNUzR4TWpjdU1qWXlMakkyTWlBd0lEQWdNU0F3SUM0eU56Sk1NVEk1TGpZNU1TQXlNUzR5YURndU56WTNZVEV1TmpNeElERXVOak14SURBZ01DQXhJREV1TVRneUxqUTROU0F4TGpZZ01TNDJJREFnTUNBeElDNDBPRFFnTVM0eE56TjJNaTQzTTJFdU1qUXlMakkwTWlBd0lEQWdNUzB1TWpjeExqSTNNbWd0TVRjdU56UTJZUzR5TmpndU1qWTRJREFnTUNBeExTNHlNemd0TGpSc01URXVOaTB5TUM0eE56aDZJaUJqYkdGemN6MGlZMnh6TFRFaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzR3TURFZ0xTNHdNalFwSWk4K0Nqd3ZjM1puUGdvPVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25fX2ltZ1wiXG4gICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQTdDQVlBQUFDTk9pOTJBQUFBQVhOU1IwSUFyczRjNlFBQUN0NUpSRUZVZUFIZFhGMXkyN1lXQnVqVXZqTnRIUGZ0empST2xCWFVXVUhsaHlSOXE3eUNxaXVJc29LcUs0aTdnam9yc1B4V0p3K1JWMUIzQlZYaWRPYSsxWTN2dzQweUl1NzNIZjZJSUVpUm9raUpLV1pzNFkvQUFUNmNnNE9EUTJxVkU4emplOThyWlhwSzZZN1M2aUNubXAxdDFMWFM1akxPWkZycElNMTgzeUJ0L3Rhdi9welhpU3VYajVqdTNwN2F2dDFGWDExbE5INzExK1dmM2xETmFHNk1IaXR2K2tMLytwOUpGaVU2bldrZTcvY3d3T2ZJNzZUTGFrM0hCQ3FBQTlDTVA5R3YzbDFVNlNNR1NLa2UyZ0w5Nms2VmR0YjdqRGxSSDI2ZTZmRTFGdWs4V0lDWUovdS9ZRUQ5ZWZFR1lvWUFtUWtXeFZqcDZWbmVTbHBFbWZuMkxqZ0g0Qml2MzNKd0pzcWZIU1VsUmd4SUs4REludVVKQUJxamFJUVZkWkZlVWRtUHpIT0Y0OGs1V2tNRXR6QlFVa3pmUDRqR0pZQ0VZdXJVSXRlb3Y1WDJUeUQzVDVJSVduVXlFdWJSVndkcVMrL0ZSY1k3d0dwRjJuU1F4Nys5bFdRK09VaXJrNnJjZy80M0VrU3NmbmE3cHp3OUJBSDNMU0l3SnYzeTdVUG1CWUE4dWZjSDRoMW1TRERtZDhqMC9qSkFSSStXL1RYZi9ydWoxSzJPOHIwdWdOK3J0RGtiTThJUVJoak1pN0w5dHFFZUdBQUxLc1d4dnZsQnY3bzYwZWJSZmgrb1llOElBem5EekxwTmdoRjFsZlVieUg5d2xZbzBxQkliZEtBZ2pKVHYvN3dwdXJQR3NpZ1BXd1FYMDNkeG5aQkx0Rk9nTUtqemQ0TzQ0b1lqSWdLOUxXelNVTUcxL3FZRU9ST0l5R0hidVVZa2hObW1aSm9IUFgyZ2NkNzREWUlMS3pJTS91eGhXMWZaWEE2TGVqdGZYUkh0OXE4QWd3M3pMTm93N2VMTnB5QzZ4dFlpMC82aFo0RUJHdHNLQnFlUEV5dHk5dnlxcHo2OC94Slp6L0QzaG1VWm9ZT3huYWlkM2QrQ1EyNUdqVTFuSlEvUnBBVUtrTGRwbXFyMkwrQ2N2ejNXNTI4eDhmNGhSRnJleGk3QUdDZ3VzajlWN2JDSjU0eDNiVFVMYmZTVEJTUTVFUDNydTdGK2VkV0hLdnhBZ0tGaTRvWU9WdUJyN0ptdkF3M1ByZENHbkg4RUlORkU4bFF2d0V6ZlkvTFZUL2pMQUFhMkwzK2JZdXpINkxrMi9mNmpBSWttVnNUWnk3ZERHUEZ3S00wUVpacUhVeldrUWlOYVhQUmdDMzViQTRob1VEVlBTTXd4Z1NpN2NKcW5kcW0zSU1idVBYWEtOcFRSQ2tCa1FyWjMvNUJEYWdNVEVRTFRCYmNjT1dLTTNLTFVNVlRRMHlZV3hiTERLUVVJTjBIejZHNlpROWxTL1ZOY3lEa0lFd0lSc2tlTFFWT2drRERzTHlPY1M3Qy9aSWt4bU8ycEl0TVd0OEZRQ0lnWUhubWk5THd4TlpTNmFCV3U4TGJzUXlrYkp5aThrMmtvQlB2TFZUK1RXNVNDaWd3UlJuUFNoa0loSUtCck1LZE5kMWRkUVJRTEZBOW84M2plYmhnTHRLSm5zcEtkd25vekV0eGk3eTBScDI1SUN5c0RpRDBUU2RPNlhWS1lFdjEvZS9jMXpBVXVCMUNNUUp6Z29PY0NWZGh5dFFvaHQzUVY3SGRPQzlUQzVNTE9LV2swWTNsQUtwSWpuQVg5SDN2RmdkV0VXSmZORWM4UG5DQ3JiRTBKTWFiQy9PMXMrTGc5WFRjb3Q5WXhaZ0VEc2xrMjdtU0h2SGZ4UHZhcVhOT3ltYkRkcEpGeFV0V1lTQnNaMnJ0VWFtc01PdS9NeVFRb2ovZjNzR0NPNW5uTnhSb0hSRFpJT2swRTZ1VjhKQkJSNUlwNVJ2bVliUHA1amhnN3U4bzh2bjJzcGpjL0xjdHhOS3dDbEM0MjloR291UjlUQkJGTFR0SG5Wei9FZVExRkdoVlpZc3pqNVZlOVlBQmNUYVdna3pzbldnOFU5aXJob054SzJRVmk3Zjd3bmlmODMrMGE2eEZmalFFaWsrRjduRGc3OEtxeUttYzh1VGNBR0FPN3daeFVjQXIvcGNwaFR6aHJlc09ENU5wQmFRUVFBU05yendqdmpYT21jR0YyYUtGOXZyQlN1cENnN0h3eFRHZVhTUzhHQlF1aklIQU9JT2ErVy9aQVhUc2dzaUwxbGl1bVZnQkR4dTUvTml5WWc1eGk3MmtWTG1Gak1TanVKZGp6UllkSDdISFBGUSs5Y01BSUR0UzRpeWxwQWFnZEVMVnoreFI3eG9FMU85ekFvY1ZZZVVzbkVnNEJ5ejVMOTV1S1FVRHhaejFISllaU2tUWEpzRUJraWRVT0FDcGxLNnNWRVBQazdqRldSZGNhK3dyYWxOVk9Xakd3Q2dzU1duY0thaXdzbG8wZW5qZ1dLS1NIWmhiNkdTZURVZDhuazRsNFIvM3JDM3VoSmdxamFLMkFpT3RtMUhMMGEzeUF0RnBvd3cyZmdLSU54RkFpRUpTZDNYNGloOUVIcWZROE9kT2RlU0k3VmpNZ1dFWHBrTFdLMG5VSzBsVVBqZ1hOTGxVY25OaFQzSy9NbVdQcTBlTDJtdE8yZjVsVEVHZlhDb2lzSXBvZ2tvR3JpR2VDTkdzbjY1U0pPeXBvbVlmQ09tWTJXcUsyVXpYWXdIWGZLaUE5SDI3c1BGYncvU0YvM0ZET2lhOVdRRWhFc0htbmpIWGM1RmNGUmVzVGQ1Q2xjdDdJUWlsVjFhMGtZQ1E5TzFtRjlqZWFmREpzYjhHaW5EMUVwVE9wUitCd3YxL1crYkFSMHdrN3AvMEhoN2o1QmhlRG9nNnpCdUpPaFoxRDBTQWFUTktrWVZmSlRoa3p5QzRvenMwRmc2NjJPUy9jc05Wd0FmU0tlM0JyMU00aGNSZlRtNEZ6MG8xQlNXa204VU1Ga1N6MWM5RWpnWVpYU1Z3RkYyZ0puK2VvbjRiOW5oc0RKRDVVcFdYL0NxREl5cVA2NlI3VW91bWEvMUpNVkRiUjhNV2xqQXMwT2R6K2VUbnZwUDVZWTRDUTFLWkFFVzlGdXBHbXdRN3VWbDdRWVE3TzFzTmxwNHVLUjZoTjlaMW5WN1UwT0ExbVp6U3loeVM3SWlpbXE3cDRTWE9NUGVYcnVDemdGSmdVUGorc3N1bUc2dVl4MitPSnVVb2JNUzFoR3pqb2tUTU9rdm5CQnU3MzhQN2oyTXB2S05Fb2gwUTBMK0NVNExTN29sUER5bURRTHl2TDRVSTRqaHY0ZXNEZ2ZLMEZFSFpFVUNEVFhVOUNNVUhvVXpISXNlSWFRMmlSZlkwdWhkT3NyaWtPNGZtNEt0aFdteVVTeFlCb3ZKU1lEUC83NzJVeXVXdzgyR2hUNXhRMmduc095TysxT1VLTGIyOWdrZTA2WXdpMHM0TkZxcTN6VEUwWnhZRElhWlNISEt3WWJtd1poNkZsYVltZENwd0hJMGZvNXZ5eTRpNk5lUlBIb3doRkZNZFlVVHVMbWxubHQzQlREd0M0N3EzU1NkYXpzVk9CVGprVlVJUXBFV0h3TXJ5cFpRSGs5Nzh2am5sQk9SYWQ5M0d3Q2E1STBsZk1JY25hTmNkRlB0TzFrMmFHZEtEdkZ2MTlHM1NFRmpNUE9BTGNmd1FIaHNyZUwyblNWMGx2RkJBU0xwczlYMUdUYzBYcWZRN2hGanBDNDdVQmZwMmhnVUJRSUtKR0RUUmRxY21OQXhKUkxlY0t1UVF5RjFGZS9Nc3pTL1QyVThtcjBQalpUeXpTR2tBNGJ4UmhXSzFkUkhFS1QzRUxLL0EyRXBvUlQ5TloxNmRTNVJQLzF5cEFvcmtVYnNsN2JVQXE2WDRJRE5Ua1prUlpSTXU2ZjFzSkNDY2hQRWoyOGJXY2g5aDBYVEVtTXdXT0VWRUdydzVzL2l0ZmdxMTc5alA2Y3dCcDI2QmlNUmE4K3B3RGpPcGdiTWU0My81THhCbjhvVExHMnI0c2JRNXNvc3lsNTZ3K2ZxbXRoU0Y4OWJrYnZwT2VCd3dvaHppRFB4UTBzMDhBbklTeGxYUHVtV3Q4NjRTdU85NVRwb05neHRESkQ2TlVXMzlsNy9BeCtjbGJ5WVhFMHZrQWptdis3R0xkOXFrc3NrS0g4ZE80REVvTXJnejI4RFVndkZNbk5wMjRpSkZub1huYnlteGpRa1FzSGVFMDN2UkttdmNYRVJ0L1hwQmZyY08zSUN0OEdHMVI4MFZsUWpNT3ZaWVRldWkvcHZrdzVDNE9SaW5QUUdNcXVmUVhFZE5rdWZodm1Wc0RjSHdQL2R4ZnFxOFlKSFdKdWJqRzk4TEdmTDdxZHlEeitoYk9OaDd2WFRwV0hWNnE4Y01IekpTQitOdVhRT3lPVlNuNkRwWFJFeXQvM1Frek8xdFd6QVFEeDFlRDZ2cHFxWHpKemx6TDBEa3YwZGRXbDVzTGN2S0I4NGhjTndjM25BSUlLd1F5MlJzNW9EaFBieXhqZ3NQaXlhSlByT1pSbGhCclhZaTFMdW90eHoxNURkZVJuM0sxalFGaDI3S2ZwSzJ2ZFhSYWR4dGNyZndvWmdYT0lTbkJPTDBPVmpsV0t5Nll0VVo4RXlDNUg0dXpBQUZSSUk4ZktkNGRJSXBOTWlYQ1dLRjlZUUtxeHlDcjBsZExvK0hJdU9rTTdYc0FTTDRCR1lvV2dGYjNQUENnNjVsaDF0V3dBMGhFSUg5RE1kWk41clUvRHExcGVqT3U0eUl0T2RZWU1HYk9kQ2ZrcW1TVjRyakI5NGcvM293VzBmWi94VUlBRXJiNEdjSUFBQUFBU1VWT1JLNUNZSUk9XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbl9fZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25fX2RldGFpbHNfX3RpdGxlXCI+XG4gICAgICAgIDxoND5XZWxjb21lIHRvIFptb29vejwvaDQ+XG4gICAgICAgIDxwPkRvd25sb2FkIG91ciBhcHAgdG8gY3JlYXRlLCB3YXRjaCBhbmQgc2hhcmUgZ3JlYXQgc3RvcmllcyAhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbl9fZGV0YWlsc19faW1nc3RvcmVcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzMvM2MvRG93bmxvYWRfb25fdGhlX0FwcF9TdG9yZV9CYWRnZS5zdmcvMTI4MHB4LURvd25sb2FkX29uX3RoZV9BcHBfU3RvcmVfQmFkZ2Uuc3ZnLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvNzgvR29vZ2xlX1BsYXlfU3RvcmVfYmFkZ2VfRU4uc3ZnLzEyODBweC1Hb29nbGVfUGxheV9TdG9yZV9iYWRnZV9FTi5zdmcucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvbl9fZGV0YWlsc19fdGV4dFwiPlxuICAgICAgICA8cD5BdCBabW9veiwgdGhlcmUgaXMgbm8gbGltaXRzIGZvciBzdG9yaWVzIGNyZWF0b3JzOjwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5DcmVhdGUgdW5saW1pdGVkIHN0b3JpZXMgdmVyeSBlYXNpbHk8L2xpPlxuICAgICAgICAgIDxsaT5WaWRlb3MgY2FuIGJlIGFzIGxvbmcgYXMgeW91IHdpc2g8L2xpPlxuICAgICAgICAgIDxsaT5Zb3VyIHN0b3JpZXMgbGFzdCBmb3JldmVyIChhbmQgbm90IG9uZSBkYXkg4oCmKTwvbGk+XG4gICAgICAgICAgPGxpPkVtYmVkIHN0b3JpZXMgb24geW91ciB3ZWJzaXRlICE8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICcjZmY0NzFlJyB9fT5cbiAgICAgICAgICBQcm9mcmVzc2lvbmFsIHB1Ymxpc2hlciBvciBhZHZlcnRpc2VyP1xuICAgICAgICA8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb250YWN0IHVzIHRvIGxlYXJuIGhvdyB0byBnZW5lcmF0ZSBuZXcgdmV2ZW51ZXMgd2l0aCB5b3VyIHN0b3JpZXMgIVxuICAgICAgICA8L3A+XG4gICAgICAgIDxoND5UcnkgYW5kIGVuam95IGl0IG5vdyAhPC9oND5cbiAgICAgICAgPGg0PlxuICAgICAgICAgIDxpPlxuICAgICAgICAgICAgPGI+LSBUaGUgWm1vb3ogVGVhbTwvYj5cbiAgICAgICAgICA8L2k+XG4gICAgICAgIDwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmludHJvZHVjdGlvbiB7XG4gICAgICAgICAgd2lkdGg6IDI2LjglO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19oZWFkIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjODc4ZGEzO1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2hlYWQgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjM2Y0NzZiO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvZHVjdGlvbl9faGVhZCBhOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2NvbnRlbnQgLmludHJvZHVjdGlvbl9fbG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvZHVjdGlvbl9fY29udGVudCAuaW50cm9kdWN0aW9uX19sb2dvIGEge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2NvbnRlbnQgLmludHJvZHVjdGlvbl9fbmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19jb250ZW50IC5pbnRyb2R1Y3Rpb25fX2ltZyB7XG4gICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19kZXRhaWxzIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvZHVjdGlvbl9fZGV0YWlsc19fdGl0bGUge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvZHVjdGlvbl9fZGV0YWlsc19fdGl0bGUgaDQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2RldGFpbHMgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2RldGFpbHNfX2ltZ3N0b3JlIHtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2RldGFpbHNfX2ltZ3N0b3JlIGEge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19kZXRhaWxzX190ZXh0IHtcbiAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnRyb2R1Y3Rpb25fX2RldGFpbHNfX3RleHQgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMTlweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19kZXRhaWxzX190ZXh0IHVsIGxpIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm9kdWN0aW9uX19kZXRhaWxzX190ZXh0IHVsIGxpOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfigKInO1xuICAgICAgICAgIGNvbG9yOiAjZmY0NzFlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvZHVjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/luxstay/Desktop/zmooz/components/Introduction/index.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Introduction */ "./components/Introduction/index.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import DefaultCon from '../containers/Default';

 // export default (props => <DefaultCon {...props} />) as React.FC<{}>;

function Blog() {
  return __jsx(_components_Introduction__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luxstay/Desktop/zmooz/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map