import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorsContext } from '../../contexts/ColorContext';

export default () => {

    const { black, white, red} = useContext(ColorsContext);

    const [description,setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent acLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac..')

    return (
        <View style={{alignItems: 'center' }}>
            <Text style={{...styles.title,color:black.toString()}}>Descrição</Text>
            <Text style={{...styles.descriptionData,color:black.toString()}}>Curtidas: {description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'FiraSans',
        fontSize:24,
        marginBottom: 5,
    },
    descriptionData: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        paddingHorizontal:15
    }
})