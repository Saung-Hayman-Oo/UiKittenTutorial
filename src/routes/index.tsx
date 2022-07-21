import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ScanScreen} from '../screens/scan'
import {ProductScreen} from '../screens/Products'
import {AboutScreen} from '../screens/about'
import Icon from 'react-native-vector-icons/AntDesign'

const bottomTab = createBottomTabNavigator()
export const RootScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconNm: string
            if (route.name === 'scan') {
              iconNm = 'scan1'
            } else if (route.name === 'products') {
              iconNm = 'appstore-o'
            } else if (route.name === 'about') {
              iconNm = 'book'
            } else {
              iconNm = 'book'
            }
            return <Icon name={iconNm} size={size} color={color}  />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown:false
        })}
      >
        <bottomTab.Screen name='scan' component={ScanScreen} />
        <bottomTab.Screen name='products' component={ProductScreen} />
        <bottomTab.Screen name='about' component={AboutScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  )
}
