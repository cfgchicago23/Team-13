import React from 'react';
import ReactPlayer from 'react-player'
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
    contents: ["Story", "Good Friends and Bad Friends", "Journal"]
  },
  {
    title: "Making Healthy Choices",
    steps: 5,
    contents: ["Story", "Maintaining a Balanced Diet", "Tips for Planning Meals", "Grow Your Own Garden", "Journal"]
  },
  {
    title: "What Makes You Happy?",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Self-Image",
    steps: 4,
    contents: ["Story", "Reflection Questions", "Dove Evolution Campaign", "Journal"]
  },
  {
    title: "Choosing Good Friends",
    steps: 4,
    contents: ["Story", "Reflection Questions","Friendship Letters", "Journal"]
  },
  {
    title: "Peer Pressure",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Thinking Positively",
    steps: 5,
    contents: ["Story", "Reflection Questions", "Practicing Gratitude", "Positively Me", "Journal"]
  },
  {
    title: "Staying Optimistic",
    steps: 4,
    contents: ["Story", "Reflection Questions", "Thank You & Encouragement Cards","Journal"]
  },
  {
    title: "Stress Less",
    steps: 4,
    contents: ["Story", "Reflection Questions", "Weekly Planners","Journal"]
  },
  {
    title: "Influencing Well",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Facing Obstacles",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Speaking Out",
    steps: 4,
    contents: ["Story", "Reflection Questions","Nature Prints", "Journal"]
  },
  {
    title: "Enduring Hardship",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Dealing with Change",
    steps: 4,
    contents: ["Story", "Reflection Questions", "Painting Emotions","Journal"]
  },
  {
    title: "Discovering Potential?",
    steps: 5,
    contents: ["Story", "Reflection Questions", "I Love Being a Girl", "Footprints","Journal"]
  },
  {
    title: "Relationships",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Staying Safe",
    steps: 4,
    contents: ["Story", "Chart","Reflection Questions", "Journal"]
  },
  {
    title: "It's Ok to Say No",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Journal"]
  },
  {
    title: "Setting Goals",
    steps: 3,
    contents: ["Story", "Reflection Questions","Venn Diagrams", "Journal"]
  },
  {
    title: "Learning How to Lead",
    steps: 4,
    contents: ["Story", "Reflection Questions", "Card Making","Journal"]
  },
  {
    title: "Being a Role Model",
    steps: 3,
    contents: ["Story", "Reflection Questions", "Future Self-Portrait","Journal"]
  },
];

function LessonAccordion({ title, steps, contents }) {
  return (
    <List.Accordion
      title={`${title}${steps ? ` - ${steps} steps` : ''}`}
      left={(props) => <List.Icon {...props} icon="plus" color="black" fontFamily= "georgia"/>}
      style={{ backgroundColor: '#FFDDDD' }}
      titleStyle={{ color: 'black', fontWeight: 'bold', fontFamily: "georgia"}} 
    >
      {contents &&
        contents.map((content) => (
          <List.Item
            key={content}
            title={content}
            titleStyle={{ color: 'black' }}
          />
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
        <Text style={styles.title}>82 Steps</Text>

        <View style={styles.videoContainer}>
          <ReactPlayer url="https://youtu.be/_v4TPH8Wlcw" />
        </View>  

        <Text style={styles.title}>About</Text>
        <About />

        <Text style={styles.title}>Overview</Text>
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
    color: '#b77a72',
    textAlign: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    fontFamily: "georgia",
    marginBottom: 12,
    color: '#555',
  },
  aboutContainer: {
    marginVertical: 20,
    color: '#d496a7',
  },
  contentText: {
    color: 'black',
    fontFamily: "georgia",
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  centeredText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
