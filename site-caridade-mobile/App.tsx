import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather ,Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import Home from './pages/Home';
import Posts from './pages/Posts';
import User from './pages/User';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Entypo name="home" size={size} color={color} />;
          } else if (route.name === 'Posts') {
            return <Feather name="globe" size={size} color={color} />;
          } else if (route.name === 'User') {
            return <AntDesign name="user" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <AntDesign name="setting" size={size} color={color} />;
          }
        },
        
      })}
      tabBarOptions={{
        activeTintColor: '#FF4E68',
        inactiveTintColor: '#ffffff',
        showLabel:true,
        style:{
          backgroundColor:'#2B2E32',
          paddingTop:10,
          paddingBottom:10,
          height:70,
        }
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
}