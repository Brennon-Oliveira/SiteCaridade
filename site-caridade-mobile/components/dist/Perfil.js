"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var color_1 = require("../assets/color");
var expo_constants_1 = require("expo-constants");
exports["default"] = (function () {
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingVertical: 10, alignItems: 'center', marginTop: expo_constants_1["default"].statusBarHeight } },
        react_1["default"].createElement(react_native_1.View, { style: styles.userImage }),
        react_1["default"].createElement(react_native_1.Text, { style: styles.userName }, "Nome do Usu\u00E1rio"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.userContribution }, "Contribui\u00E7\u00E3o: R$2.402,50")));
});
var styles = react_native_1.StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#C4C4C4'
    },
    userName: {
        color: color_1["default"].black,
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginVertical: 5
    },
    userContribution: {
        color: color_1["default"].black,
        fontSize: 18,
        fontFamily: 'FiraSans'
    }
});
