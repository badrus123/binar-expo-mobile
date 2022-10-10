import * as React from 'react'
import Icons from '@expo/vector-icons/Entypo'
import Icon from '@expo/vector-icons/FontAwesome'
// component
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home'
// import Product from './ProductRoute'

const Tab = createBottomTabNavigator()

function BottomAppBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#fb9304',
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='ProductTab'
        component={Home}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Icon name='history' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomAppBar
