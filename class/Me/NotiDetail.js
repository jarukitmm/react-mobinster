import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default class notiDetail extends React.Component {

    static navigationOptions = {
        title: 'Notification',
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
        item: this.props.navigation.state.params.item
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Text style={{ color: '#f25d5d', fontSize: 20 }}>{this.state.item.topic}</Text>
                        <Text style={styles.description}>{this.state.item.des}</Text>
                        <Image resizeMode='stretch' source={require('./../../src/images/Me/cover-test.jpg')} style={styles.itemImage} />
                        <Text style={styles.description}>{this.state.item.con}</Text>
                        <Text style={styles.date}>{'Available : ' + this.state.item.date}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.submit}
                        underlayColor='#fff'
                        onPress={this.showSignUpInfo}
                    >
                        <Text style={[20, styles.submitText]}>REDEEM</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f9eeee',
        padding: 10
    },
    contentContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
    },
    description: {
        marginTop: 20
    },
    date: {
        marginTop: 30
    },
    itemImage: {
        marginTop: 20,
        width: '100%',
        height: '40%',
        borderRadius: 15,
    },
    submit: {
        width: '60%',
        height: 50,
        marginTop: 10,
        backgroundColor: '#000',
        borderRadius: 25,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20

    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})