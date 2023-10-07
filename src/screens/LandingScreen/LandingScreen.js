import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { IconButton, Menu, Text as PaperText } from "react-native-paper";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Example({ navigation }) {
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const openLanguageMenu = () => setLanguageMenuVisible(true);
  const closeLanguageMenu = () => setLanguageMenuVisible(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    closeLanguageMenu();
  };

  const translations = {
    description: {
      English:
        "Empower is designed to teach you how to address the challenges and obstacles that you will face, especially as you grow older and take on more responsibility.",
      Spanish:
        "Empower está diseñado para enseñarte cómo enfrentar los desafíos y obstáculos que enfrentarás, especialmente a medida que envejeces y asumes más responsabilidades.",
      French:
        "Empower est conçu pour vous apprendre à aborder les défis et les obstacles que vous rencontrerez, en particulier à mesure que vous vieillissez et prenez davantage de responsabilités.",
      Hindi:
        "एम्पावर आपको सिखाने के लिए डिज़ाइन किया गया है कि आप कैसे अपने आगामी और जिम्मेदारियों को और बढ़ते हुए देखते हुए कैसे चुनौतियों और बाधाओं का सामना करेंगे।",
      Magyar:
        "Az Empower célja megtanítani Önt arra, hogyan kezelje azokat a kihívásokat és akadályokat, amelyekkel szembenéz majd, különösen ahogy idősebb lesz és több felelősséget vállal.",
      Thai: "Empower ถูกออกแบบมาเพื่อสอนคุณวิธีการแก้ไขความท้าทายและอุปสรรคที่คุณจะพบ เนื่องจากเรื่องนี้ โดยเฉพาะเมื่อคุณมีอายุมากขึ้นและรับผิดชอบมากขึ้น",
      Burmese:
        "Empower ကသင့်ကျန်ပါတ်အချက်အလက်များနှင့် သင်တစ်ဦးအသုံးပြုပါသင်ကြောင့် သွားရသော ဆောင်ရွက်နေစဉ်တစ်ဦးကို ဘယ်လိုကြာမှာလဲစိတ်ကြိုက်ရှာရမလား တန်ဖိုးအားနှင့် ပစ်ပါသင့်",
    },
    student: {
      English: "Student",
      Spanish: "Estudiante",
      French: "Étudiant",
      Hindi: "छात्र",
      Magyar: "Diák",
      Thai: "นักเรียน",
      Burmese: "ကျောင်းသား",
    },
    participant: {
      English: "Participant/Club Leader",
      Spanish: "Participante/Líder de Club",
      French: "Participant/Chef de club",
      Hindi: "प्रतिभागी/क्लब नेता",
      Magyar: "Résztvevő/Klubvezető",
      Thai: "ผู้เข้าร่วม/ผู้นำชมรม",
      Burmese: "အစည်းအဝေး/အသင်းအဖွဲ့များ၏ အရည်အချင်း",
    },
    getHelp: {
      English: "Get Help",
      Spanish: "Obtener Ayuda",
      French: "Obtenir de l'aide",
      Hindi: "मदद प्राप्त करें",
      Magyar: "Segítséget kér",
      Thai: "ขอความช่วยเหลือ",
      Burmese: "အကူအညီ ရယူပါ",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.languageMenu}>
        <Menu
          visible={languageMenuVisible}
          onDismiss={closeLanguageMenu}
          anchor={
            <IconButton
              icon="dots-vertical"
              color="white"
              size={24}
              onPress={openLanguageMenu}
            />
          }
        >
          <Menu.Item
            onPress={() => handleLanguageSelect("English")}
            title="English"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("Spanish")}
            title="Spanish"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("French")}
            title="French"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("Hindi")}
            title="Hindi"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("Magyar")}
            title="Magyar"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("Thai")}
            title="Thai"
          />
          <Menu.Item
            onPress={() => handleLanguageSelect("Burmese")}
            title="Burmese"
          />
        </Menu>
      </View>
      <View style={styles.hero}>
        <Image
          source={require("./empower.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Love{"\n"}Create{" "}
            <View style={styles.appName}>
              <Text style={styles.appNameText}> Share</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            {translations.description[selectedLanguage]}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {translations.student[selectedLanguage]}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Auth")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {translations.participant[selectedLanguage]}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Help");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {translations.getHelp[selectedLanguage]}
            </Text>
          </View>
        </TouchableOpacity>

        {/* <Text style={styles.text}>Share!</Text> */}

        {/* <View style={styles.socialIconsContainer}>
          <SocialIcon url="https://facebook.com/sharer/sharer.php?u=https://www.daughterproject.org/challenge-page/1be55fc3-4dcf-44bc-a498-831250f91d2e&quote=Come%20join%20Empower!" network="facebook" bgColor="black" />
          <SocialIcon url="https://twitter.com/intent/tweet?text=Come%20join%20Empower!&url=https://www.daughterproject.org/challenge-page/1be55fc3-4dcf-44bc-a498-831250f91d2e" network="twitter" bgColor="black" />
          <SocialIcon url="https://static.wixstatic.com/media/11062b_7d5d7755a5ef46bf967bbef84df0cd5d~mv2.jpg/v1/fill/w_2291,h_3689,al_c,q_90,enc_auto/11062b_7d5d7755a5ef46bf967bbef84df0cd5d~mv2.jpg" network="linkedin" bgColor="black" />
          <SocialIcon url="https://www.daughterproject.org/challenge-page/1be55fc3-4dcf-44bc-a498-831250f91d2e" network="email" bgColor="black" />
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  languageMenu: {
    position: "absolute",
    top: 50,
    right: 15,
    zIndex: 1,
  },
  hero: {
    backgroundColor: "#d496a7",
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: "100%",
    height: 300,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#281b52",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 40,
  },
  appName: {
    backgroundColor: "#d496a7",
    transform: [
      {
        rotate: "-5deg",
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#281b52",
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#9992a7",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#d496a7",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
