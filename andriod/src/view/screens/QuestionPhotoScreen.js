import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionPhotoScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            alignItems: 'center',
            paddingTop: 40,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>Add Photos</Text>
          </View>

          <View style={{
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 12,
              color: COLORS.black
            }}>Add Minimum 4 photos</Text>
          </View>

          <View style={{
            flexDirection:'row' , 
            alignItems:'flex-end',
            paddingTop:40}}>

            <View style={{
              height:150,
              width:90,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.light,
              marginHorizontal:10,
            }}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' />
            </View>

            <View style={{
              height:150,
              width:90,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.light,
              marginHorizontal:10,
            }}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' />
            </View>

            <View style={{
              height:150,
              width:90,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.light,
              marginHorizontal:10,
            }}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' />
            </View>
          </View>

          <View style={{
            flexDirection:'row' , 
            paddingTop:40}}>

            <View style={{
              height:150,
              width:90,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.light,
              marginHorizontal:10,
            }}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' />
            </View>

            <View style={{
              height:150,
              width:90,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.light,
              marginHorizontal:10,
            }}>
              <Image source={require('../../assets/camera.png')} resizeMode='contain' />
            </View>
          </View>


        </View>





        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
            flexDirection: 'row'
          }}>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton onpress={() => navigation.navigate('NameScreen')}
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

export default QuestionPhotoScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '80%',
  },
  footer: {
    height: '20%',
    alignItems: 'center'
  },
  NumberInput: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 95,
    width: '60%',
    backgroundColor: COLORS.light,
    borderRadius: 5,
  },
  TextInput: {
    padding: 0,
    backgroundColor: COLORS.transparent,
  },
})