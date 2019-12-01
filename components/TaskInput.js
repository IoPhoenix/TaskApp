import React from "react";
import { StyleSheet, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
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

const TaskInput = ({ onAddTask }) => {
    const [newTask, setTask] = React.useState("");
    const onChangeText = text => setTask(text);

    return (
        <>
            <TextInput
                onChangeText={onChangeText}
                value={newTask}
                placeholder="New task"
                style={styles.userInput}
            />
            <Button title="ADD" onPress={onAddTask.bind(this, newTask)} />
        </>
    );
};

export default TaskInput;
