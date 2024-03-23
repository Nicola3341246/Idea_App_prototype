import { StyleSheet, View, Pressable, Text, Image } from "react-native";

export default function IdeaComponent({ navigation, repo }) {
    const openRepo = () => {
        navigation.push("RepoViewer", { repo: repo });
    };

    return (
        <View styles={styles.container}>
            <Pressable style={styles.button} onPress={() => openRepo()}>
                <Image style={styles.icon} source={require("../../assets/icons/folder_icon.png")} />
                <Text style={styles.title}>{repo.name}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },

    button: {
        display: "flex",
        flexDirection: "row",

        marginLeft: 5,
        marginRight: 5,
        padding: 20,
        borderColor: "#000000",
        borderBottomWidth: 1,
    },

    icon: {
        marginRight: 5,
        height: 30,
        width: 30,
    },

    title: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
});
