import React from 'react';
import { Button, Text, View } from "react-native"

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation}:props)=>{

    return(
        <View>
            <Text>Ola dos Posts</Text>
        </View>
    )
}