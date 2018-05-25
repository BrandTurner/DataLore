import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import Grenades from '../../data/destiny_grenade-abilities.json';

export default class GrenadeScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Grenades}
          style={styles.gridView}
          renderItem={grenade => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('GrimoireCardComponent', {
                  title: grenade.title,
                  subtitle: '',
                  content: grenade.content,
                  image: grenade.image_urls[0],
                  isImageUrl: true
                })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: grenade.image_urls[0]}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{grenade.title}</Text>
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
