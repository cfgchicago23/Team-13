import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const logo = require("./Empower.png");

export default function HelpScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Daughter Project™</Text>
          <Text style={styles.header}>Find HELP Below</Text>
        </View>
        <View>
          <Text style={styles.question}>
            1. What should I do if I suspect someone I know is experiencing
            abuse or exploitation?
          </Text>
          <Text style={styles.answer}>
            If you suspect someone is experiencing abuse or exploitation, it's
            crucial to reach out to a trusted adult or authority figure who can
            help. You can also contact local organizations or law enforcement
            for guidance and support.
          </Text>

          <Text style={styles.question}>
            2. How can I start an Empower club in my community?
          </Text>
          <Text style={styles.answer}>
            Starting an Empower club in your community is a great way to empower
            young girls. To begin, visit our "Start a Club" page for resources
            and guidance on the process.
          </Text>

          <Text style={styles.question}>
            3. What steps can I take to protect girls from abuse and
            exploitation in my community?
          </Text>
          <Text style={styles.answer}>
            You can take proactive steps to protect girls by educating yourself
            and others about the signs of abuse and exploitation. Additionally,
            consider volunteering with organizations like Global Family to make
            a positive impact.
          </Text>

          <Text style={styles.question}>
            4. What is the first thing I should do if I suspect a child is at
            risk of abuse or exploitation?
          </Text>
          <Text style={styles.answer}>
            If you suspect a child is at risk of abuse or exploitation, report
            your concerns to the appropriate authorities or child protective
            services immediately. It's crucial to prioritize the child's safety.
          </Text>

          <Text style={styles.question}>
            5. How can I access the Empower curriculum as a club leader?
          </Text>
          <Text style={styles.answer}>
            As a club leader, you can access the Empower curriculum by signing
            up on our website and gaining access to downloadable resources and
            online forums for collaboration with other leaders.
          </Text>

          <Text style={styles.question}>
            6. What resources are available for girls who want to participate in
            Empower at their own pace?
          </Text>
          <Text style={styles.answer}>
            Girls who want to participate in Empower at their own pace can
            access online videos and lessons on our platform. Simply visit our
            website and follow the instructions to get started.
          </Text>

          <Text style={styles.question}>
            7. How can I support the mission of Global Family in protecting
            at-risk children?
          </Text>
          <Text style={styles.answer}>
            You can support Global Family's mission by donating to our
            organization, volunteering your time, or spreading awareness about
            our cause in your community.
          </Text>

          <Text style={styles.question}>
            8. What steps can I take to help young girls build healthy and
            lasting friendships?
          </Text>
          <Text style={styles.answer}>
            You can help young girls build healthy friendships by encouraging
            open communication, teaching conflict resolution skills, and
            promoting empathy and respect in your community.
          </Text>

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
    marginBottom: 20,
    backgroundColor: "#f1dede", // Header BG
    borderRadius: 40,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#cc8b86", // Daughter Project
    marginTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5d576b", // Find HELP Below
    marginTop: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5d576b", // Q's
    marginBottom: 10,
  },
  answer: {
    fontSize: 14,
    color: "#f1f7f9", // A's
    marginBottom: 25,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
  },
});
