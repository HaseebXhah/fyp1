import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Login screen after 10 seconds
    setTimeout(() => {
      navigation.navigate('mainscreen');
    }, 3000); // 10000 milliseconds (10 seconds)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./LOGO.png')} style={styles.logo} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set the background color to white
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Adjust this based on your logo size
    height: 200, // Adjust this based on your logo size
    marginBottom: 20, // Add spacing if needed
  },
});

export default SplashScreen;
