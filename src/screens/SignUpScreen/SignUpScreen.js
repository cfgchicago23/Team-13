import React, { useState, useCallback } from 'react';
import { Appbar, PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { initFirebaseApp, getFirebaseStore, signUp } from '../../utils/firebase'

const Signup = ({naviation}) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const sendData = async () => {
    navigation.navigate("Community")
    // const user = await signUp(email, passWord)
    // if (user != Null) {
    //   naviation.navigate("Community")
    // }
    // else {
    //   console.log("Invalid User / Password")
    // }

  }


  return (
    <>


      <TextInput
        label="Username: "
        value={userName}
        onChange={(event) => { setUserName(event.target.value) }}
      />

      <TextInput
        label="Password: "
        value={passWord}
        onChange={(event) => { setPassword(event.target.value) }}
      />

      <Button mode="contained" onPress={sendData}>
        Log In
      </Button>
    </>
  );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#d496a7',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    hero: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
    },
    space: {
        height: 40,
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

export default Signup;