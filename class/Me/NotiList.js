import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import NotiItems from './NotiItem';



const notiList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <NotiItems
                    itemTopic={info.item.topic}
                    itemDes={info.item.des}
                    itemCon={info.item.con}
                    itemDate={info.item.date}
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

export default notiList;
