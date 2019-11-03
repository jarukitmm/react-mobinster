import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MyOrderItem from './MyOrderItem';



const myOrderList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <MyOrderItem
                    orderId={info.item.orderId}
                    date={info.item.date}
                    status={info.item.status}
                    time={info.item.time}
                    OnItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )} 
        />
        
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default myOrderList;