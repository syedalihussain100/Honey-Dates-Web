import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton'

const CongratsMatchScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>
        <View style={{
          paddingTop: 20
        }}>
          <Image source={require('../../assets/congratsLike.png')} resizeMode='contain' style={{
            height: 120
          }} />
        </View>

        <View style={{
          padding: 20
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: COLORS.black,
            textAlign: 'center',
          }}>Congratulations</Text>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: COLORS.black
          }}>It's a <Text style={{ backgroundColor: COLORS.main, paddingHorizontal: 5 }}>match!</Text></Text>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <View style={{
            marginHorizontal: 10,
            marginVertical: 5,
            borderWidth: 6,
            borderColor: COLORS.white,
            borderRadius: 60,
          }}>
            <Image source={require('../../assets/like3.png')} resizeMode='contain'
              style={{
                width: 80,
                height: 80,
                borderRadius: 30,
              }} />
          </View>
          <View style={{
            marginHorizontal: 10,
            marginVertical: 5,
            borderWidth: 6,
            borderColor: COLORS.white,
            borderRadius: 60,
          }}>
            <Image source={require('../../assets/like1.png')} resizeMode='contain'
              style={{
                width: 80,
                height: 80,
                borderRadius: 30,
              }} />
          </View>
        </View>

        <View style={{
          justifyContent: 'center',
          paddingTop: 10,
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.black }}>
            Keraw , <Text style={{
              fontWeight: '400'
            }}>25</Text></Text>
        </View>

        <View style={{
          justifyContent: 'center',
          paddingTop: 10,
          paddingHorizontal: 70
        }}>
          <Text style={{
            textAlign: 'center'
          }}>
            Let’s ask her about something
            interested, or you can just say “Hi”
            for initial e-meet.
          </Text>
        </View>

        <View style={{
          paddingTop: 70
        }}>
          <TouchableOpacity>
            <View style={{
              backgroundColor: COLORS.main,
              width: 329,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{ fontWeight: 'bold', color: COLORS.black, fontSize: 16 }}>Say "Hi"</Text>
            </View>
          </TouchableOpacity>
        </View>



      </View>
    </SafeAreaView>
  )
}

export default CongratsMatchScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})