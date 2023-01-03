import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionHeightPartnerScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 20
          }}>
            <Image source={require('../../assets/height.png')}
              resizeMode='contain' style={{
                height: 230
              }} />
          </View>

          <View style={{
            paddingTop: 30,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              paddingHorizontal: 30,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center'
            }}>Select the height Range you
              would be open to dating?
            </Text>
          </View>


          <View style={{
            paddingTop: 20,
          }}>
            <View style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{ color: COLORS.black }}>Minimum</Text>
              <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <Image source={require('../../assets/HIcon.png')} resizeMode='contain' 
                style={{
                  width:15,
                  height:15,
                  marginRight:2
                }}/>
                <Text>Inches</Text>
              </View>
            </View>
            <TextInput
              placeholder='Enter minimum height!'
              style={styles.TextInput} />
          </View>

          <View style={{
            paddingTop: 20,
          }}>
            <View style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{ color: COLORS.black }}>Maximum</Text>
              <View style={{ flexDirection: 'row', alignItems:'center' }}>
                <Image source={require('../../assets/HIcon.png')} resizeMode='contain' 
                style={{
                  width:15,
                  height:15,
                  marginRight:2
                }}/>
                <Text>Inches</Text>
              </View>
            </View>
            <TextInput
              placeholder='Enter maximum height!'
              style={styles.TextInput} />
          </View>


        </View>


        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
          }}>
            <CustomeButton onpress={() => navigation.navigate('QuestionBuildTypeScreen')}
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

export default QuestionHeightPartnerScreen

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
    height: '20%'
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
    padding: 10,
    backgroundColor: COLORS.light,
    color: COLORS.gray,
    width: 320,
    borderRadius: 10,
  },
})