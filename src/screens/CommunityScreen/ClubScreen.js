import { Appbar as PaperAppbar, Text, Searchbar, Card, Avatar, IconButton, Caption } from "react-native-paper"
import { useEffect, useState, React } from "react";
import { StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore"
import { getFirebaseStore } from "../../utils/firebase";
import { useRoute } from '@react-navigation/native';  


export default function Club({ route }) {
  const club  = route.params.club;
  const name = club.name;
  const location = club.country;
  const [searchQuery, setSearchQuery] = useState('');
  const [clubs, setClubs] = useState([]);

  const number = club.membercount

  return (
    <>
      
      <Text> {name} </Text>
      <Text> {location} </Text>
      <Text> {number} </Text>
      {/* number of members */}

    </>
  );
}