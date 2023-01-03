import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';


export const detailReligion = [
  {
    id: '1',
    name: 'NoPreferance',
  }, {
    id: '2',
    name: 'South Korean',
  },
]



const QuestionDescribeYouScreen = ({ navigation }) => {
  const [name, setname] = useState();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [valueGS, setValueGS] = useState('');
  const [showtick, setShowtick] = useState('');
  const [showtick2, setShowtick2] = useState(false);
  const [showtick3, setShowtick3] = useState(false);
  const [showtick4, setShowtick4] = useState(false);
  const [showtick5, setShowtick5] = useState(false);
  const [showtick6, setShowtick6] = useState(false);
  const [showtick7, setShowtick7] = useState(false);
  const [showtick8, setShowtick8] = useState(false);
  const [showtick9, setShowtick9] = useState(false);
  const [showtick10, setShowtick10] = useState(false);
  const [showtick11, setShowtick11] = useState(false);
  const [showtick12, setShowtick12] = useState(false);
  const [showtick13, setShowtick13] = useState(false);
  const [showtick14, setShowtick14] = useState(false);
  const [showtick15, setShowtick15] = useState(false);

  const toggleDropdown = (data) => {
    console.log(data.name);
    setShowOptions(!showOptions);
  };

  const ShowSelection = (data) => {
    console.log(data);
    // if (data == '') {
    //   setShowtick(true);
    // }
    setShowtick(data);
    // setShowtick(!data);
  };

  // const renderDropdown = () => {
  //   if (showOptions) {
  //     return (
  //       <View style={{ height: 100, }}>
  //         <ScrollView showsVerticalScrollIndicator={false}>

  //           {detailReligion.map((item, index) => (
  //             <TouchableOpacity
  //               key={index}
  //               activeOpacity={0.8}
  //               onPress={() => setSelectedCategoryIndex(index)}
  //             >
  //               <View style={styles.MoreaboutReligion}>

  //                 <View style={{ width: '90%' }}>
  //                   <Text style={{ color: COLORS.black }}>{item.name}</Text>
  //                 </View>
  //                 <View style={{
  //                   alignItems: 'flex-end'
  //                 }}>
  //                   {selectedCategoryIndex == index ? (
  //                     <Image source={require('../../assets/tik.png')} resizeMode='contain' style={{
  //                       width: 20,
  //                       height: 20
  //                     }} />
  //                   ) : (<View></View>
  //                   )}
  //                 </View>
  //               </View>
  //             </TouchableOpacity>
  //           ))}
  //         </ScrollView>
  //       </View>
  //     );
  //   }
  // };

  // const ListEthnicity = () => {
  //   return (
  //     <View>
  //       {Ethnicity.map((data, index) => (
  //         <View key={index}>
  //           <TouchableOpacity onPress={() => data.onpress(data)}>
  //             <View style={styles.NumberInput}>
  //               <Text style={{ color: COLORS.black, fontWeight: 'bold' }}>{data.name}</Text>
  //             </View>
  //           </TouchableOpacity>

  //           {renderDropdown()}
  //         </View>
  //       ))}

  //     </View>
  //   )
  // }



  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 30,
          }}>
            <Image source={require('../../assets/describe2.png')} resizeMode='contain' style={{
              width: 250,
              height: 180,
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
            }}>What best describe you

            </Text>
          </View>
          <View style={{
            alignItems: 'center',
            paddingHorizontal: 70,
          }}>
            <Text style={{
              color: COLORS.black,
              textAlign: 'center'
            }}>
              (pick Max 3)
            </Text>
          </View>

        </View>

        <View style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => setShowtick(!showtick)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Loyal
                  </Text>
                </View>
                {showtick && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick2(!showtick2)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Charismatic
                  </Text>
                </View>
                {showtick2 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick3(!showtick3)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Kind
                  </Text>
                </View>
                {showtick3 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick4(!showtick4)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>Talkative</Text>
                </View>
                {showtick4 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick5(!showtick5)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Shy
                  </Text>
                </View>
                {showtick5 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick6(!showtick6)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Honest
                  </Text>
                </View>
                {showtick6 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick7(!showtick7)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Funny
                  </Text>
                </View>
                {showtick7 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick8(!showtick8)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Ambitious
                  </Text>
                </View>
                {showtick8 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowtick9(!showtick9)}>
              <View style={styles.NumberInput}>
                <View style={{ width: '90%' }}>
                  <Text style={{ color: COLORS.black }}>
                  Family oriented
                  </Text>
                </View>
                {showtick9 && (
                  <View style={{ width: '10%', justifyContent: 'center' }}>
                    <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                  </View>
                )}
              </View>
            </TouchableOpacity>

            

            <View style={{
              paddingTop: 40,
              alignItems: 'center',
              paddingBottom: 5,
            }}>
              <CustomeButton onpress={() => navigation.navigate('QuestionDescribePartnerScreen')}
                title={'Continue'} />

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


export default QuestionDescribeYouScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '36%',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  footer: {
    height: '64%',
    alignItems: 'center',
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
    backgroundColor: COLORS.transparent,
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