// In App.js in a new project

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabRoute from './TabRoute'
import AuthRoute from './AuthRoute'

function Route() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen
          name='Auth'
          component={AuthRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Tab'
          component={TabRoute}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
