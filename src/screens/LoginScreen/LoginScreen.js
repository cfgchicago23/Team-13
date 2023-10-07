
import React, { useState, useCallback } from 'react';
import { PaperProvider, Text, TextInput, Button} from 'react-native-paper';

export const AuthPage = () => {
    const[userName,setUserName] = useState("");
    const[passWord,setPassword] = useState("");

const sendData=useCallback(()=>{
    
},[])


    return (
        <>
        <Text>
            this is a test
        </Text>
    
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

