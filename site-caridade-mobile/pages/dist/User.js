"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Perfil_1 = require("../components/Perfil");
var color_1 = require("../assets/color");
exports["default"] = (function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: { backgroundColor: color_1["default"].white } },
        react_1["default"].createElement(Perfil_1["default"], null)));
});
