import React, { useState, useCallback } from 'react';
import { Appbar, PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { initFirebaseApp, getFirebaseStore, signUp } from '../../utils/firebase'

const Signup = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async () => {
    const user = await signUp(email, password)
    if (user) {
      naviation.navigate("Community")
    }
    else {
      console.log("Invalid Email / Password")
    }
  }


  return (
    <>


      <TextInput
        label="Email: "
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
      />

      <TextInput
        label="Password: "
        value={password}
        onChange={(event) => { setPassword(event.target.value) }}
      />

      <Button mode="contained" onPress={sendData}>
        Log In
      </Button>
    </>
  );
};

export default Signup;