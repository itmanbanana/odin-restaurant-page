/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.png */ \"./src/images/bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n\n    --col-light: #F0F4F1;\n    --col-light-green: #C5CDC7;\n    --col-green: #9DA69F;\n    --col-dark-green: #565D56;\n    --col-dark: #383B39;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n\n    min-height: 100vh;\n}\n\nbody::before {\n    content: \"\";\n    display: block;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: -1;\n    background-color: rgba(239, 244, 240, 0.6);\n}\n\nbutton {\n    appearance: none;\n    border: none;\n    outline: none;\n    background: none;\n\n    font-size: 1rem;\n}\n\nheader {\n    width: 100%;\n    border-bottom: 0.125rem solid var(--col-dark-green);\n}\n\nnav {\n    padding-top: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: min(5vw, 6rem);\n\n    background-color: var(--col-light-green);\n\n    width: 100%;\n}\n\nnav button {\n    font-size: 1.5rem;\n    padding: 0.5rem 1.5rem;\n\n    background-color: var(--col-green);\n    color: var(--col-dark-green);\n\n    border-top: 0.125rem solid var(--col-dark-green);\n    border-left: 0.125rem solid var(--col-dark-green);\n    border-right: 0.125rem solid var(--col-dark-green);\n\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n}\n\nnav button:hover {\n    background-color: var(--col-dark-green);\n    color: var(--col-green);\n\n    border-top: 0.125rem solid var(--col-green);\n    border-left: 0.125rem solid var(--col-green);\n    border-right: 0.125rem solid var(--col-green);\n\n}\n\n.main {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n#content {\n    margin: 3rem 0;\n    padding: 2rem;\n\n    background-color: var(--col-light-green);\n\n    display: flex;\n    \n    max-width: min(60vw, 80ch);\n    \n    min-height: 100%;\n    flex: 1;\n\n    border-radius: 1rem;\n\n    color: var(--col-dark);\n\n    border: 0.125rem solid var(--col-dark-green);\n\n    line-height: 1.5;\n}\n\ndiv img {\n    width: 100%;\n}\n\n.heading {\n    padding: 3rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 3rem;\n    font-weight: bold;\n    color: var(--col-dark);\n}\n\n.subheading {\n    margin-top: 2rem;\n    margin-bottom: 0.5rem;\n\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: var(--col-dark);\n}\n\n.description {\n    color: var(--col-dark-green);\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n\n    gap: 0.5rem;\n\n    margin: 1rem 0;\n}\n\n.menu-item-name {\n    font-size: 1.25rem;\n    font-weight: 500;\n}\n\n.menu-item-description {\n    color: var(--col-dark-green);\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 1.5rem 0;\n\n    background-color: var(--col-light-green);\n    color: var(--col-dark-green);\n    border-top: 0.125rem solid var(--col-dark-green);\n\n    font-size: 1.125rem;\n\n    width: 100%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/bg.png"
/*!***************************!*\
  !*** ./src/images/bg.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"11d752af3c88b94b095b.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/bg.png?\n}");

/***/ },

/***/ "./src/images/logo.png"
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"81957e8a48db063ac056.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/logo.png?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page.js */ \"./src/pages/home-page.js\");\n/* harmony import */ var _pages_menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu-page.js */ \"./src/pages/menu-page.js\");\n/* harmony import */ var _pages_contact_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-page.js */ \"./src/pages/contact-page.js\");\n\n\n\n\nconst page = (() => {\n    const contentDiv = document.querySelector(\"#content\");\n    const homeNavButton = document.querySelector(\".nav-home\");\n    const menuNavButton = document.querySelector(\".nav-menu\");\n    const contactNavButton = document.querySelector(\".nav-contact\");\n    const loadPage = (page) => {\n        let pageDiv;\n        switch (page) {\n            case \"home\":\n                pageDiv = _pages_home_page_js__WEBPACK_IMPORTED_MODULE_1__.homeDiv;\n                break;\n            case \"menu\":\n                pageDiv = _pages_menu_page_js__WEBPACK_IMPORTED_MODULE_2__.menuDiv;\n                break;\n            case \"contact\":\n                pageDiv = _pages_contact_page_js__WEBPACK_IMPORTED_MODULE_3__.contactDiv;\n                break;\n            default: pageDiv = document.createElement(\"div\");\n        }\n        contentDiv.innerHTML = \"\";\n        contentDiv.appendChild(pageDiv);\n    };\n    homeNavButton.addEventListener(\"click\", (e) => { e.preventDefault(); loadPage(\"home\"); });\n    menuNavButton.addEventListener(\"click\", (e) => { e.preventDefault(); loadPage(\"menu\"); });\n    contactNavButton.addEventListener(\"click\", (e) => { e.preventDefault(); loadPage(\"contact\"); });\n    // load homepage by default\n    contentDiv.appendChild(_pages_home_page_js__WEBPACK_IMPORTED_MODULE_1__.homeDiv);\n    return { loadPage };\n})();\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/pages/contact-page.js"
/*!***********************************!*\
  !*** ./src/pages/contact-page.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactDiv: () => (/* binding */ contactDiv)\n/* harmony export */ });\nconst contactDiv = document.createElement(\"div\");\nconst contactHeadingDiv = document.createElement(\"div\");\ncontactHeadingDiv.innerHTML = `\n    <div class=\"heading\">Contact Us</div>\n    <p class=\"description\">\n    We’d love to hear from you! Whether you’re making a reservation, \n    planning a private event, or just have a question about our menu, \n    our team is here to help.\n    </p>\n`;\nconst contactPhoneDiv = document.createElement(\"div\");\ncontactPhoneDiv.innerHTML = `\n    <div class=\"subheading\">📞 Call Us</div>\n    <p>Phone: <b>(555) 123-4567</b></p>\n`;\nconst contactEmailDiv = document.createElement(\"div\");\ncontactEmailDiv.innerHTML = `\n    <div class=\"subheading\">📧 Email Us</div>\n    <p>Email: <b>info@savoryhaven.com</b></p>\n    <br>\n    <p class=\"description\">We aim to respond to all inquiries within 24-48 hours.</p>\n`;\ncontactDiv.appendChild(contactHeadingDiv);\ncontactDiv.appendChild(contactPhoneDiv);\ncontactDiv.appendChild(contactEmailDiv);\n\n//# sourceMappingURL=contact-page.js.map\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/contact-page.js?\n}");

