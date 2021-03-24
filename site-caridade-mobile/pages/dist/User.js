"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Perfil_1 = require("../components/Perfil");
var Description_1 = require("../components/User/Description");
var Status_1 = require("../components/User/Status");
var ColorContext_1 = require("../contexts/ColorContext");
exports["default"] = (function (_a) {
    var navigation = _a.navigation;
    var white = react_1.useContext(ColorContext_1.ColorsContext).white;
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: { backgroundColor: white.toString() } },
        react_1["default"].createElement(Perfil_1["default"], null),
        react_1["default"].createElement(Status_1["default"], null),
        react_1["default"].createElement(Description_1["default"], null)));
});
