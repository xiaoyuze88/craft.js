webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../../node_modules/@craftjs/core/dist/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/dist/index.js ***!
  \****************************************************************************************************/
/*! exports provided: Canvas, NodeElement, mapChildrenToNodes, isCanvas, isRoot, isTopLevelCanvas, isDeletable, isMoveable, hasTopLevelCanvases, Frame, useNode, connectNode, Editor, useEditor, connectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.js */ "../../../node_modules/@craftjs/core/lib/index.js");
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNode", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectNode", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["connectNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectEditor", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["connectEditor"]; });



/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/connectors/useEditor.js":
/*!******************************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/connectors/useEditor.js ***!
  \******************************************************************************************************************/
/*! exports provided: useEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return useEditor; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _editor_useInternalEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/useInternalEditor */ "../../../node_modules/@craftjs/core/lib/editor/useInternalEditor.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


function useEditor(collect) {
  var _ref = collect ? Object(_editor_useInternalEditor__WEBPACK_IMPORTED_MODULE_8__["useInternalEditor"])(collect) : Object(_editor_useInternalEditor__WEBPACK_IMPORTED_MODULE_8__["useInternalEditor"])(),
      handlers = _ref.handlers,
      _ref$actions = _ref.actions,
      setDOM = _ref$actions.setDOM,
      setNodeEvent = _ref$actions.setNodeEvent,
      actions = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref$actions, ["setDOM", "setNodeEvent"]),
      collected = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["handlers", "actions"]);

  return _objectSpread({
    connectors: handlers,
    actions: actions
  }, collected);
}

/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/editor/actions.js":
/*!************************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/editor/actions.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _craftjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @craftjs/utils */ "../../../node_modules/@craftjs/utils/dist/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes */ "../../../node_modules/@craftjs/core/lib/nodes/index.js");
/* harmony import */ var _utils_updateEventsNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/updateEventsNode */ "../../../node_modules/@craftjs/core/lib/utils/updateEventsNode.js");





var invariant = __webpack_require__(/*! invariant */ "../../../node_modules/invariant/browser.js");

