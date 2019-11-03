import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';



const itemList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            scrollEnabled = {false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <ListItem
                    itemName={info.item.name}
                    itemImage={info.item.image}
                    OnItemPressed={() => props.onItemSelected(info.item.key, info.item.name)}
                />
            )}
            keyExtractor = {item => item.key.toString()} 
        />
        
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default itemList;
