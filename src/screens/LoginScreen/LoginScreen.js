import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Appbar, PaperProvider, Button } from 'react-native-paper';
import { initFirebaseApp, getFirebaseStore, signIn } from '../../utils/firebase'


const Login = ({naviation}) => {
    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");

    const sendData = async () => {
        const user = await signIn(email, passWord)
        if (user != Null) {
            naviation.navigate("Community")
        }
        else {
            console.log("Invalid User / Password")
        }

    }


    return (
        //<>
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <View style={styles.hero}>
                <TextInput
                    label="Email: "
                    value={email}
                    onChange={(event) => { setUserName(event.target.value) }}
                    style={styles.input}
                />

                <TextInput
                    label="Password: "
                    value={passWord}
                    onChange={(event) => { setPassword(event.target.value) }}
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