import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import IdeaComponent from "../global/ideaCompondent.js";
import RepoComponent from "../global/repoComponent.js";
import { getRepositories, getIdeas } from "../../assets/store/storage.ts";

export default function MainPage({ navigation }) {
    const ideaRepository = getRepositories();

    const ideas = getIdeas();

    const openIdeaKreator = () => {
        navigation.navigate("IdeaKreator");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/*ideaRepository.map((repo, index) => {
                    if (repo.parentRepositoryId === 0) {
                        return <RepoComponent navigation={navigation} repo={repo} key={index} />;
                    }
                })*/}
                {/*ideas.map((idea, index) => {
                    if (idea.repositoryId === 0) {
                        return <IdeaComponent navigation={navigation} idea={idea} key={index} />;
                    }
                })*/}
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
