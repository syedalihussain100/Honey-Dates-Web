import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const LoginWithNumberScreen = ({ navigation }) => {
  const [number, setNumber] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>


          <View style={{
            paddingTop: 50,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>What's your Number?</Text>
          </View>


          <View style={{
            paddingTop: 10,
            alignItems: 'center'
          }}>
            <Text style={{
              color: COLORS.black
            }}>We'll send you a OTP to verify your identity</Text>
          </View>


          <View style={styles.NumberInput}>
            <View>
              <Image source={require('../../assets/USflag.png')} resizeMode='contain' style={{
                marginRight: 10,
                borderRadius: 3
              }} />
            </View>
            <Text> | </Text>
            <TextInput
              // label={'Write your number'}
              // textColor={COLORS.gray}
              value={number}
              placeholder={'write your number'}
              // error={inputfirstName}
              keyboardType='number-pad'
              // onFocus={() => setInputFirstName(false)}
              // placeholderTextColor={COLORS.black}
              // mode='underline'
              // underlineColor={COLORS.gray}
              // activeUnderlineColor={COLORS.gray}
              onChangeText={number => setNumber(number)
              }
              style={styles.TextInput}
            />
          </View>


        </View>


        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
          }}>
            <CustomeButton onpress={() => navigation.navigate('LoginWithOTPScreen')}
              title={'Continue'} />
          </View>

          <View style={{
            paddingTop: 20,
            width: 310,
          }}>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>
              By continue you agree our Terms and Privacy Policy.
            </Text>
          </View>
        </View>
      </View>



    </SafeAreaView>
  )
}

export default LoginWithNumberScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  contentContainer:{
    height:'80%'
  },
  footer: {
    height:'20%'
  },
  NumberInput: {
    marginTop: 60,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20
  },
  TextInput: {
    padding: 0,
    backgroundColor: COLORS.transparent,
    color: COLORS.gray,
    height: 40,
    width: 250,
    justifyContent: "center"
  },
})