(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var FixedConverter = (function () {
    function FixedConverter() {
    }
    FixedConverter.prototype.convertFromPicker = function (input, previousOutput) {
        if (input === undefined) {
            return {};
        }
        if (input.month === undefined || input.day === undefined) {
            if (input.month !== undefined || input.day !== undefined) {
                throw new Error("Fixed calendar converter can't be used with model that has month and day, but not both.");
            }
            return input;
        }
        var year = input.year === undefined ? 2017 : input.year;
        var month = input.month;
        var day = (month - 1) * 28 + input.day;
        if (isYearLeap(year) && month > 6) {
            day++;
        }
        month = 1;
        var daysInMonths = [31, isYearLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (var m = 0; m < 12; m++) {
            if (day > daysInMonths[m]) {
                day -= daysInMonths[m];
                month++;
            }
            else {
                break;
            }
        }
        return __assign({}, (previousOutput || {}), input, { month: month, day: day });
    };
    FixedConverter.prototype.convertToPicker = function (input) {
        if (input === undefined) {
            return {};
        }
        if (input.month === undefined || input.day === undefined) {
            if (input.month !== undefined || input.day !== undefined) {
                throw new Error("Fixed calendar converter can't be used with model that has month and day, but not both.");
            }
            return input;
        }
        var year = input.year === undefined ? 2017 : input.year;
        var month = input.month;
        var day = input.day + [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].slice(0, month - 1).reduce(function (a, b) { return a + b; }, 0);
        if (isYearLeap(year) && month > 2) {
            day++;
        }
        month = 1;
        for (var m = 0; m < 13; m++) {
            var daysInMonth = ((isYearLeap(year) && m === 5) || m === 12) ? 29 : 28;
            if (day > daysInMonth) {
                day -= daysInMonth;
                month++;
            }
            else {
                break;
            }
        }
        return __assign({}, input, { month: month, day: day });
    };
    return FixedConverter;
}());
exports["default"] = FixedConverter;
function isYearLeap(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(3);
var converter_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpConverterFixed", converter_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var converter_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = converter_1["default"];


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});