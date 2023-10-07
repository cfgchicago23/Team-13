import { Text, Searchbar, Card, Avatar, IconButton } from "react-native-paper"
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore"
import { getFirebaseStore } from "../../utils/firebase";

const styles = StyleSheet.create({
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

  useEffect(() => {
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
    getData()
  }, [])

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <Searchbar
        placeholder="Search Location"
        onChangeText={ onChangeSearch }
        value={ searchQuery }
        style={ styles.searchbar }
      />
      {clubs ?
        clubs.map((club) => 
          <Card.Title
            title={club.name}
            subtitle={`${club.region}, ${club.country}`}
            left={(props) => <Avatar.Icon {...props} icon="office-building" />}
            right={(props) => <IconButton {...props} icon="arrow-right-thin" onPress={() => {
              navigation.navigate("Club", { club: club })
            }} />}
          />
        ) : null
      }
    </>
  );
}