(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***********************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/pages.json ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/pages/index/index.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Html5/hbuilder/b03/agedvoice/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: _vm._$s(0, "sc", "wrapper"), attrs: { _i: 0 } },
    [
      _c("div"),
      _c("div", { staticClass: _vm._$s(2, "sc", "result"), attrs: { _i: 2 } }, [
        _vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.resultText)))
      ]),
      _c(
        "button",
        {
          attrs: { disabled: _vm._$s(3, "a-disabled", _vm.status), _i: 3 },
          on: { click: _vm.startRecord }
        },
        [
          _vm._v(
            _vm._$s(
              3,
              "t0-0",
              _vm._s(_vm.status ? "正在录音中..." : "开始录音")
            )
          )
        ]
      ),
      _c("button", {
        attrs: { disabled: _vm._$s(4, "a-disabled", !_vm.status), _i: 4 },
        on: { click: _vm.endRecord }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*************************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRpQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Html5/hbuilder/b03/agedvoice/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\n\n\n\n\n\n\n\nvar _tencentcloudPluginAsr = __webpack_require__(/*! @/js_sdk/tencentcloud-plugin-asr */ 10);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n\n\n\n\n{\n  data: function data() {\n    return {\n      resultText: '', // 语音识别结果\n      rec: '', // recorder实例\n      status: false // 是否在录制状态\n    };\n  },\n  methods: {\n    onLoad: function onLoad() {\n      // 初始化录音实例\n      this.rec = new _tencentcloudPluginAsr.Recorder();\n    },\n    // 开始录音\n    startRecord: function startRecord() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;\n\n                _this.status = true;_context.next = 4;return (\n                  _this.rec.start());case 4:_context.next = 9;break;case 6:_context.prev = 6;_context.t0 = _context[\"catch\"](0);\n\n                uni.showToast({\n                  icon: 'none',\n                  title: _context.t0.message });case 9:case \"end\":return _context.stop();}}}, _callee, null, [[0, 6]]);}))();\n\n\n    },\n    // 停止录音\n    endRecord: function endRecord() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _yield$_this2$rec$sto, voiceBase64, size, _yield$sentenceRecogn, result, logresult;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                _this2.status = false;_context2.prev = 1;_context2.next = 4;return (\n\n\n\n\n\n                  _this2.rec.stop());case 4:_yield$_this2$rec$sto = _context2.sent;voiceBase64 = _yield$_this2$rec$sto.voiceBase64;size = _yield$_this2$rec$sto.size;\n                uni.showLoading({\n                  mask: true });\n\n                // 发起一句话识别请求\n                _context2.next = 10;return (\n\n                  (0, _tencentcloudPluginAsr.sentenceRecognition)({\n                    engSerViceType: '8k_zh',\n                    sourceType: 1,\n                    voiceFormat: 'mp3',\n                    usrAudioKey: 'test',\n                    dataLen: size,\n                    data: voiceBase64 }));case 10:_yield$sentenceRecogn = _context2.sent;result = _yield$sentenceRecogn.result;\n\n                _this2.resultText = result.Result;\n                uni.setStorageSync(\"stoVoiceResult\", _this2.resultText);\n                logresult = uni.getStorageSync(\"stoVoiceResult\");\n                __f__(\"log\", logresult, \" at pages/index/index.vue:66\");\n                uni.hideLoading();_context2.next = 22;break;case 19:_context2.prev = 19;_context2.t0 = _context2[\"catch\"](1);\n\n                uni.showToast({\n                  icon: 'none',\n                  title: _context2.t0.message });case 22:case \"end\":return _context2.stop();}}}, _callee2, null, [[1, 19]]);}))();\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVNBLDZGOzs7OztBQUtBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esb0JBREEsRUFDQTtBQUNBLGFBRkEsRUFFQTtBQUNBLG1CQUhBLENBR0E7QUFIQTtBQUtBLEdBUEE7QUFRQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsZUFOQSx5QkFNQTs7QUFFQSxvQ0FGQTtBQUdBLG1DQUhBOztBQUtBO0FBQ0EsOEJBREE7QUFFQSw0Q0FGQSxJQUxBOzs7QUFVQSxLQWhCQTtBQWlCQTtBQUNBLGFBbEJBLHVCQWtCQTtBQUNBLHNDQURBOzs7Ozs7QUFPQSxtQ0FQQSxnREFLQSxXQUxBLHlCQUtBLFdBTEEsQ0FNQSxJQU5BLHlCQU1BLElBTkE7QUFRQTtBQUNBLDRCQURBOztBQUdBO0FBWEE7O0FBY0E7QUFDQSwyQ0FEQTtBQUVBLGlDQUZBO0FBR0Esc0NBSEE7QUFJQSx1Q0FKQTtBQUtBLGlDQUxBO0FBTUEscUNBTkEsR0FkQSxpREFhQSxNQWJBLHlCQWFBLE1BYkE7O0FBc0JBO0FBQ0E7QUFDQSx5QkF4QkEsR0F3QkEsb0NBeEJBO0FBeUJBO0FBQ0Esa0NBMUJBOztBQTRCQTtBQUNBLDhCQURBO0FBRUEsNkNBRkEsSUE1QkE7OztBQWlDQSxLQW5EQSxFQVJBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG5cdFx0PGRpdj7or63pn7Por4bliKvnu5PmnpzvvJo8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyZXN1bHRcIj57eyByZXN1bHRUZXh0IH19PC9kaXY+XHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cInN0YXJ0UmVjb3JkXCIgdi1iaW5kOmRpc2FibGVkPVwic3RhdHVzXCI+e3sgc3RhdHVzID8gJ+ato+WcqOW9lemfs+S4rS4uLicgOiAn5byA5aeL5b2V6Z+zJyB9fTwvYnV0dG9uPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJlbmRSZWNvcmRcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCIhc3RhdHVzXCI+5YGc5q2i5b2V6Z+zPC9idXR0b24+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtcclxuXHRcdHNlbnRlbmNlUmVjb2duaXRpb24sXHJcblx0XHR0b0Jhc2U2NCxcclxuXHRcdFJlY29yZGVyXHJcblx0fSBmcm9tICdAL2pzX3Nkay90ZW5jZW50Y2xvdWQtcGx1Z2luLWFzcic7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN1bHRUZXh0OiAnJywgLy8g6K+t6Z+z6K+G5Yir57uT5p6cXHJcblx0XHRcdFx0cmVjOiAnJywgLy8gcmVjb3JkZXLlrp7kvotcclxuXHRcdFx0XHRzdGF0dXM6IGZhbHNlIC8vIOaYr+WQpuWcqOW9leWItueKtuaAgVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRcdC8vIOWIneWni+WMluW9lemfs+WunuS+i1xyXG5cdFx0XHRcdHRoaXMucmVjID0gbmV3IFJlY29yZGVyKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8gOWni+W9lemfs1xyXG5cdFx0XHRhc3luYyBzdGFydFJlY29yZCgpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5yZWMuc3RhcnQoKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGVycm9yLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YGc5q2i5b2V6Z+zXHJcblx0XHRcdGFzeW5jIGVuZFJlY29yZCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQvLyDlvZXpn7PlrozmiJDojrflj5blvZXpn7Pmlofku7blkozpn7PpopHlpKflsI9cclxuXHRcdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdFx0dm9pY2VCYXNlNjQsXHJcblx0XHRcdFx0XHRcdHNpemVcclxuXHRcdFx0XHRcdH0gPSBhd2FpdCB0aGlzLnJlYy5zdG9wKCk7XHJcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOWPkei1t+S4gOWPpeivneivhuWIq+ivt+axglxyXG5cdFx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHRcclxuXHRcdFx0XHRcdH0gPSBhd2FpdCBzZW50ZW5jZVJlY29nbml0aW9uKHtcclxuXHRcdFx0XHRcdFx0ZW5nU2VyVmljZVR5cGU6ICc4a196aCcsXHJcblx0XHRcdFx0XHRcdHNvdXJjZVR5cGU6IDEsXHJcblx0XHRcdFx0XHRcdHZvaWNlRm9ybWF0OiAnbXAzJyxcclxuXHRcdFx0XHRcdFx0dXNyQXVkaW9LZXk6ICd0ZXN0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YUxlbjogc2l6ZSxcclxuXHRcdFx0XHRcdFx0ZGF0YTogdm9pY2VCYXNlNjRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5yZXN1bHRUZXh0ID0gcmVzdWx0LlJlc3VsdDtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInN0b1ZvaWNlUmVzdWx0XCIsdGhpcy5yZXN1bHRUZXh0KTtcclxuXHRcdFx0XHRcdHZhciBsb2dyZXN1bHQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJzdG9Wb2ljZVJlc3VsdFwiKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxvZ3Jlc3VsdCk7XHJcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGVycm9yLm1lc3NhZ2VcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC53cmFwcGVyIHtcclxuXHRcdG1hcmdpbjogNDBycHg7XHJcblx0fVxyXG5cclxuXHQud3JhcHBlciBidXR0b24ge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmVzdWx0IHtcclxuXHRcdGNvbG9yOiByZWQ7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 8);

/***/ }),
/* 8 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 9);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 9 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 10 */
/*!*******************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n * Copyright (C) 2020 Tencent Cloud.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });Object.defineProperty(exports, \"realtimeVoice\", { enumerable: true, get: function get() {return _realtimeVoice.realtimeVoice;} });Object.defineProperty(exports, \"createRecTask\", { enumerable: true, get: function get() {return _recTask.createRecTask;} });Object.defineProperty(exports, \"describeTaskStatus\", { enumerable: true, get: function get() {return _recTask.describeTaskStatus;} });Object.defineProperty(exports, \"sentenceRecognition\", { enumerable: true, get: function get() {return _sentenceRecognition.sentenceRecognition;} });Object.defineProperty(exports, \"randStr\", { enumerable: true, get: function get() {return _randStr.default;} });Object.defineProperty(exports, \"blob2Base64\", { enumerable: true, get: function get() {return _blobTransfer.blob2Base64;} });Object.defineProperty(exports, \"blob2ArrayBuffer\", { enumerable: true, get: function get() {return _blobTransfer.blob2ArrayBuffer;} });Object.defineProperty(exports, \"Recorder\", { enumerable: true, get: function get() {return _recorder.default;} });Object.defineProperty(exports, \"RealTimeVoiceSplit\", { enumerable: true, get: function get() {return _realTimeVoiceSplit.default;} });\n\nvar _realtimeVoice = __webpack_require__(/*! ./realtime-voice.js */ 11);\n\n\nvar _recTask = __webpack_require__(/*! ./rec-task.js */ 20);\n\n\n\nvar _sentenceRecognition = __webpack_require__(/*! ./sentence-recognition */ 22);\nvar _randStr = _interopRequireDefault(__webpack_require__(/*! ./rand-str.js */ 23));\nvar _blobTransfer = __webpack_require__(/*! ./blob-transfer */ 24);\n\n\n\nvar _recorder = _interopRequireDefault(__webpack_require__(/*! ./recorder.js */ 25));\nvar _realTimeVoiceSplit = _interopRequireDefault(__webpack_require__(/*! ./real-time-voice-split.js */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw0RyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAoQykgMjAyMCBUZW5jZW50IENsb3VkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlYWx0aW1lVm9pY2UsXHJcbn0gZnJvbSAnLi9yZWFsdGltZS12b2ljZS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUmVjVGFzayxcclxuICBkZXNjcmliZVRhc2tTdGF0dXNcclxufSBmcm9tICcuL3JlYy10YXNrLmpzJztcclxuaW1wb3J0IHsgc2VudGVuY2VSZWNvZ25pdGlvbiB9IGZyb20gJy4vc2VudGVuY2UtcmVjb2duaXRpb24nO1xyXG5pbXBvcnQgcmFuZFN0ciBmcm9tICcuL3JhbmQtc3RyLmpzJztcclxuaW1wb3J0IHtcclxuICBibG9iMkJhc2U2NCxcclxuICBibG9iMkFycmF5QnVmZmVyXHJcbn0gZnJvbSAnLi9ibG9iLXRyYW5zZmVyJztcclxuaW1wb3J0IFJlY29yZGVyIGZyb20gJy4vcmVjb3JkZXIuanMnO1xyXG5pbXBvcnQgUmVhbFRpbWVWb2ljZVNwbGl0IGZyb20gJy4vcmVhbC10aW1lLXZvaWNlLXNwbGl0LmpzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVhbHRpbWVWb2ljZSwgLy8g5a6e5pe26K+t6Z+z6K+G5YirXHJcbiAgY3JlYXRlUmVjVGFzaywgLy8g5b2V6Z+z5paH5Lu26K+G5Yir6K+35rGCXHJcbiAgZGVzY3JpYmVUYXNrU3RhdHVzLCAvLyDlvZXpn7Pmlofku7bor4bliKvnu5Pmnpzmn6Xor6JcclxuICBzZW50ZW5jZVJlY29nbml0aW9uLCAvLyDkuIDlj6Xor53or4bliKtcclxuICByYW5kU3RyLCAvLyDnlJ/miJBu5L2N6ZqP5py656CBXHJcbiAgYmxvYjJCYXNlNjQsICAvLyBibG9i5paH5Lu26L2s5o2iYmFzZTY05qC85byPXHJcbiAgYmxvYjJBcnJheUJ1ZmZlciwgLy8gYmxvYuaWh+S7tui9rOaNokFycmF5QnVmZmVy5qC85byPXHJcbiAgUmVjb3JkZXIsIC8vIOW9lemfs+exu++8jOmAmui/h1JlY29yZGVyLmdldFJlYygp6L+b6KGM6L+b6KGM6LCD55SoXHJcbiAgUmVhbFRpbWVWb2ljZVNwbGl0ICAvLyDlrp7ml7bor63pn7PmlbDmja7liIbniYfnsbtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/realtime-voice.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n/**\n               * 实时语音识别\n               * @param {object} data // base64编码的voice文件\n               * @param {object} params // 参数\n               * @param {string} params.engine_model_type 引擎模型类型。8k_zh：电话 8k 中文普通话通用；8k_zh_finance：电话 8k 金融领域模型；16k_zh：16k 中文普通话通用；16k_en：16k 英语；16k_ca：16k 粤语；16k_ko：16k 韩语；16k_zh-TW：16k 中文普通话繁体。\n               * @param {integer} params.seq 语音分片的序号，序号从 0 开始，每次请求递增1， 两个seq之间间隔不能超过6秒。\n               * @param {integer} params.end 是否为最后一片，最后一片语音片为 1，其余为 0。\n               * @param {string} params.voice_id 16 位 String 串作为每个音频的唯一标识，用户自己生成。\n               * @param {string} [params.hotword_id] 热词 id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词 id 设置，自动生效默认热词；如果进行了单独的热词 id 设置，那么将生效单独设置的热词 id。\n               * @param {integer} [params.result_text_format] 识别结果文本编码方式。0：UTF-8；1：GB2312；2：GBK；3：BIG5。\n               * @param {integer} [params.res_type] 结果返回方式。 0：同步返回；1：尾包返回。\n               * @param {integer} [params.voice_format] 语音编码方式，可选，默认值为 4。1：wav(pcm)；4：speex(sp)；6：silk；8：mp3；10：opus（opus 格式音频流封装说明）。\n               * @param {integer} [params.needvad] 0：关闭 vad，1：开启 vad。如果音频流总时长超过60秒，用户需开启 vad。\n               * @param {integer} [params.vad_silence_time] 语音断句检测阈值，静音时长超过该阈值会被认为断句（多用在智能客服场景，需配合 needvad=1 使用），取值范围150-2000，单位 ms，目前仅支持 8k_zh 引擎模型。\n               * @param {int} [params.source] 默认值为 0。\n               * @param {integer} [params.filter_dirty] 是否过滤脏词（目前支持中文普通话引擎）。默认为0。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。\n               * @param {integer} [params.filter_modal] 是否过滤语气词（目前支持中文普通话引擎）。默认为0。0：不过滤语气词；1：部分过滤；2：严格过滤 。\n               * @param {integer} [params.filter_punc] 是否过滤句末的句号（目前支持中文普通话引擎）。默认为0。0：不过滤句末的句号；1：过滤句末的句号。\n               * @param {integer} [params.convert_num_mode] \t是否进行阿拉伯数字智能转换。0：全部转为中文数字；1：根据场景智能转换为阿拉伯数字。\n               * @param {integer} [params.word_info] 是否显示词级别时间戳。0：不显示；1：显示。支持引擎：8k_zh, 8k_zh_finance, 16k_zh, 16k_en, 16k_ca，默认为0。\n               * @return {Promise<object>} result 语音识别结果\n               */Object.defineProperty(exports, \"__esModule\", { value: true });exports.realtimeVoice = realtimeVoice;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function\n\nrealtimeVoice(_x, _x2) {return _realtimeVoice.apply(this, arguments);}function _realtimeVoice() {_realtimeVoice = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data, params) {var result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n            !params.engine_model_type ||\n            params.seq === undefined ||\n            params.end === undefined ||\n            params.voice_id === undefined)) {_context.next = 2;break;}throw (\n\n              new Error(\"缺少必要参数\"));case 2:_context.next = 4;return (\n\n              uniCloud.callFunction({\n                name: \"tencentcloud-plugin\",\n                data: {\n                  module: \"ASR\",\n                  action: \"realTimeVoice\",\n                  data: data,\n                  params: params } }));case 4:result = _context.sent;return _context.abrupt(\"return\",\n\n\n            result);case 6:case \"end\":return _context.stop();}}}, _callee);}));return _realtimeVoice.apply(this, arguments);}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3JlYWx0aW1lLXZvaWNlLmpzIl0sIm5hbWVzIjpbInJlYWx0aW1lVm9pY2UiLCJkYXRhIiwicGFyYW1zIiwiZW5naW5lX21vZGVsX3R5cGUiLCJzZXEiLCJ1bmRlZmluZWQiLCJlbmQiLCJ2b2ljZV9pZCIsIkVycm9yIiwidW5pQ2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwibW9kdWxlIiwiYWN0aW9uIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCYTs7QUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnNCQSxhLCtKQUFmLGlCQUE2QkMsSUFBN0IsRUFBbUNDLE1BQW5DOztBQUVILGFBQUNBLE1BQU0sQ0FBQ0MsaUJBQVI7QUFDQUQsa0JBQU0sQ0FBQ0UsR0FBUCxLQUFlQyxTQURmO0FBRUFILGtCQUFNLENBQUNJLEdBQVAsS0FBZUQsU0FGZjtBQUdBSCxrQkFBTSxDQUFDSyxRQUFQLEtBQW9CRixTQUxqQjs7QUFPRyxrQkFBSUcsS0FBSixDQUFVLFFBQVYsQ0FQSDs7QUFTZ0JDLHNCQUFRLENBQUNDLFlBQVQsQ0FBc0I7QUFDekNDLG9CQUFJLEVBQUUscUJBRG1DO0FBRXpDVixvQkFBSSxFQUFFO0FBQ0pXLHdCQUFNLEVBQUUsS0FESjtBQUVKQyx3QkFBTSxFQUFFLGVBRko7QUFHSlosc0JBQUksRUFBRUEsSUFIRjtBQUlKQyx3QkFBTSxFQUFFQSxNQUpKLEVBRm1DLEVBQXRCLENBVGhCLFNBU0NZLE1BVEQ7OztBQWtCRUEsa0JBbEJGLDBEIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBUZW5jZW50IENsb3VkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICog5a6e5pe26K+t6Z+z6K+G5YirXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAvLyBiYXNlNjTnvJbnoIHnmoR2b2ljZeaWh+S7tlxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAvLyDlj4LmlbBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZW5naW5lX21vZGVsX3R5cGUg5byV5pOO5qih5Z6L57G75Z6L44CCOGtfemjvvJrnlLXor50gOGsg5Lit5paH5pmu6YCa6K+d6YCa55So77ybOGtfemhfZmluYW5jZe+8mueUteivnSA4ayDph5Hono3poobln5/mqKHlnovvvJsxNmtfemjvvJoxNmsg5Lit5paH5pmu6YCa6K+d6YCa55So77ybMTZrX2Vu77yaMTZrIOiLseivre+8mzE2a19jYe+8mjE2ayDnsqTor63vvJsxNmtfa2/vvJoxNmsg6Z+p6K+t77ybMTZrX3poLVRX77yaMTZrIOS4reaWh+aZrumAmuivnee5geS9k+OAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBwYXJhbXMuc2VxIOivremfs+WIhueJh+eahOW6j+WPt++8jOW6j+WPt+S7jiAwIOW8gOWni++8jOavj+asoeivt+axgumAkuWinjHvvIwg5Lik5Liqc2Vx5LmL6Ze06Ze06ZqU5LiN6IO96LaF6L+HNuenkuOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBwYXJhbXMuZW5kIOaYr+WQpuS4uuacgOWQjuS4gOeJh++8jOacgOWQjuS4gOeJh+ivremfs+eJh+S4uiAx77yM5YW25L2Z5Li6IDDjgIJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudm9pY2VfaWQgMTYg5L2NIFN0cmluZyDkuLLkvZzkuLrmr4/kuKrpn7PpopHnmoTllK/kuIDmoIfor4bvvIznlKjmiLfoh6rlt7HnlJ/miJDjgIJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmhvdHdvcmRfaWRdIOeDreivjSBpZOOAgueUqOS6juiwg+eUqOWvueW6lOeahOeDreivjeihqO+8jOWmguaenOWcqOiwg+eUqOivremfs+ivhuWIq+acjeWKoeaXtu+8jOS4jei/m+ihjOWNleeLrOeahOeDreivjSBpZCDorr7nva7vvIzoh6rliqjnlJ/mlYjpu5jorqTng63or43vvJvlpoLmnpzov5vooYzkuobljZXni6znmoTng63or40gaWQg6K6+572u77yM6YKj5LmI5bCG55Sf5pWI5Y2V54us6K6+572u55qE54Ot6K+NIGlk44CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMucmVzdWx0X3RleHRfZm9ybWF0XSDor4bliKvnu5PmnpzmlofmnKznvJbnoIHmlrnlvI/jgIIw77yaVVRGLTjvvJsx77yaR0IyMzEy77ybMu+8mkdCS++8mzPvvJpCSUc144CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMucmVzX3R5cGVdIOe7k+aenOi/lOWbnuaWueW8j+OAgiAw77ya5ZCM5q2l6L+U5Zue77ybMe+8muWwvuWMhei/lOWbnuOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLnZvaWNlX2Zvcm1hdF0g6K+t6Z+z57yW56CB5pa55byP77yM5Y+v6YCJ77yM6buY6K6k5YC85Li6IDTjgIIx77yad2F2KHBjbSnvvJs077yac3BlZXgoc3Ap77ybNu+8mnNpbGvvvJs477yabXAz77ybMTDvvJpvcHVz77yIb3B1cyDmoLzlvI/pn7PpopHmtYHlsIHoo4Xor7TmmI7vvInjgIJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy5uZWVkdmFkXSAw77ya5YWz6ZetIHZhZO+8jDHvvJrlvIDlkK8gdmFk44CC5aaC5p6c6Z+z6aKR5rWB5oC75pe26ZW/6LaF6L+HNjDnp5LvvIznlKjmiLfpnIDlvIDlkK8gdmFk44CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMudmFkX3NpbGVuY2VfdGltZV0g6K+t6Z+z5pat5Y+l5qOA5rWL6ZiI5YC877yM6Z2Z6Z+z5pe26ZW/6LaF6L+H6K+l6ZiI5YC85Lya6KKr6K6k5Li65pat5Y+l77yI5aSa55So5Zyo5pm66IO95a6i5pyN5Zy65pmv77yM6ZyA6YWN5ZCIIG5lZWR2YWQ9MSDkvb/nlKjvvInvvIzlj5blgLzojIPlm7QxNTAtMjAwMO+8jOWNleS9jSBtc++8jOebruWJjeS7heaUr+aMgSA4a196aCDlvJXmk47mqKHlnovjgIJcbiAqIEBwYXJhbSB7aW50fSBbcGFyYW1zLnNvdXJjZV0g6buY6K6k5YC85Li6IDDjgIJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy5maWx0ZXJfZGlydHldIOaYr+WQpui/h+a7pOiEj+ivje+8iOebruWJjeaUr+aMgeS4reaWh+aZrumAmuivneW8leaTju+8ieOAgum7mOiupOS4ujDjgIIw77ya5LiN6L+H5ruk6ISP6K+N77ybMe+8mui/h+a7pOiEj+ivje+8mzLvvJrlsIbohI/or43mm7/mjaLkuLogKiDjgIJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy5maWx0ZXJfbW9kYWxdIOaYr+WQpui/h+a7pOivreawlOivje+8iOebruWJjeaUr+aMgeS4reaWh+aZrumAmuivneW8leaTju+8ieOAgum7mOiupOS4ujDjgIIw77ya5LiN6L+H5ruk6K+t5rCU6K+N77ybMe+8mumDqOWIhui/h+a7pO+8mzLvvJrkuKXmoLzov4fmu6Qg44CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMuZmlsdGVyX3B1bmNdIOaYr+WQpui/h+a7pOWPpeacq+eahOWPpeWPt++8iOebruWJjeaUr+aMgeS4reaWh+aZrumAmuivneW8leaTju+8ieOAgum7mOiupOS4ujDjgIIw77ya5LiN6L+H5ruk5Y+l5pyr55qE5Y+l5Y+377ybMe+8mui/h+a7pOWPpeacq+eahOWPpeWPt+OAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLmNvbnZlcnRfbnVtX21vZGVdIFx05piv5ZCm6L+b6KGM6Zi/5ouJ5Lyv5pWw5a2X5pm66IO96L2s5o2i44CCMO+8muWFqOmDqOi9rOS4uuS4reaWh+aVsOWtl++8mzHvvJrmoLnmja7lnLrmma/mmbrog73ovazmjaLkuLrpmL/mi4nkvK/mlbDlrZfjgIJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy53b3JkX2luZm9dIOaYr+WQpuaYvuekuuivjee6p+WIq+aXtumXtOaIs+OAgjDvvJrkuI3mmL7npLrvvJsx77ya5pi+56S644CC5pSv5oyB5byV5pOO77yaOGtfemgsIDhrX3poX2ZpbmFuY2UsIDE2a196aCwgMTZrX2VuLCAxNmtfY2HvvIzpu5jorqTkuLow44CCXG4gKiBAcmV0dXJuIHtQcm9taXNlPG9iamVjdD59IHJlc3VsdCDor63pn7Por4bliKvnu5PmnpxcbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhbHRpbWVWb2ljZShkYXRhLCBwYXJhbXMpIHtcbiAgaWYgKFxuICAgICFwYXJhbXMuZW5naW5lX21vZGVsX3R5cGUgfHxcbiAgICBwYXJhbXMuc2VxID09PSB1bmRlZmluZWQgfHxcbiAgICBwYXJhbXMuZW5kID09PSB1bmRlZmluZWQgfHxcbiAgICBwYXJhbXMudm9pY2VfaWQgPT09IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCLnvLrlsJHlv4XopoHlj4LmlbBcIik7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICBuYW1lOiBcInRlbmNlbnRjbG91ZC1wbHVnaW5cIixcbiAgICBkYXRhOiB7XG4gICAgICBtb2R1bGU6IFwiQVNSXCIsXG4gICAgICBhY3Rpb246IFwicmVhbFRpbWVWb2ljZVwiLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 18);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e26) {throw _e26;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e27) {didErr = true;err = _e27;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, s) {return e(s = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && s.path);} }, s.exports), s.exports;}var n = s(function (e, t) {var s;e.exports = (s = s || function (e, t) {var s = Object.create || function () {function e() {}return function (t) {var s;return e.prototype = t, s = new e(), e.prototype = null, s;};}(),n = {},r = n.lib = {},o = r.Base = { extend: function extend(e) {var t = s(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,s = e.words,n = this.sigBytes,r = e.sigBytes;if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[n + o >>> 2] = s[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,s = this.sigBytes;t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var s, n = [], r = function r(t) {t = t;var s = 987654321,n = 4294967295;return function () {var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (s || e.random()));s = 987654071 * a(), n.push(4294967296 * a() | 0);}return new i.init(n, t);} }),a = n.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n += 2) {s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;}return new i.init(s, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push(String.fromCharCode(o));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n++) {s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;}return new i.init(s, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var s = this._data,n = s.words,r = s.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(n, h);}var l = n.splice(0, c);s.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, s) {return new e.init(s).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, s) {return new d.HMAC.init(e, s).finalize(t);};} }), n.algo = {});return n;}(Math), s);}),r = (s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = 0; s < 16; s++) {var n = t + s,r = e[n];e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],v = e[t + 8],w = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],A = e[t + 14],I = e[t + 15],E = o[0],O = o[1],U = o[2],b = o[3];E = u(E, O, U, b, i, 7, a[0]), b = u(b, E, O, U, c, 12, a[1]), U = u(U, b, E, O, f, 17, a[2]), O = u(O, U, b, E, p, 22, a[3]), E = u(E, O, U, b, g, 7, a[4]), b = u(b, E, O, U, m, 12, a[5]), U = u(U, b, E, O, y, 17, a[6]), O = u(O, U, b, E, _, 22, a[7]), E = u(E, O, U, b, v, 7, a[8]), b = u(b, E, O, U, w, 12, a[9]), U = u(U, b, E, O, S, 17, a[10]), O = u(O, U, b, E, k, 22, a[11]), E = u(E, O, U, b, T, 7, a[12]), b = u(b, E, O, U, P, 12, a[13]), U = u(U, b, E, O, A, 17, a[14]), E = h(E, O = u(O, U, b, E, I, 22, a[15]), U, b, c, 5, a[16]), b = h(b, E, O, U, y, 9, a[17]), U = h(U, b, E, O, k, 14, a[18]), O = h(O, U, b, E, i, 20, a[19]), E = h(E, O, U, b, m, 5, a[20]), b = h(b, E, O, U, S, 9, a[21]), U = h(U, b, E, O, I, 14, a[22]), O = h(O, U, b, E, g, 20, a[23]), E = h(E, O, U, b, w, 5, a[24]), b = h(b, E, O, U, A, 9, a[25]), U = h(U, b, E, O, p, 14, a[26]), O = h(O, U, b, E, v, 20, a[27]), E = h(E, O, U, b, P, 5, a[28]), b = h(b, E, O, U, f, 9, a[29]), U = h(U, b, E, O, _, 14, a[30]), E = l(E, O = h(O, U, b, E, T, 20, a[31]), U, b, m, 4, a[32]), b = l(b, E, O, U, v, 11, a[33]), U = l(U, b, E, O, k, 16, a[34]), O = l(O, U, b, E, A, 23, a[35]), E = l(E, O, U, b, c, 4, a[36]), b = l(b, E, O, U, g, 11, a[37]), U = l(U, b, E, O, _, 16, a[38]), O = l(O, U, b, E, S, 23, a[39]), E = l(E, O, U, b, P, 4, a[40]), b = l(b, E, O, U, i, 11, a[41]), U = l(U, b, E, O, p, 16, a[42]), O = l(O, U, b, E, y, 23, a[43]), E = l(E, O, U, b, w, 4, a[44]), b = l(b, E, O, U, T, 11, a[45]), U = l(U, b, E, O, I, 16, a[46]), E = d(E, O = l(O, U, b, E, f, 23, a[47]), U, b, i, 6, a[48]), b = d(b, E, O, U, _, 10, a[49]), U = d(U, b, E, O, A, 15, a[50]), O = d(O, U, b, E, m, 21, a[51]), E = d(E, O, U, b, T, 6, a[52]), b = d(b, E, O, U, p, 10, a[53]), U = d(U, b, E, O, S, 15, a[54]), O = d(O, U, b, E, c, 21, a[55]), E = d(E, O, U, b, v, 6, a[56]), b = d(b, E, O, U, I, 10, a[57]), U = d(U, b, E, O, y, 15, a[58]), O = d(O, U, b, E, P, 21, a[59]), E = d(E, O, U, b, g, 6, a[60]), b = d(b, E, O, U, k, 10, a[61]), U = d(U, b, E, O, f, 15, a[62]), O = d(O, U, b, E, w, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + O | 0, o[2] = o[2] + U | 0, o[3] = o[3] + b | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;s[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(n / 4294967296),i = n;s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, s, n, r, o, i) {var a = e + (t & s | ~t & n) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, s, n, r, o, i) {var a = e + (t & n | s & ~n) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, s, n, r, o, i) {var a = e + (t ^ s ^ n) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, s, n, r, o, i) {var a = e + (s ^ (t | ~n)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), s.MD5);}), s(function (e, t) {var s, r, o;e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var s = e.blockSize,n = 4 * s;t.sigBytes > n && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = n, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,s = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(s));} })));}), s(function (e, t) {e.exports = n.HmacMD5;}));function o(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e2 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),a = _e2.t,c = _e2.setLocale,u = _e2.getLocale;var h, l, d;try {h = __webpack_require__(/*! uni-stat-config */ 19).default || __webpack_require__(/*! uni-stat-config */ 19);} catch (e) {h = { appid: "" };}function f() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function p() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: "app-plus", OS: d, APPID: h.appid, LOCALE: u(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.1" };}function g() {if ("n" === m()) {try {l = plus.runtime.getDCloudId();} catch (e) {l = "";}return l;}return l || (l = f(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: l })), l;}function m() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)["app-plus"];}var y = { sign: function sign(e, t) {var s = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (s = s + "&" + t + "=" + e[t]);}), s = s.slice(1), r(s, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (s, n) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return n(new i({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, s(r);} }));});} };var _ = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var v = /*#__PURE__*/function () {function v(e) {_classCallCheck(this, v);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(a("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = _;}_createClass(v, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return y.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return Promise.resolve().then(function () {return _this2.hasAccessToken ? t ? _this2.requestWrapped(e) : _this2.requestWrapped(e).catch(function (t) {return new Promise(function (e, s) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : _this2.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = y.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: n };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, s) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : s(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,s = _ref.name,n = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(new i({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,n = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s };return _this5.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this5.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: c }) : n(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, s) {Array.isArray(e) && 0 !== e.length || s(new i({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return v;}();var w = { init: function init(e) {var t = new v(e);["deleteFile", "getTempFileURL"].forEach(function (e) {t[e] = o(t[e]).bind(t);});var s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} },S = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",k = "undefined" != typeof process && "e2e" === "development" && "pre" === Object({"NODE_ENV":"development","VUE_APP_NAME":"agedvoice","VUE_APP_PLATFORM":"app-plus","BASE_URL":"/"}).END_POINT ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";var T;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(T || (T = {}));var P = function P() {};s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [],c = [];!function () {function t(t) {for (var s = e.sqrt(t), n = 2; n <= s; n++) {if (!(t % n)) return !1;}return !0;}function s(e) {return 4294967296 * (e - (0 | e)) | 0;}for (var n = 2, r = 0; r < 64;) {t(n) && (r < 8 && (a[r] = s(e.pow(n, .5))), c[r] = s(e.pow(n, 1 / 3)), r++), n++;}}();var u = [],h = i.SHA256 = o.extend({ _doReset: function _doReset() {this._hash = new r.init(a.slice(0));}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = this._hash.words, n = s[0], r = s[1], o = s[2], i = s[3], a = s[4], h = s[5], l = s[6], d = s[7], f = 0; f < 64; f++) {if (f < 16) u[f] = 0 | e[t + f];else {var p = u[f - 15],g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,m = u[f - 2],y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;u[f] = g + u[f - 7] + y + u[f - 16];}var _ = n & r ^ n & o ^ r & o,v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[f] + u[f];d = l, l = h, h = a, a = i + w | 0, i = o, o = r, r = n, n = w + (v + _) | 0;}s[0] = s[0] + n | 0, s[1] = s[1] + r | 0, s[2] = s[2] + o | 0, s[3] = s[3] + i | 0, s[4] = s[4] + a | 0, s[5] = s[5] + h | 0, s[6] = s[6] + l | 0, s[7] = s[7] + d | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;return s[r >>> 5] |= 128 << 24 - r % 32, s[14 + (r + 64 >>> 9 << 4)] = e.floor(n / 4294967296), s[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * s.length, this._process(), this._hash;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });t.SHA256 = o._createHelper(h), t.HmacSHA256 = o._createHmacHelper(h);}(Math), s.SHA256);}), s(function (e, t) {e.exports = n.HmacSHA256;}), s(function (e, t) {var s, r, o;e.exports = (r = (s = o = n).lib.WordArray, s.enc.Base64 = { stringify: function stringify(e) {var t = e.words,s = e.sigBytes,n = this._map;e.clamp();for (var r = [], o = 0; o < s; o += 3) {for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < s; a++) {r.push(n.charAt(i >>> 6 * (3 - a) & 63));}}var c = n.charAt(64);if (c) for (; r.length % 4;) {r.push(c);}return r.join("");}, parse: function parse(e) {var t = e.length,s = this._map,n = this._reverseMap;if (!n) {n = this._reverseMap = [];for (var o = 0; o < s.length; o++) {n[s.charCodeAt(o)] = o;}}var i = s.charAt(64);if (i) {var a = e.indexOf(i);-1 !== a && (t = a);}return function (e, t, s) {for (var n = [], o = 0, i = 0; i < t; i++) {if (i % 4) {var a = s[e.charCodeAt(i - 1)] << i % 4 * 2,c = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2;n[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++;}}return r.create(n, o);}(e, t, n);}, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, o.enc.Base64);}), s(function (e, t) {e.exports = n.enc.Utf8;});var A = function A() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, s) {e = function e(_e3, n) {return _e3 ? s(_e3) : t(n);};});return e.promise = t, e;};function I(e) {return void 0 === e;}function E(e) {return "[object Null]" === Object.prototype.toString.call(e);}var O;function U(e) {var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);var s;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e4 = _step.value;var _t2 = _e4.isMatch,_s = _e4.genAdapter,_n = _e4.runtime;if (_t2()) return { adapter: _s(), runtime: _n };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(O || (O = {}));var b = { adapter: null, runtime: void 0 },D = ["anonymousUuidKey"];var C = /*#__PURE__*/function (_P) {_inherits(C, _P);var _super2 = _createSuper(C);function C() {var _this6;_classCallCheck(this, C);_this6 = _super2.call(this), b.adapter.root.tcbObject || (b.adapter.root.tcbObject = {});return _this6;}_createClass(C, [{ key: "setItem", value: function setItem(e, t) {b.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return b.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete b.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete b.adapter.root.tcbObject;} }]);return C;}(P);function x(e, t) {switch (e) {case "local":return t.localStorage || new C();case "none":return new C();default:return t.sessionStorage || new C();}}var R = /*#__PURE__*/function () {function R(e) {_classCallCheck(this, R);if (!this._storage) {this._persistence = b.adapter.primaryStorage || e.persistence, this._storage = x(this._persistence, b.adapter);var _t3 = "access_token_" + e.env,_s2 = "access_token_expire_" + e.env,_n2 = "refresh_token_" + e.env,_r = "anonymous_uuid_" + e.env,_o = "login_type_" + e.env,_i = "user_info_" + e.env;this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _s2, refreshTokenKey: _n2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(R, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var s = x(e, b.adapter);for (var _e5 in this.keys) {var _n3 = this.keys[_e5];if (t && D.includes(_e5)) continue;var _r2 = this._storage.getItem(_n3);I(_r2) || E(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));}this._storage = s;} }, { key: "setStore", value: function setStore(e, t, s) {if (!this._storage) return;var n = { version: s || "localCachev1", content: t },r = JSON.stringify(n);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var s = this._storage.getItem(e);if (!s) return "";if (s.indexOf(t) >= 0) {return JSON.parse(s).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return R;}();var q = {},F = {};function L(e) {return q[e];}var N = function N(e, t) {_classCallCheck(this, N);this.data = t || null, this.name = e;};var M = /*#__PURE__*/function (_N) {_inherits(M, _N);var _super3 = _createSuper(M);function M(e, t) {var _this7;_classCallCheck(this, M);_this7 = _super3.call(this, "error", { error: e, data: t }), _this7.error = e;return _this7;}return M;}(N);var $ = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, s) {s[e] = s[e] || [], s[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, s) {if (s && s[e]) {var _n4 = s[e].indexOf(t);-1 !== _n4 && s[e].splice(_n4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof M) return console.error(e.error), this;var s = "string" == typeof e ? new N(e, t || {}) : e;var n = s.name;if (this._listens(n)) {s.target = this;var _e6 = this._listeners[n] ? _toConsumableArray(this._listeners[n]) : [];var _iterator2 = _createForOfIteratorHelper(_e6),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, s);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function K(e, t) {$.on(e, t);}function j(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};$.fire(e, t);}function B(e, t) {$.off(e, t);}var H = "loginStateChanged",W = "loginStateExpire",V = "loginTypeChanged",z = "anonymousConverted",J = "refreshAccessToken";var Y;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(Y || (Y = {}));var X = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],G = { "X-SDK-Version": "1.3.5" };function Q(e, t, s) {var n = e[t];e[t] = function (t) {var r = {},o = {};s.forEach(function (s) {var _s$call = s.call(e, t),n = _s$call.data,i = _s$call.headers;Object.assign(r, n), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e7 in r) {i.append(_e7, r[_e7]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), n.call(e, t);};}function Z() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, G), {}, { "x-seqid": e }) };}var ee = /*#__PURE__*/function () {function ee() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, ee);var t;this.config = e, this._reqClass = new b.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = L(this.config.env), this._localCache = (t = this.config.env, F[t]), Q(this._reqClass, "post", [Z]), Q(this._reqClass, "upload", [Z]), Q(this._reqClass, "download", [Z]);}_createClass(ee, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, s, n, r, o, i, a, _e8, _e9, _t5, _n5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(s);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e8 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e8 || "REFRESH_TOKEN_EXPIRED" === _e8 || "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 20;break;}if (!(this._cache.getStore(n) === Y.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 19;break;}_e9 = this._cache.getStore(r);_t5 = this._cache.getStore(s);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e9, refresh_token: _t5 });case 17:_n5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));case 19:j(W), this._cache.removeStore(s);case 20:throw new Error("刷新access token失败：" + a.data.code);case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (j(J), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, s, n, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(s)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(n, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: n, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, s) {var n, r, o, _e10, i, _e11, _e12, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:n = "x-tcb-trace_" + this.config.env;r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === X.indexOf(e))) {_context7.next = 10;break;}_e10 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e10);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e11 in i) {i.hasOwnProperty(_e11) && void 0 !== i[_e11] && i.append(_e11, o[_e11]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e12 in o) {void 0 !== o[_e12] && (i[_e12] = o[_e12]);}}a = { headers: { "content-type": r } };s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);c = this._localCache.getStore(n);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var n = /\?/.test(t);var r = "";for (var _e13 in s) {"" === r ? !n && (t += "?") : r += "&", r += "".concat(_e13, "=").concat(encodeURIComponent(s[_e13]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(S, k, d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,s,_s3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:s = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === X.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_s3 = _context8.sent;if (!_s3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));case 12:return _context8.abrupt("return", _s3.data);case 13:if (!s.data.code) {_context8.next = 15;break;}throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));case 15:return _context8.abrupt("return", s.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,s = _this$_cache$keys3.accessTokenExpireKey,n = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }]);return ee;}();var te = {};function se(e) {return te[e];}var ne = /*#__PURE__*/function () {function ne(e) {_classCallCheck(this, ne);this.config = e, this._cache = L(e.env), this._request = se(e.env);}_createClass(ne, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,s = _this$_cache$keys4.accessTokenExpireKey,n = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,s = _this$_cache$keys5.accessTokenKey,n = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(s, e), this._cache.setStore(n, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return ne;}();var re = /*#__PURE__*/function () {function re(e) {_classCallCheck(this, re);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = L(this._envId), this._request = se(this._envId), this.setUserInfo();}_createClass(re, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, s;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;s = e.users;return _context10.abrupt("return", (s.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: s, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, s, n, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;s = e.gender;n = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: s, avatarUrl: n, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this8 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this8[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return re;}();var oe = /*#__PURE__*/function () {function oe(e) {_classCallCheck(this, oe);if (!e) throw new Error("envId is not defined");this._cache = L(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,s = _this$_cache$keys6.accessTokenKey,n = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(s),i = this._cache.getStore(n);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new re(e);}_createClass(oe, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === Y.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === Y.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === Y.WECHAT || this.loginType === Y.WECHAT_OPEN || this.loginType === Y.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return oe;}();var ie = /*#__PURE__*/function (_ne) {_inherits(ie, _ne);var _super4 = _createSuper(ie);function ie() {_classCallCheck(this, ie);return _super4.apply(this, arguments);}_createClass(ie, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, s, n, r, _e14;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;s = this._cache.getStore(e) || void 0;n = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: s, refresh_token: n });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:j(H);j(V, { env: this.config.env, loginType: Y.ANONYMOUS, persistence: "local" });_e14 = new oe(this.config.env);_context13.next = 19;return _e14.user.refresh();case 19:return _context13.abrupt("return", _e14);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, s, n, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;s = _this$_cache$keys8.refreshTokenKey;n = this._cache.getStore(t);r = this._cache.getStore(s);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:j(z, { env: this.config.env });j(V, { loginType: Y.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,s = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, Y.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ie;}(ne);var ae = /*#__PURE__*/function (_ne2) {_inherits(ae, _ne2);var _super5 = _createSuper(ae);function ae() {_classCallCheck(this, ae);return _super5.apply(this, arguments);}_createClass(ae, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, s;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:s = _context15.sent;if (!s.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(s.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:j(H);j(V, { env: this.config.env, loginType: Y.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new oe(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return ae;}(ne);var ce = /*#__PURE__*/function (_ne3) {_inherits(ce, _ne3);var _super6 = _createSuper(ce);function ce() {_classCallCheck(this, ce);return _super6.apply(this, arguments);}_createClass(ce, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:s = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 5:n = _context16.sent;r = n.refresh_token;o = n.access_token;i = n.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:j(H);j(V, { env: this.config.env, loginType: Y.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new oe(this.config.env));case 22:throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return ce;}(ne);var ue = /*#__PURE__*/function (_ne4) {_inherits(ue, _ne4);var _super7 = _createSuper(ue);function ue() {_classCallCheck(this, ue);return _super7.apply(this, arguments);}_createClass(ue, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));s = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: Y.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 6:n = _context19.sent;r = n.refresh_token;o = n.access_token_expire;i = n.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:j(H);j(V, { env: this.config.env, loginType: Y.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new oe(this.config.env));case 23:throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ue;}(ne);var he = /*#__PURE__*/function () {function he(e) {_classCallCheck(this, he);this.config = e, this._cache = L(e.env), this._request = se(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), K(V, this._onLoginTypeChanged);}_createClass(he, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ie(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new ae(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new ce(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ue(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ie(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new ce(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ue(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ie(this.config)), K(z, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, s, n, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === Y.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);if (n) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: n });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), j(H), j(V, { env: this.config.env, loginType: Y.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this9 = this;K(H, function () {var t = _this9.hasLoginState();e.call(_this9, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {K(W, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {K(J, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {K(z, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this10 = this;K(V, function () {var t = _this10.hasLoginState();e.call(_this10, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new oe(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new ae(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,s = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,s = _e$data.persistence,n = _e$data.env;n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return he;}();var le = function le(e, t) {t = t || A();var s = se(this.config.env),n = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: n, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };s.upload({ url: a, data: f, file: r, name: n, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},de = function de(e, t) {t = t || A();var s = se(this.config.env),n = e.cloudPath;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},fe = function fe(_ref5, t) {var e = _ref5.fileList;if (t = t || A(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var s = { fileid_list: e };return se(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},pe = function pe(_ref6, t) {var e = _ref6.fileList;t = t || A(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var s = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _n6 = _step4.value;"object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), s.push({ fileid: _n6.fileID, max_age: _n6.maxAge })) : "string" == typeof _n6 ? s.push({ fileid: _n6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var n = { file_list: s };return se(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},ge = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, s, n, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:s = _context29.sent.fileList[0];if (!("SUCCESS" !== s.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {e(s);}));case 6:n = se(this.config.env);r = s.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", n.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return n.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function ge(_x26, _x27) {return _ref8.apply(this, arguments);};}(),me = function me(_ref9, o) {var e = _ref9.name,t = _ref9.data,s = _ref9.query,n = _ref9.parse,r = _ref9.search;var i = o || A();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: s, parse: n, search: r, function_name: e, request_data: a };return se(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (n) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},ye = { timeout: 15e3, persistence: "session" },_e = {};var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);this.config = e || this.config, this.authObj = void 0;}_createClass(ve, [{ key: "init", value: function init(e) {switch (b.adapter || (this.requestClient = new b.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, ye), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new ve(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || b.adapter.primaryStorage || ye.persistence;var s;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;q[t] = new R(e), F[t] = new R(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), s = this.config, te[s.env] = new ee(s), this.authObj = new he(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return K.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return B.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return me.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return fe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return pe.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return ge.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return le.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return de.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {_e[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var s;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:s = _e[e];if (s) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return s.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = U(e) || {},t = _ref11.adapter,s = _ref11.runtime;t && (b.adapter = t), s && (b.runtime = s);} }]);return ve;}();var we = new ve();function Se(e, t, s) {void 0 === s && (s = {});var n = /\?/.test(t),r = "";for (var o in s) {"" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var ke = /*#__PURE__*/function () {function ke() {_classCallCheck(this, ke);}_createClass(ke, [{ key: "post", value: function post(e) {var t = e.url,s = e.data,n = e.headers;return new Promise(function (e, r) {_.request({ url: Se("https:", t), data: s, method: "POST", header: n, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, s) {var n = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = _.uploadFile({ url: Se("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var s = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);}, fail: function fail(e) { false && false, s(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return ke;}();var Te = { setItem: function setItem(e, t) {_.setStorageSync(e, t);}, getItem: function getItem(e) {return _.getStorageSync(e);}, removeItem: function removeItem(e) {_.removeStorageSync(e);}, clear: function clear() {_.clearStorageSync();} };var Pe = { genAdapter: function genAdapter() {return { root: {}, reqClass: ke, localStorage: Te, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };we.useAdapters(Pe);var Ae = we,Ie = Ae.init;Ae.init = function (e) {e.env = e.spaceId;var t = Ie.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var s = t.auth;t.auth = function (e) {var t = s.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = o(t[e]).bind(t);}), t;}, t.customAuth = t.auth;return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = o(t[e]).bind(t);}), t;};var Ee = /*#__PURE__*/function (_v) {_inherits(Ee, _v);var _super8 = _createSuper(Ee);function Ee() {_classCallCheck(this, Ee);return _super8.apply(this, arguments);}_createClass(Ee, [{ key: "getAccessToken", value: function getAccessToken() {var _this11 = this;return new Promise(function (e, t) {_this11.setAccessToken("Anonymous_Access_token"), e("Anonymous_Access_token");});} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };"auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret);var r = p(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return n["x-client-platform"] = i, n["x-client-appid"] = o, n["x-client-device-id"] = a, n["x-client-version"] = c, n["x-client-token"] = _.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: JSON.parse(JSON.stringify(n)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this12 = this;var e = _ref12.url,t = _ref12.formData,s = _ref12.name,n = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (a, c) {var u = _this12.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(new i({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this13 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,n = _ref13.onUploadProgress;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: s };return _this13.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: n }));}).then(function () {return _this13.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: r }) : n(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return Ee;}(v);var Oe = { init: function init(e) {var t = new Ee(e);["deleteFile", "getTempFileURL"].forEach(function (e) {t[e] = o(t[e]).bind(t);});var s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };var Ue, be;function De(_ref14) {var e = _ref14.name,t = _ref14.data,s = _ref14.spaceId,n = _ref14.provider;Ue || (Ue = p(), be = { ak: h.appid, p: "android" === d ? "a" : "i", ut: m(), uuid: g() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = s,a = { tencent: "t", aliyun: "a" }[n];{var _e15 = Object.assign({}, be, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: Ue, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e15)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e16 = _.getStorageSync("uni_id_token") || _.getStorageSync("uniIdToken");_e16 && (r.uniIdToken = _e16);}return r;}function Ce(_ref15) {var _this14 = this;var e = _ref15.name,t = _ref15.data;var s = this.localAddress,n = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,a = "http://".concat(s, ":").concat(n, "/system/check-function"),c = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);return new Promise(function (t, s) {_.request({ method: "POST", url: a, data: { name: e, platform: "app-plus", provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,s = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: s || "SYS_ERR" };}).then(function (_ref18) {var s = _ref18.code,n = _ref18.message;if (0 !== s) {switch (s) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this14.originCallFunction({ name: e, data: t });}return new Promise(function (s, n) {var a = De({ name: e, data: t, provider: _this14.config.provider, spaceId: o });_.request({ method: "POST", url: c, data: { provider: r, platform: "app-plus", param: a }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? n(new i({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : s({ result: t });}, fail: function fail(e) {n(new i({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var xe = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确已经是否已上传到服务空间", mode: "append" }];var Re = /[\\^$.*+?()[\]{}|]/g,qe = RegExp(Re.source);function Fe(e, t, s) {return e.replace(new RegExp((n = t) && qe.test(n) ? n.replace(Re, "\\$&") : n, "g"), s);var n;}function Le(e) {var t = e.callFunction;e.callFunction = function (e) {var _this15 = this;var s;s = this.isReady ? Promise.resolve() : this.initUniCloud;var n = e.name;return s.then(function () {e.data = De({ name: n, data: e.data, provider: _this15.config.provider, spaceId: _this15.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[_this15.config.provider];return new Promise(function (r, o) {t.call(_this15, e).then(function (e) {if (_this15.config.useDebugFunction && e && e.requestId) {var _t9 = JSON.stringify({ spaceId: _this15.config.spaceId, functionName: n, requestId: e.requestId });console.log("[".concat(s, "-request]").concat(_t9, "[/").concat(s, "-request]"));}r(e);}).catch(function (t) {if (_this15.config.useDebugFunction && t && t.requestId) {var _e19 = JSON.stringify({ spaceId: _this15.config.spaceId, functionName: n, requestId: t.requestId });console.log("[".concat(s, "-request]").concat(_e19, "[/").concat(s, "-request]"));}t && t.message && (t.message = function () {var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref20$message = _ref20.message,e = _ref20$message === void 0 ? "" : _ref20$message,_ref20$extraInfo = _ref20.extraInfo,t = _ref20$extraInfo === void 0 ? {} : _ref20$extraInfo,_ref20$formatter = _ref20.formatter,s = _ref20$formatter === void 0 ? [] : _ref20$formatter;for (var _n7 = 0; _n7 < s.length; _n7++) {var _s$_n = s[_n7],_r3 = _s$_n.rule,_o2 = _s$_n.content,_i2 = _s$_n.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e20 = 1; _e20 < _a.length; _e20++) {_c = Fe(_c, "{$".concat(_e20, "}"), _a[_e20]);}for (var _e21 in t) {_c = Fe(_c, "{".concat(_e21, "}"), t[_e21]);}switch (_i2) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: xe, extraInfo: { functionName: n } })), o(t);});});});};var s = e.callFunction;e.originCallFunction = e.callFunction, e.callFunction = function (t) {return o(function (t) {var _this16 = this;var n;n = e.isReady ? Promise.resolve() : e.initUniCloud;var r = n.then(function () {return  true && e.debugInfo && !e.debugInfo.forceRemote && [{"provider":"tencent","spaceName":"aged","spaceId":"tcb-5nxodloet2hajw41a105f-149986"}] ? Ce.call(_this16, t) : s.call(_this16, t);});return Object.defineProperty(r, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), r;}).call(this, t);};}var Ne = Symbol("CLIENT_DB_INTERNAL");function Me(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ne, new Proxy(e, { get: function get(e, s, n) {return function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}(e, s) || e[s] || "string" != typeof s ? e[s] : t.get(e, s, n);} });}var $e = /*#__PURE__*/function (_Error2) {_inherits($e, _Error2);var _super9 = _createSuper($e);function $e(e, t) {var _this17;_classCallCheck(this, $e);_this17 = _super9.call(this, e), _this17.code = t;return _this17;}return $e;}( /*#__PURE__*/_wrapNativeSuper(Error));function Ke(e) {switch (t = e, Object.prototype.toString.call(t).slice(8, -1).toLowerCase()) {case "array":return e.map(function (e) {return Ke(e);});case "object":return e._internalType === Ne || Object.keys(e).forEach(function (t) {e[t] = Ke(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}var t;}function je() {var e = _.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var s;try {s = JSON.parse((n = t[1], decodeURIComponent(atob(n).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var n;return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;}var Be = t(s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var s = "chooseAndUploadFile:fail";function n(e, t) {return e.tempFiles.forEach(function (e, s) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref21) {var s = _ref21.onChooseFile,n = _ref21.onUploadProgress;return t.then(function (e) {if (s) {var _t10 = s(e);if (void 0 !== _t10) return Promise.resolve(_t10).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: "chooseAndUploadFile:ok", tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var n = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";var r = t.tempFiles,o = r.length;var i = 0;return new Promise(function (a) {for (; i < s;) {c();}function c() {var s = i++;if (s >= o) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && a(t));var u = r[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, n && n(e);} }).then(function (e) {u.url = e.fileID, s < o && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < o && c();});}});}(e, t, 5, n);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,r = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: r, sourceType: o, extension: i, success: function success(t) {e(n(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,r = e.compressed,o = e.maxDuration,i = e.sourceType,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: r, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var s = t.tempFilePath,r = t.duration,o = t.size,i = t.height,a = t.width;e(n({ errMsg: "chooseVideo:ok", tempFilePaths: [s], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: s, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: r, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : r(e, function (e) {var t = e.count,r = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: r, success: function success(t) {e(n(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var He = "manual";function We(_x30, _x31) {return _We.apply(this, arguments);}function _We() {_We = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var s, _e28, n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:s = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return n = { url: s, timeout: 500 }, new Promise(function (e, t) {_.request(_objectSpread(_objectSpread({}, n), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e28 = _context32.sent;return _context32.abrupt("return", !(!_e28.data || 0 !== _e28.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _We.apply(this, arguments);}var Ve = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var s = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "app-plus");switch (e.provider) {case "tencent":t = Ae.init(Object.assign(e, { useDebugFunction: s }));break;case "aliyun":t = w.init(Object.assign(e, { useDebugFunction: s }));break;case "private":t = Oe.init(Object.assign(e, { useDebugFunction: s }));break;default:throw new Error("未提供正确的provider参数");}var n = undefined; true && n && !n.code && (t.debugInfo = n), t.isReady = !1;var r = t.auth();return t.initUniCloud = r.getLoginState().then(function (e) {return e ? Promise.resolve() : r.signInAnonymously();}).then(function () {if ( true && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e22 = _t$debugInfo.address,_s4 = _t$debugInfo.servePort;return function () {var _ref22 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var s, _n8, _r4;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_n8 = 0;case 1:if (!(_n8 < e.length)) {_context31.next = 11;break;}_r4 = e[_n8];_context31.next = 5;return We(_r4, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}s = _r4;return _context31.abrupt("break", 11);case 8:_n8++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: s, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref22.apply(this, arguments);};}()(_e22, _s4);}return Promise.resolve();}).then(function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref23.address,s = _ref23.port;if (e) t.localAddress = e, t.localPort = s;else if (t.debugInfo) {var _e23 =  true ? "error" : undefined,_s5 = console[_e23];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _s5("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试")) : _s5("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试");}}).then(function () {return function () {if (true) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === h.appid) return;uni.setStorageSync("__LAST_DCLOUD_APPID", h.appid), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) { false ? (undefined) : setTimeout(function () {d = uni.getSystemInfoSync().platform, l = uni.getStorageSync("__DC_CLOUD_UUID") || f(32), e();}, 0);});}).then(function () {t.isReady = !0;}), Le(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this18 = this;var s;return s = this.isReady ? Promise.resolve() : this.initUniCloud, s.then(function () {return t.call(_this18, e);});};var s = e.uploadFile;e.uploadFile = function (e) {return o(s).call(this, e);};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {},s = {};var n = /*#__PURE__*/function () {function n(e, t, s) {_classCallCheck(this, n);this.content = e, this.prevStage = t, this.actionName = s;}_createClass(n, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(n, r) {var o = this.toJSON();return o.$db.push({ $method: n, $param: r }), e.callFunction({ name: "DCloud-clientDB", data: { action: this.actionName, command: o } }).then(function (e) {var _e$result = e.result,n = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,a = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (a) for (var _e24 = 0; _e24 < a.length; _e24++) {var _a$_e = a[_e24],_t11 = _a$_e.level,_s6 = _a$_e.message,_n9 = _a$_e.detail,_r5 =  true && "warn" === _t11 ? "error" : _t11,_o3 = console[_r5] || console.log;var _i3 = "[System Info]" + _s6;_n9 && (_i3 = "".concat(_i3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _o3(_i3);}return n ? Promise.reject(new $e(r, n)) : (o && i && t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), o && i && s.refreshToken && s.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), Promise.resolve(e));}).catch(function (e) {var t = new $e(e.message, e.code || "SYSTEM_ERROR");return s.error && s.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), Promise.reject(e);});} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _s7 = e.content.$method;if ("aggregate" === _s7 || "pipeline" === _s7) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return i({ $method: "count", $param: Ke(Array.from(arguments)) }, e, e.actionName);};} }]);return n;}();var r = ["db.Geo", "db.command", "command.aggregate"];function o(e, t) {return r.indexOf("".concat(e, ".").concat(t)) > -1;}function i(e, t, s) {return Me(new n(e, t, s), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), o(n, t) ? i({ $method: t }, e, s) : function () {return i({ $method: t, $param: Ke(Array.from(arguments)) }, e, s);};} });}function a(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var c = { auth: { on: function on(e, s) {t[e] = t[e] || [], t[e].indexOf(s) > -1 || t[e].push(s);}, off: function off(e, s) {t[e] = t[e] || [];var n = t[e].indexOf(s);-1 !== n && t[e].splice(n, 1);} }, on: function on(e, t) {s[e] = s[e] || [], s[e].indexOf(t) > -1 || s[e].push(t);}, off: function off(e, t) {s[e] = s[e] || [];var n = s[e].indexOf(t);-1 !== n && s[e].splice(n, 1);}, env: Me({}, { get: function get(e, t) {return { $env: t };} }), action: function action(e) {return Me({}, { get: function get(t, s) {return o("db", s) ? i({ $method: s }, null, e) : function () {return i({ $method: s, $param: Ke(Array.from(arguments)) }, null, e);};} });}, Geo: Me({}, { get: function get(e, t) {return a({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, get serverDate() {return a({ path: [], method: "serverDate" });}, get RegExp() {return a({ path: [], method: "RegExp" });} },u = Me(c, { get: function get(e, t) {return o("db", t) ? i({ $method: t }) : function () {return i({ $method: t, $param: Ke(Array.from(arguments)) });};} });return this._database = u, u;};}(t), function (e) {e.getCurrentUserInfo = je, e.chooseAndUploadFile = o(Be.initChooseAndUploadFile(e));}(t), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = {};if (1 === [{"provider":"tencent","spaceName":"aged","spaceId":"tcb-5nxodloet2hajw41a105f-149986"}].length) e = [{"provider":"tencent","spaceName":"aged","spaceId":"tcb-5nxodloet2hajw41a105f-149986"}][0], Ve = Ve.init(e);else {var _e25 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"],t = [{"provider":"tencent","spaceName":"aged","spaceId":"tcb-5nxodloet2hajw41a105f-149986"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间";_e25.forEach(function (e) {Ve[e] = function () {return console.error(t), Promise.reject(new i({ code: "SYS_ERR", message: t }));};});}Object.assign(Ve, { get mixinDatacom() {return e = Ve, { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this19 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this19[t]);}), e;}, function (e, t) {if (_this19.loadtime === He) return;var s = !1;var n = [];for (var _r6 = 2; _r6 < e.length; _r6++) {e[_r6] !== t[_r6] && (n.push(e[_r6]), s = !0);}e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(s, n);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this20 = this;var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref25$getone = _ref25.getone,e = _ref25$getone === void 0 ? !1 : _ref25$getone,t = _ref25.success,s = _ref25.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {_this20.mixinDatacomLoading = !1;var _s$result = s.result,n = _s$result.data,r = _s$result.count;_this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = n.length < _this20.pageSize;var o = e ? n.length ? n[0] : void 0 : n;_this20.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, s && s(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var s = e.database();var n = t.action || this.action;n && (s = s.action(n));var r = t.collection || this.collection;s = s.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (s = s.where(o));var i = t.field || this.field;i && (s = s.field(i));var a = t.foreignKey || this.foreignKey;a && (s = s.foreignKey(a));var c = t.groupby || this.groupby;c && (s = s.groupBy(c));var u = t.groupField || this.groupField;u && (s = s.groupField(u)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());var h = t.orderby || this.orderby;h && (s = s.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;} } };var e;} });}})();var ze = Ve;var _default2 = ze;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 13), __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ 14), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 16)["default"]))

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 15);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 15 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 14)))

/***/ }),
/* 16 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 13)))

/***/ }),
/* 17 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 18 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! exports provided: I18n, initVueI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVueI18n", function() { return initVueI18n; });
const isObject = (val) => val !== null && typeof val === 'object';
class BaseFormatter {
    constructor() {
        this._caches = Object.create(null);
    }
    interpolate(message, values) {
        if (!values) {
            return [message];
        }
        let tokens = this._caches[message];
        if (!tokens) {
            tokens = parse(message);
            this._caches[message] = tokens;
        }
        return compile(tokens, values);
    }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
    const tokens = [];
    let position = 0;
    let text = '';
    while (position < format.length) {
        let char = format[position++];
        if (char === '{') {
            if (text) {
                tokens.push({ type: 'text', value: text });
            }
            text = '';
            let sub = '';
            char = format[position++];
            while (char !== undefined && char !== '}') {
                sub += char;
                char = format[position++];
            }
            const isClosed = char === '}';
            const type = RE_TOKEN_LIST_VALUE.test(sub)
                ? 'list'
                : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
                    ? 'named'
                    : 'unknown';
            tokens.push({ value: sub, type });
        }
        else if (char === '%') {
            // when found rails i18n syntax, skip text capture
            if (format[position] !== '{') {
                text += char;
            }
        }
        else {
            text += char;
        }
    }
    text && tokens.push({ type: 'text', value: text });
    return tokens;
}
function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values)
        ? 'list'
        : isObject(values)
            ? 'named'
            : 'unknown';
    if (mode === 'unknown') {
        return compiled;
    }
    while (index < tokens.length) {
        const token = tokens[index];
        switch (token.type) {
            case 'text':
                compiled.push(token.value);
                break;
            case 'list':
                compiled.push(values[parseInt(token.value, 10)]);
                break;
            case 'named':
                if (mode === 'named') {
                    compiled.push(values[token.value]);
                }
                else {
                    if (true) {
                        console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
                    }
                }
                break;
            case 'unknown':
                if (true) {
                    console.warn(`Detect 'unknown' type of token!`);
                }
                break;
        }
        index++;
    }
    return compiled;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
    if (!locale) {
        return;
    }
    locale = locale.trim().replace(/_/g, '-');
    if (messages[locale]) {
        return locale;
    }
    locale = locale.toLowerCase();
    if (locale.indexOf('zh') === 0) {
        if (locale.indexOf('-hans') !== -1) {
            return 'zh-Hans';
        }
        if (locale.indexOf('-hant') !== -1) {
            return 'zh-Hant';
        }
        if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
            return 'zh-Hant';
        }
        return 'zh-Hans';
    }
    const lang = startsWith(locale, ['en', 'fr', 'es']);
    if (lang) {
        return lang;
    }
}
class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater, }) {
        this.locale = 'en';
        this.fallbackLocale = 'en';
        this.message = {};
        this.messages = {};
        this.watchers = [];
        if (fallbackLocale) {
            this.fallbackLocale = fallbackLocale;
        }
        this.formater = formater || defaultFormatter;
        this.messages = messages;
        this.setLocale(locale);
        if (watcher) {
            this.watchLocale(watcher);
        }
    }
    setLocale(locale) {
        const oldLocale = this.locale;
        this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
        this.message = this.messages[this.locale];
        this.watchers.forEach((watcher) => {
            watcher(this.locale, oldLocale);
        });
    }
    getLocale() {
        return this.locale;
    }
    watchLocale(fn) {
        const index = this.watchers.push(fn) - 1;
        return () => {
            this.watchers.splice(index, 1);
        };
    }
    t(key, locale, values) {
        let message = this.message;
        if (typeof locale === 'string') {
            locale = normalizeLocale(locale, this.messages);
            locale && (message = this.messages[locale]);
        }
        else {
            values = locale;
        }
        if (!hasOwn(message, key)) {
            console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
            return key;
        }
        return this.formater.interpolate(message[key], values).join('');
    }
}

function initLocaleWatcher(appVm, i18n) {
    appVm.$i18n &&
        appVm.$i18n.vm.$watch('locale', (newLocale) => {
            i18n.setLocale(newLocale);
        }, {
            immediate: true,
        });
}
function getDefaultLocale() {
    if (typeof navigator !== 'undefined') {
        return navigator.userLanguage || navigator.language;
    }
    if (typeof plus !== 'undefined') {
        // TODO 待调整为最新的获取语言代码
        return plus.os.language;
    }
    return uni.getSystemInfoSync().language;
}
function initVueI18n(messages, fallbackLocale = 'en', locale) {
    const i18n = new I18n({
        locale: locale || fallbackLocale,
        fallbackLocale,
        messages,
    });
    let t = (key, values) => {
        if (typeof getApp !== 'function') {
            // app-plus view
            /* eslint-disable no-func-assign */
            t = function (key, values) {
                return i18n.t(key, values);
            };
        }
        else {
            const appVm = getApp().$vm;
            if (!appVm.$t || !appVm.$i18n) {
                if (!locale) {
                    i18n.setLocale(getDefaultLocale());
                }
                /* eslint-disable no-func-assign */
                t = function (key, values) {
                    return i18n.t(key, values);
                };
            }
            else {
                initLocaleWatcher(appVm, i18n);
                /* eslint-disable no-func-assign */
                t = function (key, values) {
                    const $i18n = appVm.$i18n;
                    const silentTranslationWarn = $i18n.silentTranslationWarn;
                    $i18n.silentTranslationWarn = true;
                    const msg = appVm.$t(key, values);
                    $i18n.silentTranslationWarn = silentTranslationWarn;
                    if (msg !== key) {
                        return msg;
                    }
                    return i18n.t(key, $i18n.locale, values);
                };
            }
        }
        return t(key, values);
    };
    return {
        t(key, values) {
            return t(key, values);
        },
        getLocale() {
            return i18n.getLocale();
        },
        setLocale(newLocale) {
            return i18n.setLocale(newLocale);
        },
        mixin: {
            beforeCreate() {
                const unwatch = i18n.watchLocale(() => {
                    this.$forceUpdate();
                });
                this.$once('hook:beforeDestroy', function () {
                    unwatch();
                });
            },
            methods: {
                $$t(key, values) {
                    return t(key, values);
                },
            },
        },
    };
}




/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/pages.json?{"type":"stat"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__4CFA212" };exports.default = _default;

/***/ }),
/* 20 */
/*!**********************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/rec-task.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.createRecTask = createRecTask;exports.describeTaskStatus = describeTaskStatus;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! ./api */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n/**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 录音文件识别请求\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {object} params\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} params.engineModelType 引擎模型类型。 电话场景： • 8k_zh：电话 8k 中文普通话通用（可用于双声道音频）； • 8k_zh_s：电话 8k 中文普通话话者分离（仅适用于单声道音频）； 非电话场景： • 16k_zh：16k 中文普通话通用； • 16k_zh_video：16k 音视频领域； • 16k_en：16k 英语； • 16k_ca：16k 粤语；\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} params.channelNum  语音声道数。1：单声道；2：双声道（仅支持 8k_zh 引擎模型）。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} params.resTextFormat  识别结果返回形式。0： 识别结果文本(含分段时间戳)； 1：仅支持16k中文引擎，含识别结果详情(词时间戳列表，一般用于生成字幕场景)。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} params.sourceType 语音数据来源。0：语音URL；1：语音数据（post body）。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} [params.callbackUrl] 回调 URL，用户自行搭建的用于接收识别结果的服务器地址， 长度小于2048字节。如果用户使用回调方式获取识别结果，需提交该参数；如果用户使用轮询方式获取识别结果，则无需提交该参数。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} [params.url] 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} [params.data] \t语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于600KB。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.dataLen] 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} [params.hotwordId] \t热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.filterDirty] \t是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.filterModal] 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.convertNumMode] 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {string} [params.extra] 附加参数\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.speakerDiarization] 是否开启话者分离，0：不开启，1：开启(仅支持8k_zh/16k_zh引擎模型，单声道音频)\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param {integer} [params.speakerNumber] 话者分离人数（需配合开启话者分离使用），支持2-10（8k_zh仅支持2， 16k_zh支持2-10）注：话者分离目前是beta版本，请根据您的需要谨慎使用\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise<object>} result 录音上传结果\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */function\ncreateRecTask(_x) {return _createRecTask.apply(this, arguments);}\n\n\n\n\n\n\n/**\n                                                                   * 录音文件识别结果查询\n                                                                   * @param {integer} taskId 录音上传后返回的TaskID\n                                                                   * @return {Promise<object>} result 录音识别结果\n                                                                   */function _createRecTask() {_createRecTask = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(!params.engineModelType || !params.channelNum || !params.resTextFormat === undefined || params.sourceType === undefined || !params.data && !params.url)) {_context.next = 2;break;}throw new Error(\"缺少必要参数\");case 2:return _context.abrupt(\"return\", _api.default.createRecTask(params));case 3:case \"end\":return _context.stop();}}}, _callee);}));return _createRecTask.apply(this, arguments);}function\ndescribeTaskStatus(_x2) {return _describeTaskStatus.apply(this, arguments);}function _describeTaskStatus() {_describeTaskStatus = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(taskId) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (\n            taskId) {_context2.next = 2;break;}throw (\n              new Error(\"缺少taskId\"));case 2:return _context2.abrupt(\"return\",\n\n            _api.default.describeTaskStatus({ taskId: taskId }));case 3:case \"end\":return _context2.stop();}}}, _callee2);}));return _describeTaskStatus.apply(this, arguments);}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3JlYy10YXNrLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJlY1Rhc2siLCJwYXJhbXMiLCJlbmdpbmVNb2RlbFR5cGUiLCJjaGFubmVsTnVtIiwicmVzVGV4dEZvcm1hdCIsInVuZGVmaW5lZCIsInNvdXJjZVR5cGUiLCJkYXRhIiwidXJsIiwiRXJyb3IiLCJhcGlzIiwiZGVzY3JpYmVUYXNrU3RhdHVzIiwidGFza0lkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLHdFOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9Cc0JBLGE7Ozs7Ozs7QUFPdEI7Ozs7MktBUE8saUJBQTZCQyxNQUE3QixpSUFDRCxDQUFDQSxNQUFNLENBQUNDLGVBQVIsSUFBMkIsQ0FBQ0QsTUFBTSxDQUFDRSxVQUFuQyxJQUFpRCxDQUFDRixNQUFNLENBQUNHLGFBQVIsS0FBd0JDLFNBQXpFLElBQXNGSixNQUFNLENBQUNLLFVBQVAsS0FBb0JELFNBQTFHLElBQXlILENBQUNKLE1BQU0sQ0FBQ00sSUFBUixJQUFnQixDQUFDTixNQUFNLENBQUNPLEdBRGhKLG1DQUVHLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBRkgseUNBSUVDLGFBQUtWLGFBQUwsQ0FBbUJDLE1BQW5CLENBSkYsMEQ7QUFZZVUsa0IsMEtBQWYsa0JBQWtDQyxNQUFsQztBQUNBQSxrQkFEQTtBQUVHLGtCQUFJSCxLQUFKLENBQVUsVUFBVixDQUZIOztBQUlFQyx5QkFBS0Msa0JBQUwsQ0FBd0IsRUFBQ0MsTUFBTSxFQUFOQSxNQUFELEVBQXhCLENBSkYsNEQiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIFRlbmNlbnQgQ2xvdWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGFwaXMgZnJvbSBcIi4vYXBpXCI7XG5cbi8qKlxuICog5b2V6Z+z5paH5Lu26K+G5Yir6K+35rGCXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmVuZ2luZU1vZGVsVHlwZSDlvJXmk47mqKHlnovnsbvlnovjgIIg55S16K+d5Zy65pmv77yaIOKAoiA4a196aO+8mueUteivnSA4ayDkuK3mlofmma7pgJror53pgJrnlKjvvIjlj6/nlKjkuo7lj4zlo7DpgZPpn7PpopHvvInvvJsg4oCiIDhrX3poX3PvvJrnlLXor50gOGsg5Lit5paH5pmu6YCa6K+d6K+d6ICF5YiG56a777yI5LuF6YCC55So5LqO5Y2V5aOw6YGT6Z+z6aKR77yJ77ybIOmdnueUteivneWcuuaZr++8miDigKIgMTZrX3po77yaMTZrIOS4reaWh+aZrumAmuivnemAmueUqO+8myDigKIgMTZrX3poX3ZpZGVv77yaMTZrIOmfs+inhumikemihuWfn++8myDigKIgMTZrX2Vu77yaMTZrIOiLseivre+8myDigKIgMTZrX2Nh77yaMTZrIOeypOivre+8m1xuICogQHBhcmFtIHtpbnRlZ2VyfSBwYXJhbXMuY2hhbm5lbE51bSAg6K+t6Z+z5aOw6YGT5pWw44CCMe+8muWNleWjsOmBk++8mzLvvJrlj4zlo7DpgZPvvIjku4XmlK/mjIEgOGtfemgg5byV5pOO5qih5Z6L77yJ44CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IHBhcmFtcy5yZXNUZXh0Rm9ybWF0ICDor4bliKvnu5Pmnpzov5Tlm57lvaLlvI/jgIIw77yaIOivhuWIq+e7k+aenOaWh+acrCjlkKvliIbmrrXml7bpl7TmiLMp77ybIDHvvJrku4XmlK/mjIExNmvkuK3mloflvJXmk47vvIzlkKvor4bliKvnu5Pmnpzor6bmg4Uo6K+N5pe26Ze05oiz5YiX6KGo77yM5LiA6Iis55So5LqO55Sf5oiQ5a2X5bmV5Zy65pmvKeOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBwYXJhbXMuc291cmNlVHlwZSDor63pn7PmlbDmja7mnaXmupDjgIIw77ya6K+t6Z+zVVJM77ybMe+8muivremfs+aVsOaNru+8iHBvc3QgYm9kee+8ieOAglxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuY2FsbGJhY2tVcmxdIOWbnuiwgyBVUkzvvIznlKjmiLfoh6rooYzmkK3lu7rnmoTnlKjkuo7mjqXmlLbor4bliKvnu5PmnpznmoTmnI3liqHlmajlnLDlnYDvvIwg6ZW/5bqm5bCP5LqOMjA0OOWtl+iKguOAguWmguaenOeUqOaIt+S9v+eUqOWbnuiwg+aWueW8j+iOt+WPluivhuWIq+e7k+aenO+8jOmcgOaPkOS6pOivpeWPguaVsO+8m+WmguaenOeUqOaIt+S9v+eUqOi9ruivouaWueW8j+iOt+WPluivhuWIq+e7k+aenO+8jOWImeaXoOmcgOaPkOS6pOivpeWPguaVsOOAglxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudXJsXSDor63pn7MgVVJM77yM5YWs572R5Y+v5LiL6L2944CC5b2TIFNvdXJjZVR5cGUg5YC85Li6IDDvvIjor63pn7MgVVJM5LiK5Lyg77yJIOaXtumhu+Whq+WGmeivpeWtl+aute+8jOS4uiAxIOaXtuS4jeWhq++8m1VSTCDnmoTplb/luqblpKfkuo4gMO+8jOWwj+S6jiAyMDQ477yM6ZyA6L+b6KGMdXJsZW5jb2Rl57yW56CB44CC6Z+z6aKR5pe26Ze06ZW/5bqm6KaB5bCP5LqONjBz44CCXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5kYXRhXSBcdOivremfs+aVsOaNru+8jOW9k1NvdXJjZVR5cGUg5YC85Li6Me+8iOacrOWcsOivremfs+aVsOaNruS4iuS8oO+8ieaXtuW/hemhu+Whq+WGme+8jOW9k1NvdXJjZVR5cGUg5YC85Li6MO+8iOivremfsyBVUkzkuIrkvKDvvInlj6/kuI3lhpnjgILopoHkvb/nlKhiYXNlNjTnvJbnoIEo6YeH55SocHl0aG9u6K+t6KiA5pe25rOo5oSP6K+75Y+W5paH5Lu25bqU6K+l5Li6c3RyaW5n6ICM5LiN5pivYnl0Ze+8jOS7pWJ5dGXmoLzlvI/or7vlj5blkI7opoFkZWNvZGUoKeOAgue8lueggeWQjueahOaVsOaNruS4jeWPr+W4puacieWbnui9puaNouihjOespinjgILpn7PpopHmlbDmja7opoHlsI/kuo42MDBLQuOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLmRhdGFMZW5dIOaVsOaNrumVv+W6pu+8jOWNleS9jeS4uuWtl+iKguOAguW9kyBTb3VyY2VUeXBlIOWAvOS4ujHvvIjmnKzlnLDor63pn7PmlbDmja7kuIrkvKDvvInml7blv4XpobvloavlhpnvvIzlvZMgU291cmNlVHlwZSDlgLzkuLow77yI6K+t6Z+zIFVSTOS4iuS8oO+8ieWPr+S4jeWGme+8iOatpOaVsOaNrumVv+W6puS4uuaVsOaNruacqui/m+ihjGJhc2U2NOe8lueggeaXtueahOaVsOaNrumVv+W6pu+8ieOAglxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuaG90d29yZElkXSBcdOeDreivjWlk44CC55So5LqO6LCD55So5a+55bqU55qE54Ot6K+N6KGo77yM5aaC5p6c5Zyo6LCD55So6K+t6Z+z6K+G5Yir5pyN5Yqh5pe277yM5LiN6L+b6KGM5Y2V54us55qE54Ot6K+NaWTorr7nva7vvIzoh6rliqjnlJ/mlYjpu5jorqTng63or43vvJvlpoLmnpzov5vooYzkuobljZXni6znmoTng63or41pZOiuvue9ru+8jOmCo+S5iOWwhueUn+aViOWNleeLrOiuvue9rueahOeDreivjWlkXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMuZmlsdGVyRGlydHldIFx05piv5ZCm6L+H5ruk6ISP6K+N77yI55uu5YmN5pSv5oyB5Lit5paH5pmu6YCa6K+d5byV5pOO77yJ44CCMO+8muS4jei/h+a7pOiEj+ivje+8mzHvvJrov4fmu6TohI/or43vvJsy77ya5bCG6ISP6K+N5pu/5o2i5Li6ICpcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy5maWx0ZXJNb2RhbF0g5piv5ZCm6L+H6K+t5rCU6K+N77yI55uu5YmN5pSv5oyB5Lit5paH5pmu6YCa6K+d5byV5pOO77yJ44CCMO+8muS4jei/h+a7pOivreawlOivje+8mzHvvJrpg6jliIbov4fmu6TvvJsy77ya5Lil5qC86L+H5rukIOOAgum7mOiupOWAvOS4uiAw44CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMuY29udmVydE51bU1vZGVdIOaYr+WQpui/m+ihjOmYv+aLieS8r+aVsOWtl+aZuuiDvei9rOaNouOAgjDvvJrkuI3ovazmjaLvvIznm7TmjqXovpPlh7rkuK3mlofmlbDlrZfvvIwx77ya5qC55o2u5Zy65pmv5pm66IO96L2s5o2i5Li66Zi/5ouJ5Lyv5pWw5a2X44CC6buY6K6k5YC85Li6MVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuZXh0cmFdIOmZhOWKoOWPguaVsFxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLnNwZWFrZXJEaWFyaXphdGlvbl0g5piv5ZCm5byA5ZCv6K+d6ICF5YiG56a777yMMO+8muS4jeW8gOWQr++8jDHvvJrlvIDlkK8o5LuF5pSv5oyBOGtfemgvMTZrX3po5byV5pOO5qih5Z6L77yM5Y2V5aOw6YGT6Z+z6aKRKVxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLnNwZWFrZXJOdW1iZXJdIOivneiAheWIhuemu+S6uuaVsO+8iOmcgOmFjeWQiOW8gOWQr+ivneiAheWIhuemu+S9v+eUqO+8ie+8jOaUr+aMgTItMTDvvIg4a196aOS7heaUr+aMgTLvvIwgMTZrX3po5pSv5oyBMi0xMO+8ieazqO+8muivneiAheWIhuemu+ebruWJjeaYr2JldGHniYjmnKzvvIzor7fmoLnmja7mgqjnmoTpnIDopoHosKjmhY7kvb/nlKhcbiAqIEByZXR1cm4ge1Byb21pc2U8b2JqZWN0Pn0gcmVzdWx0IOW9lemfs+S4iuS8oOe7k+aenFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVjVGFzayhwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMuZW5naW5lTW9kZWxUeXBlIHx8ICFwYXJhbXMuY2hhbm5lbE51bSB8fCAhcGFyYW1zLnJlc1RleHRGb3JtYXQ9PT11bmRlZmluZWQgfHwgcGFyYW1zLnNvdXJjZVR5cGU9PT11bmRlZmluZWQgIHx8ICghcGFyYW1zLmRhdGEgJiYgIXBhcmFtcy51cmwpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwi57y65bCR5b+F6KaB5Y+C5pWwXCIpO1xuICB9XG4gIHJldHVybiBhcGlzLmNyZWF0ZVJlY1Rhc2socGFyYW1zKVxufVxuXG4vKipcbiAqIOW9lemfs+aWh+S7tuivhuWIq+e7k+aenOafpeivolxuICogQHBhcmFtIHtpbnRlZ2VyfSB0YXNrSWQg5b2V6Z+z5LiK5Lyg5ZCO6L+U5Zue55qEVGFza0lEXG4gKiBAcmV0dXJuIHtQcm9taXNlPG9iamVjdD59IHJlc3VsdCDlvZXpn7Por4bliKvnu5PmnpxcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlc2NyaWJlVGFza1N0YXR1cyh0YXNrSWQpe1xuICBpZiAoIXRhc2tJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIue8uuWwkXRhc2tJZFwiKTtcbiAgfVxuICByZXR1cm4gYXBpcy5kZXNjcmliZVRhc2tTdGF0dXMoe3Rhc2tJZH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/api.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.toUpperCase = toUpperCase;exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\nfunction apis() {}\n// 参数首字母大写转换\nfunction toUpperCase(obj) {\n  if (typeof obj === \"object\") {\n    var formatObj = Object.keys(obj).reduce(function (newObj, key) {\n      var newKey = key.substring(0, 1).toUpperCase() + key.substring(1);\n      newObj[newKey] = obj[key];\n      return newObj;\n    }, {});\n    return formatObj;\n  } else {\n    throw new Error(\"参数需要为object类型\");\n  }\n}\n\nfunction apiCreater(name) {\n  if (!name) new Error(\"请传入ASR对应Action名称\");\n  return /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(args) {var payload, result;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n              args.sourceType === 1 && !args.dataLen)) {_context.next = 2;break;}throw (\n                new Error(\"需要填写数据长度\"));case 2:_context.prev = 2;\n\n\n              // 将参数key的首字母大写\n              payload = toUpperCase(args);\n              // 调用云函数来进行OCR识别\n              _context.next = 6;return uniCloud.callFunction({\n                name: \"tencentcloud-plugin\",\n                data: {\n                  module: \"ASR\",\n                  action: \"getAsrResult\",\n                  name: name,\n                  payload: payload } });case 6:result = _context.sent;return _context.abrupt(\"return\",\n\n\n              result);case 10:_context.prev = 10;_context.t0 = _context[\"catch\"](2);throw (\n\n                new Error(_context.t0));case 13:case \"end\":return _context.stop();}}}, _callee, null, [[2, 10]]);}));return function (_x) {return _ref.apply(this, arguments);};}();\n\n\n}\n\n// 云API对应的ActionName\nvar function_names = [\n'SentenceRecognition', //  一句话识别\n'CreateRecTask', // 录音文件识别请求\n'DescribeTaskStatus', //  录音文件识别结果查询\n'RealtimeVoice' // 实时语音\n];\n\nfor (var i = 0; i < function_names.length; i++) {\n  var name = function_names[i];\n  apis[name.charAt(0).toLowerCase() + name.slice(1)] = apiCreater(\n  function_names[i]);\n\n}var _default =\n\napis;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL2FwaS5qcyJdLCJuYW1lcyI6WyJhcGlzIiwidG9VcHBlckNhc2UiLCJvYmoiLCJmb3JtYXRPYmoiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwibmV3T2JqIiwia2V5IiwibmV3S2V5Iiwic3Vic3RyaW5nIiwiRXJyb3IiLCJhcGlDcmVhdGVyIiwibmFtZSIsImFyZ3MiLCJzb3VyY2VUeXBlIiwiZGF0YUxlbiIsInBheWxvYWQiLCJ1bmlDbG91ZCIsImNhbGxGdW5jdGlvbiIsImRhdGEiLCJtb2R1bGUiLCJhY3Rpb24iLCJyZXN1bHQiLCJmdW5jdGlvbl9uYW1lcyIsImkiLCJsZW5ndGgiLCJjaGFyQXQiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQUNsQjtBQUNPLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQy9CLE1BQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE1BQWpCLENBQXdCLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFpQjtBQUN6RCxVQUFJQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ0UsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JULFdBQXBCLEtBQW9DTyxHQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLENBQWpEO0FBQ0FILFlBQU0sQ0FBQ0UsTUFBRCxDQUFOLEdBQWlCUCxHQUFHLENBQUNNLEdBQUQsQ0FBcEI7QUFDQSxhQUFPRCxNQUFQO0FBQ0QsS0FKaUIsRUFJZixFQUplLENBQWxCO0FBS0EsV0FBT0osU0FBUDtBQUNELEdBUEQsTUFPTztBQUNMLFVBQU0sSUFBSVEsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBeUI7QUFDdkIsTUFBSSxDQUFDQSxJQUFMLEVBQVcsSUFBSUYsS0FBSixDQUFVLGtCQUFWO0FBQ1gsd0dBQU8saUJBQWdCRyxJQUFoQjtBQUNGQSxrQkFBSSxDQUFDQyxVQUFMLEtBQWtCLENBQWxCLElBQXVCLENBQUNELElBQUksQ0FBQ0UsT0FEM0I7QUFFRyxvQkFBSUwsS0FBSixDQUFVLFVBQVYsQ0FGSDs7O0FBS0g7QUFDTU0scUJBTkgsR0FNYWhCLFdBQVcsQ0FBQ2EsSUFBRCxDQU54QjtBQU9IO0FBUEcsdUNBUWtCSSxRQUFRLENBQUNDLFlBQVQsQ0FBc0I7QUFDekNOLG9CQUFJLEVBQUUscUJBRG1DO0FBRXpDTyxvQkFBSSxFQUFFO0FBQ0pDLHdCQUFNLEVBQUUsS0FESjtBQUVKQyx3QkFBTSxFQUFFLGNBRko7QUFHSlQsc0JBQUksRUFBRUEsSUFIRjtBQUlKSSx5QkFBTyxFQUFQQSxPQUpJLEVBRm1DLEVBQXRCLENBUmxCLFFBUUdNLE1BUkg7OztBQWlCSUEsb0JBakJKOztBQW1CRyxvQkFBSVosS0FBSixhQW5CSCw0RUFBUDs7O0FBc0JEOztBQUVEO0FBQ0EsSUFBTWEsY0FBYyxHQUFHO0FBQ3JCLHFCQURxQixFQUNHO0FBQ3hCLGVBRnFCLEVBRUg7QUFDbEIsb0JBSHFCLEVBR0U7QUFDdkIsZUFKcUIsQ0FJTDtBQUpLLENBQXZCOztBQU9BLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsY0FBYyxDQUFDRSxNQUFuQyxFQUEyQ0QsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5QyxNQUFJWixJQUFJLEdBQUdXLGNBQWMsQ0FBQ0MsQ0FBRCxDQUF6QjtBQUNBekIsTUFBSSxDQUFDYSxJQUFJLENBQUNjLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsS0FBK0JmLElBQUksQ0FBQ2dCLEtBQUwsQ0FBVyxDQUFYLENBQWhDLENBQUosR0FBcURqQixVQUFVO0FBQzdEWSxnQkFBYyxDQUFDQyxDQUFELENBRCtDLENBQS9EOztBQUdELEM7O0FBRWN6QixJIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBUZW5jZW50IENsb3VkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGFwaXMoKSB7fVxuLy8g5Y+C5pWw6aaW5a2X5q+N5aSn5YaZ6L2s5o2iXG5leHBvcnQgZnVuY3Rpb24gdG9VcHBlckNhc2Uob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgZm9ybWF0T2JqID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKG5ld09iaiwga2V5KSA9PiB7XG4gICAgICBsZXQgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbiAgICAgIG5ld09ialtuZXdLZXldID0gb2JqW2tleV07XG4gICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gZm9ybWF0T2JqO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuWPguaVsOmcgOimgeS4um9iamVjdOexu+Wei1wiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlDcmVhdGVyKG5hbWUpe1xuICBpZiAoIW5hbWUpIG5ldyBFcnJvcihcIuivt+S8oOWFpUFTUuWvueW6lEFjdGlvbuWQjeensFwiKTtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYoYXJncy5zb3VyY2VUeXBlPT09MSAmJiAhYXJncy5kYXRhTGVuKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIumcgOimgeWhq+WGmeaVsOaNrumVv+W6plwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIOWwhuWPguaVsGtleeeahOmmluWtl+avjeWkp+WGmVxuICAgICAgY29uc3QgcGF5bG9hZCA9IHRvVXBwZXJDYXNlKGFyZ3MpO1xuICAgICAgLy8g6LCD55So5LqR5Ye95pWw5p2l6L+b6KGMT0NS6K+G5YirXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiBcInRlbmNlbnRjbG91ZC1wbHVnaW5cIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1vZHVsZTogXCJBU1JcIixcbiAgICAgICAgICBhY3Rpb246IFwiZ2V0QXNyUmVzdWx0XCIsXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8g5LqRQVBJ5a+55bqU55qEQWN0aW9uTmFtZVxuY29uc3QgZnVuY3Rpb25fbmFtZXMgPSBbXG4gICdTZW50ZW5jZVJlY29nbml0aW9uJywgIC8vICDkuIDlj6Xor53or4bliKtcbiAgJ0NyZWF0ZVJlY1Rhc2snLCAgLy8g5b2V6Z+z5paH5Lu26K+G5Yir6K+35rGCXG4gICdEZXNjcmliZVRhc2tTdGF0dXMnLCAgLy8gIOW9lemfs+aWh+S7tuivhuWIq+e7k+aenOafpeivolxuICAnUmVhbHRpbWVWb2ljZScgLy8g5a6e5pe26K+t6Z+zXG5dXG5cbmZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25fbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgbGV0IG5hbWUgPSBmdW5jdGlvbl9uYW1lc1tpXTtcbiAgYXBpc1tuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKV0gPSBhcGlDcmVhdGVyKFxuICAgIGZ1bmN0aW9uX25hbWVzW2ldXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/sentence-recognition.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.sentenceRecognition = sentenceRecognition;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! ./api */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n/**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 一句话识别api\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {object} params\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} params.engSerViceType 引擎模型类型。 8k_zh：电话 8k 中文普通话通用；16k_zh：16k 中文普通话通用；16k_en：16k 英语；16k_ca：16k 粤语。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} params.sourceType 语音数据来源。0：语音URL；1：语音数据（post body）。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} params.voiceFormat 识别音频的音频格式。mp3、wav。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} params.usrAudioKey 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} [params.url] 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} [params.data] \t语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于600KB。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} [params.dataLen] 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} [params.hotwordId] \t热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} [params.filterDirty] \t是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} [params.filterModal] 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} [params.filterPunc] 是否过滤句末的句号（目前支持中文普通话引擎）。0：不过滤句末的句号；1：过滤句末的句号。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {integer} [params.convertNumMode] 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @return {Promise<object>} result 音频识别结果\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */function\nsentenceRecognition(_x) {return _sentenceRecognition.apply(this, arguments);}function _sentenceRecognition() {_sentenceRecognition = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n            !params.engSerViceType || params.sourceType === undefined || !params.voiceFormat || !params.usrAudioKey || !params.data && !params.url)) {_context.next = 2;break;}throw (\n              new Error(\"缺少必要参数\"));case 2:return _context.abrupt(\"return\",\n\n            _api.default.sentenceRecognition(_objectSpread(_objectSpread({},\n            params), {}, {\n              ProjectId: 0, // 默认参数\n              SubServiceType: 2 // 默认参数\n            })));case 3:case \"end\":return _context.stop();}}}, _callee);}));return _sentenceRecognition.apply(this, arguments);}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3NlbnRlbmNlLXJlY29nbml0aW9uLmpzIl0sIm5hbWVzIjpbInNlbnRlbmNlUmVjb2duaXRpb24iLCJwYXJhbXMiLCJlbmdTZXJWaWNlVHlwZSIsInNvdXJjZVR5cGUiLCJ1bmRlZmluZWQiLCJ2b2ljZUZvcm1hdCIsInVzckF1ZGlvS2V5IiwiZGF0YSIsInVybCIsIkVycm9yIiwiYXBpcyIsIlByb2plY3RJZCIsIlN1YlNlcnZpY2VUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLHdFOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCc0JBLG1CLDRLQUFmLGlCQUFtQ0MsTUFBbkM7QUFDRCxhQUFDQSxNQUFNLENBQUNDLGNBQVIsSUFBMEJELE1BQU0sQ0FBQ0UsVUFBUCxLQUFvQkMsU0FBOUMsSUFBMkQsQ0FBQ0gsTUFBTSxDQUFDSSxXQUFuRSxJQUFrRixDQUFDSixNQUFNLENBQUNLLFdBQTFGLElBQTBHLENBQUNMLE1BQU0sQ0FBQ00sSUFBUixJQUFnQixDQUFDTixNQUFNLENBQUNPLEdBRGpJO0FBRUcsa0JBQUlDLEtBQUosQ0FBVSxRQUFWLENBRkg7O0FBSUVDLHlCQUFLVixtQkFBTDtBQUNGQyxrQkFERTtBQUVMVSx1QkFBUyxFQUFFLENBRk4sRUFFUztBQUNkQyw0QkFBYyxFQUFFLENBSFgsQ0FHYztBQUhkLGVBSkYsMEQiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIFRlbmNlbnQgQ2xvdWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGFwaXMgZnJvbSBcIi4vYXBpXCI7XG5cbi8qKlxuICog5LiA5Y+l6K+d6K+G5YirYXBpXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmVuZ1NlclZpY2VUeXBlIOW8leaTjuaooeWei+exu+Wei+OAgiA4a196aO+8mueUteivnSA4ayDkuK3mlofmma7pgJror53pgJrnlKjvvJsxNmtfemjvvJoxNmsg5Lit5paH5pmu6YCa6K+d6YCa55So77ybMTZrX2Vu77yaMTZrIOiLseivre+8mzE2a19jYe+8mjE2ayDnsqTor63jgIJcbiAqIEBwYXJhbSB7aW50ZWdlcn0gcGFyYW1zLnNvdXJjZVR5cGUg6K+t6Z+z5pWw5o2u5p2l5rqQ44CCMO+8muivremfs1VSTO+8mzHvvJror63pn7PmlbDmja7vvIhwb3N0IGJvZHnvvInjgIJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudm9pY2VGb3JtYXQg6K+G5Yir6Z+z6aKR55qE6Z+z6aKR5qC85byP44CCbXAz44CBd2F244CCXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnVzckF1ZGlvS2V5IOeUqOaIt+err+WvueatpOS7u+WKoeeahOWUr+S4gOagh+ivhu+8jOeUqOaIt+iHquWKqeeUn+aIkO+8jOeUqOS6jueUqOaIt+afpeaJvuivhuWIq+e7k+aenOOAglxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMudXJsXSDor63pn7MgVVJM77yM5YWs572R5Y+v5LiL6L2944CC5b2TIFNvdXJjZVR5cGUg5YC85Li6IDDvvIjor63pn7MgVVJM5LiK5Lyg77yJIOaXtumhu+Whq+WGmeivpeWtl+aute+8jOS4uiAxIOaXtuS4jeWhq++8m1VSTCDnmoTplb/luqblpKfkuo4gMO+8jOWwj+S6jiAyMDQ477yM6ZyA6L+b6KGMdXJsZW5jb2Rl57yW56CB44CC6Z+z6aKR5pe26Ze06ZW/5bqm6KaB5bCP5LqONjBz44CCXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5kYXRhXSBcdOivremfs+aVsOaNru+8jOW9k1NvdXJjZVR5cGUg5YC85Li6Me+8iOacrOWcsOivremfs+aVsOaNruS4iuS8oO+8ieaXtuW/hemhu+Whq+WGme+8jOW9k1NvdXJjZVR5cGUg5YC85Li6MO+8iOivremfsyBVUkzkuIrkvKDvvInlj6/kuI3lhpnjgILopoHkvb/nlKhiYXNlNjTnvJbnoIEo6YeH55SocHl0aG9u6K+t6KiA5pe25rOo5oSP6K+75Y+W5paH5Lu25bqU6K+l5Li6c3RyaW5n6ICM5LiN5pivYnl0Ze+8jOS7pWJ5dGXmoLzlvI/or7vlj5blkI7opoFkZWNvZGUoKeOAgue8lueggeWQjueahOaVsOaNruS4jeWPr+W4puacieWbnui9puaNouihjOespinjgILpn7PpopHmlbDmja7opoHlsI/kuo42MDBLQuOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLmRhdGFMZW5dIOaVsOaNrumVv+W6pu+8jOWNleS9jeS4uuWtl+iKguOAguW9kyBTb3VyY2VUeXBlIOWAvOS4ujHvvIjmnKzlnLDor63pn7PmlbDmja7kuIrkvKDvvInml7blv4XpobvloavlhpnvvIzlvZMgU291cmNlVHlwZSDlgLzkuLow77yI6K+t6Z+zIFVSTOS4iuS8oO+8ieWPr+S4jeWGme+8iOatpOaVsOaNrumVv+W6puS4uuaVsOaNruacqui/m+ihjGJhc2U2NOe8lueggeaXtueahOaVsOaNrumVv+W6pu+8ieOAglxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuaG90d29yZElkXSBcdOeDreivjWlk44CC55So5LqO6LCD55So5a+55bqU55qE54Ot6K+N6KGo77yM5aaC5p6c5Zyo6LCD55So6K+t6Z+z6K+G5Yir5pyN5Yqh5pe277yM5LiN6L+b6KGM5Y2V54us55qE54Ot6K+NaWTorr7nva7vvIzoh6rliqjnlJ/mlYjpu5jorqTng63or43vvJvlpoLmnpzov5vooYzkuobljZXni6znmoTng63or41pZOiuvue9ru+8jOmCo+S5iOWwhueUn+aViOWNleeLrOiuvue9rueahOeDreivjWlkXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMuZmlsdGVyRGlydHldIFx05piv5ZCm6L+H5ruk6ISP6K+N77yI55uu5YmN5pSv5oyB5Lit5paH5pmu6YCa6K+d5byV5pOO77yJ44CCMO+8muS4jei/h+a7pOiEj+ivje+8mzHvvJrov4fmu6TohI/or43vvJsy77ya5bCG6ISP6K+N5pu/5o2i5Li6ICpcbiAqIEBwYXJhbSB7aW50ZWdlcn0gW3BhcmFtcy5maWx0ZXJNb2RhbF0g5piv5ZCm6L+H6K+t5rCU6K+N77yI55uu5YmN5pSv5oyB5Lit5paH5pmu6YCa6K+d5byV5pOO77yJ44CCMO+8muS4jei/h+a7pOivreawlOivje+8mzHvvJrpg6jliIbov4fmu6TvvJsy77ya5Lil5qC86L+H5rukIOOAglxuICogQHBhcmFtIHtpbnRlZ2VyfSBbcGFyYW1zLmZpbHRlclB1bmNdIOaYr+WQpui/h+a7pOWPpeacq+eahOWPpeWPt++8iOebruWJjeaUr+aMgeS4reaWh+aZrumAmuivneW8leaTju+8ieOAgjDvvJrkuI3ov4fmu6Tlj6XmnKvnmoTlj6Xlj7fvvJsx77ya6L+H5ruk5Y+l5pyr55qE5Y+l5Y+344CCXG4gKiBAcGFyYW0ge2ludGVnZXJ9IFtwYXJhbXMuY29udmVydE51bU1vZGVdIOaYr+WQpui/m+ihjOmYv+aLieS8r+aVsOWtl+aZuuiDvei9rOaNouOAgjDvvJrkuI3ovazmjaLvvIznm7TmjqXovpPlh7rkuK3mlofmlbDlrZfvvIwx77ya5qC55o2u5Zy65pmv5pm66IO96L2s5o2i5Li66Zi/5ouJ5Lyv5pWw5a2X44CC6buY6K6k5YC85Li6MVxuICogQHJldHVybiB7UHJvbWlzZTxvYmplY3Q+fSByZXN1bHQg6Z+z6aKR6K+G5Yir57uT5p6cXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW50ZW5jZVJlY29nbml0aW9uKHBhcmFtcykge1xuICBpZiAoIXBhcmFtcy5lbmdTZXJWaWNlVHlwZSB8fCBwYXJhbXMuc291cmNlVHlwZT09PXVuZGVmaW5lZCB8fCAhcGFyYW1zLnZvaWNlRm9ybWF0IHx8ICFwYXJhbXMudXNyQXVkaW9LZXkgfHwgKCFwYXJhbXMuZGF0YSAmJiAhcGFyYW1zLnVybCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCLnvLrlsJHlv4XopoHlj4LmlbBcIik7XG4gIH1cbiAgcmV0dXJuIGFwaXMuc2VudGVuY2VSZWNvZ25pdGlvbih7XG4gICAgLi4ucGFyYW1zLFxuICAgIFByb2plY3RJZDogMCwgLy8g6buY6K6k5Y+C5pWwXG4gICAgU3ViU2VydmljZVR5cGU6IDIsIC8vIOm7mOiupOWPguaVsFxuICB9KTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**********************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/rand-str.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n\n/**\n               * 生成n位随机码\n               * @param {integer} n\n               * @param {string} type 类型：string、int\n               * @returns {string} sa\n               */Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = randStr;\nfunction randStr(n) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'string';\n  var seed = (type === 'string' ? \"1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\" : '1234567890').split('');\n  var sa = \"\";\n  for (var i = 0; i < n; i++) {\n    var pos = Math.round(Math.random() * (seed.length - 1));\n    sa += seed[pos];\n  }\n  return sa;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3JhbmQtc3RyLmpzIl0sIm5hbWVzIjpbInJhbmRTdHIiLCJuIiwidHlwZSIsInNlZWQiLCJzcGxpdCIsInNhIiwiaSIsInBvcyIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmE7O0FBRWI7Ozs7OztBQU1lLFNBQVNBLE9BQVQsQ0FBaUJDLENBQWpCLEVBQWtDLEtBQWRDLElBQWMsdUVBQVQsUUFBUztBQUMvQyxNQUFJQyxJQUFJLEdBQUcsQ0FBQ0QsSUFBSSxLQUFLLFFBQVQsR0FBb0IsZ0VBQXBCLEdBQXFGLFlBQXRGLEVBQW9HRSxLQUFwRyxDQUEwRyxFQUExRyxDQUFYO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRUwsQ0FBbEIsRUFBcUJLLENBQUMsRUFBdEIsRUFBeUI7QUFDdkIsUUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCUCxJQUFJLENBQUNRLE1BQUwsR0FBWSxDQUE3QixDQUFYLENBQVY7QUFDQU4sTUFBRSxJQUFJRixJQUFJLENBQUNJLEdBQUQsQ0FBVjtBQUNEO0FBQ0QsU0FBT0YsRUFBUDtBQUNEIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAyMCBUZW5jZW50IENsb3VkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICog55Sf5oiQbuS9jemaj+acuueggVxuICogQHBhcmFtIHtpbnRlZ2VyfSBuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSDnsbvlnovvvJpzdHJpbmfjgIFpbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHNhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRTdHIobiwgdHlwZT0nc3RyaW5nJyl7XG4gIGxldCBzZWVkID0gKHR5cGUgPT09ICdzdHJpbmcnID8gXCIxMjM0NTY3ODkwYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiOicxMjM0NTY3ODkwJykuc3BsaXQoJycpO1xuICBsZXQgc2EgPSBcIlwiO1xuICBmb3IobGV0IGkgPSAwOyBpPCBuOyBpKyspe1xuICAgIGxldCBwb3MgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoc2VlZC5sZW5ndGgtMSkpO1xuICAgIHNhICs9IHNlZWRbcG9zXTtcbiAgfVxuICByZXR1cm4gc2Fcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/blob-transfer.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n * Copyright (C) 2020 Tencent Cloud.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\n\n\n\n/**\r\n               * blob文件转换base64格式\r\n               * @param {object} blob 需要转换的文件\r\n               * @returns {Promise<string>} result // base64格式的音频\r\n               */Object.defineProperty(exports, \"__esModule\", { value: true });exports.blob2Base64 = blob2Base64;exports.blob2ArrayBuffer = blob2ArrayBuffer;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function\nblob2Base64(_x) {return _blob2Base.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\r\n                                                             * blob文件转换ArrayBuffer格式\r\n                                                             * @param {object} blob 需要转换的文件\r\n                                                             * @returns {Promise<object>} result // ArrayBuffer格式的音频\r\n                                                             */function _blob2Base() {_blob2Base = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(file) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {try {var fileReader = new FileReader();fileReader.onloadend = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:resolve(fileReader.result);case 1:case \"end\":return _context.stop();}}}, _callee);}));fileReader.readAsDataURL(file);} catch (error) {reject(error);}}));case 1:case \"end\":return _context2.stop();}}}, _callee2);}));return _blob2Base.apply(this, arguments);}function\nblob2ArrayBuffer(_x2) {return _blob2ArrayBuffer.apply(this, arguments);}function _blob2ArrayBuffer() {_blob2ArrayBuffer = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(file) {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt(\"return\",\n            new Promise(function (resolve, reject) {\n              try {\n                var fileReader = new FileReader();\n                fileReader.onloadend = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                          resolve(fileReader.result);case 1:case \"end\":return _context3.stop();}}}, _callee3);}));\n\n                fileReader.readAsArrayBuffer(file);\n              } catch (error) {\n                reject(error);\n              }\n            }));case 1:case \"end\":return _context4.stop();}}}, _callee4);}));return _blob2ArrayBuffer.apply(this, arguments);}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL2Jsb2ItdHJhbnNmZXIuanMiXSwibmFtZXMiOlsiYmxvYjJCYXNlNjQiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJlcnJvciIsImJsb2IyQXJyYXlCdWZmZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmE7O0FBRWI7Ozs7O0FBS3NCQSxXOzs7Ozs7Ozs7Ozs7OztBQWN0Qjs7Ozs2SkFkTyxrQkFBMkJDLElBQTNCLGlLQUNFLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUIsQ0FDdEMsSUFBSSxDQUNGLElBQUlDLFVBQVUsR0FBRyxJQUFJQyxVQUFKLEVBQWpCLENBQ0FELFVBQVUsQ0FBQ0UsU0FBWCwwRUFBdUIsNElBQ3JCSixPQUFPLENBQUNFLFVBQVUsQ0FBQ0csTUFBWixDQUFQLENBRHFCLHdEQUF2QixHQUdBSCxVQUFVLENBQUNJLGFBQVgsQ0FBeUJSLElBQXpCLEVBQ0QsQ0FORCxDQU1FLE9BQU9TLEtBQVAsRUFBYyxDQUNkTixNQUFNLENBQUNNLEtBQUQsQ0FBTixDQUNELENBQ0YsQ0FWTSxDQURGLDREO0FBbUJlQyxnQixvS0FBZixrQkFBZ0NWLElBQWhDO0FBQ0UsZ0JBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsa0JBQUk7QUFDRixvQkFBSUMsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBakI7QUFDQUQsMEJBQVUsQ0FBQ0UsU0FBWCwwRUFBdUI7QUFDckJKLGlDQUFPLENBQUNFLFVBQVUsQ0FBQ0csTUFBWixDQUFQLENBRHFCLDBEQUF2Qjs7QUFHQUgsMEJBQVUsQ0FBQ08saUJBQVgsQ0FBNkJYLElBQTdCO0FBQ0QsZUFORCxDQU1FLE9BQU9TLEtBQVAsRUFBYztBQUNkTixzQkFBTSxDQUFDTSxLQUFELENBQU47QUFDRDtBQUNGLGFBVk0sQ0FERiw0RCIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAoQykgMjAyMCBUZW5jZW50IENsb3VkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKipcclxuICogYmxvYuaWh+S7tui9rOaNomJhc2U2NOagvOW8j1xyXG4gKiBAcGFyYW0ge29iamVjdH0gYmxvYiDpnIDopoHovazmjaLnmoTmlofku7ZcclxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gcmVzdWx0IC8vIGJhc2U2NOagvOW8j+eahOmfs+mikVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJsb2IyQmFzZTY0KGZpbGUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKGZpbGVSZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGJsb2Lmlofku7bovazmjaJBcnJheUJ1ZmZlcuagvOW8j1xyXG4gKiBAcGFyYW0ge29iamVjdH0gYmxvYiDpnIDopoHovazmjaLnmoTmlofku7ZcclxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gcmVzdWx0IC8vIEFycmF5QnVmZmVy5qC85byP55qE6Z+z6aKRXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmxvYjJBcnJheUJ1ZmZlcihmaWxlKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgZmlsZVJlYWRlci5vbmxvYWRlbmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShmaWxlUmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**********************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/recorder.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n * Copyright (C) 2020 Tencent Cloud.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\n\n\nvar _blobTransfer = __webpack_require__(/*! ./blob-transfer */ 24);\n\nvar _permission = _interopRequireDefault(__webpack_require__(/*! ./permission.js */ 26));\nvar _util = __webpack_require__(/*! ./util.js */ 27);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 录音类\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */var\nRecorder = /*#__PURE__*/function () {\n\n  /**\r\n                                      *\r\n                                      * @param {fn} [callback] // 实时录音实时回调\r\n                                      * @param {integer} [frameSize] // 小程序实时语音专用：语音分片大小\r\n                                      */\n  function Recorder(callback) {var _this = this;var frameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;_classCallCheck(this, Recorder);_defineProperty(this, \"init\",\n\n\n\n\n\n\n\n\n\n    function () {\n      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {var status;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                  _this.callback) {_context.next = 3;break;}\n                  reject(new Error('App暂不支持流式上传录音'));return _context.abrupt(\"return\");case 3:_context.next = 5;return (\n\n\n                    _this.checkPermission());case 5:status = _context.sent;\n                  if (status !== 1) {\n                    reject(new Error(\"无法录音:没有录音权限\"));\n                  } else {\n                    _this.rec = uni.getRecorderManager();\n                    resolve(\"获取录音权限成功\");\n                  }case 7:case \"end\":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());\n\n\n    });_defineProperty(this, \"start\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n\n\n\n    function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                _this.init());case 2:\n              _this.onStop = null;\n              _this.rec.start({ sampleRate: 16000, format: \"mp3\" });case 4:case \"end\":return _context2.stop();}}}, _callee2);})));_defineProperty(this, \"stop\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n\n\n\n\n    function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt(\"return\",\n              new Promise(function (resolve, reject) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                _this.rec.onStop( /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref4) {var tempFilePath, fileSize, duration, _yield$filePath2Base, voiceBase64, size;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:tempFilePath = _ref4.tempFilePath, fileSize = _ref4.fileSize, duration = _ref4.duration;_context3.next = 3;return (\n\n\n\n\n\n\n\n\n\n\n                              (0, _util.filePath2Base64)(tempFilePath));case 3:_yield$filePath2Base = _context3.sent;voiceBase64 = _yield$filePath2Base.voiceBase64;size = _yield$filePath2Base.size;\n                            voiceBase64 = (/.+;\\s*base64\\s*,\\s*(.+)$/i.exec(voiceBase64) ||\n                            [])[1];\n                            resolve({ voiceBase64: voiceBase64, size: size });case 8:case \"end\":return _context3.stop();}}}, _callee3);}));return function (_x3) {return _ref5.apply(this, arguments);};}());\n\n\n                _this.rec.stop();\n\n              }));case 1:case \"end\":return _context4.stop();}}}, _callee4);})));_defineProperty(this, \"startRealTime\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n\n\n\n\n    function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (\n                _this.init());case 2:\n              _this.rec.start({ sampleRate: 16000, format: \"mp3\", frameSize: 2 });case 3:case \"end\":return _context5.stop();}}}, _callee5);})));_defineProperty(this, \"stopRealTime\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n\n\n\n\n    function _callee6() {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n\n\n\n\n\n              _this.rec.onStop(function () {});\n              _this.rec.stop();case 2:case \"end\":return _context6.stop();}}}, _callee6);})));this.rec = null;this.instance = null;this.callback = callback;this.frameSize = frameSize; // 小程序实时语音专用：语音分片大小\n  } /**\r\n     * 开启初始化record实例，录音授权\r\n     */_createClass(Recorder, [{ key: \"checkPermission\",\n    /**\r\n                                                          * 判断APP端录音权限\r\n                                                          */value: function () {var _checkPermission = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var status;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:if (!\n\n                _permission.default.isIOS) {_context7.next = 6;break;}_context7.next = 3;return _permission.default.requestIOS('record');case 3:_context7.t0 = _context7.sent;_context7.next = 9;break;case 6:_context7.next = 8;return (\n                  _permission.default.requestAndroid('android.permission.RECORD_AUDIO'));case 8:_context7.t0 = _context7.sent;case 9:status = _context7.t0;\n\n                if (status === null || status === 1) {\n                  status = 1;\n                }return _context7.abrupt(\"return\",\n                status);case 12:case \"end\":return _context7.stop();}}}, _callee7);}));function checkPermission() {return _checkPermission.apply(this, arguments);}return checkPermission;}() }]);return Recorder;}();exports.default = Recorder;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3JlY29yZGVyLmpzIl0sIm5hbWVzIjpbIlJlY29yZGVyIiwiY2FsbGJhY2siLCJmcmFtZVNpemUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwiY2hlY2tQZXJtaXNzaW9uIiwic3RhdHVzIiwicmVjIiwidW5pIiwiZ2V0UmVjb3JkZXJNYW5hZ2VyIiwiaW5pdCIsIm9uU3RvcCIsInN0YXJ0Iiwic2FtcGxlUmF0ZSIsImZvcm1hdCIsInRlbXBGaWxlUGF0aCIsImZpbGVTaXplIiwiZHVyYXRpb24iLCJ2b2ljZUJhc2U2NCIsInNpemUiLCJleGVjIiwic3RvcCIsImluc3RhbmNlIiwicGVybWlzaW9uIiwiaXNJT1MiLCJyZXF1ZXN0SU9TIiwicmVxdWVzdEFuZHJvaWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTtBQUNBLHFEOzs7QUFHQTs7O0FBR3FCQSxROztBQUVuQjs7Ozs7QUFLQSxvQkFBWUMsUUFBWixFQUFtQyxzQkFBYkMsU0FBYSx1RUFBSCxDQUFHOzs7Ozs7Ozs7O0FBVTVCLGdCQUFNO0FBQ1gsYUFBTyxJQUFJQyxPQUFKLGlHQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDZCx1QkFBSSxDQUFDSixRQXhDUztBQXlDZkksd0JBQU0sQ0FBQyxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFELENBQU4sQ0F6Q2U7OztBQTRDSSx5QkFBSSxDQUFDQyxlQUFMLEVBNUNKLFNBNENYQyxNQTVDVztBQTZDakIsc0JBQUlBLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCSCwwQkFBTSxDQUFDLElBQUlDLEtBQUosQ0FBVSxhQUFWLENBQUQsQ0FBTjtBQUNELG1CQUZELE1BRU87QUFDTCx5QkFBSSxDQUFDRyxHQUFMLEdBQVdDLEdBQUcsQ0FBQ0Msa0JBQUosRUFBWDtBQUNBUCwyQkFBTyxDQUFDLFVBQUQsQ0FBUDtBQUNELG1CQWxEZ0Isd0RBQVosdUVBQVA7OztBQXFERCxLQWhFa0M7Ozs7O0FBcUUzQjtBQUNBLHFCQUFJLENBQUNRLElBQUwsRUFEQTtBQUVOLG1CQUFJLENBQUNDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsbUJBQUksQ0FBQ0osR0FBTCxDQUFTSyxLQUFULENBQWUsRUFBRUMsVUFBVSxFQUFFLEtBQWQsRUFBcUJDLE1BQU0sRUFBRSxLQUE3QixFQUFmLEVBSE0sMERBckUyQjs7Ozs7O0FBOEU1QjtBQUNFLGtCQUFJYixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0QyxxQkFBSSxDQUFDSSxHQUFMLENBQVNJLE1BQVQsa0dBQWdCLG9PQUFRSSxZQUFSLFNBQVFBLFlBQVIsRUFBc0JDLFFBQXRCLFNBQXNCQSxRQUF0QixFQUFnQ0MsUUFBaEMsU0FBZ0NBLFFBQWhDOzs7Ozs7Ozs7OztBQVdrQix5REFBZ0JGLFlBQWhCLENBWGxCLCtDQVdURyxXQVhTLHdCQVdUQSxXQVhTLENBV0lDLElBWEosd0JBV0lBLElBWEo7QUFZZEQsdUNBQVcsR0FBRyxDQUFDLDRCQUE0QkUsSUFBNUIsQ0FBaUNGLFdBQWpDO0FBQ2IsOEJBRFksRUFDUixDQURRLENBQWQ7QUFFQWhCLG1DQUFPLENBQUMsRUFBRWdCLFdBQVcsRUFBWEEsV0FBRixFQUFlQyxJQUFJLEVBQUVBLElBQXJCLEVBQUQsQ0FBUCxDQWRjLDBEQUFoQjs7O0FBaUJBLHFCQUFJLENBQUNaLEdBQUwsQ0FBU2MsSUFBVDs7QUFFRCxlQXRDTSxDQURGLDREQTlFNEI7Ozs7OztBQTJIbkI7QUFDUixxQkFBSSxDQUFDWCxJQUFMLEVBRFE7QUFFZCxtQkFBSSxDQUFDSCxHQUFMLENBQVNLLEtBQVQsQ0FBZSxFQUFFQyxVQUFVLEVBQUUsS0FBZCxFQUFxQkMsTUFBTSxFQUFFLEtBQTdCLEVBQW9DZCxTQUFTLEVBQUUsQ0FBL0MsRUFBZixFQUZjLDBEQTNIbUI7Ozs7OztBQW1JcEI7Ozs7OztBQU1iLG1CQUFJLENBQUNPLEdBQUwsQ0FBU0ksTUFBVCxDQUFnQixZQUFNLENBQUUsQ0FBeEI7QUFDQSxtQkFBSSxDQUFDSixHQUFMLENBQVNjLElBQVQsR0FQYSwwREFuSW9CLElBQ2pDLEtBQUtkLEdBQUwsR0FBVyxJQUFYLENBQ0EsS0FBS2UsUUFBTCxHQUFnQixJQUFoQixDQUNBLEtBQUt2QixRQUFMLEdBQWdCQSxRQUFoQixDQUNBLEtBQUtDLFNBQUwsR0FBaUJBLFNBQWpCLENBSmlDLENBSUw7QUFDN0IsRyxDQUVEOzs7QUF1SUE7Ozs7QUFJZXVCLG9DQUFVQyxLLHVEQUFjRCxvQkFBVUUsVUFBVixDQUFxQixRQUFyQixDO0FBQzdCRixzQ0FBVUcsY0FBVixDQUF5QixpQ0FBekIsQyw4Q0FESnBCLE07O0FBR0osb0JBQUlBLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkNBLHdCQUFNLEdBQUcsQ0FBVDtBQUNELGlCO0FBQ01BLHNCIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IChDKSAyMDIwIFRlbmNlbnQgQ2xvdWQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgYmxvYjJCYXNlNjQgfSBmcm9tIFwiLi9ibG9iLXRyYW5zZmVyXCI7XHJcblxyXG5pbXBvcnQgcGVybWlzaW9uIGZyb20gXCIuL3Blcm1pc3Npb24uanNcIlxyXG5pbXBvcnQgeyBmaWxlUGF0aDJCYXNlNjQgfSBmcm9tIFwiLi91dGlsLmpzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIOW9lemfs+exu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkZXIge1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Zm59IFtjYWxsYmFja10gLy8g5a6e5pe25b2V6Z+z5a6e5pe25Zue6LCDXHJcbiAgICogQHBhcmFtIHtpbnRlZ2VyfSBbZnJhbWVTaXplXSAvLyDlsI/nqIvluo/lrp7ml7bor63pn7PkuJPnlKjvvJror63pn7PliIbniYflpKflsI9cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgZnJhbWVTaXplPTIpIHtcclxuICAgIHRoaXMucmVjID0gbnVsbDtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5mcmFtZVNpemUgPSBmcmFtZVNpemUgIC8vIOWwj+eoi+W6j+WunuaXtuivremfs+S4k+eUqO+8muivremfs+WIhueJh+Wkp+Wwj1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5byA5ZCv5Yid5aeL5YyWcmVjb3Jk5a6e5L6L77yM5b2V6Z+z5o6I5p2DXHJcbiAgICovXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIGlmKHRoaXMuY2FsbGJhY2spe1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0FwcOaaguS4jeaUr+aMgea1geW8j+S4iuS8oOW9lemfsycpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5jaGVja1Blcm1pc3Npb24oKTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gMSkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCLml6Dms5XlvZXpn7M65rKh5pyJ5b2V6Z+z5p2D6ZmQXCIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlYyA9IHVuaS5nZXRSZWNvcmRlck1hbmFnZXIoKTtcclxuICAgICAgICByZXNvbHZlKFwi6I635Y+W5b2V6Z+z5p2D6ZmQ5oiQ5YqfXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICog5byA5aeL5b2V6Z+zXHJcbiAgICovXHJcbiAgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMub25TdG9wID0gbnVsbDtcclxuICAgIHRoaXMucmVjLnN0YXJ0KHsgc2FtcGxlUmF0ZTogMTYwMDAsIGZvcm1hdDogXCJtcDNcIiB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiDlvILmraXovazmjaLnu5PmnZ/lvZXpn7NcclxuICAgKi9cclxuICBzdG9wID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgdGhpcy5yZWMub25TdG9wKGFzeW5jICh7dGVtcEZpbGVQYXRoLCBmaWxlU2l6ZSwgZHVyYXRpb259KSA9PiB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCB7dm9pY2VCYXNlNjQsIHNpemV9ID0gYXdhaXQgZmlsZVBhdGgyQmFzZTY0KHRlbXBGaWxlUGF0aCk7XHJcbiAgICAgICAgdm9pY2VCYXNlNjQgPSAoLy4rO1xccypiYXNlNjRcXHMqLFxccyooLispJC9pLmV4ZWModm9pY2VCYXNlNjQpIHx8XHJcbiAgICAgICAgICBbXSlbMV07XHJcbiAgICAgICAgcmVzb2x2ZSh7IHZvaWNlQmFzZTY0LCBzaXplOiBzaXplfSk7XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yZWMuc3RvcCgpO1xyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIOWunuaXtuivremfs+a1geW8gOWni1xyXG4gICAqL1xyXG4gIHN0YXJ0UmVhbFRpbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMucmVjLnN0YXJ0KHsgc2FtcGxlUmF0ZTogMTYwMDAsIGZvcm1hdDogXCJtcDNcIiwgZnJhbWVTaXplOiAyIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIOWunuaXtuivremfs+a1gee7k+adn1xyXG4gICAqL1xyXG4gIHN0b3BSZWFsVGltZSA9IGFzeW5jICgpID0+IHtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdGhpcy5yZWMub25TdG9wKCgpID0+IHt9KTtcclxuICAgIHRoaXMucmVjLnN0b3AoKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5patQVBQ56uv5b2V6Z+z5p2D6ZmQXHJcbiAgICovXHJcbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9uKCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IHBlcm1pc2lvbi5pc0lPUyA/IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0SU9TKCdyZWNvcmQnKSA6XHJcbiAgICAgIGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCgnYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJTycpO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09IG51bGwgfHwgc3RhdHVzID09PSAxKSB7XHJcbiAgICAgIHN0YXR1cyA9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/permission.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n// null = 未请求(ios)，1 = 已允许，0 = 拒绝|受限, 2 = 系统未开启 -1 永久拒绝的权限(android)\n\nvar isIOS;\n\nfunction album() {\n  var result = 0;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus === 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\nfunction camera() {\n  var result = 0;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus === 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\nfunction location() {\n  var result = 0;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var enable = cllocationManger.locationServicesEnabled();\n  var status = cllocationManger.authorizationStatus();\n  if (!enable) {\n    result = 2;\n  } else if (status === 0) {\n    result = null;\n  } else if (status === 3 || status === 4) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\nfunction push() {\n  var result = 0;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    if (enabledTypes === 0) {\n      result = 0; // \"推送权限没有开启\";\n    } else {\n      result = 1; // \"已经开启推送功能!\"\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes === 0) {\n      result = 3; // 推送权限没有开启!\"\n    } else {\n      result = 4; // \"已经开启推送功能!\"\n    }\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\nfunction contact() {\n  var result = 0;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus === 0) {\n    result = null;\n  } else if (cnAuthStatus === 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\nfunction record() {\n  var result = null;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var status = avaudio.recordPermission();\n  if (status === 1970168948) {\n    result = null;\n  } else if (status === 1735552628) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\nfunction calendar() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus === 3) {\n    result = 1; // \"日历权限已经开启\"\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\nfunction memo() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus === 3) {\n    result = 1; // \"备忘录权限已经开启\"\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n\nfunction requestIOS(permissionID) {\n  return new Promise(function (resolve, reject) {\n    switch (permissionID) {\n      case \"push\":\n        resolve(push());\n        break;\n      case \"location\":\n        resolve(location());\n        break;\n      case \"record\":\n        resolve(record());\n        break;\n      case \"camera\":\n        resolve(camera());\n        break;\n      case \"album\":\n        resolve(album());\n        break;\n      case \"contact\":\n        resolve(contact());\n        break;\n      case \"calendar\":\n        resolve(calendar());\n        break;\n      case \"memo\":\n        resolve(memo());\n        break;\n      default:\n        resolve(0);\n        break;}\n\n  });\n}\n\nfunction requestAndroid(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID],\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        // console.log('已获取的权限：' + grantedPermission);\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        // console.log('拒绝本次申请的权限：' + deniedPresentPermission);\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        // console.log('永久拒绝申请的权限：' + deniedAlwaysPermission);\n        result = -1;\n      }\n      resolve(result);\n    },\n    function (error) {\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\nfunction gotoAppPermissionSetting() {\n  if (permission.isIOS) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\nvar permission = {\n  get isIOS() {\n    return typeof isIOS === 'boolean' ? isIOS : isIOS = uni.getSystemInfoSync().platform === 'ios';\n  },\n  requestIOS: requestIOS,\n  requestAndroid: requestAndroid,\n  gotoAppSetting: gotoAppPermissionSetting };\n\n\nmodule.exports = permission;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3Blcm1pc3Npb24uanMiXSwibmFtZXMiOlsiaXNJT1MiLCJhbGJ1bSIsInJlc3VsdCIsIlBIUGhvdG9MaWJyYXJ5IiwicGx1cyIsImlvcyIsImltcG9ydCIsImF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzIiwiZGVsZXRlT2JqZWN0IiwiY2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSIsImxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsImVuYWJsZSIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwic3RhdHVzIiwicHVzaCIsIlVJQXBwbGljYXRpb24iLCJhcHAiLCJzaGFyZWRBcHBsaWNhdGlvbiIsImVuYWJsZWRUeXBlcyIsImN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJzZXR0aW5ncyIsInBsdXNHZXRBdHRyaWJ1dGUiLCJlbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMiLCJjb250YWN0IiwiQ05Db250YWN0U3RvcmUiLCJjbkF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSIsInJlY29yZCIsImF2YXVkaW9zZXNzaW9uIiwiYXZhdWRpbyIsInNoYXJlZEluc3RhbmNlIiwicmVjb3JkUGVybWlzc2lvbiIsImNhbGVuZGFyIiwiRUtFdmVudFN0b3JlIiwiZWtBdXRoU3RhdHVzIiwibWVtbyIsInJlcXVlc3RJT1MiLCJwZXJtaXNzaW9uSUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RBbmRyb2lkIiwiYW5kcm9pZCIsInJlcXVlc3RQZXJtaXNzaW9ucyIsInJlc3VsdE9iaiIsImkiLCJncmFudGVkIiwibGVuZ3RoIiwiZ3JhbnRlZFBlcm1pc3Npb24iLCJkZW5pZWRQcmVzZW50IiwiZGVuaWVkUHJlc2VudFBlcm1pc3Npb24iLCJkZW5pZWRBbHdheXMiLCJkZW5pZWRBbHdheXNQZXJtaXNzaW9uIiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsImdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZyIsInBlcm1pc3Npb24iLCJhcHBsaWNhdGlvbjIiLCJOU1VSTDIiLCJzZXR0aW5nMiIsIlVSTFdpdGhTdHJpbmciLCJvcGVuVVJMIiwiSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJTZXR0aW5ncyIsIlVyaSIsIm1haW5BY3Rpdml0eSIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJpbnRlbnQiLCJzZXRBY3Rpb24iLCJBQ1RJT05fQVBQTElDQVRJT05fREVUQUlMU19TRVRUSU5HUyIsInVyaSIsImZyb21QYXJ0cyIsImdldFBhY2thZ2VOYW1lIiwic2V0RGF0YSIsInN0YXJ0QWN0aXZpdHkiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwiZ290b0FwcFNldHRpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFDYixNQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlDLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixjQUFjLENBQUNLLG1CQUFmLEVBQWpCO0FBQ0EsTUFBSUQsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ2xCTCxVQUFNLEdBQUcsSUFBVDtBQUNILEdBRkQsTUFFTyxJQUFJSyxVQUFVLEtBQUssQ0FBbkIsRUFBc0I7QUFDekJMLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JOLGNBQXRCO0FBQ0EsU0FBT0QsTUFBUDtBQUNIOztBQUVELFNBQVNRLE1BQVQsR0FBa0I7QUFDZCxNQUFJUixNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlTLGVBQWUsR0FBR1AsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsaUJBQWhCLENBQXRCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSSxlQUFlLENBQUNDLCtCQUFoQixDQUFnRCxNQUFoRCxDQUFqQjtBQUNBLE1BQUlMLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtBQUNsQkwsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSUssVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ3pCTCxVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRk0sTUFFQTtBQUNIQSxVQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCRSxlQUF0QjtBQUNBLFNBQU9ULE1BQVA7QUFDSDs7QUFFRCxTQUFTVyxRQUFULEdBQW9CO0FBQ2hCLE1BQUlYLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSVksZ0JBQWdCLEdBQUdWLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLG1CQUFoQixDQUF2QjtBQUNBLE1BQUlTLE1BQU0sR0FBR0QsZ0JBQWdCLENBQUNFLHVCQUFqQixFQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxnQkFBZ0IsQ0FBQ04sbUJBQWpCLEVBQWI7QUFDQSxNQUFJLENBQUNPLE1BQUwsRUFBYTtBQUNUYixVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRkQsTUFFTyxJQUFJZSxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNyQmYsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZNLE1BRUEsSUFBSWUsTUFBTSxLQUFLLENBQVgsSUFBZ0JBLE1BQU0sS0FBSyxDQUEvQixFQUFrQztBQUNyQ2YsVUFBTSxHQUFHLENBQVQ7QUFDSCxHQUZNLE1BRUE7QUFDSEEsVUFBTSxHQUFHLENBQVQ7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQkssZ0JBQXRCO0FBQ0EsU0FBT1osTUFBUDtBQUNIOztBQUVELFNBQVNnQixJQUFULEdBQWdCO0FBQ1osTUFBSWhCLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSWlCLGFBQWEsR0FBR2YsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxNQUFJYyxHQUFHLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsRUFBVjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csK0JBQVIsRUFBeUM7QUFDckMsUUFBSUMsUUFBUSxHQUFHSixHQUFHLENBQUNHLCtCQUFKLEVBQWY7QUFDQUQsZ0JBQVksR0FBR0UsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFmO0FBQ0EsUUFBSUgsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3BCcEIsWUFBTSxHQUFHLENBQVQsQ0FEb0IsQ0FDUjtBQUNmLEtBRkQsTUFFTztBQUNIQSxZQUFNLEdBQUcsQ0FBVCxDQURHLENBQ1M7QUFDZjtBQUNERSxRQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQmUsUUFBdEI7QUFDSCxHQVRELE1BU087QUFDSEYsZ0JBQVksR0FBR0YsR0FBRyxDQUFDTSw4QkFBSixFQUFmO0FBQ0EsUUFBSUosWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3BCcEIsWUFBTSxHQUFHLENBQVQsQ0FEb0IsQ0FDUjtBQUNmLEtBRkQsTUFFTztBQUNIQSxZQUFNLEdBQUcsQ0FBVCxDQURHLENBQ1M7QUFDZjtBQUNKO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCVyxHQUF0QjtBQUNBaEIsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JVLGFBQXRCO0FBQ0EsU0FBT2pCLE1BQVA7QUFDSDs7QUFFRCxTQUFTeUIsT0FBVCxHQUFtQjtBQUNmLE1BQUl6QixNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUkwQixjQUFjLEdBQUd4QixJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixnQkFBaEIsQ0FBckI7QUFDQSxNQUFJdUIsWUFBWSxHQUFHRCxjQUFjLENBQUNFLGdDQUFmLENBQWdELENBQWhELENBQW5CO0FBQ0EsTUFBSUQsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3BCM0IsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSTJCLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUMzQjNCLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JtQixjQUF0QjtBQUNBLFNBQU8xQixNQUFQO0FBQ0g7O0FBRUQsU0FBUzZCLE1BQVQsR0FBa0I7QUFDZCxNQUFJN0IsTUFBTSxHQUFHLElBQWI7QUFDQSxNQUFJOEIsY0FBYyxHQUFHNUIsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSTJCLE9BQU8sR0FBR0QsY0FBYyxDQUFDRSxjQUFmLEVBQWQ7QUFDQSxNQUFJakIsTUFBTSxHQUFHZ0IsT0FBTyxDQUFDRSxnQkFBUixFQUFiO0FBQ0EsTUFBSWxCLE1BQU0sS0FBSyxVQUFmLEVBQTJCO0FBQ3ZCZixVQUFNLEdBQUcsSUFBVDtBQUNILEdBRkQsTUFFTyxJQUFJZSxNQUFNLEtBQUssVUFBZixFQUEyQjtBQUM5QmYsVUFBTSxHQUFHLENBQVQ7QUFDSCxHQUZNLE1BRUE7QUFDSEEsVUFBTSxHQUFHLENBQVQ7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQnVCLGNBQXRCO0FBQ0EsU0FBTzlCLE1BQVA7QUFDSDs7QUFFRCxTQUFTa0MsUUFBVCxHQUFvQjtBQUNoQixNQUFJbEMsTUFBTSxHQUFHLElBQWI7QUFDQSxNQUFJbUMsWUFBWSxHQUFHakMsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsY0FBaEIsQ0FBbkI7QUFDQSxNQUFJZ0MsWUFBWSxHQUFHRCxZQUFZLENBQUNQLGdDQUFiLENBQThDLENBQTlDLENBQW5CO0FBQ0EsTUFBSVEsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3BCcEMsVUFBTSxHQUFHLENBQVQsQ0FEb0IsQ0FDUjtBQUNmO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCNEIsWUFBdEI7QUFDQSxTQUFPbkMsTUFBUDtBQUNIOztBQUVELFNBQVNxQyxJQUFULEdBQWdCO0FBQ1osTUFBSXJDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSW1DLFlBQVksR0FBR2pDLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLGNBQWhCLENBQW5CO0FBQ0EsTUFBSWdDLFlBQVksR0FBR0QsWUFBWSxDQUFDUCxnQ0FBYixDQUE4QyxDQUE5QyxDQUFuQjtBQUNBLE1BQUlRLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUNwQnBDLFVBQU0sR0FBRyxDQUFULENBRG9CLENBQ1I7QUFDZjtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQjRCLFlBQXRCO0FBQ0EsU0FBT25DLE1BQVA7QUFDSDs7O0FBR0QsU0FBU3NDLFVBQVQsQ0FBb0JDLFlBQXBCLEVBQWtDO0FBQzlCLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxZQUFRSCxZQUFSO0FBQ0ksV0FBSyxNQUFMO0FBQ0lFLGVBQU8sQ0FBQ3pCLElBQUksRUFBTCxDQUFQO0FBQ0E7QUFDSixXQUFLLFVBQUw7QUFDSXlCLGVBQU8sQ0FBQzlCLFFBQVEsRUFBVCxDQUFQO0FBQ0E7QUFDSixXQUFLLFFBQUw7QUFDSThCLGVBQU8sQ0FBQ1osTUFBTSxFQUFQLENBQVA7QUFDQTtBQUNKLFdBQUssUUFBTDtBQUNJWSxlQUFPLENBQUNqQyxNQUFNLEVBQVAsQ0FBUDtBQUNBO0FBQ0osV0FBSyxPQUFMO0FBQ0lpQyxlQUFPLENBQUMxQyxLQUFLLEVBQU4sQ0FBUDtBQUNBO0FBQ0osV0FBSyxTQUFMO0FBQ0kwQyxlQUFPLENBQUNoQixPQUFPLEVBQVIsQ0FBUDtBQUNBO0FBQ0osV0FBSyxVQUFMO0FBQ0lnQixlQUFPLENBQUNQLFFBQVEsRUFBVCxDQUFQO0FBQ0E7QUFDSixXQUFLLE1BQUw7QUFDSU8sZUFBTyxDQUFDSixJQUFJLEVBQUwsQ0FBUDtBQUNBO0FBQ0o7QUFDSUksZUFBTyxDQUFDLENBQUQsQ0FBUDtBQUNBLGNBM0JSOztBQTZCSCxHQTlCTSxDQUFQO0FBK0JIOztBQUVELFNBQVNFLGNBQVQsQ0FBd0JKLFlBQXhCLEVBQXNDO0FBQ2xDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ3hDLFFBQUksQ0FBQzBDLE9BQUwsQ0FBYUMsa0JBQWI7QUFDSSxLQUFDTixZQUFELENBREo7QUFFSSxjQUFTTyxTQUFULEVBQW9CO0FBQ2hCLFVBQUk5QyxNQUFNLEdBQUcsQ0FBYjtBQUNBLFdBQUssSUFBSStDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkMsTUFBdEMsRUFBOENGLENBQUMsRUFBL0MsRUFBbUQ7QUFDL0MsWUFBSUcsaUJBQWlCLEdBQUdKLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkQsQ0FBbEIsQ0FBeEI7QUFDQTtBQUNBL0MsY0FBTSxHQUFHLENBQVQ7QUFDSDtBQUNELFdBQUssSUFBSStDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ0ssYUFBVixDQUF3QkYsTUFBNUMsRUFBb0RGLENBQUMsRUFBckQsRUFBeUQ7QUFDckQsWUFBSUssdUJBQXVCLEdBQUdOLFNBQVMsQ0FBQ0ssYUFBVixDQUF3QkosQ0FBeEIsQ0FBOUI7QUFDQTtBQUNBL0MsY0FBTSxHQUFHLENBQVQ7QUFDSDtBQUNELFdBQUssSUFBSStDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ08sWUFBVixDQUF1QkosTUFBM0MsRUFBbURGLENBQUMsRUFBcEQsRUFBd0Q7QUFDcEQsWUFBSU8sc0JBQXNCLEdBQUdSLFNBQVMsQ0FBQ08sWUFBVixDQUF1Qk4sQ0FBdkIsQ0FBN0I7QUFDQTtBQUNBL0MsY0FBTSxHQUFHLENBQUMsQ0FBVjtBQUNIO0FBQ0R5QyxhQUFPLENBQUN6QyxNQUFELENBQVA7QUFDSCxLQXBCTDtBQXFCSSxjQUFTdUQsS0FBVCxFQUFnQjtBQUNaZCxhQUFPLENBQUM7QUFDSmUsWUFBSSxFQUFFRCxLQUFLLENBQUNDLElBRFI7QUFFSkMsZUFBTyxFQUFFRixLQUFLLENBQUNFLE9BRlgsRUFBRCxDQUFQOztBQUlILEtBMUJMOztBQTRCSCxHQTdCTSxDQUFQO0FBOEJIOztBQUVELFNBQVNDLHdCQUFULEdBQW9DO0FBQ2hDLE1BQUlDLFVBQVUsQ0FBQzdELEtBQWYsRUFBc0I7QUFDbEIsUUFBSW1CLGFBQWEsR0FBR2YsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxRQUFJd0QsWUFBWSxHQUFHM0MsYUFBYSxDQUFDRSxpQkFBZCxFQUFuQjtBQUNBLFFBQUkwQyxNQUFNLEdBQUczRCxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixPQUFoQixDQUFiO0FBQ0EsUUFBSTBELFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxhQUFQLENBQXFCLGVBQXJCLENBQWY7QUFDQUgsZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQkYsUUFBckI7QUFDQTVELFFBQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCdUQsUUFBdEI7QUFDQTVELFFBQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCc0QsTUFBdEI7QUFDQTNELFFBQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCcUQsWUFBdEI7QUFDSCxHQVRELE1BU087QUFDSCxRQUFJSyxNQUFNLEdBQUcvRCxJQUFJLENBQUMwQyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHdCQUF6QixDQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHakUsSUFBSSxDQUFDMEMsT0FBTCxDQUFhc0IsV0FBYixDQUF5QiwyQkFBekIsQ0FBZjtBQUNBLFFBQUlFLEdBQUcsR0FBR2xFLElBQUksQ0FBQzBDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsaUJBQXpCLENBQVY7QUFDQSxRQUFJRyxZQUFZLEdBQUduRSxJQUFJLENBQUMwQyxPQUFMLENBQWEwQixtQkFBYixFQUFuQjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxJQUFJTixNQUFKLEVBQWI7QUFDQU0sVUFBTSxDQUFDQyxTQUFQLENBQWlCTCxRQUFRLENBQUNNLG1DQUExQjtBQUNBLFFBQUlDLEdBQUcsR0FBR04sR0FBRyxDQUFDTyxTQUFKLENBQWMsU0FBZCxFQUF5Qk4sWUFBWSxDQUFDTyxjQUFiLEVBQXpCLEVBQXdELElBQXhELENBQVY7QUFDQUwsVUFBTSxDQUFDTSxPQUFQLENBQWVILEdBQWY7QUFDQUwsZ0JBQVksQ0FBQ1MsYUFBYixDQUEyQlAsTUFBM0I7QUFDSDtBQUNKOztBQUVELElBQU1aLFVBQVUsR0FBRztBQUNmLE1BQUk3RCxLQUFKLEdBQVc7QUFDUCxXQUFPLE9BQU9BLEtBQVAsS0FBaUIsU0FBakIsR0FBNkJBLEtBQTdCLEdBQXNDQSxLQUFLLEdBQUdpRixHQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixLQUFxQyxLQUExRjtBQUNILEdBSGM7QUFJZjNDLFlBQVUsRUFBRUEsVUFKRztBQUtmSyxnQkFBYyxFQUFFQSxjQUxEO0FBTWZ1QyxnQkFBYyxFQUFFeEIsd0JBTkQsRUFBbkI7OztBQVNBeUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekIsVUFBakIiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIFRlbmNlbnQgQ2xvdWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBudWxsID0g5pyq6K+35rGCKGlvcynvvIwxID0g5bey5YWB6K6477yMMCA9IOaLkue7nXzlj5fpmZAsIDIgPSDns7vnu5/mnKrlvIDlkK8gLTEg5rC45LmF5ouS57ud55qE5p2D6ZmQKGFuZHJvaWQpXG5cbnZhciBpc0lPU1xuXG5mdW5jdGlvbiBhbGJ1bSgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgUEhQaG90b0xpYnJhcnkgPSBwbHVzLmlvcy5pbXBvcnQoXCJQSFBob3RvTGlicmFyeVwiKTtcbiAgICB2YXIgYXV0aFN0YXR1cyA9IFBIUGhvdG9MaWJyYXJ5LmF1dGhvcml6YXRpb25TdGF0dXMoKTtcbiAgICBpZiAoYXV0aFN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoYXV0aFN0YXR1cyA9PT0gMykge1xuICAgICAgICByZXN1bHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChQSFBob3RvTGlicmFyeSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FtZXJhKCkge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIHZhciBBVkNhcHR1cmVEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnQoXCJBVkNhcHR1cmVEZXZpY2VcIik7XG4gICAgdmFyIGF1dGhTdGF0dXMgPSBBVkNhcHR1cmVEZXZpY2UuYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSgndmlkZScpO1xuICAgIGlmIChhdXRoU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChhdXRoU3RhdHVzID09PSAzKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcbiAgICB2YXIgZW5hYmxlID0gY2xsb2NhdGlvbk1hbmdlci5sb2NhdGlvblNlcnZpY2VzRW5hYmxlZCgpO1xuICAgIHZhciBzdGF0dXMgPSBjbGxvY2F0aW9uTWFuZ2VyLmF1dGhvcml6YXRpb25TdGF0dXMoKTtcbiAgICBpZiAoIWVuYWJsZSkge1xuICAgICAgICByZXN1bHQgPSAyO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDMgfHwgc3RhdHVzID09PSA0KSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGNsbG9jYXRpb25NYW5nZXIpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xuICAgIHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XG4gICAgdmFyIGVuYWJsZWRUeXBlcyA9IDA7XG4gICAgaWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCk7XG4gICAgICAgIGVuYWJsZWRUeXBlcyA9IHNldHRpbmdzLnBsdXNHZXRBdHRyaWJ1dGUoXCJ0eXBlc1wiKTtcbiAgICAgICAgaWYgKGVuYWJsZWRUeXBlcyA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gMDsgLy8gXCLmjqjpgIHmnYPpmZDmsqHmnInlvIDlkK9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDE7IC8vIFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiXG4gICAgICAgIH1cbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVkVHlwZXMgPSBhcHAuZW5hYmxlZFJlbW90ZU5vdGlmaWNhdGlvblR5cGVzKCk7XG4gICAgICAgIGlmIChlbmFibGVkVHlwZXMgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDM7IC8vIOaOqOmAgeadg+mZkOayoeacieW8gOWQryFcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gNDsgLy8gXCLlt7Lnu4/lvIDlkK/mjqjpgIHlip/og70hXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwKTtcbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoVUlBcHBsaWNhdGlvbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgQ05Db250YWN0U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTkNvbnRhY3RTdG9yZVwiKTtcbiAgICB2YXIgY25BdXRoU3RhdHVzID0gQ05Db250YWN0U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMCk7XG4gICAgaWYgKGNuQXV0aFN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoY25BdXRoU3RhdHVzID09PSAzKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZWNvcmQoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XG4gICAgdmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xuICAgIHZhciBzdGF0dXMgPSBhdmF1ZGlvLnJlY29yZFBlcm1pc3Npb24oKTtcbiAgICBpZiAoc3RhdHVzID09PSAxOTcwMTY4OTQ4KSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDE3MzU1NTI2MjgpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXZhdWRpb3Nlc3Npb24pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbGVuZGFyKCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XG4gICAgdmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcbiAgICBpZiAoZWtBdXRoU3RhdHVzID09PSAzKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7IC8vIFwi5pel5Y6G5p2D6ZmQ5bey57uP5byA5ZCvXCJcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEVLRXZlbnRTdG9yZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWVtbygpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICB2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xuICAgIHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XG4gICAgaWYgKGVrQXV0aFN0YXR1cyA9PT0gMykge1xuICAgICAgICByZXN1bHQgPSAxOyAvLyBcIuWkh+W/mOW9leadg+mZkOW3sue7j+W8gOWQr1wiXG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gcmVxdWVzdElPUyhwZXJtaXNzaW9uSUQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBlcm1pc3Npb25JRCkge1xuICAgICAgICAgICAgY2FzZSBcInB1c2hcIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKHB1c2goKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9jYXRpb25cIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlY29yZFwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNhbWVyYVwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUoY2FtZXJhKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFsYnVtXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbGJ1bSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjb250YWN0KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNhbGVuZGFyXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWxlbmRhcigpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZW1vKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNvbHZlKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkKHBlcm1pc3Npb25JRCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHBsdXMuYW5kcm9pZC5yZXF1ZXN0UGVybWlzc2lvbnMoXG4gICAgICAgICAgICBbcGVybWlzc2lvbklEXSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdE9iaikge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmdyYW50ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyYW50ZWRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmdyYW50ZWRbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZFByZXNlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZFByZXNlbnRbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZEFsd2F5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkQWx3YXlzUGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRBbHdheXNbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IC0xXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcbiAgICBpZiAocGVybWlzc2lvbi5pc0lPUykge1xuICAgICAgICB2YXIgVUlBcHBsaWNhdGlvbiA9IHBsdXMuaW9zLmltcG9ydChcIlVJQXBwbGljYXRpb25cIik7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XG4gICAgICAgIHZhciBOU1VSTDIgPSBwbHVzLmlvcy5pbXBvcnQoXCJOU1VSTFwiKTtcbiAgICAgICAgdmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xuICAgICAgICBhcHBsaWNhdGlvbjIub3BlblVSTChzZXR0aW5nMik7XG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChOU1VSTDIpO1xuICAgICAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwbGljYXRpb24yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkludGVudFwiKTtcbiAgICAgICAgdmFyIFNldHRpbmdzID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5wcm92aWRlci5TZXR0aW5nc1wiKTtcbiAgICAgICAgdmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcbiAgICAgICAgdmFyIG1haW5BY3Rpdml0eSA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG4gICAgICAgIHZhciBpbnRlbnQgPSBuZXcgSW50ZW50KCk7XG4gICAgICAgIGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xuICAgICAgICB2YXIgdXJpID0gVXJpLmZyb21QYXJ0cyhcInBhY2thZ2VcIiwgbWFpbkFjdGl2aXR5LmdldFBhY2thZ2VOYW1lKCksIG51bGwpO1xuICAgICAgICBpbnRlbnQuc2V0RGF0YSh1cmkpO1xuICAgICAgICBtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xuICAgIH1cbn1cblxuY29uc3QgcGVybWlzc2lvbiA9IHtcbiAgICBnZXQgaXNJT1MoKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpc0lPUyA9PT0gJ2Jvb2xlYW4nID8gaXNJT1MgOiAoaXNJT1MgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2lvcycpXG4gICAgfSxcbiAgICByZXF1ZXN0SU9TOiByZXF1ZXN0SU9TLFxuICAgIHJlcXVlc3RBbmRyb2lkOiByZXF1ZXN0QW5kcm9pZCxcbiAgICBnb3RvQXBwU2V0dGluZzogZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGVybWlzc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/util.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.filePath2Base64 = filePath2Base64;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} /*\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Copyright (C) 2020 Tencent Cloud.\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * you may not use this file except in compliance with the License.\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * You may obtain a copy of the License at\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *      http://www.apache.org/licenses/LICENSE-2.0\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Unless required by applicable law or agreed to in writing, software\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * See the License for the specific language governing permissions and\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * limitations under the License.\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */\n\n/**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 将本地文件路径转为base64\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {string} filePath 需要转换的文件的本地路径\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @returns {Promise<object>} result // base64格式的音频数据及大小\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */function\nfilePath2Base64(_x) {return _filePath2Base.apply(this, arguments);}function _filePath2Base() {_filePath2Base = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(filePath) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt(\"return\",\n            new Promise(function (resolve, reject) {\n              try {\n                plus.io.resolveLocalFileSystemURL(filePath, function (entry) {\n                  entry.file(function (file) {\n                    var fileReader = new plus.io.FileReader();\n                    fileReader.readAsDataURL(file, 'utf-8');\n                    fileReader.onloadend = function (evt) {\n                      var result = {\n                        voiceBase64: evt.target.result,\n                        size: file.size };\n\n                      resolve(result);\n                    };\n                  });\n                }, function (error) {\n                  reject(error);\n                });\n              } catch (error) {\n                reject(error);\n              }\n            }));case 1:case \"end\":return _context.stop();}}}, _callee);}));return _filePath2Base.apply(this, arguments);}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3V0aWwuanMiXSwibmFtZXMiOlsiZmlsZVBhdGgyQmFzZTY0IiwiZmlsZVBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBsdXMiLCJpbyIsInJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwiLCJlbnRyeSIsImZpbGUiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJldnQiLCJyZXN1bHQiLCJ2b2ljZUJhc2U2NCIsInRhcmdldCIsInNpemUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjI2QkFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7QUFLc0JBLGUsMEpBQWYsaUJBQStCQyxRQUEvQjtBQUNFLGdCQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGtCQUFJO0FBQ0ZDLG9CQUFJLENBQUNDLEVBQUwsQ0FBUUMseUJBQVIsQ0FBa0NOLFFBQWxDLEVBQTRDLFVBQVNPLEtBQVQsRUFBZ0I7QUFDMURBLHVCQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFTQSxJQUFULEVBQWU7QUFDeEIsd0JBQU1DLFVBQVUsR0FBRyxJQUFJTCxJQUFJLENBQUNDLEVBQUwsQ0FBUUssVUFBWixFQUFuQjtBQUNBRCw4QkFBVSxDQUFDRSxhQUFYLENBQXlCSCxJQUF6QixFQUErQixPQUEvQjtBQUNBQyw4QkFBVSxDQUFDRyxTQUFYLEdBQXVCLFVBQVNDLEdBQVQsRUFBYztBQUNuQywwQkFBTUMsTUFBTSxHQUFHO0FBQ2JDLG1DQUFXLEVBQUVGLEdBQUcsQ0FBQ0csTUFBSixDQUFXRixNQURYO0FBRWJHLDRCQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFGRSxFQUFmOztBQUlBZiw2QkFBTyxDQUFDWSxNQUFELENBQVA7QUFDRCxxQkFORDtBQU9ELG1CQVZEO0FBV0QsaUJBWkQsRUFZRyxVQUFTSSxLQUFULEVBQWdCO0FBQ2pCZix3QkFBTSxDQUFDZSxLQUFELENBQU47QUFDRCxpQkFkRDtBQWVELGVBaEJELENBZ0JFLE9BQU9BLEtBQVAsRUFBYztBQUNkZixzQkFBTSxDQUFDZSxLQUFELENBQU47QUFDRDtBQUNGLGFBcEJNLENBREYsMEQiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgVGVuY2VudCBDbG91ZC5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiDlsIbmnKzlnLDmlofku7bot6/lvoTovazkuLpiYXNlNjRcclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIOmcgOimgei9rOaNoueahOaWh+S7tueahOacrOWcsOi3r+W+hFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSByZXN1bHQgLy8gYmFzZTY05qC85byP55qE6Z+z6aKR5pWw5o2u5Y+K5aSn5bCPXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsZVBhdGgyQmFzZTY0KGZpbGVQYXRoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHBsdXMuaW8ucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChmaWxlUGF0aCwgZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgcGx1cy5pby5GaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgdm9pY2VCYXNlNjQ6IGV2dC50YXJnZXQucmVzdWx0LFxyXG4gICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***********************************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/js_sdk/tencentcloud-plugin-asr/real-time-voice-split.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Copyright (C) 2020 Tencent Cloud.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nObject.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\nvar _blobTransfer = __webpack_require__(/*! ./blob-transfer */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n\n\n\n/**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 实时语音数据分片转码\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var\nRealTimeVoiceSplit =\n\n/**\n                      *\n                      * @param {*} [sendInterval] H5实时语音专用：语音分片间隔时间\n                      */\nfunction RealTimeVoiceSplit() {var _this = this;var sendInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;_classCallCheck(this, RealTimeVoiceSplit);_defineProperty(this, \"realTimeSendTryH5\",\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  function (rec, isClose) {\n    return new Promise(function (resolve, reject) {\n      var t1 = Date.now();\n      if (_this.realTimeSendTryTime === 0) {\n        _this.ealTimeSendTryTime = t1;\n        _this.realTimeSendTryEncBusy = 0;\n        _this.realTimeSendTryNumber = 0;\n        _this.transferUploadNumberMax = 0;\n        _this.realTimeSendTryChunk = null;\n      }\n      if (!isClose && t1 - _this.realTimeSendTryTime < _this.sendInterval) {\n        return; //控制缓冲达到指定间隔才进行传输\n      }\n      _this.realTimeSendTryTime = t1;\n      _this.realTimeSendTryNumber++;\n\n      //借用SampleData函数进行数据的连续处理，采样率转换是顺带的\n      var chunk = RecorderJs.SampleData(\n      rec.buffers,\n      rec.srcSampleRate,\n      16000,\n      _this.realTimeSendTryChunk,\n      { frameType: isClose ? \"\" : \"mp3\" });\n\n\n      //清理已处理完的缓冲数据，释放内存以支持长时间录音，最后完成录音时不能调用stop，因为数据已经被清掉了\n      for (\n      var i = _this.realTimeSendTryChunk ? _this.realTimeSendTryChunk.index : 0;\n      i < chunk.index;\n      i++)\n      {\n        rec.buffers[i] = null;\n      }\n      _this.realTimeSendTryChunk = chunk;\n\n      //没有新数据，或结束时的数据量太小，不能进行mock转码\n      if (chunk.data.length === 0 || isClose && chunk.data.length < 2000) {\n        return;\n      }\n\n      //实时编码队列阻塞处理\n      if (!isClose) {\n        if (_this.realTimeSendTryEncBusy >= 2) {\n          return;\n        }\n      }\n      _this.realTimeSendTryEncBusy++;\n\n      // 通过mock方法实时转码成mp3、wav\n      var encStartTime = Date.now();\n      var recMock = RecorderJs({\n        type: \"mp3\",\n        sampleRate: 16000, //采样率\n        bitRate: 16 //比特率\n      });\n      recMock.mock(chunk.data, chunk.sampleRate);\n      recMock.stop( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n        function _callee(blob) {var voiceData, base64;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                  _this.realTimeSendTryEncBusy && _this.realTimeSendTryEncBusy--;\n                  blob.encTime = Date.now() - encStartTime;_context.next = 4;return (\n                    (0, _blobTransfer.blob2Base64)(blob));case 4:voiceData = _context.sent;\n                  base64 = (/.+;\\s*base64\\s*,\\s*(.+)$/i.exec(voiceData) || [])[1];\n                  resolve({ data: base64, seq: _this.realTimeSendTryNumber });case 7:case \"end\":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}(),\n\n      function (msg) {\n        _this.realTimeSendTryEncBusy && _this.realTimeSendTryEncBusy--;\n        reject(new Error(\"转码错误：\" + msg));\n      });\n\n    });\n  });_defineProperty(this, \"realTimeSendTryMP\", /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n\n\n\n\n\n    function _callee2(buffer) {var base64;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              _this.realTimeSendTryNumber++;\n              base64 = uni.arrayBufferToBase64(buffer);return _context2.abrupt(\"return\",\n              { data: base64, seq: _this.realTimeSendTryNumber });case 3:case \"end\":return _context2.stop();}}}, _callee2);}));return function (_x2) {return _ref2.apply(this, arguments);};}()); // 上一次语音推送时间\n  this.realTimeSendTryTime = 0; // 实时语音分片第几段\n  this.realTimeSendTryNumber = 0;this.transferUploadNumberMax = 0; // 实时编码队列中排队数\n  this.realTimeSendTryEncBusy = 0; // 语音数据缓冲块\n  this.realTimeSendTryChunk = null; // 生成blob间隔\n  this.sendInterval = sendInterval; //mp3 chunk数据会缓冲，当pcm的累积时长达到这个时长，就会传输发送。这个值在takeoffEncodeChunk实现下，使用0也不会有性能上的影响。\n} /**\n   * H5平台发送实时切片录音\n   * @param {object} rec recorder实例\n   * @param {object} isClose 是否是最后一段音频\n   * @returns {Promise<object>} data: 语音的Base64编码 seq: 第几个语音分片\n   */;exports.default = RealTimeVoiceSplit;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3RlbmNlbnRjbG91ZC1wbHVnaW4tYXNyL3JlYWwtdGltZS12b2ljZS1zcGxpdC5qcyJdLCJuYW1lcyI6WyJSZWFsVGltZVZvaWNlU3BsaXQiLCJzZW5kSW50ZXJ2YWwiLCJyZWMiLCJpc0Nsb3NlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0MSIsIkRhdGUiLCJub3ciLCJyZWFsVGltZVNlbmRUcnlUaW1lIiwiZWFsVGltZVNlbmRUcnlUaW1lIiwicmVhbFRpbWVTZW5kVHJ5RW5jQnVzeSIsInJlYWxUaW1lU2VuZFRyeU51bWJlciIsInRyYW5zZmVyVXBsb2FkTnVtYmVyTWF4IiwicmVhbFRpbWVTZW5kVHJ5Q2h1bmsiLCJjaHVuayIsIlJlY29yZGVySnMiLCJTYW1wbGVEYXRhIiwiYnVmZmVycyIsInNyY1NhbXBsZVJhdGUiLCJmcmFtZVR5cGUiLCJpIiwiaW5kZXgiLCJkYXRhIiwibGVuZ3RoIiwiZW5jU3RhcnRUaW1lIiwicmVjTW9jayIsInR5cGUiLCJzYW1wbGVSYXRlIiwiYml0UmF0ZSIsIm1vY2siLCJzdG9wIiwiYmxvYiIsImVuY1RpbWUiLCJ2b2ljZURhdGEiLCJiYXNlNjQiLCJleGVjIiwic2VxIiwibXNnIiwiRXJyb3IiLCJidWZmZXIiLCJ1bmkiLCJhcnJheUJ1ZmZlclRvQmFzZTY0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLG1FOzs7OztBQUtBOzs7QUFHcUJBLGtCOztBQUVuQjs7OztBQUlBLDhCQUErQixzQkFBbkJDLFlBQW1CLHVFQUFOLElBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCWCxZQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDcEMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFVBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVQ7QUFDQSxVQUFJLEtBQUksQ0FBQ0MsbUJBQUwsS0FBNkIsQ0FBakMsRUFBb0M7QUFDbEMsYUFBSSxDQUFDQyxrQkFBTCxHQUEwQkosRUFBMUI7QUFDQSxhQUFJLENBQUNLLHNCQUFMLEdBQThCLENBQTlCO0FBQ0EsYUFBSSxDQUFDQyxxQkFBTCxHQUE2QixDQUE3QjtBQUNBLGFBQUksQ0FBQ0MsdUJBQUwsR0FBK0IsQ0FBL0I7QUFDQSxhQUFJLENBQUNDLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0Q7QUFDRCxVQUFJLENBQUNaLE9BQUQsSUFBWUksRUFBRSxHQUFHLEtBQUksQ0FBQ0csbUJBQVYsR0FBZ0MsS0FBSSxDQUFDVCxZQUFyRCxFQUFtRTtBQUNqRSxlQURpRSxDQUN6RDtBQUNUO0FBQ0QsV0FBSSxDQUFDUyxtQkFBTCxHQUEyQkgsRUFBM0I7QUFDQSxXQUFJLENBQUNNLHFCQUFMOztBQUVBO0FBQ0EsVUFBSUcsS0FBSyxHQUFHQyxVQUFVLENBQUNDLFVBQVg7QUFDVmhCLFNBQUcsQ0FBQ2lCLE9BRE07QUFFVmpCLFNBQUcsQ0FBQ2tCLGFBRk07QUFHVixXQUhVO0FBSVYsV0FBSSxDQUFDTCxvQkFKSztBQUtWLFFBQUVNLFNBQVMsRUFBRWxCLE9BQU8sR0FBRyxFQUFILEdBQVEsS0FBNUIsRUFMVSxDQUFaOzs7QUFRQTtBQUNBO0FBQ0UsVUFBSW1CLENBQUMsR0FBRyxLQUFJLENBQUNQLG9CQUFMLEdBQTRCLEtBQUksQ0FBQ0Esb0JBQUwsQ0FBMEJRLEtBQXRELEdBQThELENBRHhFO0FBRUVELE9BQUMsR0FBR04sS0FBSyxDQUFDTyxLQUZaO0FBR0VELE9BQUMsRUFISDtBQUlFO0FBQ0FwQixXQUFHLENBQUNpQixPQUFKLENBQVlHLENBQVosSUFBaUIsSUFBakI7QUFDRDtBQUNELFdBQUksQ0FBQ1Asb0JBQUwsR0FBNEJDLEtBQTVCOztBQUVBO0FBQ0EsVUFBSUEsS0FBSyxDQUFDUSxJQUFOLENBQVdDLE1BQVgsS0FBc0IsQ0FBdEIsSUFBNEJ0QixPQUFPLElBQUlhLEtBQUssQ0FBQ1EsSUFBTixDQUFXQyxNQUFYLEdBQW9CLElBQS9ELEVBQXNFO0FBQ3BFO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJLENBQUN0QixPQUFMLEVBQWM7QUFDWixZQUFJLEtBQUksQ0FBQ1Msc0JBQUwsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDcEM7QUFDRDtBQUNGO0FBQ0QsV0FBSSxDQUFDQSxzQkFBTDs7QUFFQTtBQUNBLFVBQUljLFlBQVksR0FBR2xCLElBQUksQ0FBQ0MsR0FBTCxFQUFuQjtBQUNBLFVBQUlrQixPQUFPLEdBQUdWLFVBQVUsQ0FBQztBQUN2QlcsWUFBSSxFQUFFLEtBRGlCO0FBRXZCQyxrQkFBVSxFQUFFLEtBRlcsRUFFSjtBQUNuQkMsZUFBTyxFQUFFLEVBSGMsQ0FHVjtBQUhVLE9BQUQsQ0FBeEI7QUFLQUgsYUFBTyxDQUFDSSxJQUFSLENBQWFmLEtBQUssQ0FBQ1EsSUFBbkIsRUFBeUJSLEtBQUssQ0FBQ2EsVUFBL0I7QUFDQUYsYUFBTyxDQUFDSyxJQUFSO0FBQ0UseUJBQU9DLElBQVA7QUFDRSx1QkFBSSxDQUFDckIsc0JBQUwsSUFBK0IsS0FBSSxDQUFDQSxzQkFBTCxFQUEvQjtBQUNBcUIsc0JBQUksQ0FBQ0MsT0FBTCxHQUFlMUIsSUFBSSxDQUFDQyxHQUFMLEtBQWFpQixZQUE1QixDQUZGO0FBR3dCLG1EQUFZTyxJQUFaLENBSHhCLFNBR01FLFNBSE47QUFJTUMsd0JBSk4sR0FJZSxDQUFDLDRCQUE0QkMsSUFBNUIsQ0FBaUNGLFNBQWpDLEtBQStDLEVBQWhELEVBQW9ELENBQXBELENBSmY7QUFLRTlCLHlCQUFPLENBQUMsRUFBRW1CLElBQUksRUFBRVksTUFBUixFQUFnQkUsR0FBRyxFQUFFLEtBQUksQ0FBQ3pCLHFCQUExQixFQUFELENBQVAsQ0FMRix3REFERjs7QUFRRSxnQkFBQzBCLEdBQUQsRUFBUztBQUNQLGFBQUksQ0FBQzNCLHNCQUFMLElBQStCLEtBQUksQ0FBQ0Esc0JBQUwsRUFBL0I7QUFDQU4sY0FBTSxDQUFDLElBQUlrQyxLQUFKLENBQVUsVUFBVUQsR0FBcEIsQ0FBRCxDQUFOO0FBQ0QsT0FYSDs7QUFhRCxLQXBFTSxDQUFQO0FBcUVELEdBM0Y4Qjs7Ozs7OztBQWtHWCxzQkFBT0UsTUFBUDtBQUNsQixtQkFBSSxDQUFDNUIscUJBQUw7QUFDTXVCLG9CQUZZLEdBRUhNLEdBQUcsQ0FBQ0MsbUJBQUosQ0FBd0JGLE1BQXhCLENBRkc7QUFHWCxnQkFBRWpCLElBQUksRUFBRVksTUFBUixFQUFnQkUsR0FBRyxFQUFFLEtBQUksQ0FBQ3pCLHFCQUExQixFQUhXLDREQWxHVyxzRUFDN0I7QUFDQSxPQUFLSCxtQkFBTCxHQUEyQixDQUEzQixDQUY2QixDQUc3QjtBQUNBLE9BQUtHLHFCQUFMLEdBQTZCLENBQTdCLENBRUEsS0FBS0MsdUJBQUwsR0FBK0IsQ0FBL0IsQ0FONkIsQ0FPN0I7QUFDQSxPQUFLRixzQkFBTCxHQUE4QixDQUE5QixDQVI2QixDQVM3QjtBQUNBLE9BQUtHLG9CQUFMLEdBQTRCLElBQTVCLENBVjZCLENBVzdCO0FBQ0EsT0FBS2QsWUFBTCxHQUFvQkEsWUFBcEIsQ0FaNkIsQ0FZSztBQUNuQyxDLENBRUQiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIFRlbmNlbnQgQ2xvdWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYmxvYjJCYXNlNjQgfSBmcm9tIFwiLi9ibG9iLXRyYW5zZmVyXCI7XG5cblxuXG5cbi8qKlxuICog5a6e5pe26K+t6Z+z5pWw5o2u5YiG54mH6L2s56CBXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWxUaW1lVm9pY2VTcGxpdCB7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gW3NlbmRJbnRlcnZhbF0gSDXlrp7ml7bor63pn7PkuJPnlKjvvJror63pn7PliIbniYfpl7TpmpTml7bpl7RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNlbmRJbnRlcnZhbD0xMDAwKSB7XG4gICAgLy8g5LiK5LiA5qyh6K+t6Z+z5o6o6YCB5pe26Ze0XG4gICAgdGhpcy5yZWFsVGltZVNlbmRUcnlUaW1lID0gMDtcbiAgICAvLyDlrp7ml7bor63pn7PliIbniYfnrKzlh6DmrrVcbiAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeU51bWJlciA9IDA7XG5cbiAgICB0aGlzLnRyYW5zZmVyVXBsb2FkTnVtYmVyTWF4ID0gMDtcbiAgICAvLyDlrp7ml7bnvJbnoIHpmJ/liJfkuK3mjpLpmJ/mlbBcbiAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeUVuY0J1c3kgPSAwO1xuICAgIC8vIOivremfs+aVsOaNrue8k+WGsuWdl1xuICAgIHRoaXMucmVhbFRpbWVTZW5kVHJ5Q2h1bmsgPSBudWxsO1xuICAgIC8vIOeUn+aIkGJsb2Lpl7TpmpRcbiAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IHNlbmRJbnRlcnZhbDsgLy9tcDMgY2h1bmvmlbDmja7kvJrnvJPlhrLvvIzlvZNwY23nmoTntK/np6/ml7bplb/ovr7liLDov5nkuKrml7bplb/vvIzlsLHkvJrkvKDovpPlj5HpgIHjgILov5nkuKrlgLzlnKh0YWtlb2ZmRW5jb2RlQ2h1bmvlrp7njrDkuIvvvIzkvb/nlKgw5Lmf5LiN5Lya5pyJ5oCn6IO95LiK55qE5b2x5ZON44CCXG4gIH1cblxuICAvKipcbiAgICogSDXlubPlj7Dlj5HpgIHlrp7ml7bliIfniYflvZXpn7NcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlYyByZWNvcmRlcuWunuS+i1xuICAgKiBAcGFyYW0ge29iamVjdH0gaXNDbG9zZSDmmK/lkKbmmK/mnIDlkI7kuIDmrrXpn7PpopFcbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gZGF0YTog6K+t6Z+z55qEQmFzZTY057yW56CBIHNlcTog56ys5Yeg5Liq6K+t6Z+z5YiG54mHXG4gICAqL1xuICByZWFsVGltZVNlbmRUcnlINSA9IChyZWMsIGlzQ2xvc2UpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdmFyIHQxID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmICh0aGlzLnJlYWxUaW1lU2VuZFRyeVRpbWUgPT09IDApIHtcbiAgICAgICAgdGhpcy5lYWxUaW1lU2VuZFRyeVRpbWUgPSB0MTtcbiAgICAgICAgdGhpcy5yZWFsVGltZVNlbmRUcnlFbmNCdXN5ID0gMDtcbiAgICAgICAgdGhpcy5yZWFsVGltZVNlbmRUcnlOdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLnRyYW5zZmVyVXBsb2FkTnVtYmVyTWF4ID0gMDtcbiAgICAgICAgdGhpcy5yZWFsVGltZVNlbmRUcnlDaHVuayA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIWlzQ2xvc2UgJiYgdDEgLSB0aGlzLnJlYWxUaW1lU2VuZFRyeVRpbWUgPCB0aGlzLnNlbmRJbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47IC8v5o6n5Yi257yT5Yay6L6+5Yiw5oyH5a6a6Ze06ZqU5omN6L+b6KGM5Lyg6L6TXG4gICAgICB9XG4gICAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeVRpbWUgPSB0MTtcbiAgICAgIHRoaXMucmVhbFRpbWVTZW5kVHJ5TnVtYmVyKys7XG5cbiAgICAgIC8v5YCf55SoU2FtcGxlRGF0YeWHveaVsOi/m+ihjOaVsOaNrueahOi/nue7reWkhOeQhu+8jOmHh+agt+eOh+i9rOaNouaYr+mhuuW4pueahFxuICAgICAgdmFyIGNodW5rID0gUmVjb3JkZXJKcy5TYW1wbGVEYXRhKFxuICAgICAgICByZWMuYnVmZmVycyxcbiAgICAgICAgcmVjLnNyY1NhbXBsZVJhdGUsXG4gICAgICAgIDE2MDAwLFxuICAgICAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeUNodW5rLFxuICAgICAgICB7IGZyYW1lVHlwZTogaXNDbG9zZSA/IFwiXCIgOiBcIm1wM1wiIH1cbiAgICAgICk7XG5cbiAgICAgIC8v5riF55CG5bey5aSE55CG5a6M55qE57yT5Yay5pWw5o2u77yM6YeK5pS+5YaF5a2Y5Lul5pSv5oyB6ZW/5pe26Ze05b2V6Z+z77yM5pyA5ZCO5a6M5oiQ5b2V6Z+z5pe25LiN6IO96LCD55Soc3RvcO+8jOWboOS4uuaVsOaNruW3sue7j+iiq+a4heaOieS6hlxuICAgICAgZm9yIChcbiAgICAgICAgdmFyIGkgPSB0aGlzLnJlYWxUaW1lU2VuZFRyeUNodW5rID8gdGhpcy5yZWFsVGltZVNlbmRUcnlDaHVuay5pbmRleCA6IDA7XG4gICAgICAgIGkgPCBjaHVuay5pbmRleDtcbiAgICAgICAgaSsrXG4gICAgICApIHtcbiAgICAgICAgcmVjLmJ1ZmZlcnNbaV0gPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFsVGltZVNlbmRUcnlDaHVuayA9IGNodW5rO1xuXG4gICAgICAvL+ayoeacieaWsOaVsOaNru+8jOaIlue7k+adn+aXtueahOaVsOaNrumHj+WkquWwj++8jOS4jeiDvei/m+ihjG1vY2vovaznoIFcbiAgICAgIGlmIChjaHVuay5kYXRhLmxlbmd0aCA9PT0gMCB8fCAoaXNDbG9zZSAmJiBjaHVuay5kYXRhLmxlbmd0aCA8IDIwMDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy/lrp7ml7bnvJbnoIHpmJ/liJfpmLvloZ7lpITnkIZcbiAgICAgIGlmICghaXNDbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5yZWFsVGltZVNlbmRUcnlFbmNCdXN5ID49IDIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucmVhbFRpbWVTZW5kVHJ5RW5jQnVzeSsrO1xuXG4gICAgICAvLyDpgJrov4dtb2Nr5pa55rOV5a6e5pe26L2s56CB5oiQbXAz44CBd2F2XG4gICAgICB2YXIgZW5jU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciByZWNNb2NrID0gUmVjb3JkZXJKcyh7XG4gICAgICAgIHR5cGU6IFwibXAzXCIsXG4gICAgICAgIHNhbXBsZVJhdGU6IDE2MDAwLCAvL+mHh+agt+eOh1xuICAgICAgICBiaXRSYXRlOiAxNiwgLy/mr5TnibnnjodcbiAgICAgIH0pO1xuICAgICAgcmVjTW9jay5tb2NrKGNodW5rLmRhdGEsIGNodW5rLnNhbXBsZVJhdGUpO1xuICAgICAgcmVjTW9jay5zdG9wKFxuICAgICAgICBhc3luYyAoYmxvYikgPT4ge1xuICAgICAgICAgIHRoaXMucmVhbFRpbWVTZW5kVHJ5RW5jQnVzeSAmJiB0aGlzLnJlYWxUaW1lU2VuZFRyeUVuY0J1c3ktLTtcbiAgICAgICAgICBibG9iLmVuY1RpbWUgPSBEYXRlLm5vdygpIC0gZW5jU3RhcnRUaW1lO1xuICAgICAgICAgIGxldCB2b2ljZURhdGEgPSBhd2FpdCBibG9iMkJhc2U2NChibG9iKTtcbiAgICAgICAgICBsZXQgYmFzZTY0ID0gKC8uKztcXHMqYmFzZTY0XFxzKixcXHMqKC4rKSQvaS5leGVjKHZvaWNlRGF0YSkgfHwgW10pWzFdO1xuICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBiYXNlNjQsIHNlcTogdGhpcy5yZWFsVGltZVNlbmRUcnlOdW1iZXIgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIChtc2cpID0+IHtcbiAgICAgICAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeUVuY0J1c3kgJiYgdGhpcy5yZWFsVGltZVNlbmRUcnlFbmNCdXN5LS07XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIui9rOeggemUmeivr++8mlwiICsgbXNnKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIOWwj+eoi+W6j+WPkemAgeWunuaXtuWIh+eJh+W9lemfs1xuICAgKiBAcGFyYW0ge29iamVjdH0gYnVmZmVyIOmfs+mikWFycmF5YnVmZmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gZGF0YTog6K+t6Z+z55qEQmFzZTY057yW56CBIHNlcTog56ys5Yeg5Liq6K+t6Z+z5YiG54mHXG4gICAqL1xuICByZWFsVGltZVNlbmRUcnlNUCA9IGFzeW5jIChidWZmZXIpID0+IHtcbiAgICB0aGlzLnJlYWxUaW1lU2VuZFRyeU51bWJlcisrO1xuICAgIGNvbnN0IGJhc2U2NCA9IHVuaS5hcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcik7XG4gICAgcmV0dXJuIHsgZGF0YTogYmFzZTY0LCBzZXE6IHRoaXMucmVhbFRpbWVTZW5kVHJ5TnVtYmVyIH07XG4gIH07XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 30 */
/*!***********************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/App.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 29);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNko7QUFDN0osZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!************************************************************************!*\
  !*** D:/Html5/hbuilder/b03/agedvoice/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 32);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVnQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Html5/hbuilder/b03/agedvoice/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);