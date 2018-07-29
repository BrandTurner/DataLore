import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import CardMenuScreen from '../CardMenuScreen';
import Allies from '../../../data/allies/alliesFull.json';


export default class AlliesMainScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Allies}
          style={styles.gridView}
          renderItem={ally => (
            <TouchableOpacity
              onPress={() =>
                // this.props.navigation.navigate(ally.screen)}
                // {
                //   title: economy.title,
                //   subtitle: '',
                //   content: economy.content,
                //   image: economy.image_urls[0],
                //   isImageUrl: true
                // })}
                this.props.navigation.navigate("CardMenuScreen", {
                  title: ally.title,
                  subtitle: '',
                  image: ally.image_url,
                  card_data: ally.newdata,
                  isImageUrl: true
              })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: ally.image_url}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{ally.title}</Text>
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
