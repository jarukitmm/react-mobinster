import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import VoucherItems from './VoucherItems';



const voucherList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            showsVerticalScrollIndicator={false}
            keyExtractor = {item => item.key.toString()} 
            renderItem={(info) => (
                <VoucherItems
                    itemCode={info.item.code}
                    itemDes={info.item.des}
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

export default voucherList;
