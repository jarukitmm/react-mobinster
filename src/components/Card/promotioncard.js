//jarukit
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
// import styled from 'styled-components';

import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import { GroupTypesOptions } from 'react-native/Libraries/CameraRoll/CameraRoll';

import Sharepopup from "../Popup/sharepopup";
import Redeem from "../Popup/redeem";

import colors from '../../color/color';

export default class PromotionCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
        console.log('visible : '+visible)
    };

    render(){
            return(
                <View classname={"card"+this.props.id} style={this.props.promotioncard.cardView}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(true)} style={this.props.promotioncard.cardTouch}>
                        <Image
                            style={this.props.promotioncard.card}
                            // source={require('./../../images/Promotion/promotion1.jpg')} 
                            // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                            source={{uri: this.props.url}}
                            // source={this.props.url}
                            resizeMode="stretch"
                            
                        />
                    </TouchableOpacity>
                    
                    <Modal
                        style={this.props.promotioncard.modal}
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}
                    >
                        <SafeAreaView style={styles.safeArea}>
                            <View style={{marginTop: "2%"}}>
                                <View>
                                    <View style={{flexDirection: "row", justifyContent: 'space-between',}}>
                                        <View style={{width: 20, marginLeft: "5%"}}>
                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(false)
                                                }}
                                                underlayColor="white"
                                                style={{}}
                                            >
                                                <IconI name="ios-arrow-back" size={30} resizeMode = 'cover' style={{}}/>
                                            </TouchableHighlight>
                                        </View>
                                        <View style={{width: "60%", alignItems:"center",}}>
                                            <Text style={{fontSize: Dimensions.get('screen').height*0.03}}>Promotion</Text>
                                        </View>
                                        <View style={{width: 30, marginRight: "5%"}}>
                                            <Sharepopup/>
                                        </View>
                                    </View>
                                    <View style={styles.content}>
                                        <View style={this.props.promotioncard.cardViewinmodal}>
                                            <Text style={this.props.promotioncard.titlemodal}>{this.props.title}</Text>
                                            {/* <ScrollView
                                                style={styles.scrollview}
                                                scrollEnabled={true}
                                            > */}
                                                {/* <View style={styles.scrollview}> */}
                                                    <Text>propropropro</Text>
                                                    <View>
                                                        <Image
                                                            style={this.props.promotioncard.cardinmodal}
                                                            // source={require('./../../images/Promotion/promotion1.jpg')}
                                                            source={{uri: this.props.url}}
                                                            // source={this.props.url}
                                                            resizeMode="stretch"
                                                        />
                                                    </View>
                                                    <View style={{marginBottom: "8%"}}>
                                                        <Text>{this.props.content}</Text>
                                                    </View>
                                                    <View style={{marginBottom: "6%"}}>
                                                        <Text>{this.props.date}</Text>
                                                    </View>
                                                {/* </View> */}
                                            {/* </ScrollView> */}
                                        </View>
                                    </View>
                                    <View style={this.props.promotioncard.container}>
                                        <Redeem gotopromotion = {this.setModalVisible} code={this.props.code}/>
                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.color1,
    },
    content: {
        backgroundColor: "white", 
        borderRadius: 10,
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        flexDirection: "column",
        height: Platform.OS === "android" ? Dimensions.get('screen').height*0.7 : Dimensions.get('screen').height*0.75,
    },
    scrollview: {
        width: "95%",
        height: Dimensions.get('screen').height*0.8,
    },
})
