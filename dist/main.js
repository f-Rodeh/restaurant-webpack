<<<<<<< HEAD
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



const setup = () => {
  console.log('Starting dom-setup...');

  const root = document.getElementById('content');
  console.log('current:', root)

  console.log('gen about:', About())

  root.append(
    Header(),
    Main(),
    (0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])(),
  );
}

function Header(){
  const output = document.createElement('header');

  const logo = create('img', 'logo');
  logo.src = '../img/logoipsum-287.svg';
  logo.alt = '';

  const nav = create('nav');
  nav.append(
    navLink('About', ''),
    navLink('Menu', ''),
    navLink('Contact', '')
  )

  output.append(logo, nav);
  return output;
}

function Main() {
  const output = document.createElement('main');

  output.append(
    Hero(),
    About()
  )

  return output;
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  const text = create('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  const button = create('button', 'outlined');
  button.textContent = 'Go to menu'

  output.append(
    text,
    button
  )

  return output;
}

function About(){
  const output = document.createElement('section');
  output.id = 'about';

  const title = create('h1');
  title.textContent = 'About Us';

  const card = create('div', 'card');

  output.append(
    title,
    paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque maiores sequi, architecto ratione nisi libero quis perferendis sint qui nihil repellat, porro expedita doloremque?'),
    paragraph('Aliquam, nulla? Quibusdam, cumque provident consectetur dolor repellendus totam!'),
    Card()
  )

  return output;
}

function Card(){
  const output = create('div', 'card');

  const img = create('img', 'circle');
  img.src = 'https://randomuser.me/api/portraits/men/11.jpg';
  img.alt = '';

  const content = create('div', 'content');
  const name = create('h3', 'name');
  const role = create('h4', 'role');

  name.textContent = 'Hugh Mann';
  role.textContent = 'Founder';

  content.append(
    name,
    role,
    paragraph('Inventore quos quam natus quidem quaerat ratione quia. Lorem ipsum dolor sit amet.')
  )

  output.append(
    img,
    content
  )

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

function paragraph( text ) {
  const output = document.createElement('p');
  output.textContent = text;
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-setup */ "./src/dom-setup.js");


(0,_dom_setup__WEBPACK_IMPORTED_MODULE_0__.setup)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDdEI7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaklBLGlFQUFlLFlBQVk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxpREFBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWNrLy4vc3JjL2RvbS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuZXhwb3J0IHtzZXR1cH1cblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdTdGFydGluZyBkb20tc2V0dXAuLi4nKTtcblxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc29sZS5sb2coJ2N1cnJlbnQ6Jywgcm9vdClcblxuICBjb25zb2xlLmxvZygnZ2VuIGFib3V0OicsIEFib3V0KCkpXG5cbiAgcm9vdC5hcHBlbmQoXG4gICAgSGVhZGVyKCksXG4gICAgTWFpbigpLFxuICAgIGNyZWF0ZUZvb3RlcigpLFxuICApO1xufVxuXG5mdW5jdGlvbiBIZWFkZXIoKXtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgbG9nbyA9IGNyZWF0ZSgnaW1nJywgJ2xvZ28nKTtcbiAgbG9nby5zcmMgPSAnLi4vaW1nL2xvZ29pcHN1bS0yODcuc3ZnJztcbiAgbG9nby5hbHQgPSAnJztcblxuICBjb25zdCBuYXYgPSBjcmVhdGUoJ25hdicpO1xuICBuYXYuYXBwZW5kKFxuICAgIG5hdkxpbmsoJ0Fib3V0JywgJycpLFxuICAgIG5hdkxpbmsoJ01lbnUnLCAnJyksXG4gICAgbmF2TGluaygnQ29udGFjdCcsICcnKVxuICApXG5cbiAgb3V0cHV0LmFwcGVuZChsb2dvLCBuYXYpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgb3V0cHV0LmFwcGVuZChcbiAgICBIZXJvKCksXG4gICAgQWJvdXQoKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gSGVybygpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdoZXJvJztcblxuICBjb25zdCB0ZXh0ID0gY3JlYXRlKCdoMScpO1xuICB0ZXh0LmlubmVySFRNTCA9ICc8ZW0+QXJ0PC9lbT4gaXMgaW4gdGhlIDxlbT5mb29kPC9lbT4uJztcblxuICBjb25zdCBidXR0b24gPSBjcmVhdGUoJ2J1dHRvbicsICdvdXRsaW5lZCcpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnR28gdG8gbWVudSdcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIHRleHQsXG4gICAgYnV0dG9uXG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBBYm91dCgpe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG91dHB1dC5pZCA9ICdhYm91dCc7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGUoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcblxuICBjb25zdCBjYXJkID0gY3JlYXRlKCdkaXYnLCAnY2FyZCcpO1xuXG4gIG91dHB1dC5hcHBlbmQoXG4gICAgdGl0bGUsXG4gICAgcGFyYWdyYXBoKCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVm9sdXB0YXRlcywgZWFxdWUgbWFpb3JlcyBzZXF1aSwgYXJjaGl0ZWN0byByYXRpb25lIG5pc2kgbGliZXJvIHF1aXMgcGVyZmVyZW5kaXMgc2ludCBxdWkgbmloaWwgcmVwZWxsYXQsIHBvcnJvIGV4cGVkaXRhIGRvbG9yZW1xdWU/JyksXG4gICAgcGFyYWdyYXBoKCdBbGlxdWFtLCBudWxsYT8gUXVpYnVzZGFtLCBjdW1xdWUgcHJvdmlkZW50IGNvbnNlY3RldHVyIGRvbG9yIHJlcGVsbGVuZHVzIHRvdGFtIScpLFxuICAgIENhcmQoKVxuICApXG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gQ2FyZCgpe1xuICBjb25zdCBvdXRwdXQgPSBjcmVhdGUoJ2RpdicsICdjYXJkJyk7XG5cbiAgY29uc3QgaW1nID0gY3JlYXRlKCdpbWcnLCAnY2lyY2xlJyk7XG4gIGltZy5zcmMgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzExLmpwZyc7XG4gIGltZy5hbHQgPSAnJztcblxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlKCdkaXYnLCAnY29udGVudCcpO1xuICBjb25zdCBuYW1lID0gY3JlYXRlKCdoMycsICduYW1lJyk7XG4gIGNvbnN0IHJvbGUgPSBjcmVhdGUoJ2g0JywgJ3JvbGUnKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gJ0h1Z2ggTWFubic7XG4gIHJvbGUudGV4dENvbnRlbnQgPSAnRm91bmRlcic7XG5cbiAgY29udGVudC5hcHBlbmQoXG4gICAgbmFtZSxcbiAgICByb2xlLFxuICAgIHBhcmFncmFwaCgnSW52ZW50b3JlIHF1b3MgcXVhbSBuYXR1cyBxdWlkZW0gcXVhZXJhdCByYXRpb25lIHF1aWEuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LicpXG4gIClcblxuICBvdXRwdXQuYXBwZW5kKFxuICAgIGltZyxcbiAgICBjb250ZW50XG4gIClcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGUodHlwZSwgY2xzKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChjbHMpIG91dHB1dC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIG5hdkxpbmsoIHRleHQsIGhyZWYgPSAnJyApe1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG91dHB1dC5ocmVmID0gaHJlZjtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gcGFyYWdyYXBoKCB0ZXh0ICkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG91dHB1dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLmhyZWYgPSAnJztcbiAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcblxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW9uLWljb24nKTtcbiAgaWNvbi5uYW1lID0gJ2xvZ28tZ2l0aHViJ1xuICBpY29uLnJvbGUgPSAnaW1nJ1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ21kJywgJ2h5ZHJhdGVkJylcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ2YtUm9kZWgnXG5cbiAgbGluay5hcHBlbmQoaWNvbiwgdGV4dClcblxuICByb290LmFwcGVuZChsaW5rKTtcbiAgcmV0dXJuIHJvb3Q7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3NldHVwfSBmcm9tIFwiLi9kb20tc2V0dXBcIjtcblxuc2V0dXAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
=======
(()=>{"use strict";function e(){const e=document.createElement("section");e.id="about";const n=t("h1");return n.textContent="About Us",t("div","card"),e.append(n,o("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque maiores sequi, architecto ratione nisi libero quis perferendis sint qui nihil repellat, porro expedita doloremque?"),o("Aliquam, nulla? Quibusdam, cumque provident consectetur dolor repellendus totam!"),function(){const e=t("div","card"),n=t("img","circle");n.src="https://randomuser.me/api/portraits/men/11.jpg",n.alt="";const r=t("div","content"),c=t("h3","name"),u=t("h4","role");return c.textContent="Hugh Mann",u.textContent="Founder",r.append(c,u,o("Inventore quos quam natus quidem quaerat ratione quia. Lorem ipsum dolor sit amet.")),e.append(n,r),e}()),e}function t(e,t){const n=document.createElement(e);return t&&n.classList.add(t),n}function n(e,t=""){const n=document.createElement("a");return n.textContent=e,n.href=t,n}function o(e){const t=document.createElement("p");return t.textContent=e,t}(()=>{console.log("Starting dom-setup...");const o=document.getElementById("content");console.log("current:",o),console.log("gen about:",e()),o.append(function(){const e=document.createElement("header"),o=t("img","logo");o.src="../img/logoipsum-287.svg",o.alt="";const r=t("nav");return r.append(n("About",""),n("Menu",""),n("Contact","")),e.append(o,r),e}(),function(){const n=document.createElement("main");return n.append(function(){const e=document.createElement("section");e.id="hero";const n=t("h1");n.innerHTML="<em>Art</em> is in the <em>food</em>.";const o=t("button","outlined");return o.textContent="Go to menu",e.append(n,o),e}(),e()),n}())})()})();
>>>>>>> be55b5d709687d6eab7c1a2bb6653ac6bbeb3c59
