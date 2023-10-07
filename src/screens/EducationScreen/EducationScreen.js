import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { List } from 'react-native-paper';

const lessons = [
  { title: "Introduction" },
  {
    title: "Being Unique",
    steps: 3,
    contents: ["Story", "All About Me Autobiography", "Journal"]
  },
  {
    title: "Being a Good Friend",
    steps: 3,
    contents: ["Story", "Maintaining a Balanced Diet", "Tips for Planning Meals", "Grow Your Own Garden", "Journal"]
  },
  {
    title: "Making Healthy Choices",
    steps: 5,
    contents: ["Story", "Good Friends and Bad Friends", "Journal"]
  },
];

function LessonAccordion({ title, steps, contents }) {
  return (
    <List.Accordion
      title={`${title}${steps ? ` - ${steps} steps` : ''}`}
      left={props => <List.Icon {...props} icon="folder" />}>
      {contents && contents.map(content => (
        <List.Item key={content} title={content} />
      ))}
    </List.Accordion>
  );
}

function About() {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.paragraph}>Empower consists of lessons around building character, overcoming challenges, influencing others well, and planning for the future...</Text>
            <Text style={styles.paragraph}>Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility. While each girl encounters different trials, it is important to provide a safe environment to prepare you for the future. Many of the stories in these lessons involve older female characters that are portrayed as trusted figures. These trusted relationships should encourage you to reflect on the trusted and reliable adult females in your life.
</Text>
            <Text style={styles.paragraph}>Lessons that address positive thinking are designed to help you discover healthy ways of dealing with stress and difficult situations. Those that address facing obstacles and enduring hardship are meant to allow a space where you can identify and tackle the challenges you face, whether at home, school or in your community! Let's get started!
</Text>
        </View>
    );
}

export default function EducationScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.appTitle}>Education Screen</Text>
        <Text style={styles.title}>Empower</Text>

        <Text style={styles.header}>...Going to add a video</Text>

        <Text style={styles.title}>About</Text>
        <About />

        <Text style={styles.title}>Lesson's Overview</Text>
        <List.Section>
          {lessons.map(lesson => (
            <LessonAccordion key={lesson.title} {...lesson} />
          ))}
        </List.Section>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#281b52",
    textAlign: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "500",
    color: "#281b52",
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 12,
    color: '#555',
  },
  aboutContainer: {
    marginVertical: 20,
  },
});
