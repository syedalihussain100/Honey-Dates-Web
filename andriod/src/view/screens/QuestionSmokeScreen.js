import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionSmokeScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 40,
          }}>
              <Image source={require('../../assets/smoke2.png')}
                resizeMode='contain' style={{
                  width: 200,
                  height: 180,
                }} />
          </View>


          <View style={{
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 70,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center',
            }}>Do you Smoke?</Text>
          </View>
        </View>


        <View style={styles.footer}>

          <ScrollView showsVerticalScrollIndicator={false}>


            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Never</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Sometimes</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Socially</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Regularly</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Heavliy</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Prefer not say</Text>
              </View>
            </TouchableOpacity>

            <View style={{
              alignItems: 'center',
            }}>

              <View style={{
                paddingTop: 50,
                flexDirection: 'row'
              }}>
                <View style={{ marginHorizontal: 5 }}>
                  <CustomeButton width={170} onpress={() => navigation.navigate('')}
                    title={'Skip'} bcolor={COLORS.light} />
                </View>
                <View style={{ marginHorizontal: 5 }}>
                  <CustomeButton width={170} onpress={() => navigation.navigate('QuestionVapeScreen')}
                    title={'Continue'} />
                </View>

              </View>

              <View style={{
                paddingTop: 5,
                width: 310,
              }}>
                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                  By continue you agree our Terms and Privacy Policy.
                </Text>
              </View>

            </View>
          </ScrollView>

        </View>


      </View>



    </SafeAreaView>
  )
}

export default QuestionSmokeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '40%',
    alignItems: 'center',
  },
  footer: {
    height: '60%',
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