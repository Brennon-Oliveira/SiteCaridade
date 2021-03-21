"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
exports["default"] = (function () {
    return (react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: '#0c0c0c', paddingVertical: 15 } },
        react_1["default"].createElement(react_native_1.Text, { style: styles.title }, "Sobre"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.content }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eget metus ut ultricies. Vestibulum convallis aliquam tellus ac suscipit. Maecenas luctus, ex in rhoncus scelerisque, massa lacus maximus massa, non imperdiet risus turpis id magna. Proin rhoncus eget eros quis eleifend. Donec tempus mattis dui, vitae vestibulum nisi lacinia at. Nam nec sapien pellentesque, porta massa et, vestibulum elit. Curabitur a facilisis libero. Interdum et malesuada fames ac ante ipsum primis in faucibus."),
        react_1["default"].createElement(react_native_1.Text, { style: styles.content }, "Fusce rhoncus sed ex et maximus. In hac habitasse platea dictumst. Vivamus aliquet ante eu dui scelerisque, eu ultricies nibh volutpat. Aenean fringilla risus nunc, imperdiet ornare arcu euismod vel. Nam luctus ac elit et congue. Vestibulum augue leo, sollicitudin at tellus at, tincidunt cursus tortor. Nam viverra est vel iaculis vestibulum."),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { alignItems: 'center' }, onPress: function () { } },
            react_1["default"].createElement(react_native_1.Text, { style: styles.buttonText }, "Doar"))));
});
var styles = react_native_1.StyleSheet.create({
    content: {
        color: '#C9C9C9',
        marginVertical: 15,
        fontFamily: 'OpenSans'
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'FiraSans'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 1,
        width: 150,
        paddingVertical: 5,
        borderRadius: 10
    }
});
