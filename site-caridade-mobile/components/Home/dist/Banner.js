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
var react_native_2 = require("react-native");
var expo_constants_1 = require("expo-constants");
exports["default"] = (function () {
    var dimensions = react_native_2.useWindowDimensions();
    return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('./../../assets/banner.png'), style: __assign(__assign({}, styles.banner), { width: dimensions.width, height: dimensions.height }) },
        react_1["default"].createElement(react_native_1.Text, { style: styles.logo }, "Projeto Caridade"),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.mensagem), { marginTop: dimensions.height / 3 - 70 }) }, "Uma organiza\u00E7\u00E3o focada no futuro das crian\u00E7as e adolecentes")));
});
var styles = react_native_1.StyleSheet.create({
    banner: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    logo: {
        color: '#0c0c0c',
        fontSize: 32,
        marginTop: expo_constants_1["default"].statusBarHeight,
        paddingHorizontal: '2%',
        fontFamily: 'FiraSans'
    },
    mensagem: {
        color: '#0c0c0c',
        fontSize: 22,
        paddingHorizontal: '2%',
        textAlign: 'center',
        fontFamily: 'FiraSans'
    }
});
