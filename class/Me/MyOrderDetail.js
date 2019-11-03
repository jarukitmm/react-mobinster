import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import MyOrderDetailList from './MyOrderDetailList'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class MyOrderDetail extends React.Component {

    static navigationOptions = {
        title: 'Order',
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
        item: this.props.navigation.state.params.item,
        items: [
            { key: 0, name: "Cookies", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 1, name: "Buddy", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 2, name: "Mhoo", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 3, name: "Kaew", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 4, name: "Dog", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 5, name: "Cookies", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 6, name: "Buddy", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 7, name: "Mhoo", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 8, name: "Kaew", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
            { key: 9, name: "Dog", amount: Math.floor(Math.random() * 10) + 1, price: Math.floor(Math.random() * 1000) + 100 },
        ],
    }

    waitingButtonView() {
        return (
            <View style={{ width: '100%', marginTop: 15 }}>
                <TouchableOpacity style={styles.chgPayMeth} onPress = {() => this.props.navigation.navigate('PaymentMeth')}>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 12.5 }}>Change Payment Method</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.payNow}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>PAY NOW</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                    <TouchableOpacity style={styles.cancelWaiting}>
                        <Text style={{ color: 'white' }}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.uploadSlip}>
                        <Text style={{ color: 'white' }}>+ Upload Slip</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    confirmButtonView() {
        return (
            <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>

                <TouchableOpacity style={styles.viewSlip}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>View Transfer Slip</Text>
                </TouchableOpacity>

            </View>
        );
    }

    editButtonView() {
        return (
            <View style={{ width: '100%', marginTop: 15 }}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.cancel}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.reorder}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Reorder</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    deliverButtonView() {
        return (
            <View style={{ width: '100%', marginTop: 15 }}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={styles.reorder}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Tracking Number</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewSlipDeli}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>View Transfer Slip</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    cancelButtonView() {
        return (
            <View style={{ width: '100%', marginTop: 15 }}>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                    <TouchableOpacity style={styles.chatNow}>
                        <Text style={{ color: '#fba7a7', fontWeight: 'bold' }}>Chat Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tel}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>062-123-4567</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    render() {

        // initialize varible
        var subTotal = 0
        var total = 0
        var discountV = 0
        var discounttxt = ''
        var type = ''
        var statustxt = ''
        var statusColor = ''
        var paymenttxt = ''
        var afterDiscount = 0

        // get data from My Order
        var shippingFee = 40
        var delivery = this.state.item.delivery
        var discount = this.state.item.discount
        var status = this.state.item.status
        var phone = this.state.item.phone_no
        var address = this.state.item.address
        var payment = this.state.item.payment
        var discount_type = this.state.item.discount_type

        // Define Payment 
        if (payment === 1) {
            paymenttxt = 'Cash'
        } else if (payment === 2) {
            paymenttxt = 'Transfer'
        } else if (payment === 3) {
            paymenttxt = 'Credit Card'
        } else if (payment === 4) {
            paymenttxt = 'Rabbit Line Pay'
        }

        // find Sub Total
        for (let i = 0; i < this.state.items.length; i++) {
            subTotal = subTotal + this.state.items[i].price * this.state.items[i].amount
        }

        // find Discount Value
        if (discount_type === 1 && discount > 0) { // discount x % case
            discounttxt = '-' + discount + '%'
            discountV = (discount * subTotal) / 100

        } else if (discount_type === 2 && discount > 0) { // discount x baht case
            discountV = discount
            discounttxt = '-' + discount
        }

        afterDiscount = subTotal - discountV
        // find Total and Type
        if (delivery === true) { // delivery case
            total = afterDiscount + shippingFee
            type = 'Delivery'
        } else { // pick at shop case
            total = afterDiscount
            type = 'Pick At Shop'
        }

        // Define Status
        if (status === 1) {
            statustxt = 'Confirmed'
            statusColor = '#098a4a'
        } else if (status === 2) {
            statustxt = 'Waiting'
            statusColor = '#42a6aa'
        } else if (status === 3) {
            statustxt = 'Edited'
            statusColor = '#7a42aa'
        } else if (status === 4) {
            statustxt = 'Canceled'
            statusColor = '#ff3d3d'
        } else if (status === 5) {
            statustxt = 'Delivered'
            statusColor = '#aa4242'
        }
        
        var totalDisplay = total.toLocaleString(navigator.language, { maximumFractionDigits: 0 })
        var subTotalDisplay = subTotal.toLocaleString(navigator.language, { maximumFractionDigits: 0 })
        var afterDiscountDisplay = afterDiscount.toLocaleString(navigator.language, { maximumFractionDigits: 0 }) 

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={styles.orderIdContainer}>
                            <Text style={{ fontWeight: 'bold' }}>Order ID: {this.state.item.orderId}</Text>
                        </View>
                        <View style={styles.topicItem}>
                            <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Name</Text></View>
                            <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>Amount</Text></View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}><Text style={{ fontWeight: 'bold' }}>Price</Text></View>
                        </View>

                        <View style={styles.orderItemList}>
                            <MyOrderDetailList
                                items={this.state.items}
                            />
                        </View>

                        <View style={styles.subTotalContainer}>
                            <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Subtotal</Text></View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{subTotalDisplay}</Text></View>
                        </View>

                        {discount > 0 &&
                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Discount</Text></View>
                                <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                                    <Text>{discounttxt}</Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}> {subTotalDisplay}</Text>
                                </View>
                            </View>
                        }
                        {discount > 0 &&
                            <View style={styles.afterDiscount}>
                                <Text>{afterDiscountDisplay}</Text>
                            </View>
                        }
                        {delivery === true &&
                            <View style={styles.subTotalContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Shipping Fee</Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{shippingFee}</Text></View>
                            </View>
                        }
                        <View style={styles.twoSectionContainer}>
                            <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Total:</Text></View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{totalDisplay}</Text></View>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Type:</Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{type}</Text></View>
                            </View>


                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Payment:</Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{paymenttxt}</Text></View>
                            </View>

                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Address:</Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{address}</Text></View>
                            </View>

                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Phone Number:</Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>{phone}</Text></View>
                            </View>

                            <View style={styles.twoSectionContainer}>
                                <View style={{ flex: 1 }}><Text style={{ fontWeight: 'bold' }}>Status: </Text></View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}><Text style={{ color: statusColor }}>{statustxt}</Text></View>
                            </View>
                            {status === 1 && this.confirmButtonView()}
                            {status === 2 && this.waitingButtonView()}
                            {status === 3 && this.editButtonView()}
                            {status === 4 && this.cancelButtonView()}
                            {status === 5 && this.deliverButtonView()}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f9eeee',
        padding: 10,
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#f9eeee"
    },
    orderIdContainer: {
        width: '100%',
        alignItems: 'flex-start'
    },
    orderItemList: {
        width: '100%',
        height: '20%',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        borderTopWidth: 1,
        borderTopColor: '#bbb',
        alignItems: 'center'
    },
    topicItem: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: deviceHeight / 100,
        justifyContent: 'center',
        marginTop: 10
    },
    afterDiscount: {
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "flex-end",
        padding: deviceHeight / 100,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    subTotalContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
        padding: deviceHeight / 100,
    },
    twoSectionContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: deviceHeight / 100,
    },
    payNow: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        padding: 15
    },
    cancel: {
        flex: 1,
        backgroundColor: '#e01414',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    cancelWaiting: {
        flex: 1,
        backgroundColor: '#e01414',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    uploadSlip: {
        flex: 1,
        backgroundColor: '#00c1c8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'white'
    },
    chgPayMeth: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    viewSlip: {
        width: '70%',
        backgroundColor: '#00c1c8',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'white'
    },
    viewSlipDeli: {
        flex: 1,
        backgroundColor: '#00c1c8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'white'
    },
    reorder: {
        flex: 1,
        backgroundColor: '#ff7b84',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginLeft: 5,
    },
    chatNow: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fba7a7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    tel: {
        flex: 1,
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        padding: 15
    }
})