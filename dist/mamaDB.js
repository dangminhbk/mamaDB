(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mamaDB", [], factory);
	else if(typeof exports === 'object')
		exports["mamaDB"] = factory();
	else
		root["mamaDB"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Instance/mamadb.js":
/*!********************************!*\
  !*** ./src/Instance/mamadb.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar mamadb =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * Constructor\r\n   */\n  function mamadb() {\n    _classCallCheck(this, mamadb);\n\n    this.urlStore = new Map();\n  }\n  /**\r\n   * get new file with corresponse url and file's name\r\n   * @param {String} url \r\n   * @param {String} filename \r\n   */\n\n\n  _createClass(mamadb, [{\n    key: \"getUrl\",\n    value: function getUrl(url, filename) {\n      return Prosmise(function (resolve, reject) {\n        if (_typeof(url) === String) {\n          fetch(urlToFetch).then(function (dat) {\n            return dat.blob();\n          }).then(function (dat) {\n            return resolve(new File([dat], filename));\n          })[\"catch\"](function (err) {\n            return reject(err);\n          });\n        }\n\n        return reject(new Error(\"Url not a string\"));\n      });\n    }\n    /**\r\n     * Get item with correspond key\r\n     * @param {String} key \r\n     */\n\n  }, {\n    key: \"getItem\",\n    value: function getItem(key) {\n      if (typeof key !== \"string\") {\n        return new Error(\"Key is not a string\");\n      }\n\n      var urlToFetch = this.urlStore.get(key);\n\n      if (urlToFetch === undefined) {\n        return new Error(\"Unable to get item\");\n      } // Valid key\n\n\n      if (urlToFetch) {\n        this.getUrl(urlToFetch).then(function (value) {\n          return value;\n        })[\"catch\"](function (err) {\n          console.log(err);\n          return err;\n        });\n      }\n    }\n    /**\r\n     * Put item to mamadb\r\n     * @param {File} file \r\n     * @param {String} key \r\n     */\n\n  }, {\n    key: \"putItem\",\n    value: function putItem(file, key) {\n      if (typeof key !== \"string\" || key === null) {\n        return new Error(\"invalid type\");\n      }\n\n      if (typeof file !== \"File\" || file === null) {\n        return new Error(\"invalid type\");\n      }\n\n      url = URL.createObjectURL(file);\n      this.urlStore.set(key, url);\n      return;\n    }\n  }]);\n\n  return mamadb;\n}();\n\nmodule.exports = mamadb;\n\n//# sourceURL=webpack://mamaDB/./src/Instance/mamadb.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./Instance/mamadb */ \"./src/Instance/mamadb.js\");\n\n//# sourceURL=webpack://mamaDB/./src/index.js?");

/***/ })

/******/ });
});