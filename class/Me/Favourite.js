import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import {SafeAreaView} from 'react-navigation'
import FavList from './FavList'

export default class Favourite extends React.Component {

    heartPath = require('./../../src/images/Me/heart.png')
    heartEmptyPath = require('./../../src/images/Me/heart-empty.png')

    state = {
        items: [
            { key: 0, name: "Unicorn Frape", image: require('./../../src/images/Me/favImg.png'), price: 100, heartUri: this.heartPath },
            { key: 1, name: "Highway Unicorn", image: require('./../../src/images/Me/macarons.png'), price: 200, heartUri: this.heartPath },
            { key: 2, name: "Strawberry Cupcakes", image: require('./../../src/images/Me/strawberry.png'), price: 140, heartUri: this.heartPath },
            { key: 3, name: "Bubble Pop Cake", image: require('./../../src/images/Me/bubblepop.png'), price: 2200, heartUri: this.heartPath },
            { key: 4, name: "Batman Cake", image: require('./../../src/images/Me/favImg.png'), price: 1100, heartUri: this.heartPath },
            { key: 5, name: "Superman Cone", image: require('./../../src/images/Me/favImg.png'), price: 1700, heartUri: this.heartPath },
            { key: 6, name: "Unicorn Frape", image: require('./../../src/images/Me/favImg.png'), price: 100, heartUri: this.heartPath },
            { key: 7, name: "Highway Unicorn", image: require('./../../src/images/Me/macarons.png'), price: 200, heartUri: this.heartPath },
            { key: 8, name: "Strawberry Cupcakes", image: require('./../../src/images/Me/strawberry.png'), price: 140, heartUri: this.heartPath },
            { key: 9, name: "Bubble Pop Cake", image: require('./../../src/images/Me/bubblepop.png'), price: 2200, heartUri: this.heartPath },
            { key: 10, name: "Batman Cake", image: require('./../../src/images/Me/favImg.png'), price: 1100, heartUri: this.heartPath },
            { key: 11, name: "Superman Cone", image: require('./../../src/images/Me/favImg.png'), price: 1700, heartUri: this.heartPath },
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
        title: 'Favourite',
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
            <SafeAreaView style={styles.safeArea} forceInset={{ bottom: 'never'}}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <FavList
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
        backgroundColor: '#ffcbcb',
        borderRadius: 20,
        padding: 20
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})