import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator.js';
import SettingScreen from '../screens/SettingScreen.js';
import PremiumMembershipScreen from '../screens/PremiumMembershipScreen.js';
import SupportScreen from '../screens/SupportScreen.js';
import RateUsScreen from '../screens/RateUsScreen.js';
import PrivacyPolicy from '../screens/PrivacyPolicy.js';
import HomeScreen from '../screens/HomeScreen.js';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="SettingScreen" component={SettingScreen} />
                <Drawer.Screen name="PremiumMembershipScreen" component={PremiumMembershipScreen} />
                <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                <Drawer.Screen name="RateUsScreen" component={RateUsScreen} />
                <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator