import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GetStarted from '@/Containers/AuthContainer/GetStarted';

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          // tabBarLabelPosition: 'beside-icon',
        }}
      />
       <Tab.Screen
        name={"Message"}
        component={GetStarted}
        options={{
          tabBarLabel:"Message",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" color={color} size={size} />
          ),
          //unmountOnBlur: true,
        }}
      />
       <Tab.Screen
        name={"Cart"}
        component={ExampleContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shopping-cart" color={color} size={size} />
          ),
          //unmountOnBlur: true,
        }}
      />
       <Tab.Screen
        name={"Account"}
        component={ExampleContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" color={color} size={size} />
          ),
          //unmountOnBlur: true,
        }}
      />
   
    </Tab.Navigator>
  )
}

export default MainNavigator
