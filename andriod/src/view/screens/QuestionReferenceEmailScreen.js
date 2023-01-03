import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const QuestionReferenceEmailScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={styles.container}>

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
            alignItems: 'center',
            paddingTop: 20,
            paddingHorizontal: 70,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'center',
            }}>References input number
              and email of reference
            </Text>
          </View>

          <View style={{
            alignItems: 'center',
            paddingHorizontal: 70,
          }}>
            <Text style={{
              textAlign: 'center',
            }}>(Optional)
            </Text>
          </View>

          <View style={{ alignItems: 'flex-start', marginTop: 20, paddingHorizontal: 10 }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.black
            }}> 1st Reference </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Name </Text>
              <View style={styles.NumberInput}>
                <TextInput
                  value={name}
                  placeholder={'Enter your name'}
                  onChangeText={name => setName(name)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Email </Text>
              <View style={styles.NumberInput}>
                <TextInput
                  value={email}
                  placeholder={'Enter your email'}
                  keyboardType='email-address'
                  onChangeText={email => setEmail(email)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>


          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Phone Number </Text>
              <View style={styles.NumberInput}>
                <View>
                  <Image source={require('../../assets/USflag.png')} resizeMode='contain' style={{
                    marginRight: 10,
                    borderRadius: 3
                  }} />
                </View>
                <Text> | </Text>
                <TextInput
                  value={number}
                  placeholder={'Enter your number'}
                  keyboardType='number-pad'
                  onChangeText={number => setNumber(number)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>


          <View style={{ alignItems: 'flex-start', marginTop: 20, paddingHorizontal: 10 }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.black
            }}> 2st Reference </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Name </Text>
              <View style={styles.NumberInput}>
                <TextInput
                  value={name}
                  placeholder={'Enter your name'}
                  onChangeText={name => setName(name)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Email </Text>
              <View style={styles.NumberInput}>
                <TextInput
                  value={email}
                  placeholder={'Enter your email'}
                  keyboardType='email-address'
                  onChangeText={email => setEmail(email)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>


          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: COLORS.black }}> Phone Number </Text>
              <View style={styles.NumberInput}>
                <View>
                  <Image source={require('../../assets/USflag.png')} resizeMode='contain' style={{
                    marginRight: 10,
                    borderRadius: 3
                  }} />
                </View>
                <Text> | </Text>
                <TextInput
                  value={number}
                  placeholder={'Enter your number'}
                  keyboardType='number-pad'
                  onChangeText={number => setNumber(number)
                  }
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>


          <View style={{ alignItems: 'center' }}>

            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 50,
              paddingBottom: 10,
            }}>
              <View style={{ marginHorizontal: 5 }}>
                <CustomeButton width={170} onpress={() => navigation.navigate('')}
                  title={'Skipp'} bcolor={COLORS.light} />
              </View>
              <View style={{ marginHorizontal: 5 }}>
                <CustomeButton width={170} onpress={() => navigation.navigate('QuestionDealBreakandMakeScreen')}
                  title={'Continue'} />
              </View>
            </View>
          </View>

        </View>

      </ScrollView>



    </SafeAreaView >
  )
}

export default QuestionReferenceEmailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    height: '90%',
  },
  footer: {
    alignItems: 'center',
  },
  NumberInput: {
    flexDirection: 'row',
    alignItems: 'center',
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