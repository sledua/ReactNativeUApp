import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  MainScreen,
  screenOptions as mainScreenOptions,
} from '../screens/MainScreen';
import {
  SelectScreen,
  screenOptions as selectScreenOptions,
} from '../screens/SelectScreen';
import {
  LikedScreen,
  screenOptions as likedScreenOptions,
} from '../screens/LikedScreen';
import {
  AboutScreen,
  screenOptions as aboutScreenOptions,
} from '../screens/AboutScreen';
import {COLOR} from '../theme';

const MyStackNavigation = createStackNavigator();
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? COLOR.HEADER_ANDROID_COLOR : COLOR.PAGE_COLOR,
  },
  headerTintColor:
    Platform.OS === 'android' ? COLOR.TEXT_COLOR : COLOR.HEADER_ANDROID_COLOR,
};
const MainStackApp = () => {
  return (
    <MyStackNavigation.Navigator
      screenOptions={defaultNavigationOptions}
      nitialRouteName="MainScreen">
      <MyStackNavigation.Screen
        name="MainScreen"
        component={MainScreen}
        options={mainScreenOptions}
      />
      <MyStackNavigation.Screen
        name="SelectScreen"
        component={SelectScreen}
        options={selectScreenOptions}
      />
      <MyStackNavigation.Screen
        name="LikedScreen"
        component={LikedScreen}
        options={likedScreenOptions}
      />
      <MyStackNavigation.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={aboutScreenOptions}
      />
    </MyStackNavigation.Navigator>
  );
};
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackApp />
    </NavigationContainer>
  );
};
