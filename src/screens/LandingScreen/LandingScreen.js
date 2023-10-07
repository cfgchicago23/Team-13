import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
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
            Love{'\n'}Create  Share{' '}
          </Text>
          <Text style={styles.text}>
          Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <Button title='nice' onPress={() => {
        navigation.navigate("Education")
      }} />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
