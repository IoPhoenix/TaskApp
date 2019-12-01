import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#eee"
    }
});

const TaskInput = ({ task }) => {
    return (
        <View style={styles.listItem}>
            <Text>{task}</Text>
        </View>
    );
};

export default TaskInput;
