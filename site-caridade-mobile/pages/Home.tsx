import React from 'react';
import { Button, ScrollView, Text, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Banner from '../components/Home/Banner';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import Sobre from '../components/Home/Sobre';
import Contato from '../components/Home/Contato';
import { useRoute } from '@react-navigation/native';


interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{
    
    return(
        <ScrollView>
            <Banner/>
            <Sobre />
            <Contato />
        </ScrollView>
    )
}