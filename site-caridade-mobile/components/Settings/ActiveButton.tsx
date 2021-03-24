import React, { useContext } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../../contexts/ColorContext';

interface props{
    buttonFunc: ()=>void,
    isActive: boolean
}

export default (props: props)=>{

    const {white,black} = useContext(ColorsContext);

    return(
        <View style={{paddingHorizontal:10,width:'40%',}}>
            <View style={{...styles.container,borderColor:black.toString()}}>
                {
                    (props.isActive)?
                    (
                        <>
                        <TouchableOpacity style={{...styles.button,...styles.yesButton,backgroundColor:black.toString()}}>
                            <Text style={{color:white.toString()}}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={props.buttonFunc} style={{...styles.button,...styles.noButton,backgroundColor:white.toString()}}>
                            <Text style={{color:black.toString()}}>Não</Text>
                        </TouchableOpacity>
                        </>
                    )
                    :
                    (
                        <>
                        <TouchableOpacity onPress={props.buttonFunc} style={{...styles.button,...styles.yesButton,backgroundColor:white.toString()}}>
                            <Text style={{color:black.toString()}}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.button,...styles.noButton,backgroundColor:black.toString()}}>
                            <Text style={{color:white.toString()}}>Não</Text>
                        </TouchableOpacity>
                        </>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        borderRadius:6,
        borderWidth:1
    },
    button:{
        width:'50%',
        paddingVertical:10,
        alignItems:'center',
        borderColor:"#0c0c0c",
    },
    yesButton:{
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        borderRightWidth:1,
    },
    noButton:{
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderLeftWidth:1,
    }
})

// const styles = StyleSheet.create({
//     container:{
//         display:'flex',
//         flexDirection:'row',
//         width:'100%',
//         backgroundColor:"#0000ff",
//         justifyContent:'center',
//         borderRadius:5
//     },
//     button:{
//         width:'50%',
//         paddingVertical:10,
//         alignItems:'center',
//         borderColor:"#0c0c0c",
//     },
//     yesButton:{
//         borderTopLeftRadius:5,
//         borderBottomLeftRadius:5,
//         borderRightWidth:1,
//     },
//     noButton:{
//         borderTopRightRadius:5,
//         borderBottomRightRadius:5,
//         borderLeftWidth:1,
//     }
// })