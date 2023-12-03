import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const Login = (navigation) => {

    const [displayuser, setDisplayuser] = useState(true);
    const [displayorg, setDisplayorg] = useState(false);

    const showuser = () => {
        if (displayorg == true) {
            //setDisplayorg(false);
            setDisplayuser(true)
        }
    }
    const showorg = () => {
        if (displayuser == true) {
            //setDisplayuser(false);
            setDisplayorg(true)

        }
    }


    return (
        <SafeAreaView>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userbtn}
                    onPress={() => showuser()}>
                    <Text>User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orgbtn}
                    onPress={() => showorg()}>
                    <Text>Organizer</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    displayuser ?
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.ulabel}>𝐔𝐬𝐞𝐫 𝐥𝐨𝐠𝐢𝐧</Text>
                            <TextInput style={{ marginVertical: 10, fontSize: 15, width: 250 }}
                                label="Email" />
                            <TextInput style={{ marginVertical: 10, fontSize: 15, width: 250 }}
                                label="Passowrd" />
                            <TouchableOpacity style={styles.lbtn}>
                                <Text style={styles.logintext}>𝐋𝐨𝐠𝐢𝐧</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </View>
            <View>
                {
                    displayorg ?
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.ulabel}>𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐞𝐫 𝐥𝐨𝐠𝐢𝐧</Text>
                                <TextInput style={{ marginVertical: 5, fontSize: 15, width: 250 }}
                                    label="Email" />
                                <TextInput style={{ marginVertical: 10, fontSize: 15, width: 250 }}
                                    label="Passowrd" />
                                <TouchableOpacity style={styles.lbtn}>
                                    <Text style={styles.logintext}>𝐋𝐨𝐠𝐢𝐧</Text>
                                </TouchableOpacity>
                            </View>
                            <Text>Note🚨: </Text>
                        </View>
                        : null
                }
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    btnContainer:{ flexDirection: 'row', justifyContent: 'space-evenly' },
    userbtn:{justifyContent: 'center', alignItems: 'center', height: 45, width: 180, backgroundColor: 'purple'},
    orgbtn:{ justifyContent: 'center', alignItems: 'center', height: 45, width: 180, backgroundColor: 'purple'},
    ulabel:{fontSize:20,},
    lbtn:{backgroundColor: 'gray', width: 250, height: 48, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 5,},
    logintext:{fontSize:20},
});
export default Login