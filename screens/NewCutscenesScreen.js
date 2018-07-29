//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ListView, Platform, StatusBar, Image, WebView, Dimensions, Text } from 'react-native';
import {
	Container,
	Content,
	List,
	Header,
	Card,
	CardItem,
	Thumbnail,
	Button,
	Icon,
	Left,
	Body,
	Right
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardComponent from './CardComponent';
import Swiper from 'react-native-swiper';
import Youtube from 'react-native-youtube';
import Accordion from 'react-native-collapsible/Accordion';

import VideoList from './VideoList';
import SearchBar from './SearchBar';
import Api from '../Utils/YoutubeApi';

import SubMenu from './SubMenu';
import FakeTweet from './FakeTweet';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const fake_tweets = [
	{ id: 0, easing: 'bounce', collapsed: false, img: require('../assets/feed_images/1 - JUSxg9T.jpg') },
	{ id: 1, easing: 'easeOutSin', collapsed: true, img: require('../assets/feed_images/2.jpg') },
	{ id: 2, easing: 'cubic', collapsed: true, img: require('../assets/feed_images/3 - sSaaWHm.jpg') }
];

// create a component
class NewCutscenesScreen extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			isLoading: false,
			videos: ds.cloneWithRows([,])
		};

		this.handleChange = this.handleChange.bind(this);
		this._renderContent = this._renderContent.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
		this._renderSectionTitle = this._renderSectionTitle.bind(this);
		this.renderCard = this.renderCard.bind(this);
		this.renderWebviews = this.renderWebviews.bind(this);
	}

	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />
	};

	handleChange(id) {
	}

	_renderSectionTitle(section) {
		return (
			<View style={styles.content}>
				<Text>{section.content}</Text>
			</View>
		);
	}

	_renderHeader(section) {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>{section.title}</Text>
			</View>
		);
	}

	_renderContent(section) {
		return (
			<View style={styles.content}>
				<Text>{section.content}</Text>
			</View>
		);
	}

	renderWebviews(video_ids, imageStyle) {
		return video_ids.map((video_id) => {
      return (<WebView
        style={imageStyle}
        source={{ uri: `https://www.youtube.com/embed/${video_id}?showinfo=0&rel=0` }}
        onLoadStart={() => this.setState({ showSpinner: true })}
        onLoadEnd={() => this.setState({ showSpinner: false })}
        key={video_id}
      />)
    });
  }

  renderCard(video_ids, imageStyle) {
    return (
      <Card style={{ height: 250, width: width }}>
				<CardItem cardBody>
					<Swiper
						loop={false}
						showsButtons={true}
						buttonWrapperStyle={{
							backgroundColor: 'transparent',
							flexDirection: 'row',
							position: 'absolute',
							top: 0,
							left: 0,
							flex: 1,
							paddingHorizontal: 10,
							paddingVertical: 10,
							justifyContent: 'flex-end',
							alignItems: 'flex-start'
						}}
						showsVerticalScrollIndicator={false}
						showsPagination={true}
						onScrollBeginDrag={this.forwards}
						removeClippedSubviews={false}
						nextButton={
							<Text style={styles.iconBorder}>
								<Icon active={true} name="play" style={{ color: 'white' }} />
							</Text>
						}
						prevButton={
							<Text style={styles.iconBorder}>
								<Icon name="arrow-dropleft" style={{ color: 'white' }} />
							</Text>
						}
					>
          {this.renderWebviews(video_ids, imageStyle)}
          </Swiper>
				</CardItem>
			</Card>
    )

  }



	render() {
		const Missions = [
			{
				title: 'Homecoming',
				content: this.renderCard(['RG2lZ2PS8fc', '8O0FuyDOWF8', 'w0z5BzY87EI', 'vA0KrEtHb64', 'OowqTKkURGs'])
			},
			{
				title: 'Exodus',
				content: this.renderCard(['OowqTKkURGs', 'PLh4czKv7KI', 'ly9YIGUq39w', 'dV-lMuvlAnY' ])
      },
      {
        title: 'Spark',
        content: this.renderCard(['WLbkDIkUQ6Q', 'x0yWH96ZMk4'])
      },
      {
        title: 'Combustion',
        content: this.renderCard(['NcBFmNosy_o','p1UG_4MD0_g', 'XPBPSDebXZc' ])
      },
      {
        title: 'Titan (Hope, Riptide, Utopia)',
        content: this.renderCard(['Mt50wg8lq5A', '49aK3aicjw0', 'lmAL2bSfziE', 'yUlRKZW45ec', 'yUlRKZW45ec'])
      },
      {
        title: 'Nessus (Looped, Six)',
        content: this.renderCard(['okWGXSxVxbU', 'UqZ3AvWpjPk', 'Di9kh_6v-R0' ])
      },
      {
        title: 'Guardian Classes, Revived Power',
        content: this.renderCard(['On1XSRl3KLY', 'MZTo0Ir1LOU', '07T6XivAT1Y', 'Deih8UqSEAY', 'c2Ye5vrYeE', 'mWlGRZcga9o'])
      },
      {
        title: 'Io (Sacrilege, Fury)',
        content: this.renderCard(['5x-7RY_VzDo', 'MLrw32Vdo88'])
      },
      {
        title: 'EDZ (Payback, Unbroken, Larceny)',
        content: this.renderCard(['AnrHWDddHsM', 'CCTlmtsJkSA'])
      },
      {
        title: 'The Almighty (1AU)',
        content: this.renderCard(['TB0-w0W9D34', 'CCI34kuhQkc'])
      },
      {
        title: 'Earth (Chosen) and Ending',
        content: this.renderCard(['HGNAtDzPEjU', 'ANeCaxsF28Q', 'bMKr60tLI8U', 'DaxelooplrU', 'OIyTDyR13tc'])
      },
      {
        title: 'Raid Cutscenes',
        content: this.renderCard(['PxUSgmR3ANg', 'BNz67hhDi68'])
      },
      {
        title: 'Call of Osiris',
        content: this.renderCard(['J4uf7fG3HEQ', 'GXMm9fRNvvg', 'cWDHWXsN58g', 'wJ6ncMTkwTI', 'eOWfNp9UY9k', '4WNn2eAFS7s', 'rmUm24K65mE'])
      },
      {
        title: 'Warmind',
        content: this.renderCard(['BcoxxifuI5I', '5Q-lJISymXw', 'yZURhwMLLv0', 'tbmEKPJlGCI', 'io-SxINLpGg', 'sMGYSCBLTPw', ])
      }
		];

		return (
			<Container style={styles.container}>
				<Content>
					<Accordion
						sections={Missions}
						renderHeader={this._renderHeader}
						renderContent={this._renderContent}
					/>

				</Content>
			</Container>
		);
	}

	_searchData(query) {
		this.setState({ isLoading: true, videos: this.state.videos.cloneWithRows([]) });
		Api.search(query).then(data => {
			this.setState({
				videos: this.state.videos.cloneWithRows(data.items),
				isLoading: false
			});
		});
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
	navItem: {
		marginLeft: 25
	},
	body: {
		flex: 1
	},
	image: {
		width: null,
		height: 400,
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
	iconBorder: {
		borderColor: 'white',
		borderStyle: 'solid',
		borderWidth: 1,
		color: 'white',
		paddingLeft: 8,
		paddingRight: 5
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		fontSize: 11,
		color: '#3c3c3c',
		paddingTop: 4
	},
	archiveImg2: {
		flex: 1,
		width: width,
		height: 200,
		resizeMode: 'contain'
	},
	archiveImg: {
		flex: 1,
		width: width,
		height: 500,
		resizeMode: 'contain'
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	wrapper: {}
});

//make this component available to the app
export default NewCutscenesScreen;
