import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#eee"
    }
});

const TaskInput = ({ onDelete, task }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
            <View style={styles.listItem}>
                <Text>{task}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskInput;
