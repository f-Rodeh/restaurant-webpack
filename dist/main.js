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
  --bg-light: #e9e9e9;
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

header a {
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
/* footer template style end */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,mCAAmC;EACnC,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,SAAS,EAAE,UAAU;EACrB,6CAA6C;EAC7C,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;EAET,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,+DAA+D;AACjE;;AAEA;EACE,YAAY;EACZ,uBAAuB;;EAEvB,qCAAqC;EACrC,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,6CAA6C;AAC/C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC,6BAA6B;EAC7B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,gEAAgE;AAClE;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;;;AAIA,+BAA+B;AAC/B;EACE,aAAa;EACb,mBAAmB;EACnB,+CAA+C;;EAE/C,eAAe;EACf,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,eAAe;AACjB;AACA,8BAA8B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --main-bg: #111111;\n  --bg-light: #e9e9e9;\n  --surface: #222;\n  --surface-light: hsl(237, 10%, 83%);\n  --txt-light: #e9e9e9;\n  --txt-dark: #090909;\n  --txt-low-contrast: #222;\n  --accent: #f5a8bc;\n}\n\nbody { \n  margin: 0; padding: 0;\n  font-family: 'Poppins', Helvetica, sans-serif;\n  color: var(--txt-dark);\n  background-color: var(--bg-light);\n}\n\np {\n  font-size: 1.05rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  background-color: var(--surface);\n  padding: 15px 45px;\n}\n\nheader .logo {\n  margin-right: auto;\n}\n\nheader a {\n  color: var(--txt-light);\n  text-decoration: none;\n  margin: 0 1vw;\n  font:1.1rem 'Playfair Display', 'Times New Roman', Times, serif;\n}\n\n#hero {\n  height: 52vh;\n  color: var(--txt-light);\n\n  padding: 64px clamp(48px, 10vw,128px);\n  display: grid;\n  gap: 18px;\n  align-content: center;\n  justify-items: start;\n}\n\n#hero h1 {\n  margin: 0;\n  font-family: 'Playfair Display', Times, serif;\n}\n\n#hero em {\n  color: #f5a8bc;\n}\n\n#menu h3, p {\n  margin: 0.5rem 2rem;\n  color: var(--txt-low-contrast);\n}\n\nbutton {\n  border-radius: 8px;\n  padding: 12px 32px;\n  font: bold 1em 'Poppins';\n}\n\nbutton.filled {\n  border: none;\n  background-color: var(--txt-light);\n  color: var(--main-bg);\n}\n\nbutton.outlined {\n  border: 2px solid var(--txt-light, white);\n  background-color: transparent;\n  color: var(--txt-light, white);\n  box-shadow: 3px 3px #e9e9e9;\n}\n\nsection:not(#hero) {\n  padding: 0 clamp(48px, 20vw, 300px);\n  margin: 72px 0;\n}\n\n.card {\n  background-color: var(--surface-light);\n  padding: 32px 48px;\n  margin: 56px 0;\n  border-radius: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.card * {\n  margin: 0;\n}\n\n.card > img {\n  width: 100px;\n  height: 100px;\n  flex: none;\n  margin: 0 auto;\n}\n\n.card > .content {\n  flex: 1;\n  min-width: 200px;\n}\n\n.card .role {\n  color: var(--txt-low-contrast);\n  margin-bottom: 12px;\n}\n\nimg.circle {\n  border-radius: 50%;\n}\n\n/* Global text  */\n\nh1 {\n  font-size: 2rem;\n  font-family: 'Playfair Display', 'Times New Roman', Times, serif;\n}\nh4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n\n\n/* footer template style start*/\nfooter {\n  display: grid;\n  place-items: center;\n  background-color: var(--surface-color, #222222);\n\n  padding: 36px 0;\n  gap: 24px;\n}\n\nfooter a {\n  text-decoration: none;\n  font-size: 1.2rem;\n\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 150ms ease-in-out;\n}\n\nfooter a:hover {\n  scale: 1.1;\n}\n\nfooter ion-icon {\n  color: var(--main-txt, #fefefe);\n  font-size: 40px;\n}\n/* footer template style end */"],"sourceRoot":""}]);
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


function Main(){
  const output = document.createElement('main');

  output.append(
    Hero(),
    Contact()
  )

  return output
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)`
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
/* harmony export */   setup: () => (/* binding */ setup),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _img_logoipsum_287_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logoipsum-287.svg */ "./src/img/logoipsum-287.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







let Main = _home__WEBPACK_IMPORTED_MODULE_2__.Main;

function update( element ){

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
    navLink('Home', ''),
    navLink('Menu', ''),
    navLink('Contact', '')
  )

  output.append(logo, nav);
  return output;
}

function create(type, cls) {
  const output = document.createElement(type);
  if (cls) output.classList.add(cls);
  return output;
}

function navLink( text, href = '' ){
  const output = document.createElement('a');
  output.textContent = text;
  output.href = href;
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

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)`
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


function Main(){
  const output = document.createElement('main');

  output.append(
    Hero(),
    Starters(),
    Dishes(),
    Desserts(),
    Cocktails()
  )

  return output
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)`
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



(0,_dom_setup__WEBPACK_IMPORTED_MODULE_0__.setup)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTyxnSUFBZ0ksTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDaE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssb0JBQW9CLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sOEdBQThHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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bURBQUs7QUFDVCxJQUFJLHVEQUFTO0FBQ2IsSUFBSSxtREFBSztBQUNULElBQUksdURBQVM7QUFDYixJQUFJLG1EQUFLO0FBQ1QsSUFBSSx1REFBUztBQUNiOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FrQztBQUNiOztBQUVyQixpREFBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9kb20tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZG9tLXNldHVwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLW1haW4tYmc6ICMxMTExMTE7XG4gIC0tYmctbGlnaHQ6ICNlOWU5ZTk7XG4gIC0tc3VyZmFjZTogIzIyMjtcbiAgLS1zdXJmYWNlLWxpZ2h0OiBoc2woMjM3LCAxMCUsIDgzJSk7XG4gIC0tdHh0LWxpZ2h0OiAjZTllOWU5O1xuICAtLXR4dC1kYXJrOiAjMDkwOTA5O1xuICAtLXR4dC1sb3ctY29udHJhc3Q6ICMyMjI7XG4gIC0tYWNjZW50OiAjZjVhOGJjO1xufVxuXG5ib2R5IHsgXG4gIG1hcmdpbjogMDsgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0tdHh0LWRhcmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZSk7XG4gIHBhZGRpbmc6IDE1cHggNDVweDtcbn1cblxuaGVhZGVyIC5sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oZWFkZXIgYSB7XG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMCAxdnc7XG4gIGZvbnQ6MS4xcmVtICdQbGF5ZmFpciBEaXNwbGF5JywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuI2hlcm8ge1xuICBoZWlnaHQ6IDUydmg7XG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xuXG4gIHBhZGRpbmc6IDY0cHggY2xhbXAoNDhweCwgMTB2dywxMjhweCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMThweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbn1cblxuI2hlcm8gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIFRpbWVzLCBzZXJpZjtcbn1cblxuI2hlcm8gZW0ge1xuICBjb2xvcjogI2Y1YThiYztcbn1cblxuI21lbnUgaDMsIHAge1xuICBtYXJnaW46IDAuNXJlbSAycmVtO1xuICBjb2xvcjogdmFyKC0tdHh0LWxvdy1jb250cmFzdCk7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTJweCAzMnB4O1xuICBmb250OiBib2xkIDFlbSAnUG9wcGlucyc7XG59XG5cbmJ1dHRvbi5maWxsZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR4dC1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbn1cblxuYnV0dG9uLm91dGxpbmVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHh0LWxpZ2h0LCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0LCB3aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggI2U5ZTllOTtcbn1cblxuc2VjdGlvbjpub3QoI2hlcm8pIHtcbiAgcGFkZGluZzogMCBjbGFtcCg0OHB4LCAyMHZ3LCAzMDBweCk7XG4gIG1hcmdpbjogNzJweCAwO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuICBwYWRkaW5nOiAzMnB4IDQ4cHg7XG4gIG1hcmdpbjogNTZweCAwO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjRweDtcbn1cblxuLmNhcmQgKiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmQgPiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZsZXg6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FyZCA+IC5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmNhcmQgLnJvbGUge1xuICBjb2xvcjogdmFyKC0tdHh0LWxvdy1jb250cmFzdCk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmltZy5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEdsb2JhbCB0ZXh0ICAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbmg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cblxuLyogZm9vdGVyIHRlbXBsYXRlIHN0eWxlIHN0YXJ0Ki9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IsICMyMjIyMjIpO1xuXG4gIHBhZGRpbmc6IDM2cHggMDtcbiAgZ2FwOiAyNHB4O1xufVxuXG5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbmZvb3RlciBhOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuZm9vdGVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LCAjZmVmZWZlKTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLyogZm9vdGVyIHRlbXBsYXRlIHN0eWxlIGVuZCAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTLEVBQUUsVUFBVTtFQUNyQiw2Q0FBNkM7RUFDN0Msc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUzs7RUFFVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1Qjs7RUFFdkIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGdFQUFnRTtBQUNsRTtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7OztBQUlBLCtCQUErQjtBQUMvQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0NBQStDOztFQUUvQyxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7QUFDQSw4QkFBOEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWJnOiAjMTExMTExO1xcbiAgLS1iZy1saWdodDogI2U5ZTllOTtcXG4gIC0tc3VyZmFjZTogIzIyMjtcXG4gIC0tc3VyZmFjZS1saWdodDogaHNsKDIzNywgMTAlLCA4MyUpO1xcbiAgLS10eHQtbGlnaHQ6ICNlOWU5ZTk7XFxuICAtLXR4dC1kYXJrOiAjMDkwOTA5O1xcbiAgLS10eHQtbG93LWNvbnRyYXN0OiAjMjIyO1xcbiAgLS1hY2NlbnQ6ICNmNWE4YmM7XFxufVxcblxcbmJvZHkgeyBcXG4gIG1hcmdpbjogMDsgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS10eHQtZGFyayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UpO1xcbiAgcGFkZGluZzogMTVweCA0NXB4O1xcbn1cXG5cXG5oZWFkZXIgLmxvZ28ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMCAxdnc7XFxuICBmb250OjEuMXJlbSAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbiNoZXJvIHtcXG4gIGhlaWdodDogNTJ2aDtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xcblxcbiAgcGFkZGluZzogNjRweCBjbGFtcCg0OHB4LCAxMHZ3LDEyOHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDE4cHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuI2hlcm8gaDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4jaGVybyBlbSB7XFxuICBjb2xvcjogI2Y1YThiYztcXG59XFxuXFxuI21lbnUgaDMsIHAge1xcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbG93LWNvbnRyYXN0KTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDEycHggMzJweDtcXG4gIGZvbnQ6IGJvbGQgMWVtICdQb3BwaW5zJztcXG59XFxuXFxuYnV0dG9uLmZpbGxlZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG5idXR0b24ub3V0bGluZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdHh0LWxpZ2h0LCB3aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbGlnaHQsIHdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggI2U5ZTllOTtcXG59XFxuXFxuc2VjdGlvbjpub3QoI2hlcm8pIHtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoNDhweCwgMjB2dywgMzAwcHgpO1xcbiAgbWFyZ2luOiA3MnB4IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xcbiAgcGFkZGluZzogMzJweCA0OHB4O1xcbiAgbWFyZ2luOiA1NnB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jYXJkID4gaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmbGV4OiBub25lO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jYXJkID4gLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkIC5yb2xlIHtcXG4gIGNvbG9yOiB2YXIoLS10eHQtbG93LWNvbnRyYXN0KTtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbmltZy5jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBHbG9iYWwgdGV4dCAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5oNCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG5cXG4vKiBmb290ZXIgdGVtcGxhdGUgc3R5bGUgc3RhcnQqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IsICMyMjIyMjIpO1xcblxcbiAgcGFkZGluZzogMzZweCAwO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG5mb290ZXIgaW9uLWljb24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LCAjZmVmZWZlKTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLyogZm9vdGVyIHRlbXBsYXRlIHN0eWxlIGVuZCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBNYWluIH0gXG5cbmltcG9ydCB7IGNyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZSwgd3JpdGUgfSBmcm9tICcuL2RvbS1tYW5hZ2VyJ1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZy9oZXJvLWNvbnRhY3QuanBnJ1xuXG5mdW5jdGlvbiBNYWluKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIEhlcm8oKSxcbiAgICBDb250YWN0KClcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gSGVybygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdoZXJvJztcblxuICBsZXQgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC44KSAzMCUsIHJnYmEoMCwwLDAsMCkgMTAwJSlgXG4gIGJhY2tncm91bmQgKz0gYCwgY2VudGVyIC8gY292ZXIgdXJsKCR7SW1nfSlgXG5cbiAgb3V0cHV0LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGUoJ2gxJyk7XG4gIHRleHQuaW5uZXJIVE1MID0gJzxlbT5BcnQ8L2VtPiBpcyBpbiB0aGUgPGVtPmZvb2Q8L2VtPi4nO1xuXG4gIG91dHB1dC5hcHBlbmQoIHRleHQpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIENvbnRhY3QoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnbWVudSdcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdDb250YWN0IFVzJyksXG4gICAgd3JpdGUoJ2gzJywgJ0VtYWlsJyksXG4gICAgcGFyYWdyYXBoKCdib29raW5nQGZha2VyZXN0YXVyYW50LmNvbScpLFxuICAgIHdyaXRlKCdoMycsICdDZWxscGhvbmUnKSxcbiAgICBwYXJhZ3JhcGgoJzEyMy00NTYtNzg5MCcpLFxuICAgIHdyaXRlKCdoMycsICdJbnN0YWdyYW0gLyBGYWNlYm9vaycpLFxuICAgIHBhcmFncmFwaCgnQGtlbnMubW9qby5kb2pvJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn0iLCJleHBvcnQgeyBjcmVhdGUsIHBhcmFncmFwaCwgdGl0bGUsIHdyaXRlIH1cblxuZnVuY3Rpb24gY3JlYXRlKHR5cGUsIGNscyl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmKCBjbHMgKSBvdXRwdXQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBwYXJhZ3JhcGgoIHRleHQgKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gdGl0bGUoIHRleHQgKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gd3JpdGUoIHR5cGUsIHRleHQgKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIG91dHB1dFxufSIsImltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltZy9sb2dvaXBzdW0tMjg3LnN2Zyc7XG5pbXBvcnQgeyBNYWluIGFzIEhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBNYWluIGFzIE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBNYWluIGFzIENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5leHBvcnQge3NldHVwLCB1cGRhdGV9XG5cbmxldCBNYWluID0gSG9tZTtcblxuZnVuY3Rpb24gdXBkYXRlKCBlbGVtZW50ICl7XG5cbn1cblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIHJvb3QuYXBwZW5kKFxuICAgIEhlYWRlcigpLFxuICAgIE1haW4sXG4gICAgY3JlYXRlRm9vdGVyKCksXG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICBjb25zdCBsb2dvID0gY3JlYXRlKCdpbWcnLCAnbG9nbycpO1xuICBsb2dvLnNyYyA9IExvZ287XG4gIGxvZ28uYWx0ID0gJyc7XG5cbiAgY29uc3QgbmF2ID0gY3JlYXRlKCduYXYnKTtcbiAgbmF2LmFwcGVuZChcbiAgICBuYXZMaW5rKCdIb21lJywgJycpLFxuICAgIG5hdkxpbmsoJ01lbnUnLCAnJyksXG4gICAgbmF2TGluaygnQ29udGFjdCcsICcnKVxuICApXG5cbiAgb3V0cHV0LmFwcGVuZChsb2dvLCBuYXYpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGUodHlwZSwgY2xzKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChjbHMpIG91dHB1dC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIG5hdkxpbmsoIHRleHQsIGhyZWYgPSAnJyApe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG91dHB1dC5ocmVmID0gaHJlZjtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLmhyZWYgPSAnJztcbiAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgaWNvbi5uYW1lID0gJ2xvZ28tZ2l0aHViJ1xuICBpY29uLnJvbGUgPSAnaW1nJ1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ21kJywgJ2h5ZHJhdGVkJylcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ2YtUm9kZWgnXG5cbiAgbGluay5hcHBlbmQoaWNvbiwgdGV4dClcblxuICByb290LmFwcGVuZChsaW5rKTtcbiAgcmV0dXJuIHJvb3Q7XG59IiwiaW1wb3J0IHtjcmVhdGUsIHBhcmFncmFwaCwgdGl0bGV9IGZyb20gXCIuL2RvbS1tYW5hZ2VyXCI7XG5pbXBvcnQgSW1nIGZyb20gJy4vaW1nL2hlcm8tZm9vZDIuanBnJ1xuXG5leHBvcnQgeyBNYWluIH07XG5cbmNvbnN0IE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbk1haW4uYXBwZW5kKFxuICBIZXJvKCksXG4gIEFib3V0KCksXG4gIEhvdXJzKCksXG4gIExvY2F0aW9uKCksXG4pXG5cbmZ1bmN0aW9uIEhlcm8oKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnaGVybyc7XG5cbiAgbGV0IGJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDAuOCkgMzAlLCByZ2JhKDAsMCwwLDApIDEwMCUpYFxuICBiYWNrZ3JvdW5kICs9IGAsIDAlIDUwJSAvIGNvdmVyIHVybCgke0ltZ30pYFxuXG4gIG91dHB1dC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICBjb25zdCB0ZXh0ID0gY3JlYXRlKCdoMScpO1xuICB0ZXh0LmlubmVySFRNTCA9ICc8ZW0+QXJ0PC9lbT4gaXMgaW4gdGhlIDxlbT5mb29kPC9lbT4uJztcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGUoJ2J1dHRvbicsICdvdXRsaW5lZCcpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnR28gdG8gbWVudSdcblxuICBvdXRwdXQuYXBwZW5kKCB0ZXh0LCBidXR0b24gKTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBBYm91dCgpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdhYm91dCc7XG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnQWJvdXQgVXMnKSxcbiAgICBwYXJhZ3JhcGgoJ1RoaXMgaXMgYSBmYWtlIHJlc3RhdXJhbnQsIHdpdGggYSBkZWxpY2lvdXMgZ2FzdHJvbm9taWMgYXBwcm9hY2guIENyZWF0ZWQgaW4gR3VhdGVtYWxhIGluIDIwMjMsIGl0IGhhcyB0aGUgcHVycG9zZSBvZiBkZWZ5aW5nIGFsbCB0aGF0IGlzIGtub3duLCBjcmVhdGluZyBhIHNpdGUgd2l0aCB0aGUgY29tcGxpY2F0ZWQgdG9vbCBcIndlYnBhY2tcIicpLFxuICAgIHBhcmFncmFwaCgnQ29tZSB0YXN0ZSBhIHVuaXF1ZSBleHBlcmllbmNlIHRoYXQgbWVyZ2VzIGZsYXZvdXIgYW5kIGFydCEgQXJlIHlvdSByZWFkeT8nKSxcbiAgICBDYXJkKClcbiAgKVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIEhvdXJzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ2hvdXJzJztcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdIb3VycycpLFxuICAgIHBhcmFncmFwaCgnVHVlc2RheSDigJQgRnJpZGF5IGZyb20gMTg6MDAgdG8gMDA6MDAnKSxcbiAgICBwYXJhZ3JhcGgoJ1dlZWtlbmRzIGZyb20gMjA6MDAgdG8gMDI6MDAnKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gTG9jYXRpb24oKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnbG9jYXRpb24nO1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0xvY2F0aW9uJyksXG4gICAgcGFyYWdyYXBoKCdQLiBTaGVybWFuLCA0MiBXYWxsYWJ5IFdheSwgU3lkbmV5JyksXG4gICAgcGFyYWdyYXBoKCdKdXN0IGtlZXAgc3dpbW1pbmcgOyknKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gQ2FyZCgpe1xuICBjb25zdCBvdXRwdXQgPSBjcmVhdGUoJ2RpdicsICdjYXJkJyk7XG5cbiAgY29uc3QgaW1nID0gY3JlYXRlKCdpbWcnLCAnY2lyY2xlJyk7XG4gIGltZy5zcmMgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzExLmpwZyc7XG4gIGltZy5hbHQgPSAnJztcblxuICBjb25zdCBuYW1lID0gY3JlYXRlKCdoMycsICduYW1lJyk7XG4gIGNvbnN0IHJvbGUgPSBjcmVhdGUoJ2g0JywgJ3JvbGUnKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gJ0h1Z2ggTWFubic7XG4gIHJvbGUudGV4dENvbnRlbnQgPSAnRm91bmRlcic7XG5cbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmQoXG4gICAgbmFtZSxcbiAgICByb2xlLFxuICAgIHBhcmFncmFwaCgnSSBsb3ZlIGlubm92YXRpbmcuIFRoaXMgcmVzdGF1cmFudCBoYXMgYmVlbiBpbiBteSBtaW5kIGV2ZXIgc2luY2UgSSBsZWFybnQgaG93IHRvIGNvb2suIFlvdSBkbyBub3QgbmVlZCB0byBrbm93IGFib3V0IHdlYnBhY2sgdG8ga25vdyBnb29kIGZvb2QnKVxuICApXG5cbiAgb3V0cHV0LmFwcGVuZChpbWcsIGNvbnRlbnQpXG5cbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJleHBvcnQgeyBNYWluIH0gXG5cbmltcG9ydCB7IGNyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZSwgd3JpdGUgfSBmcm9tICcuL2RvbS1tYW5hZ2VyJ1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZy9oZXJvLW1lbnUuanBnJ1xuXG5mdW5jdGlvbiBNYWluKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIEhlcm8oKSxcbiAgICBTdGFydGVycygpLFxuICAgIERpc2hlcygpLFxuICAgIERlc3NlcnRzKCksXG4gICAgQ29ja3RhaWxzKClcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gSGVybygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdoZXJvJztcblxuICBsZXQgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC44KSAzMCUsIHJnYmEoMCwwLDAsMCkgMTAwJSlgXG4gIGJhY2tncm91bmQgKz0gYCwgY2VudGVyIC8gY292ZXIgdXJsKCR7SW1nfSlgXG5cbiAgb3V0cHV0LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGUoJ2gxJyk7XG4gIHRleHQuaW5uZXJIVE1MID0gJzxlbT5BcnQ8L2VtPiBpcyBpbiB0aGUgPGVtPmZvb2Q8L2VtPi4nO1xuXG4gIG91dHB1dC5hcHBlbmQoIHRleHQpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIFN0YXJ0ZXJzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnU3RhcnRlcnMnKSxcbiAgICB3cml0ZSgnaDMnLCAnUGlzY2VzJyksXG4gICAgcGFyYWdyYXBoKCdTZXJ2ZWQgd2l0aCBiYWNrLWVuZCBzYXVjZScpLFxuICAgIHdyaXRlKCdoMycsICdTYWdpdGFyaXVtJyksXG4gICAgcGFyYWdyYXBoKCdNYXJpbmF0ZWQgaW4gY29sZCBEZWNlbWJlcicpLFxuICAgIHdyaXRlKCdoMycsICdHZW1pbmknKSxcbiAgICBwYXJhZ3JhcGgoJ1R3aW5lZCBhbmQgc3RlYW0gY29va2VkJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gRGlzaGVzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnTWFpbiBEaXNoZXMnKSxcbiAgICB3cml0ZSgnaDMnLCAnSnVwaXRlcicpLFxuICAgIHBhcmFncmFwaCgnQmlnZ2VzdCBwbGFuZXQgb24gdGhlIHNvbGFyIHN5c3RlbScpLFxuICAgIHdyaXRlKCdoMycsICdNYXJzJyksXG4gICAgcGFyYWdyYXBoKCdUaGUgcmVkZGlzaCBjb2xvciBvZiBpdHMgc3VyZmFjZSBpcyBkdWUgdG8gZmluZWx5IGdyYWluZWQgaXJvbihJSUkpIG94aWRlIGR1c3QgaW4gdGhlIHNvaWwnKSxcbiAgICB3cml0ZSgnaDMnLCAnVmVudXMnKSxcbiAgICBwYXJhZ3JhcGgoJ1RoZSBkZW5zZXN0IGF0bW9zcGhlcmUgb2YgYWxsIHRoZSByb2NreSBib2RpZXMgaW4gdGhlIFNvbGFyIFN5c3RlbScpLFxuICApXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5mdW5jdGlvbiBEZXNzZXJ0cygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0Rlc3NlcnRzJyksXG4gICAgd3JpdGUoJ2gzJywgJ1NoaW5qdWt1JyksXG4gICAgcGFyYWdyYXBoKCdCdXp6aW5nIGNsdWJzIGFuZCBrYXJhb2tlIHJvb21zIG9mIG5lb24tbGl0IGluIHRoZSBTa3lzY3JhcGVyIERpc3RyaWN0JyksXG4gICAgd3JpdGUoJ2gzJywgJ1NoaWJ1eWEnKSxcbiAgICBwYXJhZ3JhcGgoJ0EgbWFqb3IgY29tbWVyY2lhbCBhbmQgZmluYW5jZSBjZW50ZXInKSxcbiAgICB3cml0ZSgnaDMnLCAnU2hpbW9raXRhJyksXG4gICAgcGFyYWdyYXBoKCdOYXJyb3csIG11cmFsLXBhaW50ZWQgbGFuZXMgbGluZWQgd2l0aCBzdHlsaXNoIHN0b3JlcyBmb3IgdmludGFnZSBjbG90aGVzIGFuZCB2aW55bCcpXG4gIClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIENvY2t0YWlscygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0NvY2t0YWlscycpLFxuICAgIHdyaXRlKCdoMycsICdGcmV5amEnKSxcbiAgICBwYXJhZ3JhcGgoJ0xvdmUsIGJlYXV0eSwgZmVydGlsaXR5LCBzZXgsIHdhciwgZ29sZCwgYW5kIHNlacOwci4gRnJleWphIGlzIHRoZSBvd25lciBvZiB0aGUgbmVja2xhY2UgQnLDrXNpbmdhbWVuIGFuZCByaWRlcyBhIGNoYXJpb3QgcHVsbGVkIGJ5IHR3byBjYXRzLicpLFxuICAgIHdyaXRlKCdoMycsICdWYWxreXJpZScpLFxuICAgIHBhcmFncmFwaCgnQSBmZW1hbGUgc3Bpcml0IHRoYXQgZGVjaWRlcyBpZiB3YXJyaW9ycyBkaWUgb3Igc3Vydml2ZS4gSWYgdGhleSBhcmUgd29ydGh5LCBzaGUgZ3VpZGVzIHRoZW0gdG8gVmFsaGFsbGEuJyksXG4gICAgd3JpdGUoJ2gzJywgJ0hlaW1kYWxsJyksXG4gICAgcGFyYWdyYXBoKCdLZWVwcyB3YXRjaCBmb3IgaW52YWRlcnMgYW5kIHRoZSBvbnNldCBvZiBSYWduYXLDtmsgZnJvbSBoaXMgZHdlbGxpbmcgSGltaW5iasO2cmcsIHdoZXJlIHRoZSBidXJuaW5nIHJhaW5ib3cgYnJpZGdlIEJpZnLDtnN0IG1lZXRzIHRoZSBza3kuJyksXG4gIClcblxuICByZXR1cm4gb3V0cHV0XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7c2V0dXB9IGZyb20gXCIuL2RvbS1zZXR1cFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbnNldHVwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9