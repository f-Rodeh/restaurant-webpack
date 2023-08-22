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
  --surface-light: hsl(237, 10%, 80%);
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
/* footer template style end */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,mCAAmC;EACnC,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,SAAS,EAAE,UAAU;EACrB,6CAA6C;EAC7C,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;EAET,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,+DAA+D;AACjE;;AAEA;EACE,YAAY;EACZ,uBAAuB;;EAEvB,qCAAqC;EACrC,aAAa;EACb,SAAS;EACT,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,6CAA6C;AAC/C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC,6BAA6B;EAC7B,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;;AAEjB;EACE,eAAe;EACf,gEAAgE;AAClE;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;;;AAIA,+BAA+B;AAC/B;EACE,aAAa;EACb,mBAAmB;EACnB,+CAA+C;;EAE/C,eAAe;EACf,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;;EAEjB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,eAAe;AACjB;AACA,8BAA8B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --main-bg: #111111;\n  --bg-light: #e9e9e9;\n  --surface: #222;\n  --surface-light: hsl(237, 10%, 80%);\n  --txt-light: #e9e9e9;\n  --txt-dark: #090909;\n  --txt-low-contrast: #222;\n  --accent: #f5a8bc;\n}\n\nbody { \n  margin: 0; padding: 0;\n  font-family: 'Poppins', Helvetica, sans-serif;\n  color: var(--txt-dark);\n  background-color: var(--bg-light);\n}\n\np {\n  font-size: 1.05rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  background-color: var(--surface);\n  padding: 15px 45px;\n}\n\nheader .logo {\n  margin-right: auto;\n}\n\nheader a {\n  color: var(--txt-light);\n  text-decoration: none;\n  margin: 0 1vw;\n  font:1.1rem 'Playfair Display', 'Times New Roman', Times, serif;\n}\n\n#hero {\n  height: 52vh;\n  color: var(--txt-light);\n\n  padding: 64px clamp(48px, 10vw,128px);\n  display: grid;\n  gap: 18px;\n  align-content: center;\n  justify-items: start;\n}\n\n#hero h1 {\n  margin: 0;\n  font-family: 'Playfair Display', Times, serif;\n}\n\n#hero em {\n  color: #f5a8bc;\n}\n\n#menu h3, p {\n  margin: 0.5rem 2rem;\n  color: var(--txt-low-contrast);\n}\n\nbutton {\n  border-radius: 8px;\n  padding: 12px 32px;\n  font: bold 1em 'Poppins';\n}\n\nbutton.filled {\n  border: none;\n  background-color: var(--txt-light);\n  color: var(--main-bg);\n}\n\nbutton.outlined {\n  border: 2px solid var(--txt-light, white);\n  background-color: transparent;\n  color: var(--txt-light, white);\n  box-shadow: 3px 3px #e9e9e9;\n}\n\nsection:not(#hero) {\n  padding: 0 clamp(48px, 20vw, 300px);\n  margin: 72px 0;\n}\n\n.card {\n  background-color: var(--surface-light);\n  padding: 32px 48px;\n  margin: 56px 0;\n  border-radius: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.card * {\n  margin: 0;\n}\n\n.card > img {\n  width: 100px;\n  height: 100px;\n  flex: none;\n  margin: 0 auto;\n}\n\n.card > .content {\n  flex: 1;\n  min-width: 200px;\n}\n\n.card .role {\n  color: var(--txt-low-contrast);\n  margin-bottom: 12px;\n}\n\nimg.circle {\n  border-radius: 50%;\n}\n\n/* Global text  */\n\nh1 {\n  font-size: 2rem;\n  font-family: 'Playfair Display', 'Times New Roman', Times, serif;\n}\nh4 {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n\n\n/* footer template style start*/\nfooter {\n  display: grid;\n  place-items: center;\n  background-color: var(--surface-color, #222222);\n\n  padding: 36px 0;\n  gap: 24px;\n}\n\nfooter a {\n  text-decoration: none;\n  font-size: 1.2rem;\n\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: all 150ms ease-in-out;\n}\n\nfooter a:hover {\n  scale: 1.1;\n}\n\nfooter ion-icon {\n  color: var(--main-txt, #fefefe);\n  font-size: 40px;\n}\n/* footer template style end */"],"sourceRoot":""}]);
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
/* harmony export */   setup: () => (/* binding */ setup)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _img_logoipsum_287_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logoipsum-287.svg */ "./src/img/logoipsum-287.svg");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






