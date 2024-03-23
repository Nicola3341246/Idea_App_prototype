import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import IdeaComponent from "./ideaCompondend";

export default function MainPage({ navigation }) {
    const mockIdeaRepository = [
        {
            id: 1,
            parentRepositoryId: 0,
            title: "repository 1",
        },
        {
            id: 2,
            parentRepositoryId: 0,
            title: "repository 2",
        },
    ];

    const mockIdeas = [
        {
            id: 1,
            repositoryId: 1,
            title: "Idea 1",
        },
        {
            id: 2,
            repositoryId: 1,
            title: "Idea 2",
        },
        {
            id: 3,
            repositoryId: 2,
            title: "Idea 3",
        },
        {
            id: 4,
            repositoryId: 2,
            title: "Idea 4",
        },
        {
            id: 5,
            repositoryId: 0,
            title: "Idea 5",
        },
        {
            id: 6,
            repositoryId: 0,
            title: "Idea 6",
        },
    ];

    const openIdeaKreator = () => {
        navigation.navigate("IdeaKreator");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {mockIdeas.map((idea, index) => {
                    if (idea.repositoryId === 0) {
                        return <IdeaComponent navigation={navigation} idea={idea} key={index} />;
                    }
                })}
            </ScrollView>
            <Pressable style={styles.button} onPress={() => openIdeaKreator()}>
                <Text style={styles.buttonText}>New Idea</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },

    scrollContainer: {
        width: "100%",
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
