/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-bg: #111111;
  --bg-light: #e8e8e8;
  --surface: #222;
  --surface-light: hsl(237, 10%, 83%);
  --txt-light: #e9e9e9;
  --txt-dark: #090909;
  --txt-low-contrast: #222;
  --accent: #f5a8bc;
}

body { 
  margin: 0; padding: 0;
  font-family: 'Poppins', Helvetica, sans-serif;
  color: var(--txt-dark);
  background-color: var(--bg-light);
}

p {
  font-size: 1.05rem;
}

* {
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: center;
  gap: 12px;

  background-color: var(--surface);
  padding: 15px 45px;
}

header .logo {
  margin-right: auto;
}

header span.tab {
  cursor: pointer;
  color: var(--txt-light);
  text-decoration: none;
  margin: 0 1vw;
  font:1.1rem 'Playfair Display', 'Times New Roman', Times, serif;
}

#hero {
  height: 52vh;
  color: var(--txt-light);

  padding: 64px clamp(48px, 10vw,128px);
  display: grid;
  gap: 18px;
  align-content: center;
  justify-items: start;
}

#hero h1 {
  margin: 0;
  font-family: 'Playfair Display', Times, serif;
}

#hero em {
  color: #f5a8bc;
}

#menu h3, p {
  margin: 0.5rem 2rem;
  color: var(--txt-low-contrast);
}

button {
  border-radius: 8px;
  padding: 12px 32px;
  font: bold 1em 'Poppins';
}

button.filled {
  border: none;
  background-color: var(--txt-light);
  color: var(--main-bg);
}

button.outlined {
  border: 2px solid var(--txt-light, white);
  background-color: transparent;
  color: var(--txt-light, white);
  box-shadow: 3px 3px #e9e9e9;
}

section:not(#hero) {
  padding: 0 clamp(48px, 20vw, 300px);
  margin: 72px 0;
}

