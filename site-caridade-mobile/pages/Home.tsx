import React from 'react';
import { Button, Text, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    return(
        <View>
            <Text>Ola da Home</Text>
        </View>
    )
}