import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import IdeaComponent from "../global/ideaCompondent";
import RepoComponent from "../global/repoComponent";

export default function RepoViewer({ route, navigation }) {
    const { repo } = route.params;
    navigation.setOptions({
        title: repo.name,
    });

    const mockIdeaRepository = [
        {
            id: 1,
            parentRepositoryId: 0,
            name: "Repository 1",
        },
        {
            id: 2,
            parentRepositoryId: 0,
            name: "Repository 2",
        },
        {
            id: 3,
            parentRepositoryId: 1,
            name: "Repository 3",
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
                {mockIdeaRepository.map((childrepo, index) => {
                    if (childrepo.parentRepositoryId === repo.id) {
                        return (
                            <RepoComponent navigation={navigation} repo={childrepo} key={index} />
                        );
                    }
                })}
                {mockIdeas.map((idea, index) => {
                    if (idea.repositoryId === repo.id) {
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
