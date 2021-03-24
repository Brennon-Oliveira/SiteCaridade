import React, { useContext } from 'react';
import { ScrollView, Text } from "react-native";
import { ColorsContext } from '../contexts/ColorContext';
import Perfil from '../components/Perfil';
import SettingsWrapper from '../components/Settings/SettingsWrapper';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation}:props)=>{

    const {white} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <Perfil/>
            <SettingsWrapper />
        </ScrollView>
    )
}