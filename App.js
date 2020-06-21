/*!

 =========================================================
 * Material Kit React Native - v1.4.0
 =========================================================
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react-native/blob/master/LICENSE)
 =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, {createContext} from 'react';
import { Platform, StatusBar, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import * as Font from 'expo-font';

import { Images, materialTheme } from './constants/';

import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Screens';

// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
import ApiJKeys from "./constants/ApiKeys";
import * as firebase from "firebase";
enableScreens();

// cache app images
const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

const fetchFonts = () => {
  return Font.loadAsync({
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.otf'),
    'Sanchez': require('./assets/fonts/Sanchez-Regular.ttf')
  });
};

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {

  constructor() {
    super();

    //initaliase firebase
    if(!firebase.apps.length) {
      firebase.initializeApp(ApiJKeys.FirebaseConfig);
    }

  }

  state = {
    isLoadingComplete: false,
    isProfileLoaded: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync, fetchFonts}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <NavigationContainer  >
          <GalioProvider theme={materialTheme}>
            <Block flex>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _handleLoadingProfile = () => {
    this.setState({ isProfileLoaded: true });
    navigator.navigate('Profile', {
      profile: {
        name: "Anthony Costas Paraskvea",
        savedPlaces: [
          {company: "Ant's Autos", id: "company1", catagory: "Mechanics", address1: "1 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 4.5},
          {company: "Rubbish Name", id: "company2", catagory: "Mechanics",  address1: "2 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 1},
          {company: "Neo Nitro", id: "company3", catagory: "Mechanics",   address1: "Random House", address2: "3 Random street", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 3},
        ]
      }
    });
  };
}
