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
    var _b = react_1.useState(426), likes = _b[0], setLikes = _b[1];
    var _c = react_1.useState('20/12/2020'), firstContribution = _c[0], setFirstContribuition = _c[1];
    var _d = react_1.useState('20/01/2021'), lastContribution = _d[0], setLastContribution = _d[1];
    var _e = react_1.useState(51234), userId = _e[0], setUserId = _e[1];
    return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.title), { color: black.toString() }) }, "Status"),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.statusData), { color: black.toString() }) },
            "Curtidas: ",
            likes),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.statusData), { color: black.toString() }) },
            "Primeira contribui\u00E7\u00E3o: ",
            firstContribution),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.statusData), { color: black.toString() }) },
            "\u00DAltima contribui\u00E7\u00E3o: ",
            lastContribution),
        react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.statusData), { color: black.toString() }) },
            "ID do usu\u00E1rio: ",
            userId),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {}, onPress: function () { } },
            react_1["default"].createElement(react_native_1.Text, { style: __assign(__assign({}, styles.buttonText), { backgroundColor: red.toString() }) }, "Curtir")),
        react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.bar), { backgroundColor: black.toString() }) })));
});
var styles = react_native_1.StyleSheet.create({
    title: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginBottom: 5
    },
    statusData: {
        fontSize: 18,
        fontFamily: 'OpenSans'
    },
    buttonText: {
        color: '#FAF7FF',
        fontSize: 20,
        fontFamily: 'FiraSans',
        paddingVertical: 5,
        textAlign: 'center',
        width: 200,
        marginTop: 10
    },
    bar: {
        width: '100%',
        height: 2,
        marginVertical: 20
    }
});
