//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

// create a component
class CardComponent extends Component {

  render() {
    const images = {
      "1": require('../assets/feed_images/1.jpg'),
      "2": require('../assets/feed_images/2.jpg'),
      "3": require('../assets/feed_images/3.jpg')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={require('../assets/cyber.png')}/>
            <Body>
              <Text>Brandon
              </Text>
              <Text>Feb 22 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{
            width: null,
            flex: 1
          }}/>
        </CardItem>
        <CardItem style={{
          height: 45
        }}>
          <Left>
            <Button transparent>
              <Icon
                name="ios-heart-outline"
                style={{
                color: 'black'
              }}/>
            </Button>
            <Button transparent>
              <Icon
                name="ios-chatbubbles-outline"
                style={{
                color: 'black'
              }}/>
            </Button>
            <Button transparent>
              <Icon
                name="ios-send-outline"
                style={{
                color: 'black'
              }}/>
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{
          height: 20
        }}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{
                fontWeight: '900'
              }}>Soosie
              </Text>
              Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren IpsumLoren IpsumLoren
              IpsumLoren IpsumLoren IpsumLoren Ipsum
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

//make this component available to the app
export default CardComponent;
