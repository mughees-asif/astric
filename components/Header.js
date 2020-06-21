import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {Dimensions, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {Block, NavBar, theme} from 'galio-framework';

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Header extends React.Component {

    renderLeft = () => {
        const {white, title, navigation} = this.props;

        switch (title) {
            case 'Home':
                return ([
                ]);
            case 'Login':
                return ([
                ]);
            default:
              return ([
                <TouchableHighlight onPress={() => {
                  navigation.goBack()
                }}>
                  <Image
                      source={require('../assets/icons/back.png')}
                      fadeDuration={0}
                      style={{width: 30, height: 30}}/>
                </TouchableHighlight>
              ]);
        }
    }

    renderSearch = () => {
        const {navigation} = this.props;
        return (
            <Block>
            </Block>
        )
    }

    renderTabs = () => {
        const {navigation, tabTitleLeft, tabTitleRight} = this.props;

        return (
            <Block row style={styles.tabs}>
            </Block>
        )
    }

    renderHeader = () => {
        const {search, tabs} = this.props;
        if (search || tabs) {
            return (
                <Block center>
                </Block>
            )
        }
        return null;
    }

    render() {
        const {back, title, white, transparent, navigation} = this.props;
        // const { routeName } = navigation.state;
        const noShadow = ["Home"].includes(title);
        const headerStyles = [
            !noShadow ? styles.shadow : null,
            transparent ? {backgroundColor: 'rgba(0,0,0,0)'} : null,
        ];

        return (
            <Block style={headerStyles}>
                <NavBar
                    back={back}
                    title={title === 'Home' ? '' : title}
                    titleStyle={styles.title}
                    style={styles.navbar}
                    left={this.renderLeft()}
                    leftStyle={{flex: 0.3, paddingTop: 2}}
                    right={
                        <TouchableHighlight onPress={() => {
                            navigation.openDrawer()
                        }}>
                            <Image
                                source={require('../assets/icons/nav.png')}
                                fadeDuration={0}
                                style={{width: 30, height: 30}}/>
                        </TouchableHighlight>
                    }
                    rightStyle={{flex: 0.3, paddingTop: 2}}
                />
                {this.renderHeader()}
            </Block>
        );
    }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
    button: {
        padding: 12,
        position: 'relative',
    },
    title: {
        fontSize: windowHeight > 812 ? 38 : 22,
        fontFamily: materialTheme.FONTS.LEAGUESPARTANBOLD,
        color: materialTheme.COLORS.LOGO_A,
        paddingTop: windowHeight > 812 ? 30 : 0
    },
    navbar: {
        paddingVertical: 0,
        paddingBottom: theme.SIZES.BASE * 1.5,
        paddingTop: windowHeight === 812 ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
        zIndex: 5,
    },
    notify: {
        backgroundColor: materialTheme.COLORS.LABEL,
        borderRadius: 4,
        height: theme.SIZES.BASE / 2,
        width: theme.SIZES.BASE / 2,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    header: {
        backgroundColor: theme.COLORS.WHITE,
    },
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: theme.COLORS.MUTED,
    },
    search: {
        height: 48,
        width: windowWidth - 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 3,
    },
    tabs: {
        marginBottom: 24,
        marginTop: 10,
        elevation: 4,
    },
    tab: {
        backgroundColor: theme.COLORS.TRANSPARENT,
        width: windowWidth * 0.50,
        borderRadius: 0,
        borderWidth: 0,
        height: 24,
        elevation: 0,
    },
    tabTitle: {
        lineHeight: 19,
        fontWeight: '300'
    },
})