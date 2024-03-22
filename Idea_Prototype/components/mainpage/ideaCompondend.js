import { StyleSheet, View, Pressable, Text } from "react-native";

export default function IdeaComponent(idea) {
    return (
        <View styles={styles.container}>
            <Pressable onPress={() => alert("Not implemented yet")}>
                <Text style={styles.title}>{idea.idea.title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },

    title: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",

        marginLeft: 5,
        marginRight: 5,
        padding: 20,
        borderColor: "#000000",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
});
