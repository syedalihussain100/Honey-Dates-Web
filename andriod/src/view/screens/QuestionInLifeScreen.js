import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';


const Education = [
  {
    id: '1',
    name: 'Submissive ( your partner cancall all the shot)',
  },
  {
    id: '2',
    name: 'Dominant (you call all the shots only)',
  },
  {
    id: '3',
    name: 'Switch',
  }
]



const QuestionInLifeScreen = ({ navigation }) => {
  const [name, setname] = useState();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [checked, setChecked] = React.useState('Apple'); //initial choice




  const ListEducation = ({ data, value, setValue, cancle }) => {
    return (
      <View>
        {data.map((TypeTestimonial, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setValue(index)}>
            <View style={{
              backgroundColor: value == index ? COLORS.main : COLORS.transparent,
              ...styles.NumberInput
            }}>
              <View style={{ width: '90%' }}>
                <Text style={{ color: COLORS.black }}>
                  {TypeTestimonial.name}
                </Text>
              </View>
              <View style={{
                alignItems: 'flex-end'
              }}>
                {value == index ? (
                  <Image source={require('../../assets/tik.png')} resizeMode='contain' style={{
                    width: 20,
                    height: 20
                  }} />
                ) : (<View></View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </View>
    )
  }
  return (
    <SafeAreaView>
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


          <View style={{
            paddingTop: 30,
            alignItems: 'center',
            paddingHorizontal: 60,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center'
            }}>In life/outside are you the
              decision maker in the home?
            </Text>
          </View>

          <View>
            <ListEducation data={Education} value={selectedCategoryIndex}
              setValue={setSelectedCategoryIndex} cancle={require('../../assets/cross.png')} />
          </View>


        </View>

        <View style={{
          alignItems: 'center',
          paddingBottom: 5,
          height: '10%'
        }}>
          <View style={{ marginHorizontal: 5 }}>
            <CustomeButton onpress={() => navigation.navigate('QuestionCuddlingScreen')}
              title={'Continue'} />
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
      </View>

    </SafeAreaView>
  )
}


export default QuestionInLifeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    alignItems: 'center',
    height: '90%'
  },
  footer: {
    alignItems: 'center'
  },
  NumberInput: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
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