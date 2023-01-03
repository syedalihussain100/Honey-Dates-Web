import { Image, StatusBar, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/Colors'
import CustomeButton from '../components/CustomeButton';

const SettingScreen = ({navigation}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();


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
                    <View style={{ width: '20%' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/menu.png')} resizeMode='contain'
                                style={{
                                    height: 45,
                                    color: COLORS.black
                                }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '60%', alignItems: 'center', }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: COLORS.black
                        }}>Profile Settings</Text>
                    </View>

                    <View style={{ width: '20%', alignItems: 'flex-end', paddingHorizontal: 20 }}>
                    </View>
                </View>

                <ScrollView vertical showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: COLORS.black }}> Name </Text>
                                <View style={styles.NumberInput}>
                                    <TextInput
                                        value={name}
                                        placeholder={'Enter your name'}
                                        keyboardType='email-address'
                                        onChangeText={name => setName(name)
                                        }
                                        style={styles.TextInput}
                                    />
                                    <Image source={require('../../assets/edit.png')} resizeMode='contain'
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: COLORS.black
                                        }}
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
                                    <Image source={require('../../assets/edit.png')} resizeMode='contain'
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: COLORS.black
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: COLORS.black }}> Phone Number </Text>
                                <View style={styles.NumberInput}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>

                                        <Image source={require('../../assets/USflag.png')} resizeMode='contain' style={{
                                            marginRight: 10,
                                            borderRadius: 3
                                        }} />
                                        <Text> | </Text>
                                        <TextInput
                                            value={number}
                                            placeholder={'Enter your number'}
                                            keyboardType='email-address'
                                            onChangeText={number => setNumber(number)
                                            }
                                            style={styles.TextInput}
                                        />
                                    </View>
                                    <View>

                                        <Image source={require('../../assets/edit.png')} resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20,
                                                tintColor: COLORS.black
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 20,
                            paddingVertical: 20
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.black
                            }}>Questions Settings</Text>
                        </View>

                        <View style={{
                            marginHorizontal: 20,
                            margin: 10,
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            elevation: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            height: 100,
                        }}>
                            <View style={{
                                width: '90%',
                                paddingRight: 40,
                            }}>
                                <View>
                                    <Text>
                                        What type of relationship you are looking for?
                                    </Text>
                                </View>
                                <View style={{
                                    paddingTop: 10
                                }}>
                                    <Text style={{
                                        color: COLORS.black,
                                        fontSize: 15
                                    }}>
                                        Selected : Platonic Relationship
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                width: '10%',
                                alignItems: 'flex-end'
                            }}>
                                <Image source={require('../../assets/Edit2.png')} />
                            </View>
                        </View>
                        <View style={{
                            marginHorizontal: 20,
                            margin: 10,
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            elevation: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            height: 100,
                        }}>
                            <View style={{
                                width: '90%',
                                paddingRight: 50,
                            }}>
                                <View>
                                    <Text>
                                        What is your religion?
                                    </Text>
                                </View>
                                <View style={{
                                    paddingTop: 10
                                }}>
                                    <Text style={{
                                        color: COLORS.black,
                                        fontSize: 15
                                    }}>
                                        Selected : Jewish, modren orthodox
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                width: '10%',
                                alignItems: 'flex-end'
                            }}>
                                <Image source={require('../../assets/Edit2.png')} />
                            </View>
                        </View>

                        <View style={{
                            marginHorizontal: 20,
                            margin: 10,
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            elevation: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            height: 100,
                        }}>
                            <View style={{
                                width: '90%',
                                paddingRight: 50,
                            }}>
                                <View>
                                    <Text>
                                        What do you identify as?
                                    </Text>
                                </View>
                                <View style={{
                                    paddingTop: 10
                                }}>
                                    <Text style={{
                                        color: COLORS.black,
                                        fontSize: 15
                                    }}>
                                        Selected : Male
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                width: '10%',
                                alignItems: 'flex-end'
                            }}>
                                <Image source={require('../../assets/Edit2.png')} />
                            </View>
                        </View>
                        <View style={{
                            marginHorizontal: 20,
                            margin: 10,
                            borderRadius: 20,
                            backgroundColor: COLORS.white,
                            elevation: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            height: 100,
                        }}>
                            <View style={{
                                width: '90%',
                                paddingRight: 50,
                            }}>
                                <View>
                                    <Text>
                                        What type of relationship you are looking for?
                                    </Text>
                                </View>
                                <View style={{
                                    paddingTop: 10
                                }}>
                                    <Text style={{
                                        color: COLORS.black,
                                        fontSize: 15
                                    }}>
                                        Selected : Platonic Relationship
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                width: '10%',
                                alignItems: 'flex-end'
                            }}>
                                <Image source={require('../../assets/Edit2.png')} />
                            </View>
                        </View>

                        <View style={{
                            alignItems: 'center',
                            paddingTop: 10,
                            height: '10%',
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ marginHorizontal: 5 }}>
                                    <TouchableOpacity  onPress={() => navigation.navigate('TermsandCondition')}
                                     activeOpacity={0.7}>
                                        <View style={{
                                            backgroundColor: COLORS.white,
                                            elevation:5,
                                            width: 150,
                                            height: 50,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                color: COLORS.black,
                                            }}>Terms or Conditions</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 5 }}>
                                    <TouchableOpacity  activeOpacity={0.7}
                                    onPress={() => navigation.navigate('PrivacyPolicy')}>
                                        <View style={{
                                            backgroundColor: COLORS.white,
                                            elevation:5,
                                            width: 150,
                                            height: 50,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                color: COLORS.black,
                                            }}>Privacy Policy</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            alignItems: 'center',
                            height: '10%',
                            marginBottom: 80
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ marginHorizontal: 5 }}>
                                    <CustomeButton width={170} onpress={() => navigation.navigate('')}
                                        title={'Skip'} bcolor={COLORS.light} />
                                </View>
                                <View style={{ marginHorizontal: 5 }}>
                                    <CustomeButton width={170} onpress={() => navigation.navigate('')}
                                        title={'Continue'} />
                                </View>
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: '100%',
    },
    NumberInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
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