const setup = () => {
  const root = document.getElementById('content');

  root.append(
    Header(),
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.Main)(),
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




function Main() {
  const output = document.createElement('main');

  output.append(
    Hero(),
    About(),
    Hours(),
    Location(),
  )

  return output;
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTyxnSUFBZ0ksTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQkFBb0I7QUFDaE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssb0JBQW9CLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sOEdBQThHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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R0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDYjs7QUFFckIsaURBQUssRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZG9tLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2RvbS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tYWluLWJnOiAjMTExMTExO1xuICAtLWJnLWxpZ2h0OiAjZTllOWU5O1xuICAtLXN1cmZhY2U6ICMyMjI7XG4gIC0tc3VyZmFjZS1saWdodDogaHNsKDIzNywgMTAlLCA4MCUpO1xuICAtLXR4dC1saWdodDogI2U5ZTllOTtcbiAgLS10eHQtZGFyazogIzA5MDkwOTtcbiAgLS10eHQtbG93LWNvbnRyYXN0OiAjMjIyO1xuICAtLWFjY2VudDogI2Y1YThiYztcbn1cblxuYm9keSB7IFxuICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLXR4dC1kYXJrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UpO1xuICBwYWRkaW5nOiAxNXB4IDQ1cHg7XG59XG5cbmhlYWRlciAubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaGVhZGVyIGEge1xuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDAgMXZ3O1xuICBmb250OjEuMXJlbSAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbiNoZXJvIHtcbiAgaGVpZ2h0OiA1MnZoO1xuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcblxuICBwYWRkaW5nOiA2NHB4IGNsYW1wKDQ4cHgsIDEwdncsMTI4cHgpO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE4cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG59XG5cbiNoZXJvIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBUaW1lcywgc2VyaWY7XG59XG5cbiNoZXJvIGVtIHtcbiAgY29sb3I6ICNmNWE4YmM7XG59XG5cbiNtZW51IGgzLCBwIHtcbiAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcbiAgY29sb3I6IHZhcigtLXR4dC1sb3ctY29udHJhc3QpO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMzJweDtcbiAgZm9udDogYm9sZCAxZW0gJ1BvcHBpbnMnO1xufVxuXG5idXR0b24uZmlsbGVkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG59XG5cbmJ1dHRvbi5vdXRsaW5lZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXR4dC1saWdodCwgd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXR4dC1saWdodCwgd2hpdGUpO1xuICBib3gtc2hhZG93OiAzcHggM3B4ICNlOWU5ZTk7XG59XG5cbnNlY3Rpb246bm90KCNoZXJvKSB7XG4gIHBhZGRpbmc6IDAgY2xhbXAoNDhweCwgMjB2dywgMzAwcHgpO1xuICBtYXJnaW46IDcycHggMDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcbiAgcGFkZGluZzogMzJweCA0OHB4O1xuICBtYXJnaW46IDU2cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDI0cHg7XG59XG5cbi5jYXJkICoge1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkID4gaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmbGV4OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhcmQgPiAuY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbi5jYXJkIC5yb2xlIHtcbiAgY29sb3I6IHZhcigtLXR4dC1sb3ctY29udHJhc3QpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pbWcuY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBHbG9iYWwgdGV4dCAgKi9cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5oNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cbi8qIGZvb3RlciB0ZW1wbGF0ZSBzdHlsZSBzdGFydCovXG5mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yLCAjMjIyMjIyKTtcblxuICBwYWRkaW5nOiAzNnB4IDA7XG4gIGdhcDogMjRweDtcbn1cblxuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG5mb290ZXIgYTpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG5cbmZvb3RlciBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dCwgI2ZlZmVmZSk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi8qIGZvb3RlciB0ZW1wbGF0ZSBzdHlsZSBlbmQgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUyxFQUFFLFVBQVU7RUFDckIsNkNBQTZDO0VBQzdDLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7O0VBRXZCLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsU0FBUztFQUNULHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGVBQWU7RUFDZixnRUFBZ0U7QUFDbEU7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7Ozs7QUFJQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLCtDQUErQzs7RUFFL0MsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCO0FBQ0EsOEJBQThCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbWFpbi1iZzogIzExMTExMTtcXG4gIC0tYmctbGlnaHQ6ICNlOWU5ZTk7XFxuICAtLXN1cmZhY2U6ICMyMjI7XFxuICAtLXN1cmZhY2UtbGlnaHQ6IGhzbCgyMzcsIDEwJSwgODAlKTtcXG4gIC0tdHh0LWxpZ2h0OiAjZTllOWU5O1xcbiAgLS10eHQtZGFyazogIzA5MDkwOTtcXG4gIC0tdHh0LWxvdy1jb250cmFzdDogIzIyMjtcXG4gIC0tYWNjZW50OiAjZjVhOGJjO1xcbn1cXG5cXG5ib2R5IHsgXFxuICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tdHh0LWRhcmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlKTtcXG4gIHBhZGRpbmc6IDE1cHggNDVweDtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgY29sb3I6IHZhcigtLXR4dC1saWdodCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDAgMXZ3O1xcbiAgZm9udDoxLjFyZW0gJ1BsYXlmYWlyIERpc3BsYXknLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4jaGVybyB7XFxuICBoZWlnaHQ6IDUydmg7XFxuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcXG5cXG4gIHBhZGRpbmc6IDY0cHggY2xhbXAoNDhweCwgMTB2dywxMjhweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxOHB4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNoZXJvIGgxIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuI2hlcm8gZW0ge1xcbiAgY29sb3I6ICNmNWE4YmM7XFxufVxcblxcbiNtZW51IGgzLCBwIHtcXG4gIG1hcmdpbjogMC41cmVtIDJyZW07XFxuICBjb2xvcjogdmFyKC0tdHh0LWxvdy1jb250cmFzdCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxMnB4IDMycHg7XFxuICBmb250OiBib2xkIDFlbSAnUG9wcGlucyc7XFxufVxcblxcbmJ1dHRvbi5maWxsZWQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHh0LWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuYnV0dG9uLm91dGxpbmVkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXR4dC1saWdodCwgd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdHh0LWxpZ2h0LCB3aGl0ZSk7XFxuICBib3gtc2hhZG93OiAzcHggM3B4ICNlOWU5ZTk7XFxufVxcblxcbnNlY3Rpb246bm90KCNoZXJvKSB7XFxuICBwYWRkaW5nOiAwIGNsYW1wKDQ4cHgsIDIwdncsIDMwMHB4KTtcXG4gIG1hcmdpbjogNzJweCAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcXG4gIHBhZGRpbmc6IDMycHggNDhweDtcXG4gIG1hcmdpbjogNTZweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5jYXJkICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2FyZCA+IGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZmxleDogbm9uZTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2FyZCA+IC5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZCAucm9sZSB7XFxuICBjb2xvcjogdmFyKC0tdHh0LWxvdy1jb250cmFzdCk7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG5pbWcuY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogR2xvYmFsIHRleHQgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuaDQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuLyogZm9vdGVyIHRlbXBsYXRlIHN0eWxlIHN0YXJ0Ki9cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yLCAjMjIyMjIyKTtcXG5cXG4gIHBhZGRpbmc6IDM2cHggMDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuZm9vdGVyIGlvbi1pY29uIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dCwgI2ZlZmVmZSk7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbi8qIGZvb3RlciB0ZW1wbGF0ZSBzdHlsZSBlbmQgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgY3JlYXRlLCBwYXJhZ3JhcGgsIHRpdGxlLCB3cml0ZSB9XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBjbHMpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiggY2xzICkgb3V0cHV0LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gcGFyYWdyYXBoKCB0ZXh0ICkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHRpdGxlKCB0ZXh0ICl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlKCB0eXBlLCB0ZXh0ICl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBvdXRwdXRcbn0iLCJpbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWcvbG9nb2lwc3VtLTI4Ny5zdmcnO1xuaW1wb3J0IHsgTWFpbiBhcyBIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgTWFpbiBhcyBNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuZXhwb3J0IHtzZXR1cH1cblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIHJvb3QuYXBwZW5kKFxuICAgIEhlYWRlcigpLFxuICAgIE1lbnUoKSxcbiAgICBjcmVhdGVGb290ZXIoKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGUoJ2ltZycsICdsb2dvJyk7XG4gIGxvZ28uc3JjID0gTG9nbztcbiAgbG9nby5hbHQgPSAnJztcblxuICBjb25zdCBuYXYgPSBjcmVhdGUoJ25hdicpO1xuICBuYXYuYXBwZW5kKFxuICAgIG5hdkxpbmsoJ0hvbWUnLCAnJyksXG4gICAgbmF2TGluaygnTWVudScsICcnKSxcbiAgICBuYXZMaW5rKCdDb250YWN0JywgJycpXG4gIClcblxuICBvdXRwdXQuYXBwZW5kKGxvZ28sIG5hdik7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCBjbHMpIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNscykgb3V0cHV0LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gbmF2TGluayggdGV4dCwgaHJlZiA9ICcnICl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgb3V0cHV0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgb3V0cHV0LmhyZWYgPSBocmVmO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuaHJlZiA9ICcnO1xuICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpb24taWNvbicpO1xuICBpY29uLm5hbWUgPSAnbG9nby1naXRodWInXG4gIGljb24ucm9sZSA9ICdpbWcnXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnbWQnLCAnaHlkcmF0ZWQnKVxuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnZi1Sb2RlaCdcblxuICBsaW5rLmFwcGVuZChpY29uLCB0ZXh0KVxuXG4gIHJvb3QuYXBwZW5kKGxpbmspO1xuICByZXR1cm4gcm9vdDtcbn0iLCJpbXBvcnQge2NyZWF0ZSwgcGFyYWdyYXBoLCB0aXRsZX0gZnJvbSBcIi4vZG9tLW1hbmFnZXJcIjtcblxuZXhwb3J0IHsgTWFpbiB9O1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICBIZXJvKCksXG4gICAgQWJvdXQoKSxcbiAgICBIb3VycygpLFxuICAgIExvY2F0aW9uKCksXG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBIZXJvKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ2hlcm8nO1xuXG4gIGNvbnN0IHRleHQgPSBjcmVhdGUoJ2gxJyk7XG4gIHRleHQuaW5uZXJIVE1MID0gJzxlbT5BcnQ8L2VtPiBpcyBpbiB0aGUgPGVtPmZvb2Q8L2VtPi4nO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJywgJ291dGxpbmVkJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdHbyB0byBtZW51J1xuXG4gIG91dHB1dC5hcHBlbmQoIHRleHQsIGJ1dHRvbiApO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIEFib3V0KCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ2Fib3V0JztcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdBYm91dCBVcycpLFxuICAgIHBhcmFncmFwaCgnVGhpcyBpcyBhIGZha2UgcmVzdGF1cmFudCwgd2l0aCBhIGRlbGljaW91cyBnYXN0cm9ub21pYyBhcHByb2FjaC4gQ3JlYXRlZCBpbiBHdWF0ZW1hbGEgaW4gMjAyMywgaXQgaGFzIHRoZSBwdXJwb3NlIG9mIGRlZnlpbmcgYWxsIHRoYXQgaXMga25vd24sIGNyZWF0aW5nIGEgc2l0ZSB3aXRoIHRoZSBjb21wbGljYXRlZCB0b29sIFwid2VicGFja1wiJyksXG4gICAgcGFyYWdyYXBoKCdDb21lIHRhc3RlIGEgdW5pcXVlIGV4cGVyaWVuY2UgdGhhdCBtZXJnZXMgZmxhdm91ciBhbmQgYXJ0ISBBcmUgeW91IHJlYWR5PycpLFxuICAgIENhcmQoKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gSG91cnMoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnaG91cnMnO1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUoJ0hvdXJzJyksXG4gICAgcGFyYWdyYXBoKCdUdWVzZGF5IOKAlCBGcmlkYXkgZnJvbSAxODowMCB0byAwMDowMCcpLFxuICAgIHBhcmFncmFwaCgnV2Vla2VuZHMgZnJvbSAyMDowMCB0byAwMjowMCcpXG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBMb2NhdGlvbigpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdsb2NhdGlvbic7XG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnTG9jYXRpb24nKSxcbiAgICBwYXJhZ3JhcGgoJ1AuIFNoZXJtYW4sIDQyIFdhbGxhYnkgV2F5LCBTeWRuZXknKSxcbiAgICBwYXJhZ3JhcGgoJ0p1c3Qga2VlcCBzd2ltbWluZyA7KScpXG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBDYXJkKCl7XG4gIGNvbnN0IG91dHB1dCA9IGNyZWF0ZSgnZGl2JywgJ2NhcmQnKTtcblxuICBjb25zdCBpbWcgPSBjcmVhdGUoJ2ltZycsICdjaXJjbGUnKTtcbiAgaW1nLnNyYyA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vMTEuanBnJztcbiAgaW1nLmFsdCA9ICcnO1xuXG4gIGNvbnN0IG5hbWUgPSBjcmVhdGUoJ2gzJywgJ25hbWUnKTtcbiAgY29uc3Qgcm9sZSA9IGNyZWF0ZSgnaDQnLCAncm9sZScpO1xuXG4gIG5hbWUudGV4dENvbnRlbnQgPSAnSHVnaCBNYW5uJztcbiAgcm9sZS50ZXh0Q29udGVudCA9ICdGb3VuZGVyJztcblxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlKCdkaXYnLCAnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZChcbiAgICBuYW1lLFxuICAgIHJvbGUsXG4gICAgcGFyYWdyYXBoKCdJIGxvdmUgaW5ub3ZhdGluZy4gVGhpcyByZXN0YXVyYW50IGhhcyBiZWVuIGluIG15IG1pbmQgZXZlciBzaW5jZSBJIGxlYXJudCBob3cgdG8gY29vay4gWW91IGRvIG5vdCBuZWVkIHRvIGtub3cgYWJvdXQgd2VicGFjayB0byBrbm93IGdvb2QgZm9vZCcpXG4gIClcblxuICBvdXRwdXQuYXBwZW5kKGltZywgY29udGVudClcblxuICByZXR1cm4gb3V0cHV0O1xufSIsImV4cG9ydCB7IE1haW4gfSBcblxuaW1wb3J0IHsgY3JlYXRlLCBwYXJhZ3JhcGgsIHRpdGxlLCB3cml0ZSB9IGZyb20gJy4vZG9tLW1hbmFnZXInXG5pbXBvcnQgSW1nIGZyb20gJy4vaW1nL2hlcm8tbWVudS5qcGcnXG5cbmZ1bmN0aW9uIE1haW4oKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgSGVybygpLFxuICAgIFN0YXJ0ZXJzKCksXG4gICAgRGlzaGVzKCksXG4gICAgRGVzc2VydHMoKSxcbiAgICBDb2NrdGFpbHMoKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5mdW5jdGlvbiBIZXJvKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ2hlcm8nO1xuXG4gIGxldCBiYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwLjgpIDMwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKWBcbiAgYmFja2dyb3VuZCArPSBgLCBjZW50ZXIgLyBjb3ZlciB1cmwoJHtJbWd9KWBcblxuICBvdXRwdXQuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgY29uc3QgdGV4dCA9IGNyZWF0ZSgnaDEnKTtcbiAgdGV4dC5pbm5lckhUTUwgPSAnPGVtPkFydDwvZW0+IGlzIGluIHRoZSA8ZW0+Zm9vZDwvZW0+Lic7XG5cbiAgb3V0cHV0LmFwcGVuZCggdGV4dCk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gU3RhcnRlcnMoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnbWVudSdcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdTdGFydGVycycpLFxuICAgIHdyaXRlKCdoMycsICdQaXNjZXMnKSxcbiAgICBwYXJhZ3JhcGgoJ1NlcnZlZCB3aXRoIGJhY2stZW5kIHNhdWNlJyksXG4gICAgd3JpdGUoJ2gzJywgJ1NhZ2l0YXJpdW0nKSxcbiAgICBwYXJhZ3JhcGgoJ01hcmluYXRlZCBpbiBjb2xkIERlY2VtYmVyJyksXG4gICAgd3JpdGUoJ2gzJywgJ0dlbWluaScpLFxuICAgIHBhcmFncmFwaCgnVHdpbmVkIGFuZCBzdGVhbSBjb29rZWQnKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5mdW5jdGlvbiBEaXNoZXMoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBvdXRwdXQuaWQgPSAnbWVudSdcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRpdGxlKCdNYWluIERpc2hlcycpLFxuICAgIHdyaXRlKCdoMycsICdKdXBpdGVyJyksXG4gICAgcGFyYWdyYXBoKCdCaWdnZXN0IHBsYW5ldCBvbiB0aGUgc29sYXIgc3lzdGVtJyksXG4gICAgd3JpdGUoJ2gzJywgJ01hcnMnKSxcbiAgICBwYXJhZ3JhcGgoJ1RoZSByZWRkaXNoIGNvbG9yIG9mIGl0cyBzdXJmYWNlIGlzIGR1ZSB0byBmaW5lbHkgZ3JhaW5lZCBpcm9uKElJSSkgb3hpZGUgZHVzdCBpbiB0aGUgc29pbCcpLFxuICAgIHdyaXRlKCdoMycsICdWZW51cycpLFxuICAgIHBhcmFncmFwaCgnVGhlIGRlbnNlc3QgYXRtb3NwaGVyZSBvZiBhbGwgdGhlIHJvY2t5IGJvZGllcyBpbiB0aGUgU29sYXIgU3lzdGVtJyksXG4gIClcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmZ1bmN0aW9uIERlc3NlcnRzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnRGVzc2VydHMnKSxcbiAgICB3cml0ZSgnaDMnLCAnU2hpbmp1a3UnKSxcbiAgICBwYXJhZ3JhcGgoJ0J1enppbmcgY2x1YnMgYW5kIGthcmFva2Ugcm9vbXMgb2YgbmVvbi1saXQgaW4gdGhlIFNreXNjcmFwZXIgRGlzdHJpY3QnKSxcbiAgICB3cml0ZSgnaDMnLCAnU2hpYnV5YScpLFxuICAgIHBhcmFncmFwaCgnQSBtYWpvciBjb21tZXJjaWFsIGFuZCBmaW5hbmNlIGNlbnRlcicpLFxuICAgIHdyaXRlKCdoMycsICdTaGltb2tpdGEnKSxcbiAgICBwYXJhZ3JhcGgoJ05hcnJvdywgbXVyYWwtcGFpbnRlZCBsYW5lcyBsaW5lZCB3aXRoIHN0eWxpc2ggc3RvcmVzIGZvciB2aW50YWdlIGNsb3RoZXMgYW5kIHZpbnlsJylcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuZnVuY3Rpb24gQ29ja3RhaWxzKCl7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgb3V0cHV0LmlkID0gJ21lbnUnXG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICB0aXRsZSgnQ29ja3RhaWxzJyksXG4gICAgd3JpdGUoJ2gzJywgJ0ZyZXlqYScpLFxuICAgIHBhcmFncmFwaCgnTG92ZSwgYmVhdXR5LCBmZXJ0aWxpdHksIHNleCwgd2FyLCBnb2xkLCBhbmQgc2Vpw7ByLiBGcmV5amEgaXMgdGhlIG93bmVyIG9mIHRoZSBuZWNrbGFjZSBCcsOtc2luZ2FtZW4gYW5kIHJpZGVzIGEgY2hhcmlvdCBwdWxsZWQgYnkgdHdvIGNhdHMuJyksXG4gICAgd3JpdGUoJ2gzJywgJ1ZhbGt5cmllJyksXG4gICAgcGFyYWdyYXBoKCdBIGZlbWFsZSBzcGlyaXQgdGhhdCBkZWNpZGVzIGlmIHdhcnJpb3JzIGRpZSBvciBzdXJ2aXZlLiBJZiB0aGV5IGFyZSB3b3J0aHksIHNoZSBndWlkZXMgdGhlbSB0byBWYWxoYWxsYS4nKSxcbiAgICB3cml0ZSgnaDMnLCAnSGVpbWRhbGwnKSxcbiAgICBwYXJhZ3JhcGgoJ0tlZXBzIHdhdGNoIGZvciBpbnZhZGVycyBhbmQgdGhlIG9uc2V0IG9mIFJhZ25hcsO2ayBmcm9tIGhpcyBkd2VsbGluZyBIaW1pbmJqw7ZyZywgd2hlcmUgdGhlIGJ1cm5pbmcgcmFpbmJvdyBicmlkZ2UgQmlmcsO2c3QgbWVldHMgdGhlIHNreS4nKSxcbiAgKVxuXG4gIHJldHVybiBvdXRwdXRcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtzZXR1cH0gZnJvbSBcIi4vZG9tLXNldHVwXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuc2V0dXAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=