import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../consts/Colors'
import HeaderTabTwo from '../components/HeaderTabTwo'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      <View style={styles.container}>

        <HeaderTabTwo onpress={() => navigation.navigate('SettingScreen')} />
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={{
            marginBottom: 200,
            backgroundColor: COLORS.white,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingBottom: 20
            }}>
              <View style={{
                borderWidth: 3,
                borderColor: COLORS.main,
                borderRadius: 50
              }}>
                <Image source={require('../../assets/profile1.png')} resizeMode='contain' style={{
                  borderRadius: 30,
                  width: 80,
                  height: 80
                }} />
              </View>
              <View style={{
                paddingHorizontal: 20,
                justifyContent: 'center'
              }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: COLORS.black
                }}>Jan dohn</Text>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: COLORS.light,
                  borderRadius: 5,
                  padding: 5
                }}>
                  <Image source={require('../../assets/dates.png')} resizeMode='contain'
                    style={{
                      marginHorizontal: 5,
                      width: 20,
                      height: 20
                    }} />
                  <Text style={{ color: COLORS.black, fontSize: 13 }}>Want to date</Text>
                </View>
              </View>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between'
            }}>
              <View>
                <Image source={require('../../assets/profile6.png')} resizeMode='cover'
                  style={{
                    width: 220,
                    height: 200,
                    borderRadius: 10
                  }} />
              </View>
              <View style={{
                justifyContent: 'space-between'
              }}>
                <View>
                  <Image source={require('../../assets/profile2.png')} resizeMode='cover'
                    style={{
                      height: 95,
                      width: 120,
                      borderRadius: 10
                    }} />
                </View>
                <View>
                  <Image source={require('../../assets/profile3.png')} resizeMode='cover'
                    style={{
                      height: 95,
                      width: 120,
                      borderRadius: 10
                    }} />
                </View>
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
              paddingTop: 10
            }}>
              <View>
                <Image source={require('../../assets/profile4.png')} resizeMode='cover'
                  style={{
                    height: 95,
                    width: 110,
                    borderRadius: 10
                  }} />
              </View>
              <View>
                <Image source={require('../../assets/profile5.png')} resizeMode='cover'
                  style={{
                    height: 95,
                    width: 110,
                    borderRadius: 10
                  }} />
              </View>
              <View style={{
                backgroundColor: COLORS.mainlight,
                height: 95,
                width: 110,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}>
                <TouchableOpacity>
                  <Image source={require('../../assets/add.png')} resizeMode='contain'
                    style={{
                      borderRadius: 10
                    }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingTop: 20
            }}>
              <View style={{
                flexDirection: 'row',
                backgroundColor: COLORS.white,
                elevation: 5,
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignItems: 'center',
                height: 70,
                width: '49%'
              }}>
                <View>
                  <Image source={require('../../assets/matchperson.png')} resizeMode='contain'
                    style={{
                      width: 30,
                      marginRight: 10
                    }} />
                </View>
                <View>
                  <Text style={{
                    fontSize: 12
                  }}>
                    Your Matches
                  </Text>
                  <Text style={{
                    fontWeight: 'bold',
                    color: COLORS.black,
                    fontSize: 12
                  }}>
                    Very Low
                  </Text>
                </View>
              </View>

              <TouchableOpacity 
              onPress={() => navigation.navigate('CurrentBalanceScreen')}
              style={{
                  flexDirection: 'row',
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                  height: 70,
                  width: '49%'
                }}>
                  <View>
                    <Image source={require('../../assets/credit.png')} resizeMode='contain'
                      style={{
                        width: 30,
                        marginRight: 10
                      }} />
                  </View>
                  <View>
                    <Text style={{
                      fontSize: 12
                    }}>
                      Credits
                    </Text>
                    <Text style={{
                      fontWeight: 'bold',
                      color: COLORS.black,
                      fontSize: 12
                    }}>
                      $50
                    </Text>
                  </View>
              </TouchableOpacity>


            </View>

            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20
            }}>
              <View style={{
                height: 80,
                borderRadius: 10,
                width: '100%',
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: COLORS.light,
                flexDirection: 'row',
              }}>
                <View style={{
                  paddingRight: 30
                }}>
                  <Text>
                    What type of relationship you
                    are looking for?
                  </Text>
                </View>
                <View>
                  <Image source={require('../../assets/back.png')} resizeMode='contain' />
                </View>
              </View>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
              <View style={{
                height: 80,
                borderRadius: 10,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: COLORS.light,
                flexDirection: 'row',
              }}>
                <View style={{
                  paddingRight: 20
                }}>
                  <Text>
                    Are you introvert or extrovert?
                  </Text>
                </View>
                <View>
                  <Image source={require('../../assets/back.png')} resizeMode='contain' />
                </View>
              </View>
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              paddingVertical: 20,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.light
            }}>
              <View>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: COLORS.black
                }}>Flake Meter</Text>
                <Text>Flakes on your profile</Text>
              </View>
              <View>
                <Image source={require('../../assets/flakemeter.png')} resizeMode='contain' />
              </View>
            </View>

            <View style={{
              padding: 20,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.light
            }}>
              <View>
                <Text style={{
                  fontWeight: 'bold',
                  color: COLORS.black,
                  paddingVertical: 5,
                }}>Want to remove flakes</Text>
              </View>
              <View style={{
                paddingHorizontal: 50,
                paddingBottom: 10,
              }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: 13
                }}>You can remove flakes by paying
                  $20 per flake now</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RemoveFlakeScreen')}
                activeOpacity={0.8} style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  backgroundColor: COLORS.main,
                  borderRadius: 10,
                }}>
                <Text style={{ color: COLORS.black, fontSize: 13 }}>Remove Flakes</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20
              }}>
                <Text style={{
                  color: COLORS.black,
                  fontWeight: 'bold',
                  fontSize: 16
                }}>Memberships</Text>
                <Text style={{
                  color: COLORS.blue, borderBottomColor: COLORS.blue,
                  borderBottomWidth: 1,
                }}>Additional Packages</Text>
              </View>

              <View style={{
                marginHorizontal: 20,
                borderRadius: 20,
                backgroundColor: COLORS.white,
                elevation: 5
              }}>
                <View style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  elevation: 5,
                }}>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                  }}>
                    <Text style={{
                      color: COLORS.black,
                      fontWeight: 'bold',
                      fontSize: 15
                    }}>Basic Membership</Text>
                    <Text style={{ color: COLORS.black }}>$4.99/Month</Text>
                  </View>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                  }}>
                    <Text style={{
                      color: COLORS.black,
                      width: '60%',
                      fontSize: 13
                    }}>Unlocks political View and
                      Religion filter </Text>
                    <Image source={require('../../assets/Premium.png')} resizeMode='contain'
                      style={{
                        width: 50,
                        height: 50
                      }} />
                  </View>
                  <View style={{
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                  }}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      backgroundColor: COLORS.main,
                      borderRadius: 10,
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: COLORS.black, fontSize: 13 }}>View more</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  borderBottomColor: COLORS.light,
                  borderBottomWidth: 1,
                }}>
                  <Text style={{
                    color: COLORS.black,
                    fontSize: 18,
                    fontWeight: 'bold'
                  }}>
                    What's in Basic Membership
                  </Text>
                </View>

                <View>
                  <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                  }}>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/unlock.png')} resizeMode='contain' />
                    </View>
                    <View style={{ width: '70%', paddingRight: 30 }}>
                      <Text>Unlock Political and religion filter</Text>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                    </View>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                  }}>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/totlikes.png')} resizeMode='contain' />
                    </View>
                    <View style={{ width: '70%', paddingRight: 30 }}>
                      <Text>15 likes Per Day</Text>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                    </View>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                  }}>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/matches.png')} resizeMode='contain' />
                    </View>
                    <View style={{ width: '70%', paddingRight: 30 }}>
                      <Text>10 Max Matches</Text>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={require('../../assets/tik.png')} resizeMode='contain' />
                    </View>
                  </View>

                  <View style={{
                    padding: 20,
                  }}>
                    <TouchableOpacity activeOpacity={0.8} style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      backgroundColor: COLORS.main,
                      borderRadius: 10,
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: COLORS.black, fontSize: 15 }}>Current Membership</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>



            </View>


          </View>
        </ScrollView>





      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})