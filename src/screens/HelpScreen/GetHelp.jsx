import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const logo = require("./Empower.png");

export default function GetHelp() {
  // Define state to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  // Function to toggle question expansion
  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      // If question is already expanded, collapse it
      setExpandedQuestions(expandedQuestions.filter((item) => item !== index));
    } else {
      // If question is collapsed, expand it
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  // FAQ data
  const faqData = [
    {
      question:
        "What should I do if I suspect someone I know is experiencing abuse or exploitation?",
      answer:
        "If you suspect someone is experiencing abuse or exploitation, it's crucial to reach out to a trusted adult or authority figure who can help. You can also contact local organizations or law enforcement for guidance and support.",
    },
    {
      question: "How can I start an Empower club in my community?",
      answer:
        "Starting an Empower club in your community is a great way to empower young girls. To begin, visit our 'Start a Club' page for resources and guidance on the process.",
    },
    {
      question:
        "What steps can I take to protect girls from abuse and exploitation in my community?",
      answer:
        "You can take proactive steps to protect girls by educating yourself and others about the signs of abuse and exploitation. Additionally, consider volunteering with organizations like Global Family to make a positive impact.",
    },
    {
      question:
        "What is the first thing I should do if I suspect a child is at risk of abuse or exploitation?",
      answer:
        "If you suspect a child is at risk of abuse or exploitation, report your concerns to the appropriate authorities or child protective services immediately. It's crucial to prioritize the child's safety.",
    },
    {
      question: "How can I access the Empower curriculum as a club leader?",
      answer:
        "As a club leader, you can access the Empower curriculum by signing up on our website and gaining access to downloadable resources and online forums for collaboration with other leaders.",
    },
    {
      question:
        "What resources are available for girls who want to participate in Empower at their own pace?",
      answer:
        "Girls who want to participate in Empower at their own pace can access online videos and lessons on our platform. Simply visit our website and follow the instructions to get started.",
    },
    {
      question:
        "How can I support the mission of Global Family in protecting at-risk children?",
      answer:
        "You can support Global Family's mission by donating to our organization, volunteering your time, or spreading awareness about our cause in your community.",
    },
    {
      question:
        "What steps can I take to help young girls build healthy and lasting friendships?",
      answer:
        "You can help young girls build healthy friendships by encouraging open communication, teaching conflict resolution skills, and promoting empathy and respect in your community.",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Daughter Project™</Text>
          <Text style={styles.header}>Discover Answers - Click to Empower</Text>
        </View>

        <View>
          {faqData.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => toggleQuestion(index)}>
              <Text style={styles.question}>{item.question}</Text>
              {expandedQuestions.includes(index) && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d496a7", // Main BG
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: -15,
    marginBottom: 35,
    backgroundColor: "#f1dede", // Header BG
    borderRadius: 45,
    padding: 13.5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#b77a72", // Daughter Project
    fontFamily: "serif",
    fontStyle: "italic",
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5d576b", // Discover Answers - Click to Empower
    fontStyle: "italic",
    marginTop: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5d576b", // Q's
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#b77a72",
    paddingBottom: 15,
  },
  answer: {
    fontSize: 14,
    color: "#f1f7f9", // A's
    marginBottom: 25,
    paddingBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
  },
});
