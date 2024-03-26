import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { addIdea } from "../../assets/store/storage";

export default function IdeaCreator({ navigation }) {
    const [ideaTitle, setIdeaTitle] = useState("");
    const [ideaDescription, setIdeaDescription] = useState("");

    const createIdea = () => {
        const stuff = addIdea(ideaTitle, ideaDescription, 0).then((result) => console.log(result));
        //navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    onChangeText={(newText) => setIdeaTitle(newText)}
                />
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, { minHeight: 100 }]}
                    placeholder="My Idea is ..."
                    multiline={true}
                    onChangeText={(newText) => setIdeaDescription(newText)}
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