/***/ },

/***/ "./src/pages/home-page.js"
/*!********************************!*\
  !*** ./src/pages/home-page.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeDiv: () => (/* binding */ homeDiv)\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n\nconst homeDiv = document.createElement(\"div\");\nconst homeHeadingDiv = document.createElement(\"div\");\nhomeHeadingDiv.innerHTML = `\n    <p class=\"description\">\n    At Savory Haven, we bring people together over fresh ingredients, bold flavors, \n    and warm hospitality. Whether you're joining us for a casual lunch, a cozy dinner, \n    or a weekend celebration, our menu is crafted to make every visit memorable.\n    </p>\n`;\nconst myLogo = new Image();\nmyLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\nhomeDiv.appendChild(myLogo);\nconst homeAboutDiv = document.createElement(\"div\");\nhomeAboutDiv.innerHTML = `\n    <div class=\"subheading\">About Us</div>\n    <p class=\"description\">\n    We’re a neighborhood restaurant focused on seasonal dishes, locally sourced \n    produce, and house-made specialties. From comforting classics to modern favorites, \n    there’s something for everyone at the table.\n    </p>\n`;\nconst homeHoursDiv = document.createElement(\"div\");\nhomeHoursDiv.innerHTML = `\n    <div class=\"subheading\">Business Hours</div>\n    <p>\n    <b>Monday - Thursday:</b> 11:00 AM - 9:00 PM\n    </p>\n    <p>\n    <b>Friday:</b> 11:00 AM - 10:00 PM\n    </p>\n    <p>\n    <b>Saturday:</b> 10:00 AM - 10:00 PM\n    </p>\n    <p>\n    <b>Sunday:</b> 10:00 AM - 8:00 PM\n    </p>\n    <br>\n    <p class=\"description\">Brunch served Saturday & Sunday from 10:00 AM - 2:00 PM</p>\n`;\nconst homeLocationDiv = document.createElement(\"div\");\nhomeLocationDiv.innerHTML = `\n    <div class=\"subheading\">Location</div>\n    <p>123 Maple Street</p>\n    <p>Downtown District</p>\n    <p>Springfield, ST 12345</p>\n    <br>\n    <p class=\"description\">Convenient street parking available. We look forward to welcoming you soon!</p>\n`;\nhomeDiv.appendChild(homeHeadingDiv);\nhomeDiv.appendChild(homeAboutDiv);\nhomeDiv.appendChild(homeHoursDiv);\nhomeDiv.appendChild(homeLocationDiv);\n\n//# sourceMappingURL=home-page.js.map\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/home-page.js?\n}");

/***/ },