var Actions = function Actions(state, query) {
  var _ = function _(name) {
    return Actions(state, query)[name];
  };

  return {
    setOptions: function setOptions(cb) {
      cb(state.options);
    },
    setIndicator: function setIndicator(indicator) {
      if (indicator && (!indicator.placement.parent.dom || indicator.placement.currentNode && !indicator.placement.currentNode.dom)) return;
      state.events.indicator = indicator;
    },
    setNodeEvent: function setNodeEvent(eventType, id) {
      var current = state.events[eventType];

      if (current && id != current) {
        state.nodes[current].events[eventType] = false;
      }

      if (id) {
        var node = state.nodes[id];
        state.nodes[id].events[eventType] = true;
        state.events[eventType] = id;
      } else {
        state.events[eventType] = null;
      }
    },
    replaceNodes: function replaceNodes(nodes) {
      state.nodes = nodes;
    },
    add: function add(nodes, parentId) {
      if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(nodes)) nodes = [nodes];
      if (parentId && !state.nodes[parentId].data.nodes && Object(_nodes__WEBPACK_IMPORTED_MODULE_2__["isCanvas"])(state.nodes[parentId])) state.nodes[parentId].data.nodes = [];
      nodes.forEach(function (node) {
        var parent = parentId ? parentId : node.data.parent,
            parentNode = state.nodes[parent];

        if (parentNode && Object(_nodes__WEBPACK_IMPORTED_MODULE_2__["isCanvas"])(node) && !Object(_nodes__WEBPACK_IMPORTED_MODULE_2__["isCanvas"])(parentNode)) {
          invariant(node.data.props.id, _craftjs_utils__WEBPACK_IMPORTED_MODULE_1__["ERROR_ROOT_CANVAS_NO_ID"]);
          if (!parentNode.data._childCanvas) parentNode.data._childCanvas = {};
          node.data.parent = parentNode.id;
          parentNode.data._childCanvas[node.data.props.id] = node.id;
          delete node.data.props.id;
        } else {
          if (parentId) query.canDropInParent(node, parentId);

          if (parentNode) {
            if (parentNode.data.props.children) delete parentNode.data.props["children"]; // if (parentId && !state.nodes[parentId].data.nodes) state.nodes[parentId].data.nodes = [];

            if (!parentNode.data.nodes) parentNode.data.nodes = [];
            var currentNodes = parentNode.data.nodes;
            currentNodes.splice(node.data.index !== undefined ? node.data.index : currentNodes.length, 0, node.id);
            node.data.parent = parent;
          }
        }

        state.nodes[node.id] = node;
      });
    },
    move: function move(targetId, newParentId, index) {
      var targetNode = state.nodes[targetId],
          newParent = state.nodes[newParentId],
          newParentNodes = newParent.data.nodes;
      query.canDropInParent(targetNode, newParentId);
      var currentParent = state.nodes[targetNode.data.parent],
          currentParentNodes = currentParent.data.nodes;
      currentParentNodes[currentParentNodes.indexOf(targetId)] = "marked";
      if (newParentNodes) newParentNodes.splice(index, 0, targetId);else newParent.data.nodes = [targetId];
      state.nodes[targetId].data.parent = newParentId;
      state.nodes[targetId].data.index = index;
      currentParentNodes.splice(currentParentNodes.indexOf("marked"), 1); // updateEventsNode(state, targetId);
    },
    "delete": function _delete(id) {
      invariant(id != _craftjs_utils__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODE"], "Cannot delete Root node");
      var targetNode = state.nodes[id];

      if (Object(_nodes__WEBPACK_IMPORTED_MODULE_2__["isCanvas"])(targetNode)) {
        invariant(!Object(_nodes__WEBPACK_IMPORTED_MODULE_2__["isTopLevelCanvas"])(targetNode), "Cannot delete a Canvas that is not a direct child of another Canvas");
        targetNode.data.nodes.map(function (childId) {
          _("delete")(childId);
        });
      }

      var parentNode = state.nodes[targetNode.data.parent];

      if (parentNode && parentNode.data.nodes.indexOf(id) > -1) {
        parentNode.data.nodes.splice(parentNode.data.nodes.indexOf(id), 1);
      }

      Object(_utils_updateEventsNode__WEBPACK_IMPORTED_MODULE_3__["updateEventsNode"])(state, id, true);
      delete state.nodes[id];
    },
    setProp: function setProp(id, cb) {
      invariant(state.nodes[id], _craftjs_utils__WEBPACK_IMPORTED_MODULE_1__["ERROR_INVALID_NODEID"]);
      cb(state.nodes[id].data.props); // updateEventsNode(state, id);
    },
    setDOM: function setDOM(id, dom) {
      invariant(state.nodes[id], _craftjs_utils__WEBPACK_IMPORTED_MODULE_1__["ERROR_INVALID_NODEID"]);
      state.nodes[id].dom = dom; // updateEventsNode(state, id);
    },
    setHidden: function setHidden(id, bool) {
      state.nodes[id].data.hidden = bool;
    },
    setCustom: function setCustom(id, cb) {
      cb(state.nodes[id].data.custom);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/editor/query.js":
/*!**********************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/editor/query.js ***!
  \**********************************************************************************************************/
/*! exports provided: QueryMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryMethods", function() { return QueryMethods; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nodes */ "../../../node_modules/@craftjs/core/lib/nodes/index.js");
/* harmony import */ var _utils_serializeNode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/serializeNode */ "../../../node_modules/@craftjs/core/lib/utils/serializeNode.js");
/* harmony import */ var _utils_deserializeNode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/deserializeNode */ "../../../node_modules/@craftjs/core/lib/utils/deserializeNode.js");
/* harmony import */ var _utils_resolveComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/resolveComponent */ "../../../node_modules/@craftjs/core/lib/utils/resolveComponent.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! invariant */ "../../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @craftjs/utils */ "../../../node_modules/@craftjs/utils/dist/index.js");
/* harmony import */ var _events_findPosition__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../events/findPosition */ "../../../node_modules/@craftjs/core/lib/events/findPosition.js");
/* harmony import */ var _utils_getDeepNodes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/getDeepNodes */ "../../../node_modules/@craftjs/core/lib/utils/getDeepNodes.js");
/* harmony import */ var _utils_transformJSX__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/transformJSX */ "../../../node_modules/@craftjs/core/lib/utils/transformJSX.js");













function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











/**
 * Editor methods used to query nodes
 * @param nodes
 */

var getNodeFromIdOrNode = function getNodeFromIdOrNode(node, cb) {
  return typeof node === "string" ? cb(node) : node;
};

