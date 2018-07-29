import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import CardMenuScreen from './CardMenuScreen';
import Enemies from '../../data/enemies/enemiesFull.json';


export default class EnemiesMainScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Enemies}
          style={styles.gridView}
          renderItem={enemy => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CardMenuScreen", {
                  title: enemy.title,
                  subtitle: '',
                  image: enemy.image_url,
                  card_data: enemy.newdata,
                  isImageUrl: true
              })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: enemy.image_url}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{enemy.title}</Text>
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
