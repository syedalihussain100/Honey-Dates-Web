import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginWithNumberScreen from '../screens/LoginWithNumberScreen';
import LoginWithOTPScreen from '../screens/LoginWithOTPScreen';
import NameScreen from '../screens/NameScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import LoginWithEmail from '../screens/LoginWithEmail';
import NotificationScreen from '../screens/NotificationScreen';
import QuestionGenderScreen from '../screens/QuestionGenderScreen';
import QuestionYourInterestScreen from '../screens/QuestionYourInterestScreen';
import QuestionWantKidsScreen from '../screens/QuestionWantKidsScreen';
import QuestionBioScreen from '../screens/QuestionBioScreen';
import QuestionProfessionallyScreen from '../screens/QuestionProfessionallyScreen';
import QuestionMusicScreen from '../screens/QuestionMusicScreen';
import QuestionPoliticalviewScreen from '../screens/QuestionPoliticalviewScreen';
import QuestionPoliticalPartnerviewScreen from '../screens/QuestionPoliticalPartnerviewScreen';
import QuestionIntroandExtroScreen from '../screens/QuestionIntroandExtroScreen';
import QuestionPIntroandExtroScreen from '../screens/QuestionPIntroandExtroScreen';
import QuestionPhotoScreen from '../screens/QuestionPhotoScreen';
import QuestionTypeofRelationScreen from '../screens/QuestionTypeofRelationScreen';
import QuestionSmokeScreen from '../screens/QuestionSmokeScreen';
import QuestionVapeScreen from '../screens/QuestionVapeScreen';
import QuestionMarijuanaScreen from '../screens/QuestionMarijuanaScreen';
import QuestionDrugsScreen from '../screens/QuestionDrugsScreen';
import QuestionDrinkScreen from '../screens/QuestionDrinkScreen';
import QuestionInstagramScreen from '../screens/QuestionInstagramScreen';
import QuestionOccupationScreen from '../screens/QuestionOccupationScreen';
import QuestionInterestScreen from '../screens/QuestionInterestScreen';
import QuestionEducationScreen from '../screens/QuestionEducationScreen';
import QuestionRelationshipScreen from '../screens/QuestionRelationshipScreen';
import QuestionReligionScreen from '../screens/QuestionReligionScreen';
import QuestionMoreAboutChristianScreen from '../screens/QuestionMoreAboutChristianScreen';
import QuestionMoreAboutJewishScreen from '../screens/QuestionMoreAboutJewishScreen';
import QuestionMoreAboutCatholicScreen from '../screens/QuestionMoreAboutCatholicScreen';
import QuestionMoreAboutMuslimScreen from '../screens/QuestionMoreAboutMuslimScreen';
import QuestionDietScreen from '../screens/QuestionDietScreen';
import QuestionPartnerDietScreen from '../screens/QuestionPartnerDietScreen';
import QuestionFavFoodScreen from '../screens/QuestionFavFoodScreen';
import QuestionExersizeScreen from '../screens/QuestionExersizeScreen';
import QuestionExersizePartnerScreen from '../screens/QuestionExersizePartnerScreen';
import QuestionEthnicityScreen from '../screens/QuestionEthnicityScreen';
import QuestionEthnicityPartnerScreen from '../screens/QuestionEthnicityPartnerScreen';
import QuestionDescribeYouScreen from '../screens/QuestionDescribeYouScreen';
import QuestionDescribePartnerScreen from '../screens/QuestionDescribePartnerScreen';
import QuestionDisabilityScreen from '../screens/QuestionDisabilityScreen';
import QuestionDisabilityPartnerScreen from '../screens/QuestionDisabilityPartnerScreen';
import QuestionHeightScreen from '../screens/QuestionHeightScreen';
import QuestionHeightPartnerScreen from '../screens/QuestionHeightPartnerScreen';
import QuestionBuildTypeScreen from '../screens/QuestionBuildTypeScreen';
import QuestionBuildTypePartnerScreen from '../screens/QuestionBuildTypePartnerScreen';
import QuestionReferenceEmailScreen from '../screens/QuestionReferenceEmailScreen';
import QuestionDealBreakandMakeScreen from '../screens/QuestionDealBreakandMakeScreen';
import QuestionPartnerConditionScreen from '../screens/QuestionPartnerConditionScreen';
import QuestionLongestRelationshipScreen from '../screens/QuestionLongestRelationshipScreen';
import QuestionNextRelationshipTimeScreen from '../screens/QuestionNextRelationshipTimeScreen';
import QuestionMovieTypeScreen from '../screens/QuestionMovieTypeScreen';
import QuestionInBedScreen from '../screens/QuestionInBedScreen';
import QuestionInLifeScreen from '../screens/QuestionInLifeScreen';
import QuestionCuddlingScreen from '../screens/QuestionCuddlingScreen';
import QuestionClingyScreen from '../screens/QuestionClingyScreen';
import QuestionCongratulationScreen from '../screens/QuestionCongratulationScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeDetailScreen from '../screens/LikeDetailScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="LoginWithNumberScreen" component={LoginWithNumberScreen} />
                <Stack.Screen name="LoginWithOTPScreen" component={LoginWithOTPScreen} />
                <Stack.Screen name="QuestionPhotoScreen" component={QuestionPhotoScreen} />
                <Stack.Screen name="NameScreen" component={NameScreen} />
                <Stack.Screen name="DateOfBirthScreen" component={DateOfBirthScreen} />
                <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                <Stack.Screen name="QuestionGenderScreen" component={QuestionGenderScreen} />
                <Stack.Screen name="QuestionYourInterestScreen" component={QuestionYourInterestScreen} />
                <Stack.Screen name="QuestionWantKidsScreen" component={QuestionWantKidsScreen} />
                <Stack.Screen name="QuestionBioScreen" component={QuestionBioScreen} />
                <Stack.Screen name="QuestionProfessionallyScreen" component={QuestionProfessionallyScreen} />
                <Stack.Screen name="QuestionMusicScreen" component={QuestionMusicScreen} />
                <Stack.Screen name="QuestionPoliticalviewScreen" component={QuestionPoliticalviewScreen} />
                <Stack.Screen name="QuestionPoliticalPartnerviewScreen" component={QuestionPoliticalPartnerviewScreen} />
                <Stack.Screen name="QuestionIntroandExtroScreen" component={QuestionIntroandExtroScreen} />
                <Stack.Screen name="QuestionPIntroandExtroScreen" component={QuestionPIntroandExtroScreen} />
                <Stack.Screen name="QuestionTypeofRelationScreen" component={QuestionTypeofRelationScreen} />
                <Stack.Screen name="QuestionSmokeScreen" component={QuestionSmokeScreen} />
                <Stack.Screen name="QuestionVapeScreen" component={QuestionVapeScreen} />
                <Stack.Screen name="QuestionMarijuanaScreen" component={QuestionMarijuanaScreen} />
                <Stack.Screen name="QuestionDrugsScreen" component={QuestionDrugsScreen} />
                <Stack.Screen name="QuestionDrinkScreen" component={QuestionDrinkScreen} />
                <Stack.Screen name="QuestionInstagramScreen" component={QuestionInstagramScreen} />
                <Stack.Screen name="QuestionOccupationScreen" component={QuestionOccupationScreen} />
                <Stack.Screen name="QuestionInterestScreen" component={QuestionInterestScreen} />
                <Stack.Screen name="QuestionEducationScreen" component={QuestionEducationScreen} />
                <Stack.Screen name="QuestionRelationshipScreen" component={QuestionRelationshipScreen} />
                <Stack.Screen name="QuestionReligionScreen" component={QuestionReligionScreen} />
                <Stack.Screen name="QuestionMoreAboutChristianScreen" component={QuestionMoreAboutChristianScreen} />
                <Stack.Screen name="QuestionMoreAboutJewishScreen" component={QuestionMoreAboutJewishScreen} />
                <Stack.Screen name="QuestionMoreAboutCatholicScreen" component={QuestionMoreAboutCatholicScreen} />
                <Stack.Screen name="QuestionMoreAboutMuslimScreen" component={QuestionMoreAboutMuslimScreen} />
                <Stack.Screen name="QuestionDietScreen" component={QuestionDietScreen} />
                <Stack.Screen name="QuestionPartnerDietScreen" component={QuestionPartnerDietScreen} />
                <Stack.Screen name="QuestionFavFoodScreen" component={QuestionFavFoodScreen} />
                <Stack.Screen name="QuestionExersizeScreen" component={QuestionExersizeScreen} />
                <Stack.Screen name="QuestionExersizePartnerScreen" component={QuestionExersizePartnerScreen} />
                <Stack.Screen name="QuestionEthnicityScreen" component={QuestionEthnicityScreen} />
                <Stack.Screen name="QuestionEthnicityPartnerScreen" component={QuestionEthnicityPartnerScreen} />
                <Stack.Screen name="QuestionDescribeYouScreen" component={QuestionDescribeYouScreen} />
                <Stack.Screen name="QuestionDescribePartnerScreen" component={QuestionDescribePartnerScreen} />
                <Stack.Screen name="QuestionDisabilityScreen" component={QuestionDisabilityScreen} />
                <Stack.Screen name="QuestionDisabilityPartnerScreen" component={QuestionDisabilityPartnerScreen} />
                <Stack.Screen name="QuestionHeightScreen" component={QuestionHeightScreen} />
                <Stack.Screen name="QuestionHeightPartnerScreen" component={QuestionHeightPartnerScreen} />
                <Stack.Screen name="QuestionBuildTypeScreen" component={QuestionBuildTypeScreen} />
                <Stack.Screen name="QuestionBuildTypePartnerScreen" component={QuestionBuildTypePartnerScreen} />
                <Stack.Screen name="QuestionReferenceEmailScreen" component={QuestionReferenceEmailScreen} />
                <Stack.Screen name="QuestionDealBreakandMakeScreen" component={QuestionDealBreakandMakeScreen} />
                <Stack.Screen name="QuestionPartnerConditionScreen" component={QuestionPartnerConditionScreen} />
                <Stack.Screen name="QuestionLongestRelationshipScreen" component={QuestionLongestRelationshipScreen} />
                <Stack.Screen name="QuestionNextRelationshipTimeScreen" component={QuestionNextRelationshipTimeScreen} />
                <Stack.Screen name="QuestionMovieTypeScreen" component={QuestionMovieTypeScreen} />
                <Stack.Screen name="QuestionInBedScreen" component={QuestionInBedScreen} />
                <Stack.Screen name="QuestionInLifeScreen" component={QuestionInLifeScreen} />
                <Stack.Screen name="QuestionCuddlingScreen" component={QuestionCuddlingScreen} />
                <Stack.Screen name="QuestionClingyScreen" component={QuestionClingyScreen} />
                <Stack.Screen name="QuestionCongratulationScreen" component={QuestionCongratulationScreen} />
                <Stack.Screen name="HomeScreen" component={BottomNavigator} />
                <Stack.Screen name="LikeDetailScreen" component={LikeDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack