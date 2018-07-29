//import liraries
const ReactNative = require('react-native');
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoComponent from './VideoComponent';

const { ListView } = ReactNative;

// create a component
const VideoList = ({ items, navigator, style, type, onVideoSelect }) => {
  renderRow = (video, sId, rId) => {
    return (
      <VideoComponent
        key={rId}
        video={video}
        videos={items}
        navigator={navigator}
        type={type}

      />
    );
  };

  renderSectionHeader = sectionData => {
    return <Text style={{ padding: 0, flex: 1, width: null, backgroundColor: 'red', margin: 0 }}>The Red War</Text>;
  };

  return (
    <ListView
      dataSource={items}
      enableEmptySections
      renderSectionHeader={this.renderSectionHeader}
      renderRow={this.renderRow}
      style={{ flex: 1, width: null, height: null, paddingTop: 0, margin: 0 }}
    />
  );
};

//make this component available to the app
export default VideoList;
