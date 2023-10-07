import { Text, Searchbar, Card, Avatar, IconButton, FAB } from "react-native-paper"
import { Modal, Portal, Button, TextInput, PaperProvider } from 'react-native-paper';
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { collection, getDocs, doc, setDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getFirebaseStore } from "../../utils/firebase";

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  searchbar: {
    marginTop: 8
  }
})


const defaultClubs = [
  {
    name: "club1",
    location: "location1",
  },
  {
    name: "club2",
    location: "location2",
  }
]

export default function Clubs({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [clubs, setClubs] = useState([]);



  const [clubName, setClubName] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const sendData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirebaseStore();
    await setDoc(doc(db, "clubs", clubName), {
      country: country,
      region: region,
      memberCount: 1,
      name: clubName,
      members: [],
      leader: user.email
    });
    getData()
    setVisible(false)
  }

  const getData = async () => {
    try {
      const resp = await getDocs(collection(getFirebaseStore(), "clubs"));
      const data = []
      resp.forEach((doc) => {
        data.push(doc.data())
      })
      setClubs(data)
    }
    catch (e) {
      setClubs([])
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const onChangeSearch = query => setSearchQuery(query);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };


  return (
    <>
      <Searchbar
        placeholder="Search Location"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      {clubs ?
        clubs.map((club, idx) =>
          <Card.Title
            key={idx}
            title={club.name}
            subtitle={`${club.region}, ${club.country}`}
            left={(props) => <Avatar.Icon {...props} icon="office-building" />}
            right={(props) => <IconButton {...props} icon="arrow-right-thin" onPress={() => {
              navigation.navigate("Club", { club: club })
            }} />}
          />
        ) : null
      }

      <PaperProvider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Sign up</Text>
            <TextInput
              label="Club Name"
              value={clubName}
              onChange={(event) => { setClubName(event.target.value) }}
            />

            <TextInput
              label="Country"
              value={country}
              onChange={(event) => { setCountry(event.target.value) }}
            />

            <TextInput
              label="Region"
              value={region}
              onChange={(event) => { setRegion(event.target.value) }}
            />

            <Button
              mode="contained"
              onPress={sendData}>
              Submit
            </Button>
          </Modal>

        </Portal>
        <FAB
          icon="plus"
          style={styles.fab}
          label="New Club"
          onPress={showModal}
        />
      </PaperProvider>
    </>
  );
}