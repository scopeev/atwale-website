"use strict";
(self["webpackChunkascu"] = self["webpackChunkascu"] || []).push([["about_chunk"],{

/***/ "./src/chunck.about.ts":
/*!*****************************!*\
  !*** ./src/chunck.about.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_controllers_about_about_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/controllers/about/about.controller */ "./src/parts/controllers/about/about.controller.ts");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * All JS and TS code that belongs to the home page
 */



/***/ }),

/***/ "./src/parts/controllers/about/about.controller.ts":
/*!*********************************************************!*\
  !*** ./src/parts/controllers/about/about.controller.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutController: () => (/* binding */ AboutController)
/* harmony export */ });
/* harmony import */ var _common_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/controller */ "./src/parts/controllers/common/controller.ts");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Not required unless other wisw
 */
class AboutController extends _common_controller__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor() {
        super();
    }
    async init() {
    }
}
const controller = new AboutController();
controller.init();


/***/ }),

/***/ "./src/parts/controllers/common/controller.ts":
/*!****************************************************!*\
  !*** ./src/parts/controllers/common/controller.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * This is the base controller every controller of every page and html file will have to inherit it
 */
class Controller {
    constructor() {
        /**
         * Track errors across the website and performance issues
         */
        this.controllerID = "Default.Controller";
    }
}
;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/chunck.about.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMvYWJvdXRfY2h1bmsuZDBmNjkwZWZlNzY4MGIwMmFkYjUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1BwRDtBQUNBO0FBQ0E7QUFDQTtBQUNrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDTyw4QkFBOEIsMERBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNjdS8uL3NyYy9jaHVuY2suYWJvdXQudHMiLCJ3ZWJwYWNrOi8vYXNjdS8uL3NyYy9wYXJ0cy9jb250cm9sbGVycy9hYm91dC9hYm91dC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2FzY3UvLi9zcmMvcGFydHMvY29udHJvbGxlcnMvY29tbW9uL2NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIEF0YXdhYWxlIENoaWxkIFN1cHBvcnQgVWdhbmRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qKlxuICogQWxsIEpTIGFuZCBUUyBjb2RlIHRoYXQgYmVsb25ncyB0byB0aGUgaG9tZSBwYWdlXG4gKi9cbmltcG9ydCBcIi4vcGFydHMvY29udHJvbGxlcnMvYWJvdXQvYWJvdXQuY29udHJvbGxlclwiO1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIEF0YXdhYWxlIENoaWxkIFN1cHBvcnQgVWdhbmRhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnRyb2xsZXJcIjtcbi8qKlxuICogTm90IHJlcXVpcmVkIHVubGVzcyBvdGhlciB3aXN3XG4gKi9cbmV4cG9ydCBjbGFzcyBBYm91dENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICB9XG59XG5jb25zdCBjb250cm9sbGVyID0gbmV3IEFib3V0Q29udHJvbGxlcigpO1xuY29udHJvbGxlci5pbml0KCk7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgQXRhd2FhbGUgQ2hpbGQgU3VwcG9ydCBVZ2FuZGEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbnRyb2xsZXIgZXZlcnkgY29udHJvbGxlciBvZiBldmVyeSBwYWdlIGFuZCBodG1sIGZpbGUgd2lsbCBoYXZlIHRvIGluaGVyaXQgaXRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJhY2sgZXJyb3JzIGFjcm9zcyB0aGUgd2Vic2l0ZSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJJRCA9IFwiRGVmYXVsdC5Db250cm9sbGVyXCI7XG4gICAgfVxufVxuO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9