.card {
  background-color: var(--surface-light);
  padding: 32px 48px;
  margin: 56px 0;
  border-radius: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.card * {
  margin: 0;
}

.card > img {
  width: 100px;
  height: 100px;
  flex: none;
  margin: 0 auto;
}

.card > .content {
  flex: 1;
  min-width: 200px;
}

.card .role {
  color: var(--txt-low-contrast);
  margin-bottom: 12px;
}

img.circle {
  border-radius: 50%;
}

/* Global text  */

h1 {
  font-size: 2rem;
  font-family: 'Playfair Display', 'Times New Roman', Times, serif;
}
h4 {
  font-size: 1rem;
  font-weight: 600;
}



/* footer template style start*/
footer {
  display: grid;
  place-items: center;
  background-color: var(--surface-color, #222222);

  padding: 36px 0;
  gap: 24px;
}

footer a {
  text-decoration: none;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 150ms ease-in-out;
}

footer a:hover {
  scale: 1.1;
}

footer ion-icon {
  color: var(--main-txt, #fefefe);
  font-size: 40px;
}
/* footer template style end */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,mCAAmC;EACnC,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,SAAS,EAAE,UAAU;EACrB,6CAA6C;EAC7C,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;EAET,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,+DAA+D;AACjE;;AAEA;EACE,YAAY;EACZ,uBAAuB;;EAEvB,qCAAqC;EACrC,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,6CAA6C;AAC/C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC,6BAA6B;EAC7B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,gEAAgE;AAClE;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;;;AAIA,+BAA+B;AAC/B;EACE,aAAa;EACb,mBAAmB;EACnB,+CAA+C;;EAE/C,eAAe;EACf,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,eAAe;AACjB;AACA,8BAA8B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --main-bg: #111111;\n  --bg-light: #e8e8e8;\n  --surface: #222;\n  --surface-light: hsl(237, 10%, 83%);\n  --txt-light: #e9e9e9;\n  --txt-dark: #090909;\n  --txt-low-contrast: #222;\n  --accent: #f5a8bc;\n}\n\nbody { \n  margin: 0; padding: 0;\n  font-family: 'Poppins', Helvetica, sans-serif;\n  color: var(--txt-dark);\n  background-color: var(--bg-light);\n}\n\np {\n  font-size: 1.05rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  background-color: var(--surface);\n  padding: 15px 45px;\n}\n\nheader .logo {\n  margin-right: auto;\n}\n\nheader span.tab {\n  cursor: pointer;\n  color: var(--txt-light);\n  text-decoration: none;\n  margin: 0 1vw;\n  font:1.1rem 'Playfair Display', 'Times New Roman', Times, serif;\n}\n\n#hero {\n  height: 52vh;\n  color: var(--txt-light);\n\n  padding: 64px clamp(48px, 10vw,128px);\n  display: grid;\n  gap: 18px;\n  align-content: center;\n  justify-items: start;\n}\n\n#hero h1 {\n  margin: 0;\n  font-family: 'Playfair Display', Times, serif;\n}\n\n#hero em {\n  color: #f5a8bc;\n}\n\n#menu h3, p {\n  margin: 0.5rem 2rem;\n  color: var(--txt-low-contrast);\n}\n\nbutton {\n  border-radius: 8px;\n  padding: 12px 32px;\n  font: bold 1em 'Poppins';\n}\n\nbutton.filled {\n  border: none;\n  background-color: var(--txt-light);\n  color: var(--main-bg);\n}\n\nbutton.outlined {\n  border: 2px solid var(--txt-light, white);\n  background-color: transparent;\n  color: var(--txt-light, white);\n  box-shadow: 3px 3px #e9e9e9;\n}\n\nsection:not(#hero) {\n  padding: 0 clamp(48px, 20vw, 300px);\n  margin: 72px 0;\n}\n\n.card {\n  background-color: var(--surface-light);\n  padding: 32px 48px;\n  margin: 56px 0;\n  border-radius: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.card * {\n  margin: 0;\n}\n\n.card > img {\n  width: 100px;\n  height: 100px;\n  flex: none;\n  margin: 0 auto;\n}\n\n.card > .content {\n  flex: 1;\n  min-width: 200px;\n}\n\n.card .role {\n  color: var(--txt-low-contrast);\n  margin-bottom: 12px;\n}\n\nimg.circle {\n  border-radius: 50%;\n}\n\n/* Global text  */\n\nh1 {\n  font-size: 2rem;\n  font-family: 'Playfair Display', 'Times New Roman', Times, serif;\n}\nh4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n\n\n/* footer template style start*/\nfooter {\n  display: grid;\n  place-items: center;\n  background-color: var(--surface-color, #222222);\n\n  padding: 36px 0;\n  gap: 24px;\n}\n\nfooter a {\n  text-decoration: none;\n  font-size: 1.2rem;\n\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 150ms ease-in-out;\n}\n\nfooter a:hover {\n  scale: 1.1;\n}\n\nfooter ion-icon {\n  color: var(--main-txt, #fefefe);\n  font-size: 40px;\n}\n/* footer template style end */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ "./src/dom-manager.js");
/* harmony import */ var _img_hero_contact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hero-contact.jpg */ "./src/img/hero-contact.jpg");
 

;


const Main = document.createElement('main');

Main.append(
  Hero(),
  Contact()
)

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 75%)`
  background += `, center / cover url(${_img_hero_contact_jpg__WEBPACK_IMPORTED_MODULE_1__})`

  output.style.background = background;

  const text = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  output.append( text);

  return output;
}

function Contact(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Contact Us'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Email'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('booking@fakerestaurant.com'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Cellphone'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('123-456-7890'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Instagram / Facebook'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('@kens.mojo.dojo')
  )

  return output
}

/***/ }),

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   paragraph: () => (/* binding */ paragraph),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   write: () => (/* binding */ write)
/* harmony export */ });


function create(type, cls){
  const output = document.createElement(type);
  if( cls ) output.classList.add(cls);
  return output;
}

function paragraph( text ) {
  const output = document.createElement('p');
  output.textContent = text;
  return output;
}

function title( text ){
  const output = document.createElement('h1');
  output.textContent = text;
  return output;
}

function write( type, text ){
  const output = document.createElement(type);
  output.textContent = text;
  return output
}

/***/ }),

/***/ "./src/dom-setup.js":
/*!**************************!*\
  !*** ./src/dom-setup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setMainContent: () => (/* binding */ setMainContent),
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _img_logoipsum_287_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logoipsum-287.svg */ "./src/img/logoipsum-287.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







let Main = _home__WEBPACK_IMPORTED_MODULE_2__.Main;

function setMainContent( element ){
  Main.replaceWith(element);
  Main = element
}

const setup = () => {
  const root = document.getElementById('content');

  root.append(
    Header(),
    Main,
    (0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  );
}

function Header(){
  const output = document.createElement('header');

  const logo = create('img', 'logo');
  logo.src = _img_logoipsum_287_svg__WEBPACK_IMPORTED_MODULE_1__;
  logo.alt = '';

  const nav = create('nav');
  nav.append(
    tabElement('Home'),
    tabElement('Menu'),
    tabElement('Contact')
  )

  output.append(logo, nav);
  return output;
}

function create(type, cls) {
  const output = document.createElement(type);
  if (cls) output.classList.add(cls);
  return output;
}

function tabElement( text ){
  const output = document.createElement('span');
  output.classList.add('tab');
  output.textContent = text;
  output.id = text.toLowerCase().replace(' ', '');
  return output;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

function createFooter() {
  const root = document.createElement('footer');
  const link = document.createElement('a');
  link.href = '';
  link.target = '_blank';

  const icon = document.createElement('ion-icon');
  icon.name = 'logo-github'
  icon.role = 'img'
  icon.classList.add('md', 'hydrated')

  const text = document.createElement('span');
  text.textContent = 'f-Rodeh'

  link.append(icon, text)

  root.append(link);
  return root;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ "./src/dom-manager.js");
/* harmony import */ var _img_hero_food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hero-food2.jpg */ "./src/img/hero-food2.jpg");





const Main = document.createElement('main');

Main.append(
  Hero(),
  About(),
  Hours(),
  Location(),
)

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 75%)`
  background += `, 0% 50% / cover url(${_img_hero_food2_jpg__WEBPACK_IMPORTED_MODULE_1__})`

  output.style.background = background;

  const text = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  const button = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('button', 'outlined');
  button.textContent = 'Go to menu'

  output.append( text, button );

  return output;
}

