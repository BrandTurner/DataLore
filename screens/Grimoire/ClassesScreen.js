//import liraries
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	Platform,
	StatusBar,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { Icon, Container, Content, Header, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';

import Images from '../../assets/grimoire_cards/classes/index';

import cardJSON from '../../data/cards.json';

const { width, height } = Dimensions.get('window');
// import VideoList from '../VideoList';
// import SearchBar from '../SearchBar';
// import Loader from '../Loader';
// import Api from '../../Utils/YoutubeApi';

// create a component

console.log(cardJSON);

class ClassesScreen extends Component {
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
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.guardians.title,
											subtitle: cardJSON.guardians.subtitle,
											content: cardJSON.guardians.content,
											image: Images.guardians
										})}
								>
									<Image style={styles.archive2} source={Images.guardians} />
								</TouchableOpacity>
							</Col>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.titan.title,
											subtitle: cardJSON.titan.subtitle,
											content: cardJSON.titan.content,
											image: Images.titan
										})}
								>
									<Image style={styles.archive2} source={Images.titan} />
								</TouchableOpacity>
							</Col>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.ghost_fragment_titan.title,
											subtitle: cardJSON.ghost_fragment_titan.subtitle,
											content: cardJSON.ghost_fragment_titan.content,
											image: Images.ghost_fragment_titan
										})}
								>
									<Image style={styles.archive2} source={Images.ghost_fragment_titan} />
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={50} style={styles.homeRow}>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.hunter.title,
											subtitle: cardJSON.hunter.subtitle,
											content: cardJSON.hunter.content,
											image: Images.hunter
										})}
								>
									<Image style={styles.archive2} source={Images.hunter} />
								</TouchableOpacity>
							</Col>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.ghost_fragment_hunter.title,
											subtitle: cardJSON.ghost_fragment_hunter.subtitle,
											content: cardJSON.ghost_fragment_hunter.content,
											image: Images.ghost_fragment_hunter
										})}
								>
									<Image style={styles.archive2} source={Images.ghost_fragment_hunter} />
								</TouchableOpacity>
							</Col>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.warlock.title,
											subtitle: cardJSON.warlock.subtitle,
											content: cardJSON.warlock.content,
											image: Images.warlock
										})}
								>
									<Image style={styles.archive2} source={Images.warlock} />
								</TouchableOpacity>
							</Col>
						</Row>
						<Row size={50} style={styles.homeRow}>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.ghost_fragment_warlock.title,
											subtitle: cardJSON.ghost_fragment_warlock.subtitle,
											content: cardJSON.ghost_fragment_warlock.content,
											image: Images.ghost_fragment_warlock
										})}
								>
									<Image style={styles.archive2} source={Images.ghost_fragment_warlock} />
								</TouchableOpacity>
							</Col>
							<Col style={styles.gutter}>
								<TouchableOpacity
									style={styles.imageWrapper}
									onPress={() =>
										this.props.navigation.navigate('GrimoireCardComponent', {
											title: cardJSON.ghost_fragment_warlock_2.title,
											subtitle: cardJSON.ghost_fragment_warlock_2.subtitle,
											content: cardJSON.ghost_fragment_warlock_2.content,
											image: Images.ghost_fragment_warlock_2
										})}
								>
									<Image style={styles.archive2} source={Images.ghost_fragment_warlock_2} />
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
	gutter: {
		marginLeft: 5,
		marginRight: 5,
		height: height / 5
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
		width: 155,
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

//make this component available to the app
export default ClassesScreen;
