import React, { useState, useEffect, createContext, useContext } from "react";
import { Text, Switch, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default function Settings() {
  const { colors } = useTheme();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  // Load dark mode preference from AsyncStorage on component mount
  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        const preference = await AsyncStorage.getItem("darkMode");
        if (preference !== null) {
          setIsDarkModeEnabled(preference === "true");
        }
      } catch (error) {
        console.error("Error loading dark mode preference:", error);
      }
    };

    loadDarkModePreference();
  }, []);

  // Save dark mode preference to AsyncStorage when it changes
  useEffect(() => {
    const saveDarkModePreference = async () => {
      try {
        await AsyncStorage.setItem("darkMode", String(isDarkModeEnabled));
      } catch (error) {
        console.error("Error saving dark mode preference:", error);
      }
    };

    saveDarkModePreference();
  }, [isDarkModeEnabled]);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  const theme = {
    ...colors,
    background: isDarkModeEnabled ? "#d496a7" : "#fff",
    text: isDarkModeEnabled ? "#fff" : "#5d576b",
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    settingstext: {
      color: theme.text,
      alignSelf: "center",
      fontSize: 25,
      marginBottom: 5,
      fontWeight: "bold",
    },
    text: {
      color: theme.text,
      fontSize: 15,
    },
    footer: {
      position: "absolute",
      bottom: 10,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 12,
      color: theme.text,
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <Text style={styles.settingstext}>Settings</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch
            value={isDarkModeEnabled}
            onValueChange={toggleDarkMode}
            thumbColor={theme.primary}
            trackColor={{ false: "#ccc", true: "#888" }}
          />
        </View>
        <Text style={styles.footer}>Version 1.00</Text>
      </View>
    </ThemeContext.Provider>
  );
}
