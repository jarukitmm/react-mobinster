import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MyOrderDetailItems from './MyOrderDetailItem';



const myOrderDetailList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            // showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <MyOrderDetailItems
                    name={info.item.name}
                    amount={info.item.amount}
                    price={info.item.price}
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

export default myOrderDetailList;