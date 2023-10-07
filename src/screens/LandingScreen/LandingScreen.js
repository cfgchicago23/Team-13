// import * as React from 'react';
// import { Avatar, Button, Card, Text } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// const LandingScreen = () => (
//   <Card>
//     <Card.Cover source={require('./globalfamily-logo.jpeg')} />
//     <Card theme={{ colors: { primary: 'green' } }} />
//   </Card>

// );

// export default LandingScreen;
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Example() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require('./empower.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Love{'\n'}Create  Share{' '}
          </Text>
          <Text style={styles.text}>
          Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
         
         
        


          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#d496a7',
    marginTop: 45,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d496a7',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 25
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});
