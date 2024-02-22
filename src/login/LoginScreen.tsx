import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function LoginScreen():JSX.Element{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    function login(){
        const dados ={
            email:email,
            password:password,
        }

        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={require('../assets/images/user.png')}/>

            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"000000"}
                 onChangeText={(textEmail)=> setEmail(textEmail)}/>

                <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"151413"}
                 onChangeText={(textPassword)=> setPassword(textPassword)}
                 secureTextEntry/>
                

                <TouchableOpacity style={styles.button}  onPress={()=>{login()}}>
                
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF1493'
    },
    logo:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop:-150

    },
    card:{
        backgroundColor:'#EE82EE',
        width:300,
        borderRadius:30,
        padding:20,
        elevation:3,
        shadowColor:'rgba(0,0,0,0.3)',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
    },
    title:{
        fontSize:19,
        fontWeight:'bold',
        color:"black",
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        backgroundColor:"#D7D4D1",
        height:40,
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:"#000000"

    },
    button:{
        backgroundColor:"#FF1493",
        height:40,
        borderRadius:8
    },
    buttonText:{
        color:"#FFFFFF",
        textAlign:'center',
        fontSize:16,
        lineHeight:40,

    },

forgotPassword:{
    color:"white",
    textAlign:'center',
    marginTop:10,


}

});

export default LoginScreen;