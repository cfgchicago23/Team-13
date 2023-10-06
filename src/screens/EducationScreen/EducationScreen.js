import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function BasicButtonExample() {
    return (
        <Button title="Placeholder Dropdown" onPress={() => {}} />
    );
}

function About() {
    return (
        <View style={styles.container}>
        <Text>About</Text>
        <Text>Empower consists of lessons around building character, overcoming challenges, influencing others well, and planning for the future. Lessons consist of foundational lessons designed to build a sense of community and friendship amongst young girls and strengthen self-image, social skills and healthy habits. Each lesson is composed of a lesson, discussion, activities and a sample journal prompt for you to record your thoughts. The lessons are adaptable to different age groups, religious affiliations and educational systems.</Text>
        <Text>Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility. While each girl encounters different trials, it is important to provide a safe environment to prepare you for the future. Many of the stories in these lessons involve older female characters that are portrayed as trusted figures. These trusted relationships should encourage you to reflect on the trusted and reliable adult females in your life.</Text>
        <Text>Lessons that address positive thinking are designed to help you discover healthy ways of dealing with stress and difficult situations. Those that address facing obstacles and enduring hardship are meant to allow a space where you can identify and tackle the challenges you face, whether at home, school or in your community! Let's get started!</Text>
        </View>
    );
}

export default function EducationScreen() {
  return (
    <View style={styles.container}>
        <Text>Building Education Screen</Text>
        
        <About />
        <BasicButtonExample />

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
