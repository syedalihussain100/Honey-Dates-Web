import {Image, StatusBar, StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'

const RateUsScreen = () => {
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
                        <TouchableOpacity onPress={onpress}>
                            <Image source={require('../../assets/menu.png')} resizeMode='contain'
                                style={{
                                    height: 20
                                }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>Profile Settings</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 20 }}>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RateUsScreen

const styles = StyleSheet.create({})