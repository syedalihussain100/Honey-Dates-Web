import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionGenderScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 20
          }}>
            <Image source={require('../../assets/gender.png')} resizeMode='contain' style={{
            width:150,
            height:200,
            }}/>
          </View>


          <View style={{
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>What do you identify as?</Text>
          </View>


          {/* <View style={{
            paddingTop: 10,
            alignItems: 'center'
          }}>
            <Text style={{
              color: COLORS.black
            }}>Enter the full name</Text>
          </View> */}


            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>
                  Male
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Female</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Non binaray</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Trans Male to Female</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Trans Female to Male</Text>
              </View>
            </TouchableOpacity>
            

            
        </View>


            <View style={styles.footer}>

              <View style={{
                paddingTop: 20,
              }}>
                <CustomeButton onpress={() => navigation.navigate('QuestionYourInterestScreen')}
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
      {/* </View> */}



    </SafeAreaView>
  )
}

export default QuestionGenderScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:COLORS.white,
  },
  contentContainer: {
    height: '80%',
    alignItems: 'center',
  },
  footer: {
    height:'20%',
    alignItems:'center'
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