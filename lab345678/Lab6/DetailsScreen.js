import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn, Quang Nam</Text>
      <Text style={styles.subtitle}>Id của bạn là: PD12258</Text>
      <View style={styles.buttonContainer}>
        <Button title="TRỞ LẠI BẰNG - GO BACK -" onPress={() => navigation.goBack()} color="#b52138" />
        <Button title="TRỞ LẠI BẰNG - RESET -" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} color="#b52138" />
        <Button title="TRỞ LẠI BẰNG - POP -" onPress={() => navigation.pop()} color="#b52138" />
        <Button title="TRỞ LẠI BẰNG - POPTOTOP -" onPress={() => navigation.popToTop()} color="#b52138" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ad0922',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ad0922',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default DetailScreen;