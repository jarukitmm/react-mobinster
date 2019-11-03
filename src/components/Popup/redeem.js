//jarukit
import React, { Component } from "react";
import { Text, TouchableOpacity, View,Image , SafeAreaView, StyleSheet, TouchableHighlight, Dimensions, Alert, Platform, Clipboard } from "react-native";
import Modal from "react-native-modal";
import IconF from 'react-native-vector-icons/Feather';
import colors from '../../color/color';

export default class Sharepopup extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            code: this.props.code,
        };
    }

    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        // console.log('popup : '+this.state.isModalVisible)
    }

    CopiedAlert = async() => {
        await Clipboard.setString(this.state.code);
        await Alert.alert(
            'Copied to Clipboard',
            'You can apply this promotion code',
            [
              {
                text: 'Close',
                onPress: () => console.log('Close'),
                style: 'ok',
              },
              {
                text: 'Go to Menu', 
                onPress: () => {
                    this._toggleModal()
                    // this.props.gotopromotion(false)
                    console.log('go to menu')
                }},
            ],
            {cancelable: false},
          );
    }

    render() {
        return (
            // <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1 }}>
                <TouchableHighlight
                    underlayColor="grey"
                    style={styles.RedeemButton}
                    onPress={this._toggleModal}
                >
                    <Text style={styles.RedeemText}>REDEEM</Text>
                </TouchableHighlight>
            
                <Modal 
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this._toggleModal}
                    onSwipeComplete={this._toggleModal}
                    swipeDirection="left"
                    animationOut="slideOutLeft"
                    backdropOpacity={0.5}
                    animationOutTiming={300}
                    backdropTransitionOutTiming={300}
                >
                    <View style={{flexDirection: 'column', backgroundColor: "white", borderRadius: 20, marginLeft: "15%", marginRight: "15%"}}>
                        <View style={{flexDirection: 'column' ,width: "100%"}}>
                            <View style={{width: "100%", alignItems: 'center', marginTop: "5.5%"}}>
                                <IconF name="check-circle" size={30} style={{}}/>
                            </View>
                            <View style={{width: "100%", marginBottom: "1%", marginTop: "6%"}}>
                                <Text style={{alignSelf: 'center', fontSize: Dimensions.get('screen').height*0.025}}>Your Code is</Text>
                            </View>
                            <View style={{width: "100%", alignItems: 'center'}}>
                                <View style={{marginBottom: "5.5%", backgroundColor: "#FA5581", borderRadius: 10, paddingTop: 10, paddingBottom: 10, width: "65%"}}>
                                    <Text style={{alignSelf: 'center', fontSize: Dimensions.get('screen').height*0.025, color: "white"}}>{this.state.code}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{bottom: 0, backgroundColor: "black", paddingTop: "5%", paddingBottom: "5%", borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
                            <TouchableHighlight
                                underlayColor="black"
                                style={{alignItems: 'center', width: "100%", borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}
                                onPress={this.CopiedAlert}
                            >
                                <Text style={{color: "white", fontSize: Dimensions.get('screen').height*0.025}}>Collect</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
        </View>
        //   </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.color1,
    },
    sharelogo: {
        height: 60,
        width: 60,
    },
    RedeemButton: {
        alignItems: "center", 
        borderRadius: 30,
        marginLeft: Dimensions.get('screen').width*0.2,
        marginRight: Dimensions.get('screen').width*0.2,
        paddingTop: 10,
        paddingBottom: Platform.OS === "ios" ? 35 : 30,
        backgroundColor: "black",
    },
    RedeemText: {
        margin: 0,
        height: 20,
        color: "white",
        fontSize: Platform.OS === "ios" ? 20 : Dimensions.get('screen').height*0.02,
    }
})    