function About(){
  const output = document.createElement('section');
  output.id = 'about';

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('About Us'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('This is a fake restaurant, with a delicious gastronomic approach. Created in Guatemala in 2023, it has the purpose of defying all that is known, creating a site with the complicated tool "webpack"'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Come taste a unique experience that merges flavour and art! Are you ready?'),
    Card()
  )

  return output;
}

function Hours(){
  const output = document.createElement('section');
  output.id = 'hours';

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Hours'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Tuesday — Friday from 18:00 to 00:00'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Weekends from 20:00 to 02:00')
  )

  return output;
}

function Location(){
  const output = document.createElement('section');
  output.id = 'location';

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Location'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('P. Sherman, 42 Wallaby Way, Sydney'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Just keep swimming ;)')
  )

  return output;
}

function Card(){
  const output = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('div', 'card');

  const img = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('img', 'circle');
  img.src = 'https://randomuser.me/api/portraits/men/11.jpg';
  img.alt = '';

  const name = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('h3', 'name');
  const role = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('h4', 'role');

  name.textContent = 'Hugh Mann';
  role.textContent = 'Founder';

  const content = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('div', 'content');
  content.append(
    name,
    role,
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('I love innovating. This restaurant has been in my mind ever since I learnt how to cook. You do not need to know about webpack to know good food')
  )

  output.append(img, content)

  return output;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ "./src/dom-manager.js");
/* harmony import */ var _img_hero_menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hero-menu.jpg */ "./src/img/hero-menu.jpg");
 

;


const Main = document.createElement('main');

