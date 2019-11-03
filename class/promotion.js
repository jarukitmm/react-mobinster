//jarukit
import React from "react";
import PromotionCard from "../src/components/Card/promotioncard"
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, ScrollView, Dimensions, ImageBackground, Image, Platform} from 'react-native';

//demo data
const cards = [
  {
    id: "0",
    title: "test0",
    path: 'https://image.freepik.com/vector-gratis/diseno-colorido-banners-promocionales-rebajas_1017-9784.jpg?1',
    // path: require('./../src/images/Promotion/promotion1.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "1",
    title: "test1",
    path: 'https://www.techxcite.com/topics/28200/filemanager/1.jpg',
    // path: require('./../src/images/Promotion/promotion2.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "2",
    title: "test2",
    path: 'https://www.techxcite.com/topics/21424/filemanager/2015-02-20_08-00-07.jpg',
    // path: require('./../src/images/Promotion/promotion3.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "3",
    title: "test3",
    path: 'https://s3-ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/12/05201835/57.jpg',
    // path: require('./../src/images/Promotion/promotion4.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "4",
    title: "test4",
    path: 'https://www.koshidaka.com.sg/wp-content/uploads/2016/11/News-Promotion-3.jpg',
    // path: require('./../src/images/Promotion/promotion5.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "5",
    title: "test5",
    path: 'https://previews.123rf.com/images/dizanna/dizanna1504/dizanna150400189/38372896-promotion-word-cloud-business-concept.jpg',
    // path: require('./../src/images/Promotion/promotion6.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
  {
    id: "6",
    title: "test6",
    path: 'https://img.freepik.com/free-vector/sale-background-template_1361-554.jpg?size=626&ext=jpg',
    // path: require('./../src/images/Promotion/promotion7.jpg'),
    content: "abcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnopabcdefghijklmnop",
    date: "1/3/62",
  },
];

export default class Promotion extends React.Component {
    constructor(){
      super();
      this.state = {
        contentcard: null,
      }
    }

    static navigationOptions = {
      title: 'Setting',
      headerStyle: {
          backgroundColor: '#f9eeee',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
    }
    
    async componentWillMount() {
      const printcard = await cards.map((card,i)=>(
        <PromotionCard 
          key={i}
          id={card.id} 
          url={card.path} 
          title={card.title}
          content={card.content}
          date={card.date}
          promotioncard={promotioncard}
          code={"ABCXXXXX"}/>
      ))
      this.setState({contentcard: printcard});
    }

    render(){
      return(
        <View style={styles.container}>

            <Image 
              style={styles.bg} 
              source={require('./../src/images/Promotion/bg_promotion.png')} 
              resizeMode="stretch"  
            />
          
          <ScrollView 
            style={styles.scrollView}
            scrollEnabled = {true}
          >
            <View style={{paddingTop: "5%", height: "100%"}}>
              {
                this.state.contentcard
              }
            </View>
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      position: "relative",
    },
    fixed: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    scrollView: {
      // paddingTop: "12%",
      // height: "100%",
      // paddingVertical: "50%",
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right:0 ,
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },
});

const promotioncard = StyleSheet.create({
  card: {
      width: "100%",
      height: Dimensions.get('screen').height*0.3,
      borderRadius: 15,
  },
  cardTouch: {
      height: "100%"
  },
  cardView: {
      borderRadius: 15,
      width: "95%",
      height: Dimensions.get('screen').height*0.3,
      marginLeft: "2.5%",
      marginRight: "2.5%",
      marginBottom: "5%",

      //ios    
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
        height: 0,
        width: 0
      },
      //android
      elevation: 5,
  },
  modal: {
    
  },
  touchmodal: {
      
  },
  bgbtn: {
      position: 'absolute',
      width: 331,
      height: 350,
      borderRadius: 20,
      borderColor: "black",
  },
  cardinmodal: {
      width: "95%",
      height: Dimensions.get('screen').height*0.3,
      marginLeft: "2.5%",
      marginRight: "2.5%",
      marginTop: "6%",
      marginBottom: "10%",
      borderRadius: 10,
      // alignSelf: 'flex-start',
  },
  cardViewinmodal: {
    borderRadius: 15,
    width: "95%",
    height: Dimensions.get('screen').height*0.3,
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginBottom: "5%",
  },
  titlemodal: {
    color: "#F25D5D",
    fontSize: Dimensions.get('screen').height*0.035,
    marginTop: "5%",
    marginBottom: "6%",
  },
  container: {
      marginTop: "15%",
      justifyContent: 'center',
      // position: 'fixed',
      width: Dimensions.get('screen').width,
      bottom: Platform.OS === "android" ? Dimensions.get('screen').height*0.04 : Dimensions.get('screen').height*0.035,
  },
});