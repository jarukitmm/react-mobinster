import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import HistoryItem from './HistoryItem';



const historyList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
            data={props.items}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <HistoryItem
                    action={info.item.action}
                    date={info.item.date}
                    points={info.item.points}
                    unit={info.item.unit}
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

export default historyList;