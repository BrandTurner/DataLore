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
  ImageBackground,
  Dimensions
} from 'react-native';
import { Icon, Container, Content, Header, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { BlurView } from 'expo';

const { width, height } = Dimensions.get('window')

// create a component
class GuardiansCard extends Component {
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
			<ImageBackground
				source={require('../../assets/grimoire_cards/guardians.jpg')}
				style={styles.backgroundImg}
        imageStyle={{ resizeMode: 'cover', }}
        // blurRadius={3}
			>
        <View style={styles.textBg} >
          <View style={{
            backgroundColor: 'rgba(80,80,75, 0.7)',
            width: '100%',
            height: 30 }}>
            <Text
              style={{
                backgroundColor: 'transparent',
                textAlign: 'left',
                fontSize: 25,
                color: '#FFF',
                fontWeight: 'bold',
                paddingLeft: 10,              
              }}
            >
              GUARDIANS
            </Text>
          </View>
          <View style={{

   
            paddingLeft: 10,

            marginTop: 10,
            paddingRight: 10
          }}>
            <Text style={{
            fontFamily: 'Helvetica',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FFF',
          }}>
              {'Legends are carved across history by the brave'.toUpperCase()}
            </Text>
          </View>

          <View style={{
 
            marginTop: 15
          }}>
          <Text style={{
            fontStyle: 'italic',
            fontSize: 12,
            color: '#FFF',
            fontFamily: 'Helvetica',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 15
          }}>
            Guardians are warriors forged in the Traveler's Light, a final hope in a universe falling into Darkness.
            {"\n"}{"\n"}
            Chosen from the dead by the Traveler's Ghosts, Guardians are those rare few able to wield the Light as 
            a weapon. For centuries they have defended the City. But that defense cannot hold forever.
            {"\n"}{"\n"}
            Now, with the Darkness rising again, the time has come to retake our lost worlds. The Guardians who 
            lead the way will save humanity - and become legend.
            </Text>
            </View>
        </View>
			</ImageBackground>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	backgroundImg: {
		flex: 1,
    height: height,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  textBg: {
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
    width: '90%',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 20
  },
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

//make this component available to the app
export default GuardiansCard;
