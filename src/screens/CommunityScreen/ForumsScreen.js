import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const forumData = [
  {
    title: "General Discussion",
    description: "Discuss anything related to the community.",
    lastPost: "Last Post: 2 hours ago",
    notifications: 1,
    emoji: "🔔",
  },
  {
    title: "Technical Support",
    description: "Get help with technical issues and troubleshooting.",
    lastPost: "Last Post: 1 day ago",
    notifications: 0,
    emoji: "🔔",
  },
  {
    title: "Announcements",
    description: "Stay updated with community announcements.",
    lastPost: "Last Post: 3 days ago",
    notifications: 3,
    emoji: "🔔",
  },
];

export default function Forums() {
  return (
    <ScrollView style={{ flex: 1 }}>
      {forumData.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {item.notifications > 0 && (
                <View style={styles.notification}>
                  <Text style={styles.notificationText}>
                    {item.emoji} {item.notifications}
                  </Text>
                </View>
              )}
            </View>
            <Text style={[styles.description, { color: "#5d576b" }]}>
              {item.description}
            </Text>
            <Text style={[styles.lastPost, { color: "#5d576b" }]}>
              {item.lastPost}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    color: "#5d576b",
  },
  lastPost: {
    marginTop: 8,
    fontSize: 12,
    color: "#5d576b",
  },
  notification: {
    backgroundColor: "#d496a7",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  notificationText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
