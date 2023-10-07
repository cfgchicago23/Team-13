import { Appbar as PaperAppbar, Text, Searchbar, Card, Avatar, IconButton, Caption } from "react-native-paper"
import { useEffect, useState, React } from "react";
import { StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore"
import { getFirebaseStore } from "../../utils/firebase";
import { useRoute } from '@react-navigation/native';  


export default function Club() {
  const route = useRoute();
  const { club } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [clubs, setClubs] = useState([]);

  return (
    <>
      {/* Club name */}
      <PaperAppbar.Header>
        <PaperAppbar.BackAction onPress={() => {}} />
        <PaperAppbar.Content 
            title = {name}
        />
      </PaperAppbar.Header>
      {/* Club location */}
      {/* number of members */}

    </>
  );
}