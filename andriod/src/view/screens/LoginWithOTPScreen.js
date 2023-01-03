import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';



const LoginWithOTPScreen = ({ navigation }) => {
  const [number, setNumber] = useState();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={styles.contentContainer}>

          <View style={{
            paddingTop: 40
          }}>
            <Image source={require('../../assets/otpverification.png')} resizeMode='contain' />
          </View>

          <View style={{
            paddingTop: 10,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black
            }}>Verification code</Text>
          </View>


          <View style={{
            paddingTop: 10,
            alignItems: 'center'
          }}>
            <Text style={{
              color: COLORS.black
            }}>Please enter the 6-digits code sent to</Text>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}>
              <Text style={{
                color: COLORS.black,
                fontWeight: 'bold'
              }}>+1 331 623 8413</Text>

              <Text style={{
                color: COLORS.main,
                paddingLeft: 10,
              }}>edit</Text>
            </View>

          </View>


          <View style={styles.NumberInput}>
            <View style={{
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              width:50,
              alignItems:'center',
            }}>
              <TextInput
                value={number}
                placeholder={'0'}
                keyboardType='number-pad'
                onChangeText={number => setNumber(number)
                }
                style={styles.TextInput}
              />
            </View>

            <View style={{
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray2,
              width:50,
              alignItems:'center',
            }}>
              <TextInput
                value={number}
                placeholder={'0'}
                keyboardType='number-pad'
                onChangeText={number => setNumber(number)
                }
                style={styles.TextInput}
              />
            </View>

            <View style={{
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray2,
              width:50,
              alignItems:'center',
            }}>
              <TextInput
                value={number}
                placeholder={'0'}
                keyboardType='number-pad'
                onChangeText={number => setNumber(number)
                }
                style={styles.TextInput}
              />
            </View>

            <View style={{
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray2,
              width:50,
              alignItems:'center',
            }}>
              <TextInput
                value={number}
                placeholder={'0'}
                keyboardType='number-pad'
                onChangeText={number => setNumber(number)
                }
                style={styles.TextInput}
              />
            </View>

            <View style={{
              marginHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray2,
              width:50,
              alignItems:'center',
            }}>
              <TextInput
                value={number}
                placeholder={'0'}
                keyboardType='number-pad'
                onChangeText={number => setNumber(number)
                }
                style={styles.TextInput}
              />
            </View>


          </View>


        </View>


        <View style={styles.footer}>

          <View style={{
            paddingTop: 20,
          }}>
            <CustomeButton onpress={() => navigation.navigate('QuestionPhotoScreen')}
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



    </SafeAreaView>
  )
}

export default LoginWithOTPScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  contentContainer: {
    height: '80%',
    alignItems: 'center',
  },
  footer: {
    height: '20%'
  },
  NumberInput: {
    marginTop: 60,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 20
  },
  TextInput: {
    padding: 0,
    backgroundColor: COLORS.transparent,
    color: COLORS.gray,
    height: 40,
    width: 15,
    justifyContent: "center",
    alignItems: 'center'
  },
})