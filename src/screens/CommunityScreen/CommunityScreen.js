import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Clubs from './ClubsScreen';
import Forums from './ForumsScreen';
import NewsFeed from './NewsfeedScreen';
import Settings from './SettingsScreen';

const SettingsRoute = () => <Settings />;

const NewsFeedRoute = () => <NewsFeed />;

const ClubsRoute = () => <Clubs />;

const ForumsRoute = () => <Forums />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'forums', title: 'Chat', focusedIcon: 'chat', unfocusedIcon: 'chat-outline'},
    { key: 'newsfeed', title: 'News', focusedIcon: 'newspaper-variant', unfocusedIcon: 'newspaper-variant-outline' },
    { key: 'clubs', title: 'Clubs', focusedIcon: 'hand-heart', unfocusedIcon: 'hand-heart-outline' },
    { key: 'settings', title: 'Settings', focusedIcon: 'account-settings', unfocusedIcon: 'account-settings-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    forums: ForumsRoute,
    newsfeed: NewsFeedRoute,
    clubs: ClubsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;