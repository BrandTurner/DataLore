import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import CardMenuScreen from './CardMenuScreen';
import Guardians from '../../data/guardian/guardianFull.json';


export default class GuardianScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Guardians}
          style={styles.gridView}
          renderItem={guardian => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CardMenuScreen", {
                  title: guardian.title,
                  subtitle: '',
                  image: guardian.image_url,
                  card_data: guardian.newdata,
                  isImageUrl: true
              })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: guardian.image_url}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{guardian.title}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />

    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  cardTitle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 195
  },
  itemContainer: {
    justifyContent: 'center',
    height: 195,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});


// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ListView, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
// import { Icon, Container, Content, Header, List } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import { StackNavigator } from 'react-navigation';

// // import VideoList from '../VideoList';
// // import SearchBar from '../SearchBar';
// // import Loader from '../Loader';
// // import Api from '../../Utils/YoutubeApi';

// // create a component
// class GuardianScreen extends Component {
// 	constructor(props) {
// 		super(props);
// 		const ds = new ListView.DataSource({
// 			rowHasChanged: (r1, r2) => r1 !== r2
// 		});
// 		this.state = {
// 			isLoading: false
// 		};
// 	}

// 	render() {
// 		return (
// 			<Container style={styles.container}>
// 				<Header />
// 				<Content>
// 					<Grid>
// 						<Row size={50} style={styles.homeRow}>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('ClassesScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/classes.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('RacesScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/races.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('GhostScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/ghost.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 						</Row>
// 						<Row size={50} style={styles.homeRow}>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('SubclassesScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/subclasses.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('MeleeScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/melee.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('GrenadeScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/grenade.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 						</Row>
//             <Row size={50} style={styles.homeRow}>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('MovementScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/movement.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
// 							<Col
// 								style={{
// 									height: 200
// 								}}
// 							>
// 								<TouchableOpacity
// 									style={styles.imageWrapper}
// 									onPress={() => this.props.navigation.navigate('SuperScreen')}
// 								>
// 									<Image
// 										style={styles.archive2}
// 										source={require('../../assets/grimoire_cards/super.jpg')}
// 									/>
// 								</TouchableOpacity>
// 							</Col>
//             </Row>
// 					</Grid>
// 				</Content>
// 			</Container>
// 		);
// 	}
// }

// // define your styles
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff'
// 	},
// 	navBar: {
// 		height: 55,
// 		backgroundColor: 'white',
// 		elevation: 3,
// 		paddingHorizontal: 15,
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		justifyContent: 'space-between'
// 	},
// 	rightNav: {
// 		flexDirection: 'row'
// 	},
// 	homeRow: {
// 		marginTop: 5,
// 		marginBottom: 5
// 	},
// 	navItem: {
// 		marginLeft: 25
// 	},
// 	archive: {
// 		flex: 1,
// 		height: undefined,
// 		width: undefined,
// 		resizeMode: 'contain',
// 		...Platform.select({
// 			ios: {
// 				shadowColor: '#000',
// 				shadowOffset: {
// 					width: 0,
// 					height: 2
// 				},
// 				shadowOpacity: 0.8,
// 				shadowRadius: 3
// 			},
// 			android: {
// 				elevation: 5
// 			}
// 		})
// 	},
// 	archive2: {
// 		flex: 1,
// 		height: undefined,
// 		resizeMode: 'contain',
// 		...Platform.select({
// 			ios: {
// 				shadowColor: '#000',
// 				shadowOffset: {
// 					width: 0,
// 					height: 2
// 				},
// 				shadowOpacity: 0.8,
// 				shadowRadius: 3
// 			},
// 			android: {
// 				elevation: 5
// 			}
// 		})
// 	},
// 	imageWrapper: {
// 		flex: 1,
// 		overflow: 'hidden',
// 		alignItems: 'center',
// 		position: 'relative'
// 	},
// 	body: {
// 		flex: 1
// 	},
// 	tabBar: {
// 		backgroundColor: 'white',
// 		height: 60,
// 		borderTopWidth: 0.5,
// 		borderColor: '#E5E5E5',
// 		flexDirection: 'row',
// 		justifyContent: 'space-around'
// 	},
// 	tabItem: {
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	tabTitle: {
// 		fontSize: 11,
// 		color: '#3c3c3c',
// 		paddingTop: 4
// 	}
// });

// //make this component available to the app
// export default GuardianScreen;
