import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../../contexts/ColorContext';
import ActiveButton from './ActiveButton';
import OptionWrapper from './OptionWrapper';

export default ()=>{

    const {white, changeDarkMode, darkMode} = useContext(ColorsContext);
    const [publicProfile, setPublicProfile] = useState(false)
    const [auth2Pass, setAuth2Pass] = useState(true)

    function changePublicProfile(){
        setPublicProfile(!publicProfile);
    }

    function changeAuth2Pass(){
        setAuth2Pass(!auth2Pass)
    }

    return(
        <View>
            <OptionWrapper isActive={darkMode} buttonFunc={changeDarkMode} title='Modo escuro' />
            <OptionWrapper isActive={publicProfile} buttonFunc={changePublicProfile} title='Perfil público' />
            <OptionWrapper isActive={auth2Pass} buttonFunc={changeAuth2Pass} title='Verificação em Duas Etapas' />
        </View>
    )
}