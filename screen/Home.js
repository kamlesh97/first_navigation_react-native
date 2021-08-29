import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
            
        <TouchableOpacity onPress={this.navigateTo1}><Text style={styles.text}>page - 1</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.navigateTo2}><Text style={styles.text}>page - 2</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.navigateTo3}><Text style={styles.text}>page - 3</Text></TouchableOpacity>
        
        
        
        
   
    

            </View>
        )
    }

    navigateTo1=()=>{this.props.navigation.navigate('Page1')}
    navigateTo2=()=>{this.props.navigation.navigate('Page2')}
    navigateTo3=()=>{this.props.navigation.navigate('Page3')}
}


const styles=StyleSheet.create({

    
    text:{textAlign:'center',
    
marginTop:60}
    ,})