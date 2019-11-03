//jarukit
import React, { Component } from "react";
import { Text, TouchableOpacity, View,Image , SafeAreaView, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import Modal from "react-native-modal";
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../color/color';

export default class Sharepopup extends Component {
    constructor(){
        super();
        this.state = {
            isModalVisible: false,
        };
    }

    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    render() {
        return (
            // <SafeAreaView style={styles.safeArea}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={this._toggleModal}
                    underlayColor="#F9EEEE"
                >
                    <IconF name="share-2" size={30} style={{}}/>
                </TouchableOpacity>
            
                <Modal 
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this._toggleModal}
                    onSwipeComplete={this._toggleModal}
                    swipeDirection="left"
                    animationIn="slideInDown"
                    animationOut="slideOutLeft"
                    backdropOpacity={0.5}
                    animationOutTiming={300}
                    backdropTransitionOutTiming={300}
                >
                    <View style={{ flexDirection: 'column', backgroundColor: "white", borderRadius: 20, marginLeft: "10%", marginRight: "10%"}}>
                        <View style={{flexDirection: 'column' ,width: "100%", borderBottomColor: '#B4B0B0', borderBottomWidth: 1}}>
                            <View style={{alignSelf: 'flex-end', marginRight: "4%", marginTop: "2.5%", marginBottom: 0}}>
                                <TouchableOpacity onPress={this._toggleModal}>
                                    {/* <Text style={{alignSelf: 'flex-end', fontSize: 20}}>X</Text> */}
                                    <IconA name="close" size={15} style={{alignSelf: 'flex-end'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: "100%", marginBottom: "5%", marginTop: 0}}>
                                <Text style={{alignSelf: 'center', fontSize: Dimensions.get('screen').height*0.02}}>Share with your friends and family</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignSelf: 'center',marginTop: "4%", marginBottom: "5%"}}>
                            {/* <Text>content for share</Text> */}
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <TouchableOpacity
                                    // onPress={() => {}}
                                >
                                    <Image
                                        source={{uri: 'https://s18955.pcdn.co/wp-content/uploads/2017/05/Facebook.png'}}
                                        // source={require('../../images/sharelogo/facebook.png')}
                                        resizeMode="stretch"
                                        style={styles.sharelogo}
                                    />
                                </TouchableOpacity>
                                <Text style={{fontSize: Dimensions.get('screen').height*0.015}}>Facebook</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: "5%", marginRight: "5%"}}>
                                <TouchableOpacity
                                    // onPress={() => {}}
                                >
                                    <Image
                                        source={{uri: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/twitter-512.png'}}
                                        // source={require('../../images/sharelogo/twitter.png')}
                                        resizeMode="stretch"
                                        style={styles.sharelogo}
                                    />
                                </TouchableOpacity>
                                <Text style={{fontSize: Dimensions.get('screen').height*0.015}}>Twitter</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <TouchableOpacity
                                    // onPress={() => {}}
                                >
                                    <Image
                                        source={{uri: 'https://i.pinimg.com/originals/43/97/bd/4397bdfea4297f8c517f5901c72c31c3.png'}}
                                        // source={require('../../images/sharelogo/line.png')}
                                        resizeMode="stretch"
                                        style={styles.sharelogo}
                                    />
                                </TouchableOpacity>
                                <Text style={{fontSize: Dimensions.get('screen').height*0.015}}>Line</Text>
                            </View>
                        </View>
                        {/* <View style={{position: 'fixed', bottom: 0, backgroundColor: "red", borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}>
                            <Text>end</Text>
                        </View> */}
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
        // backgroundColor: "#eee"
        backgroundColor: colors.color1,
    },
    sharelogo: {
        height: 55,
        width: 55,
    }
})    