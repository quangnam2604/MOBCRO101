import React from "react";
import { Pressable, Text, Image, View } from "react-native";
import { styles, StyleS } from './styles';
import { Button } from '../../../components/Button';
const Splash = () => {
    return (
        <View style={styles.container}>
            <Image
            resizeMode="contain"
            style = {styles.img}
            source={require('../../../assets/splash_image.png')}
            />  
            <View style={titleContainer}>
            <Text style={styles.title}>Hello</Text>
            <Text style={[styles.title, styles.innerTitle]}>Cac ban</Text>
            <Text style={styles.title}>Nhe !</Text>
            </View>

            <Button title="Sign Up"></Button>
            <Pressable>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default Splash;