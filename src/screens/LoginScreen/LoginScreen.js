
import { PaperProvider, Text, TextInput} from 'react-native-paper';

export const AuthPage = () => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    return (
    <>
        <Text>
            this is a test
        </Text>

        <TextInput
          label="Username: "
          value={"Username"}
          onChangeText={text => setUserName(userName)}
        />

        <TextInput
          label="Password: "
          value={"Password"}
          onChangeText={text => setPassword(password)}
        />

      </>
    );
};