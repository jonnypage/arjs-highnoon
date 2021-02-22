/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// JavaScript\n__webpack_require__(/*! ./arjs-highnoon */ \"./src/js/arjs-highnoon.js\");\n\n\n//# sourceURL=webpack://arjs-highnoon/./src/js/app.js?");

/***/ }),

/***/ "./src/js/arjs-highnoon.js":
/*!*********************************!*\
  !*** ./src/js/arjs-highnoon.js ***!
  \*********************************/
/***/ (() => {

eval("const audioHighNoon = new Audio('src/assets/itshighnoon.mp3');\r\nlet isAnimationPlaying = false;\r\n\r\nAFRAME.registerComponent('mccreehandler', {\r\n  init: function () {\r\n    this.el.addEventListener('click', () => {\r\n      // When the model is clicked, run the function onMccreeHit\r\n      onMccreeHit();\r\n    });\r\n  },\r\n});\r\n\r\nfunction onMccreeHit() {\r\n  // if the animation is not playing already, start the animation\r\n  if (!isAnimationPlaying) {\r\n    // Toggle the animation playing boolean so it can't be restarted\r\n    // while it's already playing\r\n    isAnimationPlaying = true;\r\n\r\n    // Play the audio\r\n    audioHighNoon.play();\r\n\r\n    // Start the animation for the spinning base\r\n    const mccreeSpinner = document.getElementById('mccree-base-spinner');\r\n    mccreeSpinner.emit('startAnimation');\r\n\r\n    // Start the particle system throwing out the Overwatch Logos\r\n    const particleSystem = document.getElementById('particle-system');\r\n    particleSystem.components['particle-system'].startParticles();\r\n\r\n    // Wait for 2.5 seconds\r\n    setTimeout(function () {\r\n      // Stop the particle system throwing out the Overwatch Logos\r\n      particleSystem.components['particle-system'].stopParticles();\r\n    }, 2500);\r\n\r\n    // Wait for 5 seconds\r\n    setTimeout(function () {\r\n      // Now that the animation is finished, toggle the animation playing\r\n      // boolean so it can be restarted\r\n      isAnimationPlaying = false;\r\n    }, 4000);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://arjs-highnoon/./src/js/arjs-highnoon.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;