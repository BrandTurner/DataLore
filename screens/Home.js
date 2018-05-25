import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import GrimoireScreen from './Grimoire/GrimoireScreen';

const Home = () => {
	return <AppStackNavigator />;
};

export default Home;

const AppStackNavigator = StackNavigator(
	{
		MainScreen: {
			screen: MainScreen,
			navigationOptions: {
				headerTitle: 'Main'
			}
		}
		// DetailTab: {
		//   screen: DetailTab,
		// },
		// CutscenesTab: {
		//   screen: CutscenesTab,
		// },
		// NewCutscenesTab: {
		//   screen: NewCutscenesTab,
		// },
		// GrimoireScreen: {
		// 	screen: GrimoireScreen
		// }
	},
	{
		initialRouteName: 'MainScreen'
	},
	{
		headerMode: 'screen',
		animationEnabled: true,
		swipeEnabled: true,
		navigationOptions: {
			header: null
		}
	}
);
