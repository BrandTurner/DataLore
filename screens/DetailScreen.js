const ReactNative = require('react-native');

import React, { Component } from 'react';
import { Icon } from 'native-base';

const { ActivityIndicator, Text, View, WebView } = ReactNative;

// Third parties
import Moment from 'moment';
//import Icon from 'react-native-vector-icons/FontAwesome';

// Components
//import Header from './../Components/Header';
import styles from './VideoComponent.Styles';
import VideoList from './VideoList';
import YouTube from 'react-native-youtube';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showSpinner: true, selectedVideo: this.props.navigation.state.params.video };
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" style={{ color: tintColor }} />,
  };
  render() {
    let { key, video, videos, navigator } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <WebView
          style={{ backgroundColor: 'black', marginTop: 9 }}
          source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}?showinfo=0&rel=0` }}
          onLoadStart={() => this.setState({ showSpinner: true })}
          onLoadEnd={() => this.setState({ showSpinner: false })}
        />

        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 0,
            marginTop: 5,
            paddingBottom: 5,
            borderColor: '#e1e2e3',
            borderBottomWidth: 1,
            flex: 0,
            flexDirection: 'row',
          }}
        >
          <View style={styles.videoIconChannelContainer}>
            <View style={[styles.videoIconChannel, { marginTop: 5 }]} />
          </View>

          <View style={styles.videoTextContainer}>
            <Text style={styles.videoTitle}>
              {' '}
              {video.snippet.title} {this.showSpinner}{' '}
            </Text>
            <Text style={styles.videoDescription}>
              {video.snippet.channelTitle.length > 30
                ? video.snippet.channelTitle.substring(0, 30 - 3) + '...'
                : video.snippet.channelTitle}
              - {Moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>

        <VideoList
          items={videos}
          navigator={navigator}
          style={{ marginTop: 0,flex:1 }}
          type="list"

        />
      </View>
    );
  }
}
