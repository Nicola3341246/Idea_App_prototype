import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import IdeaComponent from "../global/ideaCompondent.js";
import RepoComponent from "../global/repoComponent.js";
import { getRepositories, getIdeas, clearData } from "../../assets/store/storage.ts";
import { useState, useEffect } from "react";

export default function MainPage({ navigation }) {
    const [ideaRepository, setIdeaRepository] = useState([]);
    const [ideas, setIdeas] = useState([]);

    const loadData = async () => {
        const repositories = await getRepositories();
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
        navigation.navigate("IdeaKreator", { repoId: 0 });
    };

    const handleClearData = async () => {
        await clearData();
        loadData();
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {ideaRepository.map((repo, index) => {
                    if (repo.parentRepositoryId === 0) {
                        return <RepoComponent navigation={navigation} repo={repo} key={index} />;
                    }
                })}
                {ideas.map((idea, index) => {
                    if (idea.repositoryId === 0) {
                        return <IdeaComponent navigation={navigation} idea={idea} key={index} />;
                    }
                })}
            </ScrollView>
            <Pressable style={styles.button} onPress={() => openIdeaKreator()}>
                <Text style={styles.buttonText}>New Idea</Text>
            </Pressable>
            {/* This code should be removed for release */}
            <Pressable
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => handleClearData()}
            >
                <Text style={styles.buttonText}>Clear Data</Text>
            </Pressable>
            <Pressable
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => loadData()}
            >
                <Text style={styles.buttonText}>Reload</Text>
            </Pressable>
            {/* Unit here */}
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
