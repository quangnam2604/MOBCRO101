import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const Button = ({title}) => {
    const handlePress = () => {
        console.log('Clicked');
    };
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.textContent}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;