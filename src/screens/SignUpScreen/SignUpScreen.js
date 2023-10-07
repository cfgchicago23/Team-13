import React, { useState, useCallback } from 'react';
import { Appbar, PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { initFirebaseApp, getFirebaseStore, signUp } from '../../utils/firebase'

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const sendData = async () => {
    const user = await signUp(email, passWord)
    if (user != Null) {
        naviation.navigate("Community")
    }
    else {
        console.log("Invalid User / Password")
    }

}


  return (
    <>
      <View>
        <Appbar.Header>
          <Appbar.Content title="Title" />
        </Appbar.Header>
      </View>



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

export default Signup;