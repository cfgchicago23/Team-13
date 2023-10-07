import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Appbar, PaperProvider, Button} from 'react-native-paper';

const Login = () => {
    const[email,setEmail] = useState("");
    const[passWord,setPassword] = useState("");

const sendData=useCallback(()=>{
    
},[])


    return (
        //<>
        <View style={styles.container}>

            <View style={styles.hero}>
                <Image
                    source={require('./empower.png')}
                    style={[styles.logo, styles.heroImage]}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <View style={styles.hero}>
                    <Text style={styles.label}>Email :</Text>
                    <TextInput
                    label="Email: "
                    value={email}
                    onChange={(event)=>{setUserName(event.target.value)}}
                    style={styles.input}
                    />

                    <Text style={styles.label}>Password :</Text>
                    <TextInput
                    label="Password: "
                    value={passWord}
                    onChange={(event)=>{setPassword(event.target.value)}}
                    style={styles.input}
                    />

                    <Button 
                        mode="contained" 
                        onPress={sendData}
                        style={styles.button}
                        labelStyle={styles.buttonText}
                    >
                        Log In
                    </Button>
                </View>
            </View>
        </View>
      //</>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#d496a7',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    hero: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
    },
    heroImage: {
        width: '100%',
        height: 400,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black',
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#f2d3e1',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        color: 'black',
    },
    button: {
      backgroundColor: '#d496a7',
      paddingVertical: 12,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      marginTop: 15,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: '500',
      color: '#fff',
    },
  };

export default Login;