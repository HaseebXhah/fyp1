import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  require('./pic1.jpg'),
  require('./pic2.jpg'),
  require('./pic3.jpg'),
  require('./pic4.jpg'),
  require('./pic5.jpg'),
];

const mainscreen = ({ navigation }) => {
  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        autoplay={true}
        autoplayTimeout={4}
        showsPagination={true} // Add pagination dots
        dotStyle={styles.dot} // Style for inactive dots
        activeDotStyle={styles.activeDot} // Style for active dot
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <TouchableOpacity style={styles.button} onPress={goToSignup}>
        <Text style={styles.buttonText}>GOTO SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: 1000,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,.2)',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default mainscreen;
