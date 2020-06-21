import React from 'react';
import {Dimensions, FlatList, Platform, ScrollView, StyleSheet, Switch, TouchableOpacity, View} from "react-native";
import {Block, Icon, theme, Text} from "galio-framework";

import materialTheme from '../constants/Theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Settings extends React.Component {

    render() {
        const recommended = [
            {title: "CHANGE EMAIL", id: "email", type: "button"},
            {title: "CHANGE PASSWORD", id: "password", type: "button"},
            {title: "LANGUAGE", id: "language", type: "button", buttonText: "ENGLISH"},
            {title: "LOCATION", id: "location", type: "button", buttonText: "UNITED KINGDOM"},
            {title: "NOTIFICATIONS", id: "notifications", type: "button", buttonText: "ENABLED"},
        ];
        return (
            <View style={styles.settings}>
                <FlatList
                    data={recommended}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => (
                        <Block style={styles.rows}>
                            <TouchableOpacity onPress={() => navigate('Pro')}>
                                <Block row middle space="between" style={{paddingTop: 7}}>
                                    <View style={styles.leftContainer}>
                                        <Text size={16} style={{color: materialTheme.COLORS.LOGO_S, fontFamily: materialTheme.FONTS.SANCHEZ }}>{item.title}</Text>
                                    </View>
                                    <View style={styles.rightContainer}>
                                        <Text size={10} style={{color: materialTheme.COLORS.LOGO_I, fontFamily: materialTheme.FONTS.SANCHEZ }}>{item.buttonText}</Text>
                                        {/*TODO Need some spaces*/}
                                        <Text>   </Text>
                                        <Icon name="angle-right" styles={{fontWeight: 'bold', fontSize: 18,}}
                                              family="font-awesome" style={{paddingRight: 5}}/>
                                    </View>
                                </Block>
                            </TouchableOpacity>
                        </Block>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    settings: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        paddingTop: 100
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rows: {
        height: theme.SIZES.BASE * 2,
        paddingHorizontal: theme.SIZES.BASE,
        marginBottom: theme.SIZES.BASE / 2,
    },
    header: {
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 4,
        zIndex: 2,
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
    divider: {
        borderRightWidth: 0.3,
        borderRightColor: theme.COLORS.MUTED,
    }
});
