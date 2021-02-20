import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import NumberRandom from './app/screens/NumberRandom'
import CoinRandom from './app/screens/CoinRandom'
import { NavigationContainer } from '@react-navigation/native'
import { Text, useWindowDimensions } from 'react-native'
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import PasswordRandom from './app/screens/PasswordRandom'

const Drawer = createDrawerNavigator()
export default function App() {
  const dimensions = useWindowDimensions()
  const isLargeScreen = dimensions.width >= 768

  return (
    <NavigationContainer>
      <Drawer.Navigator
        openByDefault
        drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={isLargeScreen ? null : { width: '100%' }}
        overlayColor="#fff"
        edgeWidth={100}
        drawerStyle={{ backgroundColor: 'lightblue', width: '100%' }} // drawer style
        drawerContentOptions={{
          activeTintColor: 'purple', // active text
          activeBackgroundColor: 'pink', // active block
          inactiveTintColor: 'grey', // non active text
          inactiveBackgroundColor: 'white', // non active block
          itemStyle: { borderRadius: 10 }, // each block
          labelStyle: { letterSpacing: 5, margin: 50 }, // etxt in each block
          contentContainerStyle: {}, // scrollView
          style: {}, // all drawer view
        }}
      >
        <Drawer.Screen
          name="Number"
          component={NumberRandom}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="question-circle"
                size={50}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Coin"
          component={CoinRandom}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="bitcoin"
                size={50}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Password"
          component={PasswordRandom}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="user-secret"
                size={50}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// number random
// coin
// password
