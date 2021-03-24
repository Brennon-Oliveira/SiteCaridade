"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ColorContext_1 = require("../../contexts/ColorContext");
var OptionWrapper_1 = require("./OptionWrapper");
exports["default"] = (function () {
    var _a = react_1.useContext(ColorContext_1.ColorsContext), white = _a.white, changeDarkMode = _a.changeDarkMode, darkMode = _a.darkMode;
    var _b = react_1.useState(false), publicProfile = _b[0], setPublicProfile = _b[1];
    var _c = react_1.useState(true), auth2Pass = _c[0], setAuth2Pass = _c[1];
    function changePublicProfile() {
        setPublicProfile(!publicProfile);
    }
    function changeAuth2Pass() {
        setAuth2Pass(!auth2Pass);
    }
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(OptionWrapper_1["default"], { isActive: darkMode, buttonFunc: changeDarkMode, title: 'Modo escuro' }),
        react_1["default"].createElement(OptionWrapper_1["default"], { isActive: publicProfile, buttonFunc: changePublicProfile, title: 'Perfil p\u00FAblico' }),
        react_1["default"].createElement(OptionWrapper_1["default"], { isActive: auth2Pass, buttonFunc: changeAuth2Pass, title: 'Verifica\u00E7\u00E3o em Duas Etapas' })));
});
