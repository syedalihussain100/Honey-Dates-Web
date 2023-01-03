import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';

export const detailReligion = [
  {
    id: '1',
    name: 'Is Educated',
  }, {
    id: '2',
    name: 'Is Not Educated',
  }
]



const QuestionPartnerConditionScreen = ({ navigation }) => {
  const [name, setname] = useState();
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedCategoryIndex2, setSelectedCategoryIndex2] = useState(0);
  const [showtick, setShowtick] = useState(false);
  const [showtick2, setShowtick2] = useState(false);
  const [showtick3, setShowtick3] = useState(false);

  const toggleDropdown = () => {
    setShowtick(!showtick)
    setShowOptions(!showOptions);
  };

  const toggleDropdown2 = () => {
    setShowtick2(!showtick2)
    setShowOptions2(!showOptions2);

  };

  const toggleDropdown3 = () => {
    setShowtick3(!showtick3)
  };


  const renderDropdown = () => {
    if (showOptions) {
      return (
        <View style={{ height: 100 }}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {detailReligion.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}
              >
                <View style={styles.MoreaboutReligion}>

                  <View style={{ width: '90%' }}>
                    <Text style={{ color: COLORS.black }}>{item.name}</Text>
                  </View>
                  <View style={{
                    alignItems: 'flex-end'
                  }}>
                    {selectedCategoryIndex == index ? (
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
          </ScrollView>
        </View>
      );
    }
  };

  const renderDropdown2 = () => {
    if (showOptions2) {
      return (
        <View style={{ height: 100 }}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {detailReligion.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex2(index)}
              >
                <View style={styles.MoreaboutReligion}>

                  <View style={{ width: '90%' }}>
                    <Text style={{ color: COLORS.black }}>{item.name}</Text>
                  </View>
                  <View style={{
                    alignItems: 'flex-end'
                  }}>
                    {selectedCategoryIndex2 == index ? (
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
          </ScrollView>
        </View>
      );
    }
  };


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

          <View style={{
            paddingTop: 20,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>What are you open to? </Text>
          </View>

          <TouchableOpacity onPress={toggleDropdown}>
            <View style={styles.NumberInput}>
              <View style={{ width: '90%' }}>
                <Text style={{ color: COLORS.black, fontWeight: 'bold',  paddingRight:5 }}>Someone to build Everything
                  with (career wise/business
                  and personal life)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {renderDropdown()}

          <TouchableOpacity onPress={toggleDropdown2}>
            <View style={styles.NumberInput}>
              <View style={{ width: '90%' }}>
                <Text style={{ color: COLORS.black, fontWeight: 'bold',  paddingRight:5  }}>Someone that is already
                  well off
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {renderDropdown2()}

          <TouchableOpacity onPress={toggleDropdown3}>
            <View style={styles.NumberInput}>
              <View style={{ width: '90%' }}>
                <Text style={{ color: COLORS.black , paddingRight:20}}>I’m open to anything other
                  things are more important
                  to me
                </Text>
              </View>
              <View style={{
                alignItems: 'flex-end'
              }}>
                {showtick3 && (
                  <Image source={require('../../assets/tik.png')} resizeMode='contain' style={{
                    width: 20,
                    height: 20
                  }} />
                )}
              </View>
            </View>
          </TouchableOpacity>




        </View>


        <View style={{ height:'10%', alignItems: 'center'}}>

          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('')}
                title={'Skip'} bcolor={COLORS.light} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <CustomeButton width={170} onpress={() => navigation.navigate('QuestionLongestRelationshipScreen')}
                title={'Continue'} />
            </View>
          </View>
        </View>


      </View>



    </SafeAreaView>
  )
}

export default QuestionPartnerConditionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%'

  },
  contentContainer: {
    alignItems: 'center',
    height:'90%'
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
    padding: 10,
    backgroundColor: COLORS.light,
    color: COLORS.gray,
    width: 320,
    borderRadius: 10,
    height: 200,
    textAlignVertical: 'top',
  },
  MoreaboutReligion: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 45,
    width: 340,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light
  }
})