import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionDealBreakandMakeScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>



        <View style={styles.contentContainer}>

          <View style={{
            alignItems: 'center',
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <Image source={require('../../assets/notify.png')} resizeMode='contain'
              style={{
                width: 15,
                height: 15,
              }} />
            <Text style={{
              color: COLORS.black,
              marginLeft: 5
            }}>Response is Not Public</Text>
          </View>

          <View>
            <View style={{
              paddingTop: 20,
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.black
              }}>Major deal Breakers</Text>
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


          <View>
            <View style={{
              paddingTop: 20,
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.black
              }}>Major deal Makers</Text>
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


        </View>


        <View style={{ alignItems: 'center', paddingTop:80 }}>

          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('')}
                title={'Skip'} bcolor={COLORS.light} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('QuestionPartnerConditionScreen')}
                title={'Continue'} />
            </View>
          </View>
        </View>


      </View>



    </SafeAreaView>
  )
}

export default QuestionDealBreakandMakeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%'

  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 200,
    textAlignVertical: 'top',
  },
})