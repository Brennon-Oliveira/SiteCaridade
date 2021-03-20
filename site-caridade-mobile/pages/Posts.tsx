import React from 'react';
import { Button, Text, View } from "react-native"


export default ({navigation})=>{

    return(
        <View>
            <Text>Ola dos Posts</Text>
            <Button title="Posts" onPress={()=>{navigation.navigate('Home')}}></Button>
        </View>
    )
}