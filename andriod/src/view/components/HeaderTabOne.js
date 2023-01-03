import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../consts/Colors'

const HeaderTabOne = ({ Lefticon, logo }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            height: 80
        }}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <TouchableOpacity>
                    <Image source={Lefticon} resizeMode='contain' />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={logo} resizeMode='contain'
                    style={{
                        height: 50
                    }} />
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 20 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/menu2.png')} resizeMode='contain' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderTabOne