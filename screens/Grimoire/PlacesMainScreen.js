import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import CardMenuScreen from './CardMenuScreen';
import Places from '../../data/places/places.json';


export default class PlacesMainScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Places}
          style={styles.gridView}
          renderItem={place => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CardMenuScreen", {
                  title: place.title,
                  subtitle: '',
                  image: place.image_url,
                  card_data: place.data,
                  isImageUrl: true
              })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: place.image_url}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{place.title}</Text>
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
