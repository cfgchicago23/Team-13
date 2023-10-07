import { Modal, Portal, Button, PaperProvider, Card, FAB } from 'react-native-paper';
import { useEffect, useState, React } from "react";
import { StyleSheet, View, Text  } from "react-native";
import { collection, getDocs } from "firebase/firestore"
import { getFirebaseStore } from "../../utils/firebase";
import { useRoute } from '@react-navigation/native';

export default function Club({ route }) {

  const club = route.params.club;
  // const [visible, setVisible] = useState(false);

  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  // const containerStyle = { backgroundColor: 'white', padding: 20 };


  return (
    <View>
      <Text>{`Name: ${club.name}`}</Text>
      <Text>{`Location: ${club.region}, ${club.country}`}</Text>
      <Text>{`Member Count: ${club.memberCount}`}</Text>
      <FAB
        icon="plus"
        label='Join'
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}


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