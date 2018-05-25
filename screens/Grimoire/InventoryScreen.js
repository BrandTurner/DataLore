//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Icon, Container, Content, Header, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';

// import VideoList from '../VideoList';
// import SearchBar from '../SearchBar';
// import Loader from '../Loader';
// import Api from '../../Utils/YoutubeApi';

// create a component
class InventoryScreen extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			isLoading: false
		};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header />
				<Content>
					<Grid>
						<Row size={50} style={styles.homeRow}>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('PrimaryWeaponsScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/primary_weapons.jpg')}
									/>
								</TouchableOpacity>
							</Col>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('SpecialWeaponsScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/special_weapons.jpg')}
									/>
								</TouchableOpacity>
							</Col>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('HeavyWeaponsScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/heavy_weapons.jpg')}
									/>
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={50} style={styles.homeRow}>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('DamageTypesScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/damage_types.jpg')}
									/>
								</TouchableOpacity>
							</Col>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('GuardianVehiclesScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/guardian_vehicles.jpg')}
									/>
								</TouchableOpacity>
							</Col>
							<Col
								style={{
									height: 200
								}}
							>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() => this.props.navigation.navigate('EconomyScreen')}
								>
									<Image
										style={styles.archive2}
										source={require('../../assets/grimoire_cards/inventory/economy.jpg')}
									/>
								</TouchableOpacity>
							</Col>
						</Row>

					</Grid>
				</Content>
			</Container>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
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
				shadowOffset: {
					width: 0,
					height: 2
				},
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
				shadowOffset: {
					width: 0,
					height: 2
				},
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

//make this component available to the app
export default InventoryScreen;
