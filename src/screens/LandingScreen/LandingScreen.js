import React from 'react';
import { ImageBackground } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Example({ navigation }) {
  return (
    <ScrollView style={styles.container}>
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
            Love{'\n'}Create {' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}> Share</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Education")
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Student</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Auth")
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Participant/ Club Leader</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Help")
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Help
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {

  },
  hero: {
    backgroundColor: '#d496a7',
    marginTop: 50,
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
  }, appName: {
    backgroundColor: '#d496a7',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  }, appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  }, text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  }, button: {
    backgroundColor: '#d496a7',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 15
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});