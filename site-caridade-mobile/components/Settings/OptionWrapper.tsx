import React, { useContext } from 'react';
import {  Text, View } from "react-native";
import { ColorsContext } from '../../contexts/ColorContext'
import ActiveButton from './ActiveButton';

interface props {
    title: String,
    buttonFunc: ()=>void,
    isActive: boolean,
}

export default (props: props)=>{

    const {black} = useContext(ColorsContext);

    return(
        <View style={{flex:1,flexDirection:'row',alignItems:'center',flexGrow:10, marginBottom:25}}>
            <ActiveButton isActive={props.isActive} buttonFunc={props.buttonFunc} /><Text style={{width:'60%',flex:1,textAlign:'center',paddingHorizontal:10,color:black.toString()}}>{props.title}</Text>
        </View>
    )
}