import React, { useState, useCallback } from 'react';
import { Appbar, PaperProvider, Text, TextInput, Button} from 'react-native-paper';

const Login = () => {
    const[userName,setUserName] = useState("");
    const[passWord,setPassword] = useState("");

const sendData=useCallback(()=>{
    
},[])


    return (
        <>
        <TextInput
          label="Username: "
          value={userName}
          onChange={(event)=>{setUserName(event.target.value)}}
          />

        <TextInput
          label="Password: "
          value={passWord}
          onChange={(event)=>{setPassword(event.target.value)}}
        />

        <Button mode="contained" onPress={sendData}>
            Log In
        </Button>
      </>
    );
};

export default Login;