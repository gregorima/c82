import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/profile';
import BottomTabNavigator from './tabNavigator';

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen component={BottomTabNavigator} name="home"/>
        <Drawer.Screen component={Profile} name="profile"/>
    </Drawer.Navigator>
  );
}