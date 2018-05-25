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
	Dimensions,
	ScrollView
} from 'react-native';
import { Icon, Container, Content, Header, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { BlurView } from 'expo';
import propTypes from 'prop-types';

import Images from '../../assets/grimoire_cards/index';

const { width, height } = Dimensions.get('window');

// create a component
class GrimoireCardComponent extends Component {
	constructor(props) {
    super(props);

    this.renderImageBackground = this.renderImageBackground.bind(this);
	}

  renderImageBackground() {
    const { navigation } = this.props;
		const title = navigation.getParam('title', 'no title');
		const subtitle = navigation.getParam('subtitle', 'no title');
		const content = navigation.getParam('content', 'no title');
    const image = navigation.getParam('image', 'none');
    const isImageUrl = navigation.getParam('isImageUrl', false);

    if(isImageUrl) {
      return (
        <ImageBackground
          source={{ uri: image}}
          style={styles.backgroundImg}
          imageStyle={{ resizeMode: 'cover' }}
			  >
        <ScrollView style={{ height: '70%' }}>
					<View style={styles.textBg}>
						<View style={styles.cardHeader}>
							<Text style={styles.headerText}>{title.toUpperCase()}</Text>
						</View>

						<View style={styles.subTitleView}>
							<Text style={styles.subTitleText}>{subtitle.toUpperCase()}</Text>
						</View>

						<View style={styles.contentView}>
							<Text style={styles.contentText}>{content}</Text>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
      );
    }

    if(!isImageUrl) {
      return (
      <ImageBackground
        source={image}
        style={styles.backgroundImg}
        imageStyle={{ resizeMode: 'cover' }}
      >
      <ScrollView style={{ height: '70%' }}>
					<View style={styles.textBg}>
						<View style={styles.cardHeader}>
							<Text style={styles.headerText}>{title.toUpperCase()}</Text>
						</View>

						<View style={styles.subTitleView}>
							<Text style={styles.subTitleText}>{subtitle.toUpperCase()}</Text>
						</View>

						<View style={styles.contentView}>
							<Text style={styles.contentText}>{content}</Text>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
      )
    }
  }

	render() {
		// const { title, subtitle, content } = this.props;
		const { navigation } = this.props;
		const title = navigation.getParam('title', 'no title');
		const subtitle = navigation.getParam('subtitle', 'no title');
		const content = navigation.getParam('content', 'no title');
    const image = navigation.getParam('image', 'none');
    const isImageUrl = navigation.getParam('isImageUrl', false);

		return (
      this.renderImageBackground()
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
		marginTop: height / 2,
		height: null
	},
	cardHeader: {
		backgroundColor: 'rgba(80,80,75, 0.7)',
		width: '100%',
		height: 30
	},
	headerText: {
		backgroundColor: 'transparent',
		textAlign: 'left',
		fontSize: 25,
		color: '#FFF',
		fontWeight: 'bold',
		paddingLeft: 10
	},
	subTitleView: {
		paddingLeft: 10,
		marginTop: 10,
		paddingRight: 10
	},
	subTitleText: {
		fontFamily: 'Helvetica',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#FFF'
	},
	contentView: {
		marginTop: 15
	},
	contentText: {
		fontStyle: 'italic',
		fontSize: 12,
		color: '#FFF',
		fontFamily: 'Helvetica',
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 15
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
	}
});

//make this component available to the app
export default GrimoireCardComponent;
