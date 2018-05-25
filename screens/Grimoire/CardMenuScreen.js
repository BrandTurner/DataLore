import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import GrimoireCardComponent from './GrimoireCardComponent'

export default class CardMenuScreen extends Component {
  render() {
    const { navigation } = this.props;
    // const Items = navigation.getParam('menu_json', 'no title');
    // const title = navigation.getParam('title', 'no title');
		// const subtitle = navigation.getParam('subtitle', 'no title');
		// const content = navigation.getParam('content', 'no title');
    // const image = navigation.getParam('image', 'none');
    const Cards = navigation.getParam('card_data', null)
    // const isImageUrl = navigation.getParam('isImageUrl', false);

    return (
        <GridView
          itemDimension={130}
          items={Cards}
          style={styles.gridView}
          renderItem={card => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('GrimoireCardComponent', {
                  title: card.title,
                  subtitle: "",
                  content: card.content,
                  image: card.image_urls[0],
                  isImageUrl: true
                })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: card.image_urls[0]}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{card.title}</Text>
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
