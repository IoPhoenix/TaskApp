import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "center",
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
        borderWidth: 1,
        marginBottom: 10
    }
});

const TaskInput = ({ onAddTask, isModalOpen }) => {
    const [newTask, setTask] = React.useState("");
    const onChangeText = text => setTask(text);

    return (
        <Modal visible={isModalOpen} animationType="slide">
            <View style={styles.row}>
                <TextInput
                    onChangeText={onChangeText}
                    value={newTask}
                    placeholder="New task"
                    style={styles.userInput}
                />
                <Button title="ADD" onPress={onAddTask.bind(this, newTask)} />
            </View>
        </Modal>
    );
};

export default TaskInput;
