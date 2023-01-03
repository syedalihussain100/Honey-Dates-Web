import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import HeaderTabOne from '../components/HeaderTabOne';
import COLORS from '../../consts/Colors';
import CustomeButton from '../components/CustomeButton'
import LikesCard from '../components/LikesCard';

const LikeDetailScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          height: 80
        }}>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>

          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: COLORS.black
            }}>Liked you</Text>
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 20 }}>
            <TouchableOpacity>
              <Image source={require('../../assets/menu2.png')} resizeMode='contain' />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView vertical showsVerticalScrollIndicator={false}>

          <View style={{
            backgroundColor: COLORS.white,
            paddingBottom: 20,
            marginBottom: 300,
          }}>
            <View style={{
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 20,
              paddingHorizontal: 40
            }}>
              <Text style={{
                textAlign: 'center'
              }}>These people would like to Chat to you.Like
                them back to start a conservation.</Text>
            </View>

            <View style={{
              marginHorizontal: 20,
              padding: 20,
              alignItems: 'center',
              borderRadius: 20,
              elevation: 5,
              backgroundColor: COLORS.light
            }}>
              <View>
                <Text style={{
                  fontWeight: 'bold',
                  color: COLORS.black,
                  paddingVertical: 5,
                }}>Want to remove flakes</Text>
              </View>
              <View style={{
                paddingHorizontal: 10,
                paddingBottom: 10,
              }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: 12
                }}>You can remove flakes by paying
                  $20 per flake now</Text>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: COLORS.main,
                borderRadius: 10,
              }}>
                <Text style={{ color: COLORS.black, fontSize: 13 }}>Remove Flakes</Text>
              </TouchableOpacity>
            </View>


            <View style={{
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 20,
              backgroundColor: COLORS.white,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <LikesCard image={require('../../assets/profile6.png')} name='Goria Ran, 25' 
                description='Model at Instagram'/>
                <LikesCard image={require('../../assets/profile4.png')} name='Goria Ran, 25' 
                description='Model at Instagram'/>
              </View>
            </View>

            <View style={{
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 20,
              backgroundColor: COLORS.white,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <LikesCard image={require('../../assets/profile6.png')} name='Goria Ran, 25' 
                description='Model at Instagram'/>
                <LikesCard image={require('../../assets/profile4.png')} name='Goria Ran, 25' 
                description='Model at Instagram'/>
              </View>
            </View>

          </View>
        </ScrollView>



      </View>
    </SafeAreaView>
  )
}

export default LikeDetailScreen

const styles = StyleSheet.create({})