function QueryMethods(Editor) {
  var _ = function _(name) {
    return QueryMethods(Editor)[name];
  };

  var options = Editor && Editor.options;
  return {
    getOptions: function getOptions() {
      return options;
    },
    getNode: function getNode(id) {
      return Editor.nodes[id];
    },
    createNode: function createNode(child, extras) {
      var node = Object(_utils_transformJSX__WEBPACK_IMPORTED_MODULE_21__["transformJSXToNode"])(child, extras);
      var name = Object(_utils_resolveComponent__WEBPACK_IMPORTED_MODULE_16__["resolveComponent"])(options.resolver, node.data.type);
      invariant__WEBPACK_IMPORTED_MODULE_17___default()(name, _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERRROR_NOT_IN_RESOLVER"]);
      node.data.displayName = node.data.displayName || name;
      node.data.name = name;
      return node;
    },
    getDeepNodes: function getDeepNodes(id) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return Object(_utils_getDeepNodes__WEBPACK_IMPORTED_MODULE_20__["getDeepNodes"])(Editor.nodes, id, deep);
    },
    getAllParents: function getAllParents(nodeId) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var node = Editor.nodes[nodeId];
      var parent = node.data.parent;

      if (parent) {
        result.push(parent);

        _("getAllParents")(parent, result);
      }

      return result;
    },
    getAllCanvas: function getAllCanvas() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ROOT_NODE"];

      var bound = _("getDeepNodes")(parent);

      return (parent === _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ROOT_NODE"] ? [_craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ROOT_NODE"]].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["default"])(bound)) : bound).filter(function (id) {
        if (Object(_nodes__WEBPACK_IMPORTED_MODULE_13__["isCanvas"])(Editor.nodes[id])) return true;
        return false;
      });
    },
    serialize: function serialize() {
      var simplifiedNodes = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(Editor.nodes).reduce(function (result, id) {
        var data = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, Editor.nodes[id].data);

        result[id] = Object(_utils_serializeNode__WEBPACK_IMPORTED_MODULE_14__["serializeNode"])(_objectSpread({}, data), options.resolver);
        return result;
      }, {});

      return _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(simplifiedNodes);
    },
    deserialize: function deserialize(json) {
      var reducedNodes = JSON.parse(json);
      return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_10___default()(reducedNodes).reduce(function (accum, id) {
        var _deserializeNode = Object(_utils_deserializeNode__WEBPACK_IMPORTED_MODULE_15__["deserializeNode"])(reducedNodes[id], options.resolver),
            Comp = _deserializeNode.type,
            props = _deserializeNode.props,
            parent = _deserializeNode.parent,
            nodes = _deserializeNode.nodes,
            _childCanvas = _deserializeNode._childCanvas,
            isCanvas = _deserializeNode.isCanvas,
            name = _deserializeNode.name;

        if (!Comp) return accum;
        accum[id] = _("createNode")(react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Comp, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default()({}, props)), {
          id: id,
          data: _objectSpread({}, isCanvas && {
            isCanvas: isCanvas
          }, {
            parent: parent
          }, isCanvas && {
            nodes: nodes
          }, {}, _childCanvas && {
            _childCanvas: _childCanvas
          })
        });
        return accum;
      }, {});
    },
    canDragNode: function canDragNode(node) {
      var targetNode = getNodeFromIdOrNode(node, function (id) {
        return Editor.nodes[id];
      });

      if (!Object(_nodes__WEBPACK_IMPORTED_MODULE_13__["isRoot"])(targetNode)) {
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(Object(_nodes__WEBPACK_IMPORTED_MODULE_13__["isCanvas"])(targetNode.data.parent) == true, _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_ROOT_CANVAS"]);
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(targetNode.rules.canDrag(targetNode), _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_CANNOT_DRAG"]);
      }

      return true;
    },
    canDropInParent: function canDropInParent(node, newParent) {
      var targetNode = getNodeFromIdOrNode(node, function (id) {
        return Editor.nodes[id];
      });
      var currentParentNode = targetNode.data.parent && Editor.nodes[targetNode.data.parent],
          newParentNode = Editor.nodes[newParent];
      invariant__WEBPACK_IMPORTED_MODULE_17___default()(currentParentNode || !currentParentNode && !Editor.nodes[targetNode.id], _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_DUPLICATE_NODEID"]);
      invariant__WEBPACK_IMPORTED_MODULE_17___default()(targetNode.id !== _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ROOT_NODE"] && newParent || targetNode.id === _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ROOT_NODE"] && !newParent, _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_NOPARENT"]);

      if (newParent) {
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(Object(_nodes__WEBPACK_IMPORTED_MODULE_13__["isCanvas"])(newParentNode), _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_TO_NONCANVAS_PARENT"]);
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(newParentNode.rules.canMoveIn(targetNode, newParentNode), _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_INCOMING_PARENT"]);
      }

      if (currentParentNode) {
        // moving
        var targetDeepNodes = _("getDeepNodes")(targetNode.id);

        invariant__WEBPACK_IMPORTED_MODULE_17___default()(targetNode.data.parent, _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_NONCANVAS_CHILD"]);
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(!targetDeepNodes.includes(newParent), _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_TO_DESCENDANT"]);
        invariant__WEBPACK_IMPORTED_MODULE_17___default()(currentParentNode.rules.canMoveOut(targetNode, currentParentNode), _craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["ERROR_MOVE_OUTGOING_PARENT"]);
      }

      return true;
    },
    getDropPlaceholder: function getDropPlaceholder(source, target, pos) {
      var nodesToDOM = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (node) {
        return Editor.nodes[node.id].dom;
      };
      if (source === target) return;
      var targetNode = Editor.nodes[target],
          isTargetCanvas = Object(_nodes__WEBPACK_IMPORTED_MODULE_13__["isCanvas"])(targetNode);
      var targetParent = isTargetCanvas ? targetNode : Editor.nodes[targetNode.data.parent];
      var targetParentNodes = targetParent.data._childCanvas ? _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(targetParent.data._childCanvas) : targetParent.data.nodes || [];
      var dimensionsInContainer = targetParentNodes ? targetParentNodes.reduce(function (result, id) {
        var dom = nodesToDOM(Editor.nodes[id]);

        if (dom) {
          result.push(_objectSpread({
            id: id
          }, Object(_craftjs_utils__WEBPACK_IMPORTED_MODULE_18__["getDOMInfo"])(dom)));
        }

        return result;
      }, []) : [];
      var dropAction = Object(_events_findPosition__WEBPACK_IMPORTED_MODULE_19__["default"])(targetParent, dimensionsInContainer, pos.x, pos.y);
      var currentNode = targetParentNodes.length ? Editor.nodes[targetParentNodes[dropAction.index]] : null;
      var output = {
        placement: _objectSpread({}, dropAction, {
          currentNode: currentNode
        }),
        error: null
      };

      try {
        _("canDragNode")(source);

        _("canDropInParent")(source, targetParent.id);
      } catch (error) {
        output.error = error;
      }

      return output;
    }
  };
}

/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/index.js ***!
  \***************************************************************************************************/
/*! exports provided: Canvas, NodeElement, mapChildrenToNodes, isCanvas, isRoot, isTopLevelCanvas, isDeletable, isMoveable, hasTopLevelCanvases, Frame, useNode, connectNode, Editor, useEditor, connectEditor */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNode", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["useNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectNode", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["connectNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditor", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["useEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectEditor", function() { return _connectors__WEBPACK_IMPORTED_MODULE_2__["connectEditor"]; });

/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ "../../../node_modules/@craftjs/core/lib/editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor__WEBPACK_IMPORTED_MODULE_3__["Editor"]; });






/***/ }),

/***/ "../../../node_modules/@craftjs/core/lib/utils/createNode.js":
/*!**************************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/core/lib/utils/createNode.js ***!
  \**************************************************************************************************************/
/*! exports provided: createNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immer */ "../../../node_modules/immer/dist/immer.module.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nodes */ "../../../node_modules/@craftjs/core/lib/nodes/index.js");
/* harmony import */ var _nodes_NodeContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nodes/NodeContext */ "../../../node_modules/@craftjs/core/lib/nodes/NodeContext.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





function createNode(data, id) {
  var actualType = data.type;

  var _data$props = data.props,
      canMoveIn = _data$props.canMoveIn,
      canMoveOut = _data$props.canMoveOut,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_data$props, ["canMoveIn", "canMoveOut"]);

  var node = Object(immer__WEBPACK_IMPORTED_MODULE_9__["produce"])({}, function (node) {
    node.id = id;
    node.data = _objectSpread({}, data, {
      parent: data.parent || null,
      name: null,
      displayName: null,
      props: props,
      custom: {}
    });
    node.related = {};
    node.events = {
      selected: false,
      dragged: false,
      hovered: false
    };
    node.rules = _objectSpread({
      canDrag: function canDrag() {
        return true;
      },
      canMoveIn: function canMoveIn() {
        return true;
      },
      canMoveOut: function canMoveOut() {
        return true;
      }
    }, actualType.craft && actualType.craft.rules || {});

    if (node.data.type === _nodes__WEBPACK_IMPORTED_MODULE_10__["Canvas"]) {
      node.data.type = node.data.props.is ? node.data.props.is : 'div';
      node.data.isCanvas = true;
      actualType = node.data.type;
      delete node.data.props["is"];
    }

    node.data.props = _objectSpread({}, actualType.craft && actualType.craft.defaultProps || {}, {}, node.data.props);

    if (actualType.craft) {
      if (actualType.craft.name) {
        node.data.displayName = actualType.craft.name;
      }

      if (actualType.craft.rules) {
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(actualType.craft.rules).forEach(function (key) {
          if (['canDrag', 'canMoveIn', 'canMoveOut'].includes(key)) {
            node.rules[key] = actualType.craft.rules[key];
          }
        });
      }

      if (actualType.craft.related) {
        node.related = {};

        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(actualType.craft.related).forEach(function (comp) {
          node.related[comp] = function () {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_nodes_NodeContext__WEBPACK_IMPORTED_MODULE_11__["NodeProvider"], {
              id: id,
              related: true
            }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(actualType.craft.related[comp]));
          };
        });
      }
    }
  });
  return node;
}

/***/ }),

