import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Alert } from 'react-native';
import LanguageList from './LanguageList'

export default class Language extends React.Component {

    heartPath = require('./../../src/images/Me/heart.png')
    heartEmptyPath = require('./../../src/images/Me/heart-empty.png')

    state = {
        items: [
            { key: 0, name: "English", image: require('./../../src/images/Me/eng.png'), price: 100, heartUri: this.heartPath },
            { key: 1, name: "Thai", image: require('./../../src/images/Me/thai.png'), price: 200, heartUri: this.heartPath },
        ],
    };

    toggleHeartHandler = key => {
        
        let items = [...this.state.items]
        let index = items.findIndex(item => item.key === key)
        if (items[index].heartUri === this.heartPath) {
            items[index] = {...items[index], heartUri: this.heartEmptyPath}    
        } else {
            items[index] = {...items[index], heartUri: this.heartPath}
        }
        this.setState({ items })
    }

    itemsFilter = key => {
        // return items that not match with the item at key position
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => {
                    return item.key !== key;
                }),
                selectedItem: null
            };
        });
    }

    static navigationOptions = {
        title: 'Languages',
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

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <LanguageList
                        items={this.state.items}
                        onItemSelected={(this.toggleHeartHandler)}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9eeee',
        padding: 10
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ffcbcb',
        borderRadius: 20,
        // padding: 20
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})