import { StatusBar, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../consts/Colors'
import HeaderTabOne from '../components/HeaderTabOne'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.black} />
            <View style={styles.container}>


                <HeaderTabOne Lefticon={require('../../assets/menu3.png')} logo={require('../../assets/splashlogo.png')} />

                <View style={{ 
                    marginTop: 5,
                    height: '57%', backgroundColor: COLORS.white,
                    elevation: 5,
                    borderRadius: 25,
                    paddingHorizontal: 5
                }}>
                    <View style={{
                        paddingTop: 5,
                    }}>
                        <Image source={require('../../assets/profilepic2.png')} resizeMode='stretch'
                            style={{
                                height: 380,
                                width: 350,
                                paddingHorizontal: 10
                            }}
                        />
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 5,
                            paddingTop: 10
                        }}>
                            <Image source={require('../../assets/dot.png')} resizeMode='contain'
                                style={{
                                    width: 5,
                                    height: 5,
                                    marginRight: 5
                                }} />
                            <Text style={{
                                fontSize: 20, fontWeight: 'bold',
                                color: COLORS.black,
                                marginRight: 5
                            }}>Sofia Toly,</Text>
                            <Text style={{
                                fontSize: 20,
                                color: COLORS.black,
                                marginRight: 5
                            }}>25</Text>
                            <Image source={require('../../assets/conform.png')} resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                }} />
                        </View>
                    </View>


                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 5,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                color: COLORS.black,
                                marginRight: 5
                            }}>Model at Instagaram</Text>
                            <Text style={{
                                color: COLORS.black,
                                marginRight: 5,
                                backgroundColor: COLORS.main,
                                padding: 3,
                                borderRadius: 5
                            }}>2.1 Miles Away</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 50,
                            justifyContent: 'space-between',
                            marginTop: 10
                        }}>
                            <View style={{
                                padding: 20,
                                borderRadius: 30,
                                backgroundColor: COLORS.white,
                                elevation:5

                            }}>
                                <TouchableOpacity>

                                    <Image source={require('../../assets/cancle.png')} resizeMode='contain'
                                        style={{
                                            width: 15,
                                            height: 15
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                padding: 15,
                                borderRadius: 40,
                                backgroundColor: COLORS.pink
                            }}>
                                <TouchableOpacity onPress={() => navigation.navigate('CongratsMatchScreen')}>

                                    <Image source={require('../../assets/heart.png')} resizeMode='contain'
                                        style={{
                                            width: 30,
                                            height: 30
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                padding: 20,
                                borderRadius: 30,
                                backgroundColor: COLORS.white,
                                elevation:5
                            }}>
                                <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>

                                    <Image source={require('../../assets/message.png')} resizeMode='contain'
                                        style={{
                                            width: 20,
                                            height: 20
                                        }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: '45%' }}>

                </View>



            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
})