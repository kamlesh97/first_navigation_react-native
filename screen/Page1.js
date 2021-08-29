import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Page1() {
    return (
        <View style={styles.text}>
            <Text  >First Page</Text>
        </View>
    )
}


const styles=StyleSheet.create({

    
    text:{textAlign:'center',
    

backgroundColor:'red',
height:'100%',
paddingTop:100,}
    ,})