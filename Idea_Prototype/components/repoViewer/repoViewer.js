import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { getRepositoriesByParentId, getIdeas } from "../../assets/store/storage";
import IdeaComponent from "../global/ideaCompondent";
import RepoComponent from "../global/repoComponent";

export default function RepoViewer({ route, navigation }) {
    const [ideaRepository, setIdeaRepository] = useState([]);
    const [ideas, setIdeas] = useState([]);

    const { repo } = route.params;
    navigation.setOptions({
        title: repo.name,
    });

    const loadData = async () => {
        const repositories = await getRepositoriesByParentId(repo.id);
        setIdeaRepository(repositories);

        const loadedIdeas = await getIdeas();
        setIdeas(loadedIdeas);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            loadData();
        });

        return unsubscribe;
    }, [navigation]);

    const openIdeaKreator = () => {
        navigation.navigate("IdeaKreator", { repoId: repo.id });
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {ideaRepository.map((childrepo, index) => {
                    if (childrepo.parentRepositoryId === repo.id) {
                        return (
                            <RepoComponent navigation={navigation} repo={childrepo} key={index} />
                        );
                    }
                })}
                {ideas.map((idea, index) => {
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
