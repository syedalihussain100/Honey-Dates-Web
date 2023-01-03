import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton'

const LoginScreen = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/loginbackground.png')} resizeMode="cover" style={StyleSheet.absoluteFillObject}>
            <View style={styles.overlay} />

            <View style={{ alignItems: 'center' }}>
                <View style={{ paddingTop: 40 }}>
                    <Image source={require('../../assets/logo.png')} resizeMode="contain" style={{
                        width: 124,
                        height: 92,
                    }} />
                </View>

                <View style={{
                    paddingTop: 20,
                    width: 310,
                }}>
                    <Text style={{ textAlign: 'center', color: COLORS.white }}>
                        The only dating app designed to help you find your soulmate. Filled with different types of events, designed for young professionals & couples
                    </Text>
                </View>

                <View style={{
                    paddingTop: 50,
                    width: 310,
                }}>
                    <Text style={{ textAlign: 'center', color: COLORS.white }}>
                        Lets get started
                    </Text>
                </View>

                <View style={{
                    paddingTop: 20,
                }}>
                    <CustomeButton onpress={() => navigation.navigate('LoginWithNumberScreen')} title={'Login with phone number'} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 45,
                    paddingTop:35
                }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: COLORS.white }} />
                    <View>
                        <Text style={{
                            width: 50,
                            textAlign: 'center',
                            color: COLORS.white,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Or</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: COLORS.white }} />
                </View>

                <View style={{
                    paddingTop: 35,
                }}>
                    <CustomeButton color={COLORS.white} bcolor={COLORS.black} image={require('../../assets/apple.png')} title={'Continue with Apple'} />
                </View>

                <View style={{
                    paddingTop: 15,
                }}>
                    <CustomeButton color={COLORS.white} bcolor={COLORS.blue} image={require('../../assets/facebook.png')} title={'Continue with Facebook'} />
                </View>

                <View style={{
                    paddingTop: 15,
                }}>
                    <CustomeButton color={COLORS.black} bcolor={COLORS.white} image={require('../../assets/google.png')} title={'Continue with Google'} />
                </View>


                <View style={{
                    paddingTop: 50,
                }}>
                    <Text style={{
                        borderBottomWidth:1, 
                        borderBottomColor:COLORS.white, 
                        textAlign: 'center', 
                        color: COLORS.white 
                        }}>
                        Login as Mediator
                    </Text>
                </View>


            </View>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    absoluteFillObject: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})