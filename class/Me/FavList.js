import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../../src/components/ListItem/ListItem';
import FavItem from './FavItem';



const favList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <FavItem
                    itemName={info.item.name}
                    itemImage={info.item.image}
                    itemPrice={info.item.price}
                    itemHeart={info.item.heartUri}
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

export default favList;
