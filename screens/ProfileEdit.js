import React, {createContext, useContext} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet, TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {Block, Text, theme} from 'galio-framework';
import {Images, materialTheme} from '../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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

export default class ProfileEdit extends React.Component {

  render() {
    const {navigation} = this.props;
    return(
      <Block style={styles.profileInfo} flex center>
          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>FIRST NAME:*</Text>
                  <TextInput style={styles.textInputHalf} value={profile.firstname} />
              </View>
              <View style={styles.rightContainer}>
                  <Text style={styles.labelText}>SURNAME:*</Text>
                  <TextInput style={styles.textInputHalf} value={profile.surname}/>
              </View>
          </Block>

          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>EMAIL ADDRESS:*</Text>
                  <TextInput style={styles.textInput} value={profile.email} />
              </View>
          </Block>


          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>PASSWORD:* <Text style={{fontSize:windowHeight > 812 ? 16 : 10, color: materialTheme.COLORS.PLACEHOLDER}} >(MINIMUM 8 CHARACTERS)</Text></Text>
                  <TextInput style={styles.textInput} />
              </View>
          </Block>


          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>CONFIRM PASSWORD:*</Text>
                  <TextInput style={styles.textInput} />
              </View>
          </Block>


          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>PHONE NUMBER:*</Text>
                  <TextInput style={styles.textInput} value={profile.phone} />
              </View>
          </Block>


          <Block row style={{width: windowWidth}}>
              <View style={styles.leftContainer}>
                  <Text style={styles.labelText}>INSERT PROFILE PICTURE:</Text>
              </View>
          </Block>
          <Block style={{width: windowWidth, marginLeft: 30, marginTop: 10}}>
              <TouchableOpacity style={{height: 55}} onPress={() => {navigation.navigate(title)}}>
                  {!!(profile.profilePic)
                      ? <Image source={{uri: profile.profilePic,}} style={styles.profileImage} />
                      : <Image source={require('../assets/icons/profilePhoto.png')} style={styles.profileImage} />
                  }
              </TouchableOpacity>
          </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
    profileInfo: {
        backgroundColor: 'white',
        width: windowWidth,
        height: windowHeight,
        paddingTop: 100
    },
    labelText: {
        color: materialTheme.COLORS.LOGO_S,
        fontFamily: materialTheme.FONTS.SANCHEZ,
        marginHorizontal: 16,
        fontSize: windowHeight > 812? 32 : 18,
        width: windowWidth
    },
    textInput: {
        width: windowWidth - 32,
        backgroundColor: materialTheme.COLORS.MENU_BACKGROUND,
        height: windowHeight*0.05,
        color: theme.COLORS.BLACK,
        fontWeight: 'bold',
        fontSize: windowHeight > 812? 32 : 18,
        marginHorizontal: 16,
        padding: 10,
        marginBottom: 20,
    },
    textInputHalf: {
        width: (windowWidth-32)*0.45,
        backgroundColor: materialTheme.COLORS.MENU_BACKGROUND,
        height: windowHeight*0.05,
        color: theme.COLORS.BLACK,
        fontWeight: 'bold',
        fontSize: windowHeight > 812? 32 : 18,
        marginHorizontal: 16,
        padding: 10,
        marginBottom: 20,
    },
    leftContainer: {
        width: windowWidth*0.45,
        justifyContent: 'flex-start',
        marginRight: windowHeight > 812 ? windowWidth*0.075 : windowWidth*0.05
    },
    rightContainer: {
        width: windowWidth*0.45,
        justifyContent: 'flex-end',
    },
    rows: {
        height: theme.SIZES.BASE * 2,
        paddingHorizontal: theme.SIZES.BASE,
        marginBottom: theme.SIZES.BASE / 2,
    },
    profileImage: {
        height: windowWidth*0.3,
        width: windowWidth*0.3,
        aspectRatio: 1,
    },
});
