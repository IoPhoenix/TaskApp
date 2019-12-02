import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    userInput: {
        width: "80%",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10
    },
    buttonsContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        width: "40%"
    }
});

const TaskInput = ({ onCancel, onAddTask, isModalOpen }) => {
    const [newTask, setTask] = React.useState("");
    const onChangeText = text => setTask(text);

    const handleAddTask = () => {
        onAddTask(newTask);
        setTask("");
    };

    return (
        <Modal visible={isModalOpen} animationType="slide">
            <View style={styles.row}>
                <TextInput
                    onChangeText={onChangeText}
                    value={newTask}
                    placeholder="Type in new task"
                    style={styles.userInput}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.btn}>
                        <Button title="ADD" onPress={handleAddTask} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="CANCEL" color="red" onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default TaskInput;
