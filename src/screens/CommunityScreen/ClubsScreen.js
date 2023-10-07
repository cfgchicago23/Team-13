import { Text, Searchbar, Card, Avatar, IconButton } from "react-native-paper"
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { doc, getDoc } from "firebase/firestore" 

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

export default function Clubs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [clubs, setClubs] = useState(defaultClubs);

  useEffect(() => {
    const getData = async () => {
      try {
        
      }
      catch (e) {

      }
    }
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
            subtitle={club.location}
            left={(props) => <Avatar.Icon {...props} icon="office-building" />}
            right={(props) => <IconButton {...props} icon="arrow-right-thin" onPress={() => {}} />}
          />
        ) : null
      }
    </>
  );
}