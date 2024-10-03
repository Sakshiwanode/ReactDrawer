import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './Feed';
import Article from './Article';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
  <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})