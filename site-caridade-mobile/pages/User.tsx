import React, { useContext } from 'react';
import { ScrollView, Text } from "react-native";
import Perfil from '../components/Perfil';
import Description from '../components/User/Description';
import Status from '../components/User/Status';
import { ColorsContext } from '../contexts/ColorContext';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    const {white} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <Perfil/>
            <Status />
            <Description />
        </ScrollView>
    )
}