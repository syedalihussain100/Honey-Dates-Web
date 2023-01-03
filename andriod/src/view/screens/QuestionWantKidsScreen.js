import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionWantKidsScreen = ({ navigation }) => {
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
            }}>Do you want kids?</Text>
          </View>

          <View style={{
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 12,
              color: COLORS.black
            }}>(Select all that apply)</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>
                I want children
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>I have children</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>Have kid's, open to having more</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>I don't ever want children</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>I want to adopt children</Text>
            </View>
          </TouchableOpacity>



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
              <CustomeButton width={180} onpress={() => navigation.navigate('QuestionBioScreen')}
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

export default QuestionWantKidsScreen

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
    padding: 0,
    backgroundColor: COLORS.transparent,
  },
})