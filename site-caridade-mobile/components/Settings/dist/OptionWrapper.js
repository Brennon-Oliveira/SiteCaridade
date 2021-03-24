"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ColorContext_1 = require("../../contexts/ColorContext");
var ActiveButton_1 = require("./ActiveButton");
exports["default"] = (function (props) {
    var black = react_1.useContext(ColorContext_1.ColorsContext).black;
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, flexDirection: 'row', alignItems: 'center', flexGrow: 10, marginBottom: 25 } },
        react_1["default"].createElement(ActiveButton_1["default"], { isActive: props.isActive, buttonFunc: props.buttonFunc }),
        react_1["default"].createElement(react_native_1.Text, { style: { width: '60%', flex: 1, textAlign: 'center', paddingHorizontal: 10, color: black.toString() } }, props.title)));
});
