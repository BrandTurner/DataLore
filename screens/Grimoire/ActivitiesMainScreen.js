import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import CardMenuScreen from './CardMenuScreen';
import Activities from '../../data/activities/activitiesFull.json';


export default class ActivitiesMainScreen extends Component {
  render() {
    return (
        <GridView
          itemDimension={130}
          items={Activities}
          style={styles.gridView}
          renderItem={activity => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CardMenuScreen", {
                  title: activity.title,
                  subtitle: '',
                  image: activity.image_url,
                  card_data: activity.newdata,
                  isImageUrl: true
              })}
            >
              <View style={styles.itemContainer}>
                <ImageBackground source={{ uri: activity.image_url}} style={{ width: 150, height: 195, flex: 1 }} imageStyle={{ resizeMode: 'contain' }}>
                  <View style={styles.cardTitle}>
                    <Text style={styles.itemName}>{activity.title}</Text>
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
