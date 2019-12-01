import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    FlatList
} from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
    const [allTasks, setAllTasks] = React.useState([]);

    const handleAddTask = newTask => {
        if (!newTask.length) return;
        setAllTasks(currentTasks => [
            ...currentTasks,
            { key: Math.random().toString(), value: newTask }
        ]);
    };

    const onDelete = () => {};

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TaskInput onAddTask={handleAddTask} />
            </View>
            <FlatList
                data={allTasks}
                renderItem={task => (
                    <TaskItem onDelete={onDelete} task={task.item.value} />
                )}></FlatList>
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
    }
});
