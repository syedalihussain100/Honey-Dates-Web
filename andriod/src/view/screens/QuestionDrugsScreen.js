import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionDrugsScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>


          <View style={{
            alignItems: 'center',
            paddingTop: 50,
            paddingHorizontal: 70,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center',
            }}>Do you use Drugs</Text>
          </View>


          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>Yes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>No</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.NumberInput}>
              <Text style={{ color: COLORS.black }}>Prefer not say</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.footer}>

          <View style={{
            paddingTop: 100,
            flexDirection: 'row'
          }}>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('')}
                title={'Skip'} bcolor={COLORS.light} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('QuestionDrinkScreen')}
                title={'Continue'} />
            </View>

          </View>

          
        </View>



      </View>



    </SafeAreaView >
  )
}

export default QuestionDrugsScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '70%',
    alignItems: 'center',
  },
  footer: {
    height: '30%',
    alignItems: 'center',
  },
  NumberInput: {
    marginTop: 10,
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