webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../../node_modules/@craftjs/core/dist/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/dist/index.js ***!
  \****************************************************************************************************/
/*! exports provided: Editor, Canvas, NodeElement, mapChildrenToNodes, isCanvas, isRoot, isTopLevelCanvas, isDeletable, isMoveable, hasTopLevelCanvases, Frame, useEditor, useNode, connectEditor, connectNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.js */ "../../../node_modules/@craftjs/core/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeElement", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["NodeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapChildrenToNodes", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["mapChildrenToNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCanvas", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["isCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["isRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTopLevelCanvas", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["isTopLevelCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDeletable", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["isDeletable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMoveable", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["isMoveable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasTopLevelCanvases", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["hasTopLevelCanvases"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["Frame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNode", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectEditor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["connectEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectNode", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["connectNode"]; });



/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/index.js ***!
  \***************************************************************************************************/
/*! exports provided: Editor, Canvas, NodeElement, mapChildrenToNodes, isCanvas, isRoot, isTopLevelCanvas, isDeletable, isMoveable, hasTopLevelCanvases, Frame, useEditor, useNode, connectEditor, connectNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "../../../node_modules/@craftjs/core/lib/nodes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeElement", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["NodeElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapChildrenToNodes", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["mapChildrenToNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCanvas", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["isCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["isRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTopLevelCanvas", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["isTopLevelCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDeletable", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["isDeletable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMoveable", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["isMoveable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasTopLevelCanvases", function() { return _nodes__WEBPACK_IMPORTED_MODULE_0__["hasTopLevelCanvases"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "../../../node_modules/@craftjs/core/lib/render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _render__WEBPACK_IMPORTED_MODULE_1__["Frame"]; });

/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "../../../node_modules/@craftjs/core/lib/connectors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["useEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNode", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["useNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectEditor", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["connectEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectNode", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["connectNode"]; });

/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ "../../../node_modules/@craftjs/core/lib/editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor__WEBPACK_IMPORTED_MODULE_3__["Editor"]; });






/***/ }),

/***/ "./components/Topbar.js":
/*!******************************!*\
  !*** ./components/Topbar.js ***!
  \******************************/
/*! exports provided: Topbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topbar", function() { return Topbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _craftjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @craftjs/core */ "../../../node_modules/@craftjs/core/dist/index.js");
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lzutf8 */ "../../../node_modules/lzutf8/build/production/lzutf8.js");
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lzutf8__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-to-clipboard */ "../../../node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/prevwong/Documents/GitHub/react-page-builder/packages/examples/basic/components/Topbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Topbar = function Topbar(_ref) {
  var reset = _ref.reset;

  var _useEditor = Object(_craftjs_core__WEBPACK_IMPORTED_MODULE_2__["useEditor"])(function (state) {
    return {
      enabled: state.options.enabled
    };
  }),
      actions = _useEditor.actions,
      query = _useEditor.query,
      enabled = _useEditor.enabled;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      dialogOpen = _useState[0],
      setDialogOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      snackbar = _useState2[0],
      setSnackbar = _useState2[1];

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 1,
    py: 1,
    mt: 3,
    mb: 1,
    bgcolor: "#cbe8e7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      checked: enabled,
      onChange: function onChange(_, value) {
        return actions.setOptions(function (options) {
          return options.enabled = value;
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }),
    label: "Enable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    variant: "outlined",
    color: "secondary",
    style: {
      marginRight: "10px"
    },
    onClick: function onClick() {
      var json = query.serialize();
      var uint8array = lzutf8__WEBPACK_IMPORTED_MODULE_3___default.a.compress(json);
      var base64 = lzutf8__WEBPACK_IMPORTED_MODULE_3___default.a.encodeBase64(uint8array);
      copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(base64);
      setSnackbar("State copied to clipboard");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Copy current state"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    variant: "outlined",
    color: "secondary",
    onClick: function onClick() {
      return setDialogOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Load state"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: dialogOpen,
    onClose: function onClose() {
      setDialogOpen(false);
    },
    fullWidth: true,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    id: "alert-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Load state"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    multiline: true,
    fullWidth: true,
    placeholder: "Paste the contents that was copied from the \"Save current state\" button",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setDialogOpen(false);
    },
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setDialogOpen(false);
    },
    color: "primary",
    autoFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Load"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    open: !!snackbar,
    onClose: function onClose() {
      return setSnackbar(false);
    },
    message: __jsx("span", {
      id: "message-id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, snackbar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))));
};

/***/ })

})
//# sourceMappingURL=index.js.7c934255d0d531232393.hot-update.js.map