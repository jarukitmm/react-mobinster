import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import SettingItems from './SettingItem';



const settingList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <SettingItems
                    menu={info.item.menu}
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

export default settingList;