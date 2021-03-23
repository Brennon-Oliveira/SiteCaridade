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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.ColorsProvider = exports.ColorsContext = void 0;
var react_1 = require("react");
var react_2 = require("react");
var expo_status_bar_1 = require("expo-status-bar");
exports.ColorsContext = react_1.createContext({});
function ColorsProvider(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var _b = react_1.useState(false), darkMode = _b[0], setDarkMode = _b[1];
    function changeDarkMode() {
        setDarkMode(!darkMode);
    }
    var Color = {
        black: '#0C0C0C',
        white: '#FAF7FF'
    };
    if (darkMode) {
        Color = {
            black: '#FAF7FF',
            white: '#0C0C0C'
        };
    }
    return (react_2["default"].createElement(exports.ColorsContext.Provider, { value: __assign({ darkMode: darkMode,
            changeDarkMode: changeDarkMode }, Color) },
        (darkMode) ?
            react_2["default"].createElement(expo_status_bar_1.StatusBar, { translucent: true, style: "light" }) :
            react_2["default"].createElement(expo_status_bar_1.StatusBar, { translucent: true, style: "dark" }),
        children));
}
exports.ColorsProvider = ColorsProvider;
