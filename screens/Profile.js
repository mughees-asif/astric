import React, {createContext, useContext} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text, theme} from 'galio-framework';
import {Images, materialTheme} from '../constants';

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const profile = {
    firstname: "Anthony",
    surname: "Costas Paraskeva",
    email: "anthony.paraskeva@test.com",
    phone: "+447123456789",
    profilePic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FAnthony%2FParaskeva&psig=AOvVaw1GqUwv5on_ox0KXnkVTKwl&ust=1589311815966000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiurIPGrOkCFQAAAAAdAAAAABAE',
    savedPlaces: [
        {company: "Ant's Autos", id: "company1", catagory: "Mechanics", address1: "1 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 4.5},
        {company: "Rubbish Name", id: "company2", catagory: "Mechanics",  address1: "2 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 1},
        {company: "Neo Nitro", id: "company3", catagory: "Mechanics",   address1: "Random House", address2: "3 Random street", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 3},
    ]
};

export default class Profile extends React.Component {

  renderItem = ({ item }) => {

      switch (true) {
        case (item.rating > 4):
          return (
              <Block row>
                <Image source={require('../assets/icons/happyface.png')} style={styles.faceImage}></Image>
                <Text style={styles.catagoryText}> EXCELLENT({item.rating})</Text>
              </Block>
          )
        case (item.rating > 3):
          return (
                  <Block row>
                    <Image source={require('../assets/icons/happyface.png')} style={styles.faceImage}></Image>
                    <Text style={styles.catagoryText}> GOOD({item.rating})</Text>
                  </Block>
              )

        case (item.rating >= 2):
        return (
                <Block row>
                  <Image source={require('../assets/icons/mehface.png')} style={styles.faceImage}></Image>
                  <Text style={styles.catagoryText}> AVERAGE({item.rating})</Text>
                </Block>
            )

        case (item.rating > 1):
        return (
                <Block row>
                  <Image source={require('../assets/icons/sadface.png')} style={styles.faceImage}></Image>
                  <Text style={styles.catagoryText}> POOR({item.rating})</Text>
                </Block>
            )

        default:
        return (
                <Block row>
                  <Image source={require('../assets/icons/sadface.png')} style={styles.faceImage}></Image>
                  <Text style={styles.catagoryText}> VERY POOR({item.rating})</Text>
                </Block>
            )
      }
  }

  render() {
    const {navigation} = this.props;
    return (
      <Block flex style={styles.profilePage}>
        <Block style={styles.profileBlock}>
          <ImageBackground
              source={require('../assets/icons/profilePhoto.png')}
              style={styles.profileContainer}
              imageStyle={styles.profileImage}>
          </ImageBackground>
            <Block>
              <Text style={styles.accountNameText}>{profile.firstname} {profile.surname}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
                <Text style={styles.editAccountText}>EDIT ACCOUNT</Text>
              </TouchableOpacity>
            </Block>
        </Block>
        <Block flex style={styles.options}>
          <Text style={styles.savedPlacesText}>SAVED PLACES</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
                data={profile.savedPlaces}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, index}) => (
                    <Block style={styles.rows}>
                      <TouchableOpacity onPress={() => {
                          navigation.navigate('Business', {
                              selectedPlace: item
                          })
                      }}>
                        <Block row middle space="between" style={{paddingTop: 20}}>
                          <Block style={styles.leftContainer}>
                            <Image source={require('../assets/icons/companyPhoto.png')} style={styles.companyImage}></Image>
                          </Block>
                          <Block style={styles.rightContainer}>
                              <Text style={styles.companyText}>{item.company}</Text>
                              <Text style={styles.catagoryText}>{item.catagory}</Text>
                              {this.renderItem({item})}
                          </Block>
                        </Block>
                      </TouchableOpacity>
                    </Block>
                )}
            />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: 'white',
    width: width,
    height: height,
  },
  profileBlock:{
    width: width,
    paddingTop: height > 812 ? height*0.06 : height * 0.11,
    alignItems: 'center'
  },
  profileImage: {
    height: width*0.5,
    width: width*0.5,
    aspectRatio: 1,
    borderRadius: 2000,
    borderWidth: 8,
    borderColor: materialTheme.COLORS.PLACEHOLDER
  },
  profileContainer: {
    width: width*0.5,
    height: height === 812 ? height*0.25 : height < 812 ?  height * 0.3 : height > 812 ? height * 0.35 : height*0.25,
  },
  profile: {
    height: height*0.6,
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  leftContainer: {
    width: width/6,
  },
  rightContainer: {
    width: width*0.6
  },
  accountNameText: {
      textAlign: 'center',
     fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
      color: materialTheme.COLORS.LOGO_A,
      fontSize: height > 812 ? 40 : 28,
  },
  editAccountText: {
      textAlign: 'center',
      color: materialTheme.COLORS.LOGO_S,
      fontSize: height > 812 ? 22 : 16,
      fontFamily: materialTheme.FONTS.SANCHEZ
  },
  savedPlacesText: {
      textAlign: 'left',
      color: materialTheme.COLORS.LOGO_S,
      fontSize: height > 812 ? 22 : 16,
      fontFamily: materialTheme.FONTS.SANCHEZ
  },
  companyText:{
      color: materialTheme.COLORS.LOGO_A,
     fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
      fontSize: height > 812 ? 36 : 20,
  },
  catagoryText:{
      color: materialTheme.COLORS.LOGO_I,
      fontSize: height > 812 ? 22 : 16,
      fontFamily: materialTheme.FONTS.SANCHEZ
  },
  faceImage:{
      height: height > 812 ? 30 : 18,
      width: height > 812 ? 30 : 18,
  },
  companyImage:{
      height: height > 812 ? 180 : 100,
      width: height > 812 ? 180 : 100,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    // marginTop: height*-0.1,
    backgroundColor: theme.COLORS.WHITE,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});
