import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,KeyboardAvoidingView,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
//import LinearGradient from 'react-native-linear-gradient';



const Signup = () => {
  const [displayuser, setDisplayuser] = useState(true);
  const [displayorg, setDisplayorg] = useState(false);
  const [userbtnclick, setuserbtnclicked] = useState(true);
  const [orgbtnclick, setorgbtnclicked] = useState(false);
  const [Uregbtnclick, setUbtnClicked] = useState(false);
  const [Oregbtnclick, setObtnClicked] = useState(false);

  const showuser = () => {
    if (displayorg) {
      setDisplayorg(false);
      setDisplayuser(true);
    }
  };

  const showorg = () => {
    if (displayuser) {
      setDisplayuser(false);
      setDisplayorg(true);
    }
  };
  const userbtnhandler = () => {
    // Step 3: Toggle the state on each press
    if (orgbtnclick == true) { setorgbtnclicked(false); }
    if(userbtnclick==false){setuserbtnclicked(true)};
  };
  const orgbtnhandler = () => {
    // Step 3: Toggle the state on each press
    if(userbtnclick==true){setuserbtnclicked(false)};
    if(orgbtnclick==false){setorgbtnclicked(true)};
  };
  const Oregbtnhandler = () => {
    // Step 3: Toggle the state on each press
    //if(regbtnclick)
    setObtnClicked(!Oregbtnclick);
  };
  const Uregbtnhandler = () => {
    // Step 3: Toggle the state on each press
    //if(regbtnclick)
    setUbtnClicked(!Uregbtnclick);
  };
  const userfunctions = () => {
    // Call both functions here
    showuser();
    userbtnhandler();
    //startColorAnimation();
  };
  const organizerfunctions = () => {
    // Call both functions here
    showorg();
    orgbtnhandler();
    //startColorAnimation();
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.userbtn, userbtnclick && styles.userbtnclicked]} onPress={userfunctions}>
          <Text style={styles.btntextSize}>𝐔𝐬𝐞𝐫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.organbtn, orgbtnclick && styles.orgbtnclicked]} onPress={organizerfunctions}>
          <Text style={styles.btntextSize}>𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐞𝐫</Text>
        </TouchableOpacity>
      </View>

      {displayuser && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>
            <Text style={styles.ulabel}>User Registration</Text>
            <TextInput style={styles.input} label="First Name" required />
            <TextInput style={styles.input} label="Last Name" required />
            <TextInput style={styles.input} label="Email" required />
            <TextInput style={styles.input} label="Password" secureTextEntry required />
            <TextInput style={styles.input} label="Phone Number" required />
            <TextInput style={styles.input} label="City / Village Name" required />
            <TouchableOpacity style={[styles.registerbtn, Uregbtnclick && styles.Uregbtnclicked]} onPress={Uregbtnhandler} >
              <Text style={styles.regtext}>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</Text>
            </TouchableOpacity>
            <Text style={styles.note}>𝐍𝐎𝐓𝐄🤞: You can book Services Online. But you may have to pay some cash in advance for booking..</Text>

          </View>
        </ScrollView>
      )}

      {displayorg && (
          <ScrollView 
          showsVerticalScrollIndicator={false}
          >
            <View style={styles.formContainer}>
              <Text style={styles.ulabel}>Organizer Registration</Text>
              <TextInput style={styles.input} label="First Name" required />
              <TextInput style={styles.input} label="Last Name" required />
              <TextInput style={styles.input} label="Email" required />
              <TextInput style={styles.input} label="Password" secureTextEntry required />
              <TextInput style={styles.input} label="Phone Number" required />
              <TouchableOpacity style={[styles.registerbtn, Oregbtnclick && styles.Uregbtnclicked]} onPress={Oregbtnhandler}>
                <Text style={styles.regtext}>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</Text>
              </TouchableOpacity>
            <Text style={styles.note}>𝐍𝐎𝐓𝐄🚨: There is no charges to create Services detailing form. But you have to pay $𝟏𝟎 every month.</Text>
            <Text style={styles.name}>ℍ𝕆𝕌𝕊𝔽𝕌𝕃𝕃 𝕄𝔸ℕ𝔸𝔾𝔼𝕄𝔼ℕ𝕋</Text>
            <Text style={{fontSize:20}}>𝑀𝒶𝓀𝑒 𝐼𝓉 𝒮𝒾𝓂𝓅𝓁𝑒</Text>
            </View>
          </ScrollView>     
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userbtnclicked: {height:50, borderWidth: 0.5, borderColor: 'black', borderBottomEndRadius: 10,borderBottomStartRadius:10},
  orgbtnclicked: { height: 50,borderWidth: 0.5, borderColor: 'black', borderBottomStartRadius: 10,borderBottomEndRadius:10},
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Uregbtnclicked: {
    backgroundColor: 'red', // Change background color when clicked
  },
  Oregbtnclicked: {
    backgroundColor: 'red', // Change the background....
  },
  userbtn: {
    justifyContent: 'center',
    border:'black 9px',
    alignItems: 'center',
    height: 45,
    width: 180,
    backgroundColor: 'lightpink',

  },

  organbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 180,
    backgroundColor: 'lightpink',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#FAE7E7',
    marginVertical: 10,
    fontSize: 15,
    width: 250,
    paddingHorizontal: 10,
    borderWidth: 0.4,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  registerbtn: {
    backgroundColor: 'gray',
    width: 250,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius:20,
    borderBottomEndRadius:20,
    marginVertical: 20,
    shadowOpacity:50,
    shadowOffset:20,
    shadowColor:'red',
    },
  regtext:{fontSize: 20,},
  note: {fontSize: 16,fontStyle: 'italic'
    //marginLeft: -60,
    },
  btntextSize:{fontSize:20,},
  ulabel:{fontSize:23.3},
  safearea: { backgroundColor: 'pink', flex:1, },
  name:{
    marginTop:10,
    fontSize:22,
    fontStyle:'bold'
  }
});

export default Signup;
