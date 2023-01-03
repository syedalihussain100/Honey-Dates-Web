import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';
import RadioForm from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';


const Education = [
  {
    id: '1',
    name: '1 twice week',
  },
  {
    id: '2',
    name: 'Once a week',
  },
  {
    id: '3',
    name: 'Every other day',
  },
  {
    id: '4',
    name: 'Daily',
  },
  {
    id: '5',
    name: 'Barely',
  },
  {
    id: '6',
    name: 'Not at all',
  },
]



const QuestionExersizeScreen = ({ navigation }) => {
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
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 30,
          }}>
            <Image source={require('../../assets/exersize2.png')} resizeMode='contain' style={{
              width: 220,
              height: 200,
            }} />
          </View>


          <View style={{
            alignItems: 'center',
            paddingHorizontal: 70,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center'
            }}>How often do you
              exercise ? be Honest</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>

            <View>
              <ListEducation data={Education} value={selectedCategoryIndex}
                setValue={setSelectedCategoryIndex} cancle={require('../../assets/cross.png')} />
            </View>


            <View style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              paddingTop:20,
              }}>
              <RadioButton
                value="Public"
                status={checked === 'Public' ? 'checked' : 'unchecked'} //if the value of checked is Apple, then select this button
                onPress={() => setChecked('Public')} //when pressed, set the value of the checked Hook to 'Apple'
                color={COLORS.main}
                uncheckedColor={COLORS.main}
              />
              <Text>Public</Text>
              <RadioButton
                value="Not Public"
                status={checked === 'Not Public' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Not Public')}
                color={COLORS.main}
                uncheckedColor={COLORS.main}
              />
              <Text>Not Public</Text>

            </View>


            <View style={{
              alignItems: 'center',
              paddingBottom: 5
            }}>
              <View style={{
                paddingTop: 50,
              }}>
                <CustomeButton onpress={() => navigation.navigate('QuestionExersizePartnerScreen')}
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
          </ScrollView>
        </View>
      </View>



    </SafeAreaView>
  )
}


export default QuestionExersizeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    alignItems: 'center',
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