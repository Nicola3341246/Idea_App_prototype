import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./global/header";

export default function MainPage() {
    return (
        <View style={styles.container}>
            <Header />
            <Pressable style={styles.button}>
                <Text>New Idea</Text>
            </Pressable>
            <ScrollView>
                <Text>Some idea</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },

    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
    },

    scrollContainer: {
        width: "100%",
    },
});
