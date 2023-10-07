import * as React from "react";
import { View, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#d496a7", // Background Pink
    primary: "#cc8b86", // Title Daughter Project Pink
    text: "#5d576b", // Text Dark Purple
    white: "#f1f7f9", // Text White
  },
};

const LeftContent = ({ avatarImage }) => (
  <Avatar.Image size={40} source={avatarImage} />
);

export default function NewsFeed() {
  const newsfeedData = [
    {
      userName: "Admin 1",
      postTitle: "Tips to Prevent Child Trafficking",
      postContent:
        "Here are some important tips to prevent child trafficking in your community.",
      postImage: "https://picsum.photos/700",
      avatarImage: require("./avatar.jpg"),
      likeCount: 15,
    },
    {
      userName: "Admin 2",
      postTitle: "Community Building Event",
      postContent:
        "Join us for a community-building event this Saturday. Let's work together to protect children.",
      postImage: "https://picsum.photos/701",
      avatarImage: require("./avatar2.jpeg"),
      likeCount: 10,
    },
    {
      userName: "Admin 3",
      postTitle: "Providing Family-Based Care",
      postContent:
        "Learn how we provide family-based care to children who are victims of abuse and exploitation.",
      postImage: "https://picsum.photos/702",
      avatarImage: require("./avatar3.jpeg"),
      likeCount: 20,
    },
    {
      userName: "Admin 4",
      postTitle: "Report Suspicious Activity",
      postContent:
        "If you see any suspicious activity related to child trafficking, please report it immediately.",
      postImage: "https://picsum.photos/703",
      avatarImage: require("./avatar4.avif"),
      likeCount: 5,
    },
  ];

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        {newsfeedData.map((item, index) => (
          <Card key={index} style={{ margin: 16 }}>
            <Card.Title
              title={item.userName}
              subtitle="2 hours ago"
              left={() => <LeftContent avatarImage={item.avatarImage} />}
            />
            <Card.Content>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.postTitle}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: theme.colors.text,
                  marginBottom: 10,
                }}
              >
                {item.postContent}
              </Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.postImage }} />
            <Card.Actions>
              <Button icon="heart" color={theme.colors.primary}>
                {item.likeCount}
              </Button>
              <Button>Comment</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}
