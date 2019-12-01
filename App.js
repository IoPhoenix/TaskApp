import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
    const [allTasks, setAllTasks] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleAddTask = newTask => {
        if (!newTask.length) return;
        setAllTasks(currentTasks => [
            ...currentTasks,
            { key: Math.random().toString(), value: newTask }
        ]);
    };

    const handleDeleteTask = taskKey => {
        setAllTasks(currentTasks =>
            currentTasks.filter(task => task.key !== taskKey)
        );
    };

    return (
        <View style={styles.container}>
            <Button
                title="Add new task"
                onPress={() => setIsModalOpen(!isModalOpen)}
            />
            <TaskInput isModalOpen={isModalOpen} onAddTask={handleAddTask} />
            <FlatList
                data={allTasks}
                renderItem={task => (
                    <TaskItem
                        onDelete={handleDeleteTask.bind(this, task.item.key)}
                        task={task.item.value}
                    />
                )}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
});
