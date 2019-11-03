import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation'
import NotiList from './NotiList';

export default class Notification extends React.Component{

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
        items: [
            { key: 0, topic: "VALENTINE's", des: '20% Off for first login', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
            { key: 1, topic: "ICECREAM", des: '35% Off for ice cream', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
            { key: 2, topic: "TAKEHOME", des: '50% Off for ice Cream size XL', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
            { key: 3, topic: "ILIKETHIS", des: '10% Off for any menu', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
            { key: 4, topic: "COUPLE", des: '15% Off for couple package', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
            { key: 5, topic: "FEMALE", des: '20% Off for first login', con: 'เค้กที่ร่วมรายการได้แก่ Rainbow Cake, Fantasy Cake, Unicon Cake, Layer Cake ยกเว้น Black Forest Cake', date: '20 Mar - 15 Apr 2019'},
        ],
    };

    goToNotiDetail = key => {

        let items = [...this.state.items]
        let index = items.findIndex(item => item.key === key)

        console.log('go to Noti Detail')
        this.props.navigation.navigate('NotiDetail', {item: this.state.items[index]})
    }

    render(){
        return(
            <SafeAreaView style={styles.safeArea} forceInset={{ bottom: 'never'}}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <NotiList
                        items={this.state.items}
                        onItemSelected={(this.goToNotiDetail)}
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
        justifyContent: 'center',
        alignItems: 'center',
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
        padding: 10,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
})