import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

const StatusBarBackground = (props) => {
  const { style } = props;
  return (
    <View style={[styles.statusBarBackground, style || {}]} />
  );
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: 'gray'
  }
});

export default StatusBarBackground;
