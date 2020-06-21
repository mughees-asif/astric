import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {Block, Text, theme} from "galio-framework";
import materialTheme from "../constants/Theme";

const proScreens = [
];

class DrawerItem extends React.Component {
    renderIcon = () => {
        const {title, focused} = this.props;

        switch (title) {
            case "Home":
                return (
                    <Image source={require('../assets/icons/home.png')} style={styles.icon} />
                );
            case "Profile":
                return (
                    <Image source={require('../assets/icons/profile.png')} style={styles.icon} />
                );
            case "Friends":
                return (
                    <Image source={require('../assets/icons/friends.png')} style={styles.icon} />
                );
            case "Offers":
                return (
                    <Image source={require('../assets/icons/offers.png')} style={styles.icon} />
                );
            case "Notifications":
                return (
                    <Image source={require('../assets/icons/notifications2.png')} style={styles.icon} />
                );
            case "Settings":
                return (
                    <Image source={require('../assets/icons/settings.png')} style={styles.icon} />
                );
            case "About app":
                return (
                    <Image source={require('../assets/icons/aboutapp.png')} style={styles.icon} />
                );
            default:
                return (
                    <Image source={require('../assets/icons/aboutapp.png')} style={styles.icon} />
                );
        }
    };

    renderLabel = (signedIn = false) => {
        const {title} = this.props;
        switch (title) {
            case "Home":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_A}>
                    {title}
                  </Text>
              );
            case "Profile":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_S}>
                      {title}
                  </Text>
              );
            case "Friends":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_T}>
                      {title}
                  </Text>
              );
            case "Offers":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_I}>
                      {title}
                  </Text>
              );
            case "Notifications":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_S}>
                      {title}
                  </Text>
              );
            case "Settings":
              return (
                  <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_T}>
                      {title}
                  </Text>
              );
            case "About app":
                return (
                    <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_I}>
                        {title}
                    </Text>
                );
            default:
                return (
                    <Text size={18} style={styles.iconText} color={materialTheme.COLORS.LOGO_A}>
                        {title}
                    </Text>
                );
        }
    };

    render() {
        const {focused, title, navigation} = this.props;
        const proScreen = proScreens.includes(title);
        return (
            <TouchableOpacity style={{height: 55}} onPress={() => {
                navigation.navigate(title)
            }}>
                <Block flex row style={[
                        styles.defaultStyle,
                        focused ? [styles.activeStyle, styles.shadow] : null
                    ]}
                >
                    <Block middle flex={0.1} style={{marginRight: 28}}>
                        {this.renderIcon()}
                    </Block>
                    <Block row center flex={0.9}>
                        {this.renderLabel()}
                    </Block>
                </Block>
            </TouchableOpacity>
        );
    }
}

export default DrawerItem;

const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    activeStyle: {
        backgroundColor: materialTheme.COLORS.MENU_BACKGROUND,
        borderRadius: 4
    },
    icon: {
        width: 40,
        height: 40
    },
    iconText: {
        fontSize: 20,
        fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.2
    },
    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 6,
        marginLeft: 8,
        borderRadius: 2,
        height: 16,
        width: 36
    }
});
