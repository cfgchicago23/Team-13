import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const notificationsData = [
  {
    logo: require('./alert.png'),
    count: 3,
    message: 'You have 3 new alerts',
  },
  {
    logo: require('./bulb.jpg'),
    count: 1,
    message: 'A new idea for you!',
  },
  {
    logo: require('./check.png'),
    count: 0,
    message: 'All tasks completed.',
  },
];

export default function Notifications() {
  return (
    <ScrollView>
      {notificationsData.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Image size={40} source={item.logo} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationMessage}>{item.message}</Text>
              {item.count > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>{item.count}</Text>
                </View>
              )}
            </View>
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContent: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationMessage: {
    flex: 1,
  },
  notificationBadge: {
    backgroundColor: '#d496a7',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
