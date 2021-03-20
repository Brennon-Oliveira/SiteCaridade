import React from 'react';
import { Button, Text, View } from "react-native"


export default ({navigation})=>{

    return(
        <View>
            <Text>Ola da Home</Text>
            <Button title="Posts"  onPress={()=>{
                navigation.navigate('Posts')
        }}></Button>
        </View>
    )
}