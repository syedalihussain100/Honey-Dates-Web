import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionTypeofRelationScreen = ({ navigation }) => {
  const [name, setname] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            alignItems: 'center',
            paddingTop:40,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>What are you looking for?</Text>
          </View>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>
                  Dates
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Dating and Events</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.NumberInput}>
                <Text style={{ color: COLORS.black }}>Events Only</Text>
              </View>
            </TouchableOpacity>

            
        </View>





            <View style={styles.footer}>

              <View style={{
                paddingTop: 20,
              }}>
                <CustomeButton onpress={() => navigation.navigate('QuestionSmokeScreen')}
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

export default QuestionTypeofRelationScreen

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