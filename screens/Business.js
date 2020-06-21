import React from 'react';
import {StyleSheet, Switch, FlatList, Platform, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const selectedPlace = {company: "Ant's Autos", id: "company1", catagory: "Mechanics", address1: "1 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 4.5}

export default class Friends extends React.Component {

  render() {
      // const { route, navigation } = this.props;
      // const { selectedPlace } = route.params;

    return (
        <Block style={styles.friends} flex
               center>
          <TouchableOpacity onPress={() => {alert(JSON.stringify(route))}}>
            <Text style={styles.sampleText}> Just some sample text for the Business page.</Text>
          </TouchableOpacity>

          <Text style={styles.sampleText}> {selectedPlace.company} </Text>
          <Text> {selectedPlace.catagory} </Text>
          <Text> {selectedPlace.address1} </Text>
          <Text> {selectedPlace.address2} </Text>
          <Text> {selectedPlace.city} </Text>
          <Text> {selectedPlace.zipcode} </Text>
          <Text> {selectedPlace.phone} </Text>
          <Text> {selectedPlace.email} </Text>
          <Text> {selectedPlace.rating} </Text>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  friends: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 20
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  sampleText: {
    paddingTop: theme.SIZES.BASE * 6.75,
  }
});
