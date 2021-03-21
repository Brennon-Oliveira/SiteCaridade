import React from 'react';
import { ScrollView } from "react-native";
import Constants from 'expo-constants';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            
        </ScrollView>
    )
}