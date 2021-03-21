"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Banner_1 = require("../components/Home/Banner");
var Sobre_1 = require("../components/Home/Sobre");
var Contato_1 = require("../components/Home/Contato");
exports["default"] = (function (_a) {
    var navigation = _a.navigation;
    return (react_1["default"].createElement(react_native_1.ScrollView, null,
        react_1["default"].createElement(Banner_1["default"], null),
        react_1["default"].createElement(Sobre_1["default"], null),
        react_1["default"].createElement(Contato_1["default"], null)));
});
