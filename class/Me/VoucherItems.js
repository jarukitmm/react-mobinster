import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const voucherItems = props => (
    // onPress ==> MenuDetail

    <View>
        <View style={styles.listItem}>
            <View style={styles.namePriceContainer}>
                <View style = {styles.codeContainer}>
                    <Text style = {{ fontSize: deviceHeight / 55, color: '#fff'}}>{props.itemCode}</Text>
                </View>
                <Text style={{ fontSize: deviceHeight / 55, marginTop: 5}}>{props.itemDes}</Text>
                <Text style={{ fontSize: deviceHeight / 60, marginTop: 5, color: '#aaa' }}>{"Available " + props.itemDate}</Text>
            </View>
            <TouchableOpacity style={styles.copyContainer} onPress={props.OnItemPressed}>
                <Text style = {{fontSize: deviceHeight / 55, color: '#ff6e6e'}}>{"COPY"}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    codeContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fa5581',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    namePriceContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    copyContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // backgroundColor: 'red',
        paddingTop: 10
    },
    heartImage: {
        height: 30,
        width: 30
    }
});
export default voucherItems;