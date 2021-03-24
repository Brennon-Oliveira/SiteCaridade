import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

export default ()=>{

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [numero,setNumero] = useState('');
    const [mensagem,setMensagem] = useState('');

    function onTextChange(text:string) {
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{2})(\d{5})(\d{4})$/)
        if (match) {
            var intlCode = (match[1] ? '+1 ' : ''),
                number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    
            setNumero(number)
    
            return;
        }
    
        setNumero(text)
    }

    return(
        <View style={{paddingVertical:15}}>
            <Text style={styles.title}>Entre em contato</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Nome...'
                    value={nome}
                    onChangeText={setNome}
                    autoCompleteType='username'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Email...'
                    value={email}
                    onChangeText={setEmail}
                    autoCompleteType='email'
                    style={styles.input}
                />
                
                <TextInput 
                    onChangeText={(text) => onTextChange(text) }
                    value={numero}
                    textContentType='telephoneNumber' 
                    dataDetectorTypes='phoneNumber' 
                    keyboardType='phone-pad' 
                    maxLength={15}
                    placeholder='Telefone...'
                    style={styles.input}
                />
                <TextInput
                    multiline
                    placeholder='Mensagem...'
                    value={mensagem}
                    onChangeText={setMensagem}
                    autoCompleteType='off'
                    style={{...styles.input,minHeight:120}}
                />
                <TouchableOpacity style={{alignItems:'center'}} ><Text style={styles.buttomText}>Enviar!</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        paddingHorizontal:10,
    },
    input:{
        borderColor:'#0c0c0c',
        borderWidth:1,
        paddingHorizontal:5,
        marginBottom:15
    },
    title:{
        color:'#0c0c0c',
        textAlign:'center',
        fontSize:24,
        fontFamily:'FiraSans',
        marginBottom:15,
    },
    buttomText:{
        backgroundColor:'#0c0c0c',
        color:'#FAF7FF',
        fontSize:20,
        fontFamily:'FiraSans',
        paddingVertical:5,
        textAlign:'center',
        width:200,
    }
})