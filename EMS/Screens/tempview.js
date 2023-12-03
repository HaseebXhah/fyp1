
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Div, Form, H1, Span, Input, Hyperlink, onPress, Image, SafeAreaViewBase } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
//import { useState } from 'react';
//import external_css from './Screen/style'

const tempview=()=>{
    return(
     <SafeAreaView>
            <View style={{ alignItems: 'center', margin: 20, }}>
                <Image
                    source={{ uri: 'E:\BSCS 7th\F_Y_P\fyp\logoimage.png' }}
                    style={{ width: '100', height: '100' }}
                />
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 0 }}>Event Management System</Text>
            </View>
            <View style={{ margin: 10 }}>
                <TextInput style={{ marginVertical: 10 }}
                    label="Username"
                />
                <TextInput style={{ marginVertical: 10 }}
                    label="Cell Phone"
                />
                <TextInput style={{ marginVertical: 10 }}
                    label="Office Location(link Copy from Google)"
                />
                <TextInput style={{ marginVertical: 10 }}
                    label="Profile Image"
                />
                <TextInput style={{ marginVertical: 10 }}
                    label="Email"
                //value={text}
                //onChangeText={text => setText(text)}
                />
                <TextInput style={{ marginVertical: 10 }}
                    label="Password"
                />
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 0, alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 45, width: 100, backgroundColor: 'purple' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
     </SafeAreaView>   
    )
}
export default tempview