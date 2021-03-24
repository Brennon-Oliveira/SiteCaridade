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
exports["default"] = (function () {
    var _a = react_1.useState(''), nome = _a[0], setNome = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), numero = _c[0], setNumero = _c[1];
    var _d = react_1.useState(''), mensagem = _d[0], setMensagem = _d[1];
    function onTextChange(text) {
        var cleaned = ('' + text).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            var intlCode = (match[1] ? '+1 ' : ''), number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
            setNumero(number);
            return;
        }
        setNumero(text);
    }
    return (react_1["default"].createElement(react_native_1.View, { style: { paddingVertical: 15 } },
        react_1["default"].createElement(react_native_2.Text, { style: styles.title }, "Entre em contato"),
        react_1["default"].createElement(react_native_1.View, { style: styles.inputContainer },
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: 'Nome...', value: nome, onChangeText: setNome, autoCompleteType: 'username', style: styles.input }),
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: 'Email...', value: email, onChangeText: setEmail, autoCompleteType: 'email', style: styles.input }),
            react_1["default"].createElement(react_native_1.TextInput, { onChangeText: function (text) { return onTextChange(text); }, value: numero, textContentType: 'telephoneNumber', dataDetectorTypes: 'phoneNumber', keyboardType: 'phone-pad', maxLength: 15, placeholder: 'Telefone...', style: styles.input }),
            react_1["default"].createElement(react_native_1.TextInput, { multiline: true, placeholder: 'Mensagem...', value: mensagem, onChangeText: setMensagem, autoCompleteType: 'off', style: __assign(__assign({}, styles.input), { minHeight: 120 }) }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: { alignItems: 'center' } },
                react_1["default"].createElement(react_native_2.Text, { style: styles.buttomText }, "Enviar!")))));
});
var styles = react_native_1.StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 10
    },
    input: {
        borderColor: '#0c0c0c',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginBottom: 15
    },
    title: {
        color: '#0c0c0c',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'FiraSans',
        marginBottom: 15
    },
    buttomText: {
        backgroundColor: '#0c0c0c',
        color: '#FAF7FF',
        fontSize: 20,
        fontFamily: 'FiraSans',
        paddingVertical: 5,
        textAlign: 'center',
        width: 200
    }
});
