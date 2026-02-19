import Greeting from "@/components/Greeting";
import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.header}>
        <Image
          source={require("../assets/images/myphoto.jpeg")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Информация о себя</Text>
      <Text style={styles.subtitle}>
        Будущий мобильный разработчик. Изучаю React Native и создаю крутые
        приложения 🚀
      </Text>

      <Greeting name="Mahmudbek" role="Student" />

      <ProfileCard name="Mahmudbek" role="Student" course={4} />

      {/* <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77b8bd",
  },
  header: {
    marginTop: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#20a1c9",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#FFFF",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#FFFF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
