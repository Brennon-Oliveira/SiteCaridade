import React from 'react';
import { ScrollView, Text } from "react-native";
import Perfil from '../components/Perfil';
import Color from '../assets/color';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    return(
        <ScrollView style={{backgroundColor:Color.white}}>
            <Perfil/>
        </ScrollView>
    )
}