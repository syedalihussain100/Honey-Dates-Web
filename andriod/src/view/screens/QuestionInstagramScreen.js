import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionInstagramScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 20,
            flexDirection: 'row',
          }}>
            <Image source={require('../../assets/insta.png')} resizeMode='contain' style={{
              width: 150,
            }} />

            <Image source={require('../../assets/instagram.png')} resizeMode='contain' style={{
              width: 150,
              position: 'absolute',
              marginTop: 80,
              marginLeft: 80
            }} />
          </View>


          <View style={{
            alignItems: 'center',
            paddingTop: 20,
            paddingHorizontal: 70,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center',
            }}>Do you want to connect your Instagram?</Text>
          </View>


          <View style={styles.NumberInput}>
            <TextInput
              value={name}
              placeholder={'Enter your username'}
              // error={inputfirstName}
              onChangeText={name => setname(name)
              }
              style={styles.TextInput}
            />
          </View>


        </View>


        <View style={styles.footer}>

          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('')}
                title={'Skip'} bcolor={COLORS.light} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('QuestionOccupationScreen')}
                title={'Continue'} />
            </View>
          </View>


        </View>



      </View>



    </SafeAreaView >
  )
}

export default QuestionInstagramScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '90%',
    alignItems: 'center',
  },
  footer: {
    height: '10%',
    alignItems: 'center',
  },
  NumberInput: {
    marginTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 45,
    width: 340,
    backgroundColor: COLORS.light,
    borderRadius: 5,
  },
  TextInput: {
    padding: 0,
    backgroundColor: COLORS.transparent,
  },
})