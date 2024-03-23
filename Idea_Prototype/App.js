import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./components/mainpage/mainpage";
import IdeaCreator from "./components/ideaCreator/ideaCreator";
import IdeaViewer from "./components/ideaViewer/ideaViewer";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={() => ({
                    headerStyle: {
                        backgroundColor: "blue",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                })}
            >
                <Stack.Screen name="Home" component={MainPage} />
                <Stack.Screen
                    name="IdeaKreator"
                    component={IdeaCreator}
                    options={({ navigation }) => ({
                        title: "New Idea",
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.headerButtons}>Home</Text>
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="IdeaViewer"
                    component={IdeaViewer}
                    options={() => ({
                        title: "Idea",
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = new StyleSheet.create({
    headerButtons: {
        color: "#fff",
        fontWeight: "bold",
    },
});
