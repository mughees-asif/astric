import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Notifications extends React.Component {

  render() {
    return (
        <Block style={styles.notifications} flex center>
          <Text style={styles.sampleText}> Just some sample text for the notifications page.</Text>
        </Block>
    );
  }
}

const styles = StyleSheet.create({
  notifications: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    paddingTop: 20
  },
  title: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
  },
  group: {
    paddingTop: theme.SIZES.BASE * 3.75,
  },
  sampleText: {
    paddingTop: theme.SIZES.BASE * 6.75,
  }

});
