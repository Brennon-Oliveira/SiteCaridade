import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { ColorsContext } from '../../contexts/ColorContext';

export default () => {

    const { black, white, red} = useContext(ColorsContext);

    const [likes,setLikes] = useState(426)
    const [firstContribution,setFirstContribuition] = useState('20/12/2020')
    const [lastContribution,setLastContribution] = useState('20/01/2021')
    const [userId,setUserId] = useState(51234)

    return (
        <View style={{alignItems: 'center' }}>
            <Text style={{...styles.title,color:black.toString()}}>Status</Text>
            <Text style={{...styles.statusData,color:black.toString()}}>Curtidas: {likes}</Text>
            <Text style={{...styles.statusData,color:black.toString()}}>Primeira contribuição: {firstContribution}</Text>
            <Text style={{...styles.statusData,color:black.toString()}}>Última contribuição: {lastContribution}</Text>
            <Text style={{...styles.statusData,color:black.toString()}}>ID do usuário: {userId}</Text>
            <TouchableOpacity style={{}} onPress={()=>{}}>
                <Text style={{...styles.buttonText,backgroundColor:red.toString()}}>Curtir</Text>
            </TouchableOpacity>
            <View style={{...styles.bar,backgroundColor:black.toString()}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'FiraSans',
        fontSize:24,
        marginBottom: 5,
    },
    statusData: {
        fontSize: 18,
        fontFamily: 'OpenSans'
    },
    buttonText:{
        color:'#FAF7FF',
        fontSize:20,
        fontFamily:'FiraSans',
        paddingVertical:5,
        textAlign:'center',
        width:200,
        marginTop:10,
    },
    bar:{
        width:'100%',
        height:2,
        marginVertical:20
    }
})