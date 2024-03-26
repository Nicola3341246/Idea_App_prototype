import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

export default function IdeaViewer({ route, navigation }) {
    const { idea } = route.params;
    navigation.setOptions({
        title: idea.title,
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                {(() => {
                    if (
                        idea.description === undefined ||
                        idea.description === null ||
                        idea.description === ""
                    ) {
                        return (
                            <Text style={styles.descriptionDisclaimer}>
                                This idea doesn't have a description!
                            </Text>
                        );
                    }

                    return <Text style={styles.descriptionText}>{idea.description}</Text>;
                })()}
            </ScrollView>
            <Pressable style={styles.button} onPress={() => alert("Not implemented yet!")}>
                <Text style={styles.buttonText}>Edit</Text>
            </Pressable>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },

    descriptionText: {
        flex: 1,

        margin: 10,
        fontSize: 18,
    },

    descriptionDisclaimer: {
        display: "flex",
        flex: 1,
        alignSelf: "center",

        color: "grey",
        fontSize: 15,
        margin: 10,
    },

    button: {
        backgroundColor: "blue",
        margin: 10,
        padding: 20,
        borderRadius: 5,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
