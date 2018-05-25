import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import Traveler from '../../../data/allies/traveler.json';

export default class TravelerScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Traveler}
          style={styles.gridView}
          renderItem={travel => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('GrimoireCardComponent', {
                  title: travel.title,
                  subtitle: '',
                  content: travel.content,
                  image: travel.image_urls[0],
                  isImageUrl: true
                })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: travel.image_urls[0]}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{travel.title}</Text>
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