Main.append(
  Hero(),
  Starters(),
  Dishes(),
  Desserts(),
  Cocktails()
)

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 75%)`
  background += `, center / cover url(${_img_hero_menu_jpg__WEBPACK_IMPORTED_MODULE_1__})`

  output.style.background = background;

  const text = (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.create)('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  output.append( text);

  return output;
}

function Starters(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Starters'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Pisces'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Served with back-end sauce'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Sagitarium'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Marinated in cold December'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Gemini'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Twined and steam cooked')
  )

  return output
}

function Dishes(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Main Dishes'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Jupiter'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Biggest planet on the solar system'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Mars'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Venus'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('The densest atmosphere of all the rocky bodies in the Solar System'),
  )

  return output
}

function Desserts(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Desserts'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Shinjuku'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Buzzing clubs and karaoke rooms of neon-lit in the Skyscraper District'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Shibuya'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('A major commercial and finance center'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Shimokita'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Narrow, mural-painted lanes lined with stylish stores for vintage clothes and vinyl')
  )

  return output
}

function Cocktails(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.title)('Cocktails'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Freyja'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Love, beauty, fertility, sex, war, gold, and seiðr. Freyja is the owner of the necklace Brísingamen and rides a chariot pulled by two cats.'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Valkyrie'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('A female spirit that decides if warriors die or survive. If they are worthy, she guides them to Valhalla.'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.write)('h3', 'Heimdall'),
    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.paragraph)('Keeps watch for invaders and the onset of Ragnarök from his dwelling Himinbjörg, where the burning rainbow bridge Bifröst meets the sky.'),
  )

  return output
}


/***/ }),

/***/ "./src/img/hero-contact.jpg":
/*!**********************************!*\
  !*** ./src/img/hero-contact.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a545d4d0a80d9813949.jpg";

/***/ }),

/***/ "./src/img/hero-food2.jpg":
/*!********************************!*\
  !*** ./src/img/hero-food2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5082556384fa0b1b0e75.jpg";

/***/ }),

/***/ "./src/img/hero-menu.jpg":
/*!*******************************!*\
  !*** ./src/img/hero-menu.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f80772b2c05fdf0c7eb.jpg";

/***/ }),

/***/ "./src/img/logoipsum-287.svg":
/*!***********************************!*\
  !*** ./src/img/logoipsum-287.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "005f45a3e35ae0c7415b.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-setup */ "./src/dom-setup.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







(0,_dom_setup__WEBPACK_IMPORTED_MODULE_0__.setup)();

const tabs = document.querySelectorAll('header .tab');

function navigate( id ) {
  const route = 
    id === 'home' ? _home__WEBPACK_IMPORTED_MODULE_2__.Main :
    id === 'menu' ? _menu__WEBPACK_IMPORTED_MODULE_3__.Main :
    id === 'contact' ? _contact__WEBPACK_IMPORTED_MODULE_4__.Main:
    null

  if( route === null ) return;
  (0,_dom_setup__WEBPACK_IMPORTED_MODULE_0__.setMainContent)( route );
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    navigate(tab.id)
  })
})

const heroNav = document.querySelector('#hero button');
heroNav.addEventListener('click', () => { (0,_dom_setup__WEBPACK_IMPORTED_MODULE_0__.setMainContent)(_menu__WEBPACK_IMPORTED_MODULE_3__.Main) })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZG9tLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2RvbS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWJnOiAjMTExMTExO1xuICAtLWJnLWxpZ2h0OiAjZThlOGU4O1xuICAtLXN1cmZhY2U6ICMyMjI7XG4gIC0tc3VyZmFjZS1saWdodDogaHNsKDIzNywgMTAlLCA4MyUpO1xuICAtLXR4dC1saWdodDogI2U5ZTllOTtcbiAgLS10eHQtZGFyazogIzA5MDkwOTtcbiAgLS10eHQtbG93LWNvbnRyYXN0OiAjMjIyO1xuICAtLWFjY2VudDogI2Y1YThiYztcbn1cblxuYm9keSB7IFxuICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLXR4dC1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UpO1xuICBwYWRkaW5nOiAxNXB4IDQ1cHg7XG59XG5cbmhlYWRlciAubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaGVhZGVyIHNwYW4udGFiIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDAgMXZ3O1xuICBmb250OjEuMXJlbSAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbiNoZXJvIHtcbiAgaGVpZ2h0OiA1MnZoO1xuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcblxuICBwYWRkaW5nOiA2NHB4IGNsYW1wKDQ4cHgsIDEwdncsMTI4cHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE4cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG5cbiNoZXJvIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBUaW1lcywgc2VyaWY7XG59XG5cbiNoZXJvIGVtIHtcbiAgY29sb3I6ICNmNWE4YmM7XG59XG5cbiNtZW51IGgzLCBwIHtcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcbiAgY29sb3I6IHZhcigtLXR4dC1sb3ctY29udHJhc3QpO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMzJweDtcbiAgZm9udDogYm9sZCAxZW0gJ1BvcHBpbnMnO1xufVxuXG5idXR0b24uZmlsbGVkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG59XG5cbmJ1dHRvbi5vdXRsaW5lZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXR4dC1saWdodCwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXR4dC1saWdodCwgd2hpdGUpO1xuICBib3gtc2hhZG93OiAzcHggM3B4ICNlOWU5ZTk7XG59XG5cbnNlY3Rpb246bm90KCNoZXJvKSB7XG4gIHBhZGRpbmc6IDAgY2xhbXAoNDhweCwgMjB2dywgMzAwcHgpO1xuICBtYXJnaW46IDcycHggMDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcbiAgcGFkZGluZzogMzJweCA0OHB4O1xuICBtYXJnaW46IDU2cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDI0cHg7XG59XG5cbi5jYXJkICoge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkID4gaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbGV4OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQgPiAuY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5jYXJkIC5yb2xlIHtcbiAgY29sb3I6IHZhcigtLXR4dC1sb3ctY29udHJhc3QpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pbWcuY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBHbG9iYWwgdGV4dCAgKi9cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5oNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cbi8qIGZvb3RlciB0ZW1wbGF0ZSBzdHlsZSBzdGFydCovXG5mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yLCAjMjIyMjIyKTtcblxuICBwYWRkaW5nOiAzNnB4IDA7XG4gIGdhcDogMjRweDtcbn1cblxuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG5mb290ZXIgYTpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG5cbmZvb3RlciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dCwgI2ZlZmVmZSk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi8qIGZvb3RlciB0ZW1wbGF0ZSBzdHlsZSBlbmQgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUyxFQUFFLFVBQVU7RUFDckIsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsZ0VBQWdFO0FBQ2xFO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7O0FBSUEsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQ0FBK0M7O0VBRS9DLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjtBQUNBLDhCQUE4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLW1haW4tYmc6ICMxMTExMTE7XFxuICAtLWJnLWxpZ2h0OiAjZThlOGU4O1xcbiAgLS1zdXJmYWNlOiAjMjIyO1xcbiAgLS1zdXJmYWNlLWxpZ2h0OiBoc2woMjM3LCAxMCUsIDgzJSk7XFxuICAtLXR4dC1saWdodDogI2U5ZTllOTtcXG4gIC0tdHh0LWRhcms6ICMwOTA5MDk7XFxuICAtLXR4dC1sb3ctY29udHJhc3Q6ICMyMjI7XFxuICAtLWFjY2VudDogI2Y1YThiYztcXG59XFxuXFxuYm9keSB7IFxcbiAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXR4dC1kYXJrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZSk7XFxuICBwYWRkaW5nOiAxNXB4IDQ1cHg7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbmhlYWRlciBzcGFuLnRhYiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMCAxdnc7XFxuICBmb250OjEuMXJlbSAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNoZXJvIHtcXG4gIGhlaWdodDogNTJ2aDtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xcblxcbiAgcGFkZGluZzogNjRweCBjbGFtcCg0OHB4LCAxMHZ3LDEyOHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE4cHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2hlcm8gaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4jaGVybyBlbSB7XFxuICBjb2xvcjogI2Y1YThiYztcXG59XFxuXFxuI21lbnUgaDMsIHAge1xcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbG93LWNvbnRyYXN0KTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEycHggMzJweDtcXG4gIGZvbnQ6IGJvbGQgMWVtICdQb3BwaW5zJztcXG59XFxuXFxuYnV0dG9uLmZpbGxlZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG5idXR0b24ub3V0bGluZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHh0LWxpZ2h0LCB3aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQsIHdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggI2U5ZTllOTtcXG59XFxuXFxuc2VjdGlvbjpub3QoI2hlcm8pIHtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoNDhweCwgMjB2dywgMzAwcHgpO1xcbiAgbWFyZ2luOiA3MnB4IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xcbiAgcGFkZGluZzogMzJweCA0OHB4O1xcbiAgbWFyZ2luOiA1NnB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jYXJkID4gaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jYXJkID4gLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkIC5yb2xlIHtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbG93LWNvbnRyYXN0KTtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbmltZy5jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBHbG9iYWwgdGV4dCAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5oNCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG5cXG4vKiBmb290ZXIgdGVtcGxhdGUgc3R5bGUgc3RhcnQqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IsICMyMjIyMjIpO1xcblxcbiAgcGFkZGluZzogMzZweCAwO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG5mb290ZXIgaW9uLWljb24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LCAjZmVmZWZlKTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLyogZm9vdGVyIHRlbXBsYXRlIHN0eWxlIGVuZCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBNYWluIH0gXG5cbmltcG9ydCB7IGNyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZSwgd3JpdGUgfSBmcm9tICcuL2RvbS1tYW5hZ2VyJ1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZy9oZXJvLWNvbnRhY3QuanBnJ1xuXG5jb25zdCBNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG5NYWluLmFwcGVuZChcbiAgSGVybygpLFxuICBDb250YWN0KClcbilcblxuZnVuY3Rpb24gSGVybygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdoZXJvJztcblxuICBsZXQgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC44KSAzMCUsIHJnYmEoMCwwLDAsMCkgNzUlKWBcbiAgYmFja2dyb3VuZCArPSBgLCBjZW50ZXIgLyBjb3ZlciB1cmwoJHtJbWd9KWBcblxuICBvdXRwdXQuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgY29uc3QgdGV4dCA9IGNyZWF0ZSgnaDEnKTtcbiAgdGV4dC5pbm5lckhUTUwgPSAnPGVtPkFydDwvZW0+IGlzIGluIHRoZSA8ZW0+Zm9vZDwvZW0+Lic7XG5cbiAgb3V0cHV0LmFwcGVuZCggdGV4dCk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gQ29udGFjdCgpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0NvbnRhY3QgVXMnKSxcbiAgICB3cml0ZSgnaDMnLCAnRW1haWwnKSxcbiAgICBwYXJhZ3JhcGgoJ2Jvb2tpbmdAZmFrZXJlc3RhdXJhbnQuY29tJyksXG4gICAgd3JpdGUoJ2gzJywgJ0NlbGxwaG9uZScpLFxuICAgIHBhcmFncmFwaCgnMTIzLTQ1Ni03ODkwJyksXG4gICAgd3JpdGUoJ2gzJywgJ0luc3RhZ3JhbSAvIEZhY2Vib29rJyksXG4gICAgcGFyYWdyYXBoKCdAa2Vucy5tb2pvLmRvam8nKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dFxufSIsImV4cG9ydCB7IGNyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZSwgd3JpdGUgfVxuXG5mdW5jdGlvbiBjcmVhdGUodHlwZSwgY2xzKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYoIGNscyApIG91dHB1dC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHBhcmFncmFwaCggdGV4dCApIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBvdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB0aXRsZSggdGV4dCApe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBvdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB3cml0ZSggdHlwZSwgdGV4dCApe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBvdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gb3V0cHV0XG59IiwiaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1nL2xvZ29pcHN1bS0yODcuc3ZnJztcbmltcG9ydCB7IE1haW4gYXMgSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IE1haW4gYXMgTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IE1haW4gYXMgQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmV4cG9ydCB7c2V0dXAsIHNldE1haW5Db250ZW50fVxuXG5sZXQgTWFpbiA9IEhvbWU7XG5cbmZ1bmN0aW9uIHNldE1haW5Db250ZW50KCBlbGVtZW50ICl7XG4gIE1haW4ucmVwbGFjZVdpdGgoZWxlbWVudCk7XG4gIE1haW4gPSBlbGVtZW50XG59XG5cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICByb290LmFwcGVuZChcbiAgICBIZWFkZXIoKSxcbiAgICBNYWluLFxuICAgIGNyZWF0ZUZvb3RlcigpLFxuICApO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgbG9nbyA9IGNyZWF0ZSgnaW1nJywgJ2xvZ28nKTtcbiAgbG9nby5zcmMgPSBMb2dvO1xuICBsb2dvLmFsdCA9ICcnO1xuXG4gIGNvbnN0IG5hdiA9IGNyZWF0ZSgnbmF2Jyk7XG4gIG5hdi5hcHBlbmQoXG4gICAgdGFiRWxlbWVudCgnSG9tZScpLFxuICAgIHRhYkVsZW1lbnQoJ01lbnUnKSxcbiAgICB0YWJFbGVtZW50KCdDb250YWN0JylcbiAgKVxuXG4gIG91dHB1dC5hcHBlbmQobG9nbywgbmF2KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKHR5cGUsIGNscykge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoY2xzKSBvdXRwdXQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB0YWJFbGVtZW50KCB0ZXh0ICl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBvdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBvdXRwdXQuaWQgPSB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICcnKTtcbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuaHJlZiA9ICcnO1xuICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuICBpY29uLm5hbWUgPSAnbG9nby1naXRodWInXG4gIGljb24ucm9sZSA9ICdpbWcnXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnbWQnLCAnaHlkcmF0ZWQnKVxuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnZi1Sb2RlaCdcblxuICBsaW5rLmFwcGVuZChpY29uLCB0ZXh0KVxuXG4gIHJvb3QuYXBwZW5kKGxpbmspO1xuICByZXR1cm4gcm9vdDtcbn0iLCJpbXBvcnQge2NyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZX0gZnJvbSBcIi4vZG9tLW1hbmFnZXJcIjtcbmltcG9ydCBJbWcgZnJvbSAnLi9pbWcvaGVyby1mb29kMi5qcGcnXG5cbmV4cG9ydCB7IE1haW4gfTtcblxuY29uc3QgTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuTWFpbi5hcHBlbmQoXG4gIEhlcm8oKSxcbiAgQWJvdXQoKSxcbiAgSG91cnMoKSxcbiAgTG9jYXRpb24oKSxcbilcblxuZnVuY3Rpb24gSGVybygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdoZXJvJztcblxuICBsZXQgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC44KSAzMCUsIHJnYmEoMCwwLDAsMCkgNzUlKWBcbiAgYmFja2dyb3VuZCArPSBgLCAwJSA1MCUgLyBjb3ZlciB1cmwoJHtJbWd9KWBcblxuICBvdXRwdXQuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgY29uc3QgdGV4dCA9IGNyZWF0ZSgnaDEnKTtcbiAgdGV4dC5pbm5lckhUTUwgPSAnPGVtPkFydDwvZW0+IGlzIGluIHRoZSA8ZW0+Zm9vZDwvZW0+Lic7XG5cbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlKCdidXR0b24nLCAnb3V0bGluZWQnKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0dvIHRvIG1lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZCggdGV4dCwgYnV0dG9uICk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gQWJvdXQoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnYWJvdXQnO1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0Fib3V0IFVzJyksXG4gICAgcGFyYWdyYXBoKCdUaGlzIGlzIGEgZmFrZSByZXN0YXVyYW50LCB3aXRoIGEgZGVsaWNpb3VzIGdhc3Ryb25vbWljIGFwcHJvYWNoLiBDcmVhdGVkIGluIEd1YXRlbWFsYSBpbiAyMDIzLCBpdCBoYXMgdGhlIHB1cnBvc2Ugb2YgZGVmeWluZyBhbGwgdGhhdCBpcyBrbm93biwgY3JlYXRpbmcgYSBzaXRlIHdpdGggdGhlIGNvbXBsaWNhdGVkIHRvb2wgXCJ3ZWJwYWNrXCInKSxcbiAgICBwYXJhZ3JhcGgoJ0NvbWUgdGFzdGUgYSB1bmlxdWUgZXhwZXJpZW5jZSB0aGF0IG1lcmdlcyBmbGF2b3VyIGFuZCBhcnQhIEFyZSB5b3UgcmVhZHk/JyksXG4gICAgQ2FyZCgpXG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBIb3Vycygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdob3Vycyc7XG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnSG91cnMnKSxcbiAgICBwYXJhZ3JhcGgoJ1R1ZXNkYXkg4oCUIEZyaWRheSBmcm9tIDE4OjAwIHRvIDAwOjAwJyksXG4gICAgcGFyYWdyYXBoKCdXZWVrZW5kcyBmcm9tIDIwOjAwIHRvIDAyOjAwJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIExvY2F0aW9uKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ2xvY2F0aW9uJztcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdMb2NhdGlvbicpLFxuICAgIHBhcmFncmFwaCgnUC4gU2hlcm1hbiwgNDIgV2FsbGFieSBXYXksIFN5ZG5leScpLFxuICAgIHBhcmFncmFwaCgnSnVzdCBrZWVwIHN3aW1taW5nIDspJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIENhcmQoKXtcbiAgY29uc3Qgb3V0cHV0ID0gY3JlYXRlKCdkaXYnLCAnY2FyZCcpO1xuXG4gIGNvbnN0IGltZyA9IGNyZWF0ZSgnaW1nJywgJ2NpcmNsZScpO1xuICBpbWcuc3JjID0gJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi8xMS5qcGcnO1xuICBpbWcuYWx0ID0gJyc7XG5cbiAgY29uc3QgbmFtZSA9IGNyZWF0ZSgnaDMnLCAnbmFtZScpO1xuICBjb25zdCByb2xlID0gY3JlYXRlKCdoNCcsICdyb2xlJyk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9ICdIdWdoIE1hbm4nO1xuICByb2xlLnRleHRDb250ZW50ID0gJ0ZvdW5kZXInO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGUoJ2RpdicsICdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kKFxuICAgIG5hbWUsXG4gICAgcm9sZSxcbiAgICBwYXJhZ3JhcGgoJ0kgbG92ZSBpbm5vdmF0aW5nLiBUaGlzIHJlc3RhdXJhbnQgaGFzIGJlZW4gaW4gbXkgbWluZCBldmVyIHNpbmNlIEkgbGVhcm50IGhvdyB0byBjb29rLiBZb3UgZG8gbm90IG5lZWQgdG8ga25vdyBhYm91dCB3ZWJwYWNrIHRvIGtub3cgZ29vZCBmb29kJylcbiAgKVxuXG4gIG91dHB1dC5hcHBlbmQoaW1nLCBjb250ZW50KVxuXG4gIHJldHVybiBvdXRwdXQ7XG59IiwiZXhwb3J0IHsgTWFpbiB9IFxuXG5pbXBvcnQgeyBjcmVhdGUsIHBhcmFncmFwaCwgdGl0bGUsIHdyaXRlIH0gZnJvbSAnLi9kb20tbWFuYWdlcidcbmltcG9ydCBJbWcgZnJvbSAnLi9pbWcvaGVyby1tZW51LmpwZydcblxuY29uc3QgTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuTWFpbi5hcHBlbmQoXG4gIEhlcm8oKSxcbiAgU3RhcnRlcnMoKSxcbiAgRGlzaGVzKCksXG4gIERlc3NlcnRzKCksXG4gIENvY2t0YWlscygpXG4pXG5cbmZ1bmN0aW9uIEhlcm8oKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnaGVybyc7XG5cbiAgbGV0IGJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDAuOCkgMzAlLCByZ2JhKDAsMCwwLDApIDc1JSlgXG4gIGJhY2tncm91bmQgKz0gYCwgY2VudGVyIC8gY292ZXIgdXJsKCR7SW1nfSlgXG5cbiAgb3V0cHV0LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGUoJ2gxJyk7XG4gIHRleHQuaW5uZXJIVE1MID0gJzxlbT5BcnQ8L2VtPiBpcyBpbiB0aGUgPGVtPmZvb2Q8L2VtPi4nO1xuXG4gIG91dHB1dC5hcHBlbmQoIHRleHQpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIFN0YXJ0ZXJzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnU3RhcnRlcnMnKSxcbiAgICB3cml0ZSgnaDMnLCAnUGlzY2VzJyksXG4gICAgcGFyYWdyYXBoKCdTZXJ2ZWQgd2l0aCBiYWNrLWVuZCBzYXVjZScpLFxuICAgIHdyaXRlKCdoMycsICdTYWdpdGFyaXVtJyksXG4gICAgcGFyYWdyYXBoKCdNYXJpbmF0ZWQgaW4gY29sZCBEZWNlbWJlcicpLFxuICAgIHdyaXRlKCdoMycsICdHZW1pbmknKSxcbiAgICBwYXJhZ3JhcGgoJ1R3aW5lZCBhbmQgc3RlYW0gY29va2VkJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gRGlzaGVzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnTWFpbiBEaXNoZXMnKSxcbiAgICB3cml0ZSgnaDMnLCAnSnVwaXRlcicpLFxuICAgIHBhcmFncmFwaCgnQmlnZ2VzdCBwbGFuZXQgb24gdGhlIHNvbGFyIHN5c3RlbScpLFxuICAgIHdyaXRlKCdoMycsICdNYXJzJyksXG4gICAgcGFyYWdyYXBoKCdUaGUgcmVkZGlzaCBjb2xvciBvZiBpdHMgc3VyZmFjZSBpcyBkdWUgdG8gZmluZWx5IGdyYWluZWQgaXJvbihJSUkpIG94aWRlIGR1c3QgaW4gdGhlIHNvaWwnKSxcbiAgICB3cml0ZSgnaDMnLCAnVmVudXMnKSxcbiAgICBwYXJhZ3JhcGgoJ1RoZSBkZW5zZXN0IGF0bW9zcGhlcmUgb2YgYWxsIHRoZSByb2NreSBib2RpZXMgaW4gdGhlIFNvbGFyIFN5c3RlbScpLFxuICApXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5mdW5jdGlvbiBEZXNzZXJ0cygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0Rlc3NlcnRzJyksXG4gICAgd3JpdGUoJ2gzJywgJ1NoaW5qdWt1JyksXG4gICAgcGFyYWdyYXBoKCdCdXp6aW5nIGNsdWJzIGFuZCBrYXJhb2tlIHJvb21zIG9mIG5lb24tbGl0IGluIHRoZSBTa3lzY3JhcGVyIERpc3RyaWN0JyksXG4gICAgd3JpdGUoJ2gzJywgJ1NoaWJ1eWEnKSxcbiAgICBwYXJhZ3JhcGgoJ0EgbWFqb3IgY29tbWVyY2lhbCBhbmQgZmluYW5jZSBjZW50ZXInKSxcbiAgICB3cml0ZSgnaDMnLCAnU2hpbW9raXRhJyksXG4gICAgcGFyYWdyYXBoKCdOYXJyb3csIG11cmFsLXBhaW50ZWQgbGFuZXMgbGluZWQgd2l0aCBzdHlsaXNoIHN0b3JlcyBmb3IgdmludGFnZSBjbG90aGVzIGFuZCB2aW55bCcpXG4gIClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIENvY2t0YWlscygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0NvY2t0YWlscycpLFxuICAgIHdyaXRlKCdoMycsICdGcmV5amEnKSxcbiAgICBwYXJhZ3JhcGgoJ0xvdmUsIGJlYXV0eSwgZmVydGlsaXR5LCBzZXgsIHdhciwgZ29sZCwgYW5kIHNlacOwci4gRnJleWphIGlzIHRoZSBvd25lciBvZiB0aGUgbmVja2xhY2UgQnLDrXNpbmdhbWVuIGFuZCByaWRlcyBhIGNoYXJpb3QgcHVsbGVkIGJ5IHR3byBjYXRzLicpLFxuICAgIHdyaXRlKCdoMycsICdWYWxreXJpZScpLFxuICAgIHBhcmFncmFwaCgnQSBmZW1hbGUgc3Bpcml0IHRoYXQgZGVjaWRlcyBpZiB3YXJyaW9ycyBkaWUgb3Igc3Vydml2ZS4gSWYgdGhleSBhcmUgd29ydGh5LCBzaGUgZ3VpZGVzIHRoZW0gdG8gVmFsaGFsbGEuJyksXG4gICAgd3JpdGUoJ2gzJywgJ0hlaW1kYWxsJyksXG4gICAgcGFyYWdyYXBoKCdLZWVwcyB3YXRjaCBmb3IgaW52YWRlcnMgYW5kIHRoZSBvbnNldCBvZiBSYWduYXLDtmsgZnJvbSBoaXMgZHdlbGxpbmcgSGltaW5iasO2cmcsIHdoZXJlIHRoZSBidXJuaW5nIHJhaW5ib3cgYnJpZGdlIEJpZnLDtnN0IG1lZXRzIHRoZSBza3kuJyksXG4gIClcblxuICByZXR1cm4gb3V0cHV0XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7c2V0dXAsIHNldE1haW5Db250ZW50fSBmcm9tIFwiLi9kb20tc2V0dXBcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBNYWluIGFzIEhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBNYWluIGFzIE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBNYWluIGFzIENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbnNldHVwKCk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkZXIgLnRhYicpO1xuXG5mdW5jdGlvbiBuYXZpZ2F0ZSggaWQgKSB7XG4gIGNvbnN0IHJvdXRlID0gXG4gICAgaWQgPT09ICdob21lJyA/IEhvbWUgOlxuICAgIGlkID09PSAnbWVudScgPyBNZW51IDpcbiAgICBpZCA9PT0gJ2NvbnRhY3QnID8gQ29udGFjdDpcbiAgICBudWxsXG5cbiAgaWYoIHJvdXRlID09PSBudWxsICkgcmV0dXJuO1xuICBzZXRNYWluQ29udGVudCggcm91dGUgKTtcbn1cblxudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdmlnYXRlKHRhYi5pZClcbiAgfSlcbn0pXG5cbmNvbnN0IGhlcm9OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybyBidXR0b24nKTtcbmhlcm9OYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHNldE1haW5Db250ZW50KE1lbnUpIH0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9