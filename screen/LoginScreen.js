import React, { Component } from 'react'
import { Text, View,TouchableOpacity,TextInput , StyleSheet} from 'react-native'

const userInfo={username:'admin', password:'admin'}
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            password:''
        }
    }
    
    render() {
        return (
            <View>
                <TextInput style={styles.input} placeholder='Username' onChangeText={(username)=>this.setState({username})}
                value={this.state.username} autoCapitalize='none'
                />
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} 
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                />
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userbtn}
                    onPress={this._login}
                    //  onPress={()=>alert('login')}
                      >
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userbtn} onPress={()=>alert('signup')}>
                        <Text>signup</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.navigateTo} ><Text>kkj</Text></TouchableOpacity>
            </View>
        )
    }

    navigateTo=()=>{this.props.navigation.navigate('Home')}

    _login=()=>{
        if(userInfo.username===this.state.username && userInfo.password===this.state.password){
        this.props.navigation.navigate('Home',this.state.username)}
        else{alert(`username and password is not 'admin'`)}
    }
}




const styles=StyleSheet.create({

    
    text:{textAlign:'center'}
    ,
    inputContainer:{
        width:'90%',
        margin:'auto'
    },
    
    input:{
        // width:'80%',
    padding:15,
    marginBottom:10,
    },
    
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    userbtn:{
        backgroundColor:'blue',
        padding:10,
    }
    
    })