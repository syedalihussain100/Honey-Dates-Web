import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../../consts/Colors';
// import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
// import HeaderTabOne from '../components/HeaderTabOne';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { TabView, SceneMap } from 'react-native-tab-view';




const ChatingScreen = ({ navigation, route }) => {
    const userName = route.params.userName;
    const userImg = route.params.userImg;
    const id = route.params.id;
    // console.log('userName: ', userName);
    // console.log('userName: ', userImg);

    const [showhide, setShowHide] = useState(false)
    const [sendchat, setSendChat] = useState('')

    const SwitchMode = (value) => (
        setShowHide(value)
    );

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={COLORS.black} />
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    backgroundColor: COLORS.white,
                }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{
                            paddingRight: 10,
                            justifyContent: 'center'
                        }}>
                            <Image source={require('../../assets/arrowleft.png')} resizeMode='contain'
                                style={{
                                    tintColor: COLORS.black
                                }}
                            />
                        </View>
                        <View style={{
                            paddingRight: 10,
                            justifyContent: 'center'
                        }}>
                            <Image source={userImg} resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        </View>
                        <View style={{
                            paddingRight: 10,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: COLORS.black
                            }}>{userName}</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={{
                            paddingRight: 10,
                            justifyContent: 'center'
                        }}>
                            <Image source={require('../../assets/call.png')} resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black,
                                }}
                            />
                        </View>
                        <View style={{
                            paddingRight: 10,
                            justifyContent: 'center'
                        }}>
                            <Image source={require('../../assets/moreoption.png')} resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingTop: 20,
                    backgroundColor: COLORS.white,
                }}>
                    <TouchableOpacity onPress={value => setShowHide(value)} style={{
                        width: '50%',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.main,
                        alignItems: 'center',
                        marginHorizontal: 5,
                        paddingBottom: 5
                    }}>
                        <Text style={{
                            color: COLORS.main,
                            fontSize: 16,
                        }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowHide(true)} style={{
                        width: '50%',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.gray2,
                        alignItems: 'center',
                        marginHorizontal: 5,
                        paddingBottom: 5
                    }}>
                        <Text style={{
                            color: COLORS.gray2,
                            fontSize: 16,
                        }}>Date Mode</Text>
                    </TouchableOpacity>
                </View>

                {showhide == true ? (
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                        backgroundColor: COLORS.white,
                        marginTop: 30,
                        marginHorizontal: 20,
                        borderRadius: 10,
                        elevation: 3,
                    }}>
                        <View style={{
                            alignItems: 'center',
                            paddingVertical: 10
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: COLORS.black
                            }}>Date mode</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Text style={{ textAlign: 'center' }}>Text your trusted friend or family member a link to
                                your live Location During date mode</Text>
                        </View>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('DateModeScreen')}
                             style={{
                                marginVertical: 10,
                                backgroundColor: COLORS.main,
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 5,
                                alignItems: 'center',
                                width: '50%'
                            }}>
                                <Text style={{ color: COLORS.black }}>Request tracking</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={{justifyContent:'center', backgroundColor:COLORS.white}}>
                        <View style={{
                            height:'57%',
                            width:'100%',
                            // backgroundColor:'#ccc'
                        }}>
                            <View>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{
                            height: '43%',
                            width: '100%',
                            // backgroundColor:COLORS.gray
                            alignItems:'center',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                alignItems:'center',
                                paddingHorizontal: 10,
                            }}>
                                <View style={{ 
                                    width: '70%', 
                                    justifyContent: 'center',
                                    // backgroundColor:'#ccc',
                                     }}>
                                    <TextInput
                                    placeholder='Type message'
                                        value={sendchat}
                                        onChangeText={(text) => setSendChat(text)}
                                        style={styles.inputType} />
                                </View>
                                <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Image source={require('../../assets/attechment.png')} resizeMode="contain"
                                            style={{
                                                width: 20,
                                                height: 20,
                                                tintColor: COLORS.black
                                            }} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Image source={require('../../assets/camera.png')} resizeMode="contain"
                                            style={{
                                                width: 20,
                                                height: 20,
                                                tintColor: COLORS.black
                                            }} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Image source={require('../../assets/voice.png')} resizeMode="contain"
                                            style={{
                                                width: 20,
                                                height: 20,
                                                tintColor: COLORS.black
                                            }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}

            </View>
        </SafeAreaView>
    )
}

export default ChatingScreen

const styles = StyleSheet.create({
    container: {
        // alignItems:'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        flex: 1,
        height:400,
    },
    footer: {
        height: 120,
        width: '100%'
    },
    inputType: {
        borderWidth: 1,
        paddingHorizontal:10,
        borderRadius: 10,
        borderColor: COLORS.gray2,
        height:40
    }
})