/***/ "./src/pages/menu-page.js"
/*!********************************!*\
  !*** ./src/pages/menu-page.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuDiv: () => (/* binding */ menuDiv)\n/* harmony export */ });\nconst menuDiv = document.createElement(\"div\");\nconst menuHeadingDiv = document.createElement(\"div\");\nmenuHeadingDiv.innerHTML = `\n    <div class=\"heading\">Our Menu</div>\n    <p class=\"description\">Fresh ingredients. Thoughtful preparation. Unforgettable flavour.</p>\n`;\nconst menuStartersDiv = document.createElement(\"div\");\nmenuStartersDiv.innerHTML = `\n    <div class=\"subheading\">🥗 Starters</div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">House Garden Salad - $9</div>\n        <div class=\"menu-item-description\">Mixed greens, cherry tomatoes, cucumbers, \n        red onions, house vinaigrette.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Crispy Calamari - $13</div>\n        <div class=\"menu-item-description\">Lightly breaded calamari, lemon aioli, \n        marinara sauce.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Spinach & Artichoke Dip - $11</div>\n        <div class=\"menu-item-description\">Creamy blend of cheeses, served warm with toasted \n        baguette slices.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Soup of the Day - $7</div>\n        <div class=\"menu-item-description\">Chef’s daily seasonal creation. Ask your server for \n        today’s selection.</div>\n    </div>\n`;\nconst menuMainsDiv = document.createElement(\"div\");\nmenuMainsDiv.innerHTML = `\n    <div class=\"subheading\">🍝 Main Courses</div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Grilled Lemon Herb Chicken - $19</div>\n        <div class=\"menu-item-description\">Marinated chicken breast, roasted vegetables, garlic mashed potatoes.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Classic Cheeseburger - $16</div>\n        <div class=\"menu-item-description\">Angus beef patty, cheddar cheese, lettuce, tomato, brioche bun. Served with fries.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Pan-Seared Salmon - $23</div>\n        <div class=\"menu-item-description\">Fresh salmon fillet, wild rice, sautéed asparagus, dill cream sauce.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Vegetable Primavera - $17</div>\n        <div class=\"menu-item-description\">Seasonal vegetables tossed with penne pasta in a light garlic olive oil sauce.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Steak Frites - $25</div>\n        <div class=\"menu-item-description\">Grilled sirloin, herb butter, crispy fries.</div>\n    </div>\n`;\nconst menuBreadsDiv = document.createElement(\"div\");\nmenuBreadsDiv.innerHTML = `\n    <div class=\"subheading\">🍕 From the Oven</div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Margherita Pizza - $15</div>\n        <div class=\"menu-item-description\">Fresh mozzarella, basil, house tomato sauce.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">BBQ Chicken Pizza - $17</div>\n        <div class=\"menu-item-description\">Grilled chicken, red onions, mozzarella, tangy BBQ sauce.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Roasted Veggie Flatbread - $14</div>\n        <div class=\"menu-item-description\">Zucchini, bell peppers, red onions, feta cheese.</div>\n    </div>\n`;\nconst menuDessertsDiv = document.createElement(\"div\");\nmenuDessertsDiv.innerHTML = `\n    <div class=\"subheading\">🍰 Desserts</div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Chocolate Lava Cake - $9</div>\n        <div class=\"menu-item-description\">Warm chocolate cake with a molten center, served with vanilla ice cream.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Classic Cheesecake - $8</div>\n        <div class=\"menu-item-description\">Creamy cheesecake with a graham cracker crust and berry compote.</div>\n    </div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Tiramisu - $8</div>\n        <div class=\"menu-item-description\">Espresso-soaked ladyfingers layered with mascarpone cream.</div>\n    </div>\n`;\nconst menuDrinksDiv = document.createElement(\"div\");\nmenuDrinksDiv.innerHTML = `\n    <div class=\"subheading\">☕ Beverages</div>\n    <div class=\"menu-item\">\n        <div class=\"menu-item-name\">Freshly Brewed Coffee - $3.50</div>\n        <div class=\"menu-item-name\">Assorted Teas - $3.50</div>\n        <div class=\"menu-item-name\">Sparkling Water - $3</div>\n        <div class=\"menu-item-name\">Soft Drinks - $4</div>\n        <div class=\"menu-item-name\">House Wine (Red/White) - $9 (glass) / $30 (bottle)</div>\n        <div class=\"menu-item-name\">Local Craft Beer - $8</div>\n    </div>\n`;\nconst menuAllergyDiv = document.createElement(\"div\");\nmenuAllergyDiv.innerHTML = `\n<br>\n<p class=\"description\"><i>Please inform your server of any allergies or dietary restrictions. \nVegetarian and gluten-free options available upon request.</i></p>\n`;\nmenuDiv.appendChild(menuHeadingDiv);\nmenuDiv.appendChild(menuStartersDiv);\nmenuDiv.appendChild(menuMainsDiv);\nmenuDiv.appendChild(menuBreadsDiv);\nmenuDiv.appendChild(menuDessertsDiv);\nmenuDiv.appendChild(menuDrinksDiv);\nmenuDiv.appendChild(menuAllergyDiv);\n\n//# sourceMappingURL=menu-page.js.map\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/menu-page.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;