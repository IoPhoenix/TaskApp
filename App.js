import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    const [newTask, setTask] = React.useState("");
    const [allTasks, setAllTasks] = React.useState([]);

    const onChangeText = text => setTask(text);

    const addTask = () => {
        if (!newTask.length) return;
        setAllTasks(currentTasks => [...currentTasks, newTask]);
        setTask("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    onChangeText={onChangeText}
                    value={newTask}
                    placeholder="New task"
                    style={styles.userInput}
                />
                <Button title="ADD" onPress={addTask} />
            </View>
            <View>
                {allTasks.map((task, i) => (
                    <Text key={task + i}>{task}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        width: "20%",
        color: "black"
    },
    userInput: {
        width: "80%",
        padding: 10,
        borderColor: "black",
        borderWidth: 1
    }
});
