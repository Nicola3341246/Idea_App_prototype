import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function IdeaCreator({ navigation }) {
    const createIdea = () => {
        // Add idea to storage
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} placeholder="Title" />
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.input}
                    placeholder="My Idea is...{\n}jFuthermore"
                    multiline={true}
                />
            </ScrollView>
            <Pressable style={styles.button} onPress={() => createIdea()}>
                <Text style={styles.buttonText}>Create</Text>
            </Pressable>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },

    label: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
    },

    input: {
        borderColor: "#000000",
        borderWidth: 1,
        margin: 5,
        padding: 5,
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
};
