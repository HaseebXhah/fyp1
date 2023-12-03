import { View, Image, StyleSheet,TouchableOpacity,Text,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

const organizerprofile = () => {

    const [selectimage, setselectimage] = useState(null);
    const Imagepicker = () => {
        const options =
        {
            storageOptions: { title: 'Select Image', skipBackup: true, path: 'image', },

        };
        launchImageLibrary(options, (response) => {
            setselectimage(response.assets[0].uri)
            console.log(response.assets[0].uri);
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                Imagepicker()
            }}>
                <Text>
                    Upload Pic
                </Text>
            </TouchableOpacity>
            <View style={styles.imgview}>
                <Image style={styles.img} source={{ uri: selectimage }}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'gray',
        height: 40,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    imgview: {
        height: 300,
        width: 150,
    },
    img: {
        height: 300,
        width: 150,
    }
});
export default organizerprofile;