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
exports["default"] = (function (props) {
    var _a = react_1.useContext(ColorContext_1.ColorsContext), white = _a.white, black = _a.black;
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingHorizontal: 10, width: '40%' } },
        react_1["default"].createElement(react_native_1.View, { style: __assign(__assign({}, styles.container), { borderColor: black.toString() }) }, (props.isActive) ?
            (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: __assign(__assign(__assign({}, styles.button), styles.yesButton), { backgroundColor: black.toString() }) },
                    react_1["default"].createElement(react_native_1.Text, { style: { color: white.toString() } }, "Sim")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: props.buttonFunc, style: __assign(__assign(__assign({}, styles.button), styles.noButton), { backgroundColor: white.toString() }) },
                    react_1["default"].createElement(react_native_1.Text, { style: { color: black.toString() } }, "N\u00E3o"))))
            :
                (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: props.buttonFunc, style: __assign(__assign(__assign({}, styles.button), styles.yesButton), { backgroundColor: white.toString() }) },
                        react_1["default"].createElement(react_native_1.Text, { style: { color: black.toString() } }, "Sim")),
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: __assign(__assign(__assign({}, styles.button), styles.noButton), { backgroundColor: black.toString() }) },
                        react_1["default"].createElement(react_native_1.Text, { style: { color: white.toString() } }, "N\u00E3o")))))));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 6,
        borderWidth: 1
    },
    button: {
        width: '50%',
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: "#0c0c0c"
    },
    yesButton: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1
    },
    noButton: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderLeftWidth: 1
    }
});
// const styles = StyleSheet.create({
//     container:{
//         display:'flex',
//         flexDirection:'row',
//         width:'100%',
//         backgroundColor:"#0000ff",
//         justifyContent:'center',
//         borderRadius:5
//     },
//     button:{
//         width:'50%',
//         paddingVertical:10,
//         alignItems:'center',
//         borderColor:"#0c0c0c",
//     },
//     yesButton:{
//         borderTopLeftRadius:5,
//         borderBottomLeftRadius:5,
//         borderRightWidth:1,
//     },
//     noButton:{
//         borderTopRightRadius:5,
//         borderBottomRightRadius:5,
//         borderLeftWidth:1,
//     }
// })
