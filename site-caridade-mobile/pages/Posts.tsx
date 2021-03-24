import React, { useContext } from 'react';
import { ScrollView, Text } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation}:props)=>{

    const {white} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <Text style={{marginTop:Constants.statusBarHeight}}></Text>
        </ScrollView>
    )
}