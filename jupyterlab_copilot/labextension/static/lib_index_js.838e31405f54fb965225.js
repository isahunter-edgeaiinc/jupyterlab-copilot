"use strict";
(self["webpackChunkjupyterlab_copilot"] = self["webpackChunkjupyterlab_copilot"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Initialization data for the jupyterlab-chatbot extension.
 */
const plugin = {
    id: 'jupyterlab-copilot:plugin',
    description: 'Assists users in all tasks involved with Machine Learning, AI Development, MLOps Best Practices, Experiments, Model Creation, Model Training, etc...',
    autoStart: true,
    requires: [_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer],
    activate: (app, restorer) => {
        console.log('JupyterLab extension jupyterlab-copilot is activated!');
        // Create a new widget
        const widget = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget();
        widget.id = 'jupyterlab-copilot';
        widget.title.label = 'Jupyterlab-Copilot';
        widget.title.closable = true;
        widget.node.innerHTML = `
      <!DOCTYPE html>
      <html>
      <body>
      <iframe src="https://copilotstudio.microsoft.com/environments/Default-c93d6b0a-62d2-4b50-a2e4-9889a5d595a1/bots/cre7a_edgeAiSolutionsNavigator/webchat?__version__=2" frameborder="0" style="width: 100%; height: 100%;"></iframe>
      </body>
      </html>
    `;
        // Add the widget to the right sidebar
        app.shell.add(widget, 'right');
        // Track the widget for restoration
        restorer.add(widget, 'jupyterlab-copilot');
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.838e31405f54fb965225.js.map