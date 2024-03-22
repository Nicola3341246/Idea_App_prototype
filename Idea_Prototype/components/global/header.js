import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Idea Prototype</Text>
            <Pressable onPress={() => alert("Not implemented yet")}>
                <Text>Home</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        padding: 20,
        width: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
