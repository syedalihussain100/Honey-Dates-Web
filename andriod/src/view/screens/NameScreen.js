import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const NameScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

        <View style={{
            paddingTop: 40
          }}>
            <Image source={require('../../assets/namescreen.png')} resizeMode='contain' />
          </View>


          <View style={{
            paddingTop: 20,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>What's your Name?</Text>
          </View>


          <View style={{
            paddingTop: 10,
            alignItems: 'center'
          }}>
            <Text style={{
              color: COLORS.black
            }}>Enter the full name</Text>
          </View>


          <View style={styles.NumberInput}>
            <TextInput
              value={name}
              placeholder={'Fullname'}
              // error={inputfirstName}
              keyboardType='number-pad'
              onChangeText={name => setname(name)
              }
              style={styles.TextInput}
            />
          </View>


        </View>


        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
          }}>
            <CustomeButton onpress={() => navigation.navigate('DateOfBirthScreen')}
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

export default NameScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  contentContainer:{
    height:'80%',
    alignItems:'center',
  },
  footer: {
    height:'20%'
  },
  NumberInput: {
    marginTop: 60,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20
  },
  TextInput: {
    padding: 0,
    backgroundColor: COLORS.transparent,
    color: COLORS.gray,
    height: 40,
    width: 300,
    justifyContent: "center"
  },
})