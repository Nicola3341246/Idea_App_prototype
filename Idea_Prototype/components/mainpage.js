import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./global/header";
import IdeaComponent from "./mainpage/ideaCompondend";

export default function MainPage() {
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
    ];

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                {mockIdeas.map((idea) => {
                    if (idea.repositoryId === 0) {
                        return <IdeaComponent idea={idea} />;
                    }
                })}
            </ScrollView>
            <Pressable style={styles.button} onPress={() => alert("Not implemented yet")}>
                <Text>New Idea</Text>
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

    button: {
        backgroundColor: "blue",
        margin: 10,
        padding: 20,
        borderRadius: 5,
    },

    scrollContainer: {
        width: "100%",
    },
});
