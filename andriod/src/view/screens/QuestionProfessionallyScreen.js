import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionProfessionallyScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>
          
          <View style={{
            alignItems: 'center',
            paddingTop: 40,
            flexDirection:'row',
            justifyContent:'center'
          }}>
            <Image source={require('../../assets/notify.png')} resizeMode='contain'
            style={{
              width:15,
              height:15,
            }} />
            <Text style={{
              color: COLORS.black
            }}>Response is Not Public</Text>
          </View>
          

          <View style={{
            alignItems: 'center',
            paddingHorizontal:50,
            paddingTop:20,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign:'center',
            }}>Where do you see yourself professionally and personally in five years?</Text>
          </View>

          <View style={{
            paddingTop: 20,
          }}>
            <TextInput
              placeholder='Type Here!'
              multiline
              numberOfLines={8}
              style={styles.TextInput} />
          </View>

        </View>

        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
            flexDirection: 'row'
          }}>
            <View style={{marginHorizontal:5}}>
              <CustomeButton width={180} onpress={() => navigation.navigate('QuestionWantKidsScreen')}
                title={'Skip'} bcolor={COLORS.light} />
            </View>
            <View style={{marginHorizontal:5}}>
              <CustomeButton width={180} onpress={() => navigation.navigate('QuestionMusicScreen')}
                title={'Continue'} />
            </View>

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

export default QuestionProfessionallyScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '80%',
    alignItems: 'center',
  },
  footer: {
    height: '20%',
    alignItems: 'center'
  },
  NumberInput: {
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    height: 45,
    width: 340,
    backgroundColor: COLORS.light,
    borderRadius: 5,
  },
  TextInput: {
    padding: 10,
    backgroundColor: COLORS.light,
    color: COLORS.gray,
    width: 320,
    borderRadius: 10,
    height:200, 
    textAlignVertical: 'top',
  },
})