"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_constants_1 = require("expo-constants");
var ColorContext_1 = require("../contexts/ColorContext");
exports["default"] = (function () {
    var _a = react_1.useContext(ColorContext_1.ColorsContext), changeDarkMode = _a.changeDarkMode, black = _a.black, white = _a.white;
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingVertical: 10, alignItems: 'center', marginTop: expo_constants_1["default"].statusBarHeight } },
        react_1["default"].createElement(react_native_1.View, { style: __assign({}, styles.userImage) }),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.userName), { color: black.toString() }) }, "Nome do Usu\u00E1rio"),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.userContribution), { color: black.toString() }) }, "Contribui\u00E7\u00E3o: R$2.402,50"),
        react_1["default"].createElement(react_native_1.Button, { title: 'trocar', onPress: changeDarkMode })));
});
var styles = react_native_1.StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#C4C4C4'
    },
    userName: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginVertical: 5
    },
    userContribution: {
        fontSize: 18,
        fontFamily: 'FiraSans'
    }
});
