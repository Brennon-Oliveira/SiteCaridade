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
var ColorContext_1 = require("../../contexts/ColorContext");
exports["default"] = (function () {
    var _a = react_1.useContext(ColorContext_1.ColorsContext), black = _a.black, white = _a.white, red = _a.red;
    var _b = react_1.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..'), description = _b[0], setDescription = _b[1];
    return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.title), { color: black.toString() }) }, "Descri\u00E7\u00E3o"),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.descriptionData), { color: black.toString() }) },
            "Curtidas: ",
            description)));
});
var styles = react_native_1.StyleSheet.create({
    title: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginBottom: 5
    },
    descriptionData: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        paddingHorizontal: 15
    }
});
