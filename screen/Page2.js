import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Page2() {
    return (
        <View style={styles.text}>
            <Text  >Second Page</Text>
        </View>
    )
}


const styles=StyleSheet.create({

    
    text:{textAlign:'center',
    

backgroundColor:'yellow',
height:'100%',
paddingTop:100,}
    ,})