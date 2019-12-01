import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    const [task, setTask] = React.useState("");

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    onChangeText={text => setTask(text)}
                    value={task}
                    placeholder="New task"
                    style={styles.userInput}
                />
                <Button title="ADD" />
            </View>
            <View>
                <Text>{task}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    userInput: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1
    }
});