/***/ "../../../node_modules/@craftjs/utils/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/prevwong/Documents/GitHub/react-page-builder/node_modules/@craftjs/utils/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: ROOT_NODE, ERROR_NOPARENT, ERROR_DUPLICATE_NODEID, ERROR_INVALID_NODEID, ERROR_ROOT_CANVAS_NO_ID, ERROR_MISSING_PLACEHOLDER_PLACEMENT, ERROR_MOVE_INCOMING_PARENT, ERROR_MOVE_OUTGOING_PARENT, ERROR_MOVE_NONCANVAS_CHILD, ERROR_MOVE_TO_NONCANVAS_PARENT, ERROR_MOVE_TO_DESCENDANT, ERRROR_NOT_IN_RESOLVER, ERROR_INFINITE_CANVAS, ERROR_CANNOT_DRAG, ERROR_MOVE_ROOT_CANVAS, useReduxMethods, getDOMPadding, getDOMMargin, getDOMInfo, getComputedStyle, styleInFlow, useCollector, useHandlerGuard, cloneWithRef, useConnectorHooks, RenderIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.js */ "../../../node_modules/@craftjs/utils/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODE", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_NOPARENT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_NOPARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_DUPLICATE_NODEID", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_DUPLICATE_NODEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_INVALID_NODEID", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_INVALID_NODEID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_ROOT_CANVAS_NO_ID", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_ROOT_CANVAS_NO_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MISSING_PLACEHOLDER_PLACEMENT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MISSING_PLACEHOLDER_PLACEMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_INCOMING_PARENT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_INCOMING_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_OUTGOING_PARENT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_OUTGOING_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_NONCANVAS_CHILD", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_NONCANVAS_CHILD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_TO_NONCANVAS_PARENT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_TO_NONCANVAS_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_TO_DESCENDANT", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_TO_DESCENDANT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERRROR_NOT_IN_RESOLVER", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERRROR_NOT_IN_RESOLVER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_INFINITE_CANVAS", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_INFINITE_CANVAS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_CANNOT_DRAG", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_CANNOT_DRAG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_MOVE_ROOT_CANVAS", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["ERROR_MOVE_ROOT_CANVAS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReduxMethods", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useReduxMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDOMPadding", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["getDOMPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDOMMargin", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["getDOMMargin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDOMInfo", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["getDOMInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleInFlow", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["styleInFlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCollector", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useCollector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHandlerGuard", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useHandlerGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneWithRef", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["cloneWithRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useConnectorHooks", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["useConnectorHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderIndicator", function() { return _lib_index_js__WEBPACK_IMPORTED_MODULE_0__["RenderIndicator"]; });



/***/ })

})
//# sourceMappingURL=index.js.fd9ffdc81961b1972edb.hot-update.js.map