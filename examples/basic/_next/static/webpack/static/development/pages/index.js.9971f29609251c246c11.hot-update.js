webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Toolbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toolbox */ "./components/Toolbox.js");
/* harmony import */ var _components_user_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/Container */ "./components/user/Container.js");
/* harmony import */ var _components_user_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/Button */ "./components/user/Button.js");
/* harmony import */ var _components_user_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user/Card */ "./components/user/Card.js");
/* harmony import */ var _components_user_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/user/Text */ "./components/user/Text.js");
/* harmony import */ var _components_SettingsPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SettingsPanel */ "./components/SettingsPanel.js");
/* harmony import */ var _craftjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @craftjs/core */ "../../../node_modules/@craftjs/core/dist/index.js");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Topbar */ "./components/Topbar.js");
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lzutf8 */ "../../../node_modules/lzutf8/build/production/lzutf8.js");
/* harmony import */ var lzutf8__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lzutf8__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/prevwong/Documents/GitHub/react-page-builder/packages/examples/basic/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      padding: 0,
      background: "rgb(252, 253, 253)"
    }
  };
});
function App() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      enabled = _useState[0],
      setEnabled = _useState[1];

  var base64 = "eyJjYW52YXMtUk9PVCI6eyJ0eXBlxAhyZXNvbHZlZE5hbWUiOiJDb250YWluZXIifSwiaXNDxTUiOnRydWUsInByb3BzxDViYWNrZ3JvdW5kIjoiI2XFASIsInBhZGRpbmciOjV9xA1yZW50IjpudWxsLCJub2RlcyI6W8UJLW95SlpTaHFTWSLGGi04Um0zZWx6OUzIEXpDaldpaG1FRMgRV2VJcEs1N3giLOgAylExVGhvQnRCZyJdLCJjdXN0b20iOnt9LCJkaXNwbGF59ADSzkv7AQdhcmTEMPcA8mbFAewA8jPrAPLtAWssIl9jaGlsZOgBSnsidGV4yyVzN2h6dUlXLW4iLCJidXR0b25zyh1ZaXN3aWVzM3DkAIz7AOPnAK7vAVz6AN9CxWntAOFzaXrEGnNtYWxsIiwidmFyaWHmAM3nAUBk5AF6b2xvciI6InByaW1hcnkiLOgAzUNsaWNrIG1lxVP2AQf6AL/qAI7vAfv6AMFUxHfsAL/nAIhIaSB3b3JsZCEiLCJmb250U+UA1jIw/wCX9QCXxWQsImluZGV4Ijoy5AGC8AJ5/wNI/wNI8AJWOcUB7AJWNvoAuO4DUVdpdzFRdUZUTf8DDOwAlvECgf4DD1Rv5QKG+ADM7ACq8AOx7gCsTFJRUzB5b2JOxxotTXhPT3lnZV9C/wC96gCF8QMf/gC7Qm90xFT/AL7/AL5b/wCdzGfvAZT/AsjzAshJdCdzIG1lIGFnYWlu8ALNLO4DrfMCJOoCov8C4cV97wGW/wCu8wCuVGl0bOQGAP8DcuwE6/8AlugAluoCG/8AlvMAllN1YnTxAJkx7Aab/wCZ/ACZ6gax/wVm/wVm/wVm7gVmTGVhcm4gbW9y/wVo/gVo6QTTMX19";
  var decoded = lzutf8__WEBPACK_IMPORTED_MODULE_11___default.a.decodeBase64(base64); // const json = lz.decompress(decoded);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(lzutf8__WEBPACK_IMPORTED_MODULE_11___default.a.decompress(decoded)),
      json = _useState2[0],
      setJson = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("me"),
      test = _useState3[0],
      setTest = _useState3[1];

  return __jsx("div", {
    style: {
      margin: "0 auto",
      width: "800px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: {
      margin: "20px 0"
    },
    variant: "h5",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Basic Page Editor"), __jsx(_craftjs_core__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
    resolver: {
      Card: _components_user_Card__WEBPACK_IMPORTED_MODULE_6__["Card"],
      Button: _components_user_Button__WEBPACK_IMPORTED_MODULE_5__["Button"],
      Text: _components_user_Text__WEBPACK_IMPORTED_MODULE_7__["Text"],
      Container: _components_user_Container__WEBPACK_IMPORTED_MODULE_4__["Container"],
      CardTop: _components_user_Card__WEBPACK_IMPORTED_MODULE_6__["CardTop"],
      CardBottom: _components_user_Card__WEBPACK_IMPORTED_MODULE_6__["CardBottom"]
    },
    enabled: enabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Topbar__WEBPACK_IMPORTED_MODULE_10__["Topbar"], {
    onLoadState: function onLoadState(state) {
      return setJson(state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("a", {
    onClick: function onClick() {
      return setTest("here");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Click ", test), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 5,
    style: {
      paddingTop: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_craftjs_core__WEBPACK_IMPORTED_MODULE_9__["Frame"], {
    nodes: json,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_craftjs_core__WEBPACK_IMPORTED_MODULE_9__["Canvas"], {
    is: _components_user_Container__WEBPACK_IMPORTED_MODULE_4__["Container"],
    padding: 5,
    background: "#eeeeee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_user_Card__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_user_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    text: "Click me",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_user_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    fontSize: 20,
    text: "Hi world!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_craftjs_core__WEBPACK_IMPORTED_MODULE_9__["Canvas"], {
    is: _components_user_Container__WEBPACK_IMPORTED_MODULE_4__["Container"],
    padding: 6,
    background: "#999999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_user_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "small",
    text: "It's me again!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_components_Toolbox__WEBPACK_IMPORTED_MODULE_3__["Toolbox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_SettingsPanel__WEBPACK_IMPORTED_MODULE_8__["SettingsPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.9971f29609251c246c11.hot-update.js.map