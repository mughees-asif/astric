import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import ProfileEditScreen from '../screens/ProfileEdit';
import FriendsScreen from '../screens/Friends';
import OffersScreen from '../screens/Offers';
import NotificationsScreen from '../screens/Notifications';
import SettingsScreen from '../screens/Settings';
import AboutAppScreen from '../screens/AboutApp';

import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import SignupScreen from '../screens/SignUp';
import SearchScreen from '../screens/Search';
import BusinessScreen from '../screens/Business';
import BusinessAccountScreen from '../screens/BusinessAccount';
import BusinessAccount from '../screens/BusinessAccount';

import CustomDrawerContent from './Menu';
import {Header} from '../components';
import {materialTheme} from "../constants/";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
    name: "Anthony Costas Paraskvea",
        savedPlaces: [
        {company: "Ant's Autos", id: "company1", catagory: "Mechanics", address1: "1 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 4.5},
        {company: "Rubbish Name", id: "company2", catagory: "Mechanics",  address1: "2 Random street", address2: "", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 1},
        {company: "Neo Nitro", id: "company3", catagory: "Mechanics",   address1: "Random House", address2: "3 Random street", city: "Random", zipcode: "R44D0M", phone:"0123456789", email:"random@test.com", rating: 3},
    ]
}

function genericStackNavigator(props, routename, titlename, screen) {
    return(
        <Stack.Navigator initialRouteName={routename} mode="card" tr headerMode="screen">
            <Stack.Screen
                name={routename}
                component={screen}
                options={{
                    header: ({navigation, scene}) => (
                        <Header white transparent title={titlename} scene={scene} navigation={navigation}/>
                    ),
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    )
}

function HomeStack(props) {
    return genericStackNavigator(props, 'Home','Home', HomeScreen);
}

function ProfileStack(props) {
  return genericStackNavigator(props, 'Profile', 'Account', ProfileScreen);
}

function ProfileEditStack(props) {
  return genericStackNavigator(props, 'ProfileEdit', 'Edit', ProfileEditScreen);
}

function FriendsStack(props) {
    return genericStackNavigator(props, 'Friends', 'Friends', FriendsScreen);
}

function OffersStack(props) {
    return genericStackNavigator(props, 'Offers','Offers', OffersScreen);
}

function NotificationsStack(props) {
    return genericStackNavigator(props, 'Notifications', 'Notifications', NotificationsScreen);
}

function SettingsStack(props) {
  return genericStackNavigator(props, 'Settings', 'Settings', SettingsScreen);
}

function AboutAppStack(props) {
  return genericStackNavigator(props, 'AboutApp','About App', AboutAppScreen);
}

function LoginStack(props) {
  return genericStackNavigator(props, 'Login','Login', LoginScreen);
}

function ForgotPasswordStack(props) {
  return genericStackNavigator(props, 'ForgotPassword','Password Reset', ForgotPasswordScreen);
}

function SignupStack(props) {
  return genericStackNavigator(props, 'Signup','Signup', SignupScreen);
}

function SearchStack(props) {
  return genericStackNavigator(props, 'Search','Search', SearchScreen);
}

function BusinessStack(props) {
    return genericStackNavigator(props, 'Business','Places', BusinessScreen);
}

function BusinessAccountStack(props) {
    return genericStackNavigator(props, 'BusinessAccount','Business Account', BusinessAccountScreen);
}

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};


export default function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
      drawerPosition="right"
    >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen name="ProfileEdit" component={ProfileEditStack} />
        <Drawer.Screen name="Friends" component={FriendsStack} />
        <Drawer.Screen name="Offers" component={OffersStack} />
        <Drawer.Screen name="Notifications" component={NotificationsStack} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
        <Drawer.Screen name="About app" component={AboutAppStack} />

        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPasswordStack} />
        <Drawer.Screen name="Signup" component={SignupStack} />
        <Drawer.Screen name="Search" component={SearchStack} />
        <Drawer.Screen name="Business" component={BusinessStack} />
        <Drawer.Screen name="Business Account" component={BusinessAccountStack} />
    </Drawer.Navigator>
  );
}
