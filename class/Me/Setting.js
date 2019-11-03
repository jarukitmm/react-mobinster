import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import SettingList from './SettingList'


export default class Setting extends React.Component {

    static navigationOptions = {
        title: 'Setting',
        headerStyle: {
            backgroundColor: '#f9eeee',
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        items: [
            { key: 0, menu: "Profile"},
            { key: 1, menu: "Address"},
            { key: 2, menu: "Languages"},
            { key: 3, menu: "Location"},
        ],
    };

    goToScreen = key => {
        if (key === 0) {
            this.props.navigation.navigate('Profiles')
        } else if (key === 1) {
            this.props.navigation.navigate('Address')
        } else if (key === 2) {
            this.props.navigation.navigate('Language')
        } else if (key === 3) {
            this.props.navigation.navigate('Loc')
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <SettingList
                        items={this.state.items}
                        onItemSelected={(this.goToScreen)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.logout}
                        underlayColor='#fff'
                        onPress={this.showSignUpInfo}
                    >
                        <Text style={[20, styles.logoutText]}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9eeee',
        padding: 10
    },
    contentContainer: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcbcb',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#bbb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
    logout: {
        width: '60%',
        height: 50,
        marginTop: 10,
        backgroundColor: '#000',
        borderRadius: 25,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20

    },
    logoutText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
})