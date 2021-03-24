"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_constants_1 = require("expo-constants");
var ColorContext_1 = require("../contexts/ColorContext");
exports["default"] = (function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useContext(ColorContext_1.ColorsContext), changeDarkMode = _b.changeDarkMode, white = _b.white;
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: { backgroundColor: white.toString() } },
        react_1["default"].createElement(react_native_1.View, { style: { marginTop: expo_constants_1["default"].statusBarHeight } },
            react_1["default"].createElement(react_native_1.Button, { title: 'trocar', onPress: changeDarkMode }))));
});
