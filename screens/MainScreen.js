import React from 'react';
import { View, Text, StyleSheet, ListView, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Grid } from 'antd-mobile';

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<TouchableOpacity style={styles.imageWrapper}>
						<Image
							style={styles.archive2}
							source={require('../assets/archive_sections/enlightenment.png')}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.imageWrapper}>
						<Image style={styles.archive2} source={require('../assets/archive_sections/cutscenes.png')} />
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity
						style={styles.imageWrapper}
						onPress={() => this.props.navigation.navigate('GrimoireScreen')}
					>
						<Image style={styles.archive2} source={require('../assets/archive_sections/grimoire.png')} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.imageWrapper}>
						<Image style={styles.archive2} source={require('../assets/archive_sections/cutscenes.png')} />
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.imageWrapper}>
						<Image style={styles.archive2} source={require('../assets/archive_sections/arsenal.png')} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.imageWrapper}>
						<Image style={styles.archive2} source={require('../assets/archive_sections/codex.png')} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 0
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	box: {
		flex: 1,
		height: 100,
		backgroundColor: '#333'
	},
	navBar: {
		height: 55,
		backgroundColor: 'white',
		elevation: 3,
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	rightNav: {
		flexDirection: 'row'
	},
	homeRow: {
		marginTop: 5,
		marginBottom: 5
	},
	navItem: {
		marginLeft: 25
	},
	archive: {
		flex: 1,
		height: undefined,
		width: undefined,
		resizeMode: 'contain',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 3
			},
			android: {
				elevation: 5
			}
		})
	},
	archive2: {
		flex: 1,
		height: undefined,
		resizeMode: 'contain',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 3
			},
			android: {
				elevation: 5
			}
		})
	},
	imageWrapper: {
		flex: 1,
		overflow: 'hidden',
		alignItems: 'center',
		position: 'relative'
	},
	body: {
		flex: 1
	},
	tabBar: {
		backgroundColor: 'white',
		height: 60,
		borderTopWidth: 0.5,
		borderColor: '#E5E5E5',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		fontSize: 11,
		color: '#3c3c3c',
		paddingTop: 4
	}
});
