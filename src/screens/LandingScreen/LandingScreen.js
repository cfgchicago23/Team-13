import React, { useState } from 'react';
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
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const languages = [
    'English',
    'Spanish',
    'French',
    'Hindi',
    'Magyar',
    'Thai',
    'Burmese',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topNavigation}>
        <View style={styles.menuIconContainer}>
          <IconButton
            icon={menuVisible ? 'close' : 'dots-vertical'}
            color="#fff"
            size={24}
            onPress={toggleMenu}
          />
        </View>
      </View>
      
      {menuVisible && (
        <View style={styles.menu}>
          {languages.map((language, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Language', { language });
                toggleMenu(); // Close the menu
              }}
            >
              <Text style={styles.menuOption}>{language}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}



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
            <Text style={styles.buttonText}>Participant/Club Leader</Text>
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
  topNavigation: {
    backgroundColor: '#d496a7',
    paddingBottom: 10,
  },
  icon: {

  },
  menuIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    zIndex: 2,
  },
  menuOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    height: 300,
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