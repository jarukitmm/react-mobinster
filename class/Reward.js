/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import 
{Platform, 
StyleSheet, 
Text, 
View , 
Image , 
Button , 
TextInput, 
TouchableOpacity,
ScrollView, 
SafeAreaView,
} from 'react-native';

const handlePress = () => false
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  // android:
  //   'Double tap R on your keyboard to reload,\n' +
  //   'Shake or press menu button for dev menu',
});



export default class Reward extends Component {
    render(){   
        return (
            
            <SafeAreaView style={styles.safeArea}>
            <ScrollView horizontal={true}>
            <View style ={styles.container}>
            
             <Image style={styles.background} source={require('./../src/images/Promotion/bg_promotion.png')} />
                <View style={styles.reward}>
                   <View style={styles.reward1}>
                        <Image style={styles.cake} source={require('./../src/images/reward/RedVelvetCookies.jpg')} />
                        <Image style={styles.rectangle} source={require('./../src/images/rectangle.png')} /> 
                        <Image style={styles.crown} source={require('./../src/images/reward/crown2.jpg')} />
                        <View style={styles.text1}>      
                                <Text style={styles.text1} >Red Velvet Cookies</Text>
                        </View>
                        <View style={styles.pointreward}>      
                                <Text style={styles.pointreward} >Points : 9</Text>
                        </View>
                        
                   </View>
                
                   <View style={styles.reward2}>
                        <Image style={styles.cupcake} source={require('./../src/images/reward/cupcake.jpg')} />
                        <Image style={styles.rectangle1} source={require('./../src/images/rectangle.png')} /> 
                        <Image style={styles.crown1} source={require('./../src/images/reward/crown2.jpg')} />
                        <View style={styles.text2} >      
                                <Text style={styles.text2} >Fancy Cupcakes</Text>
                        </View>
                        <View style={styles.pointreward1}>      
                                <Text style={styles.pointreward1} >Points : 12</Text>
                        </View>
                   </View>
                 

                </View>
                <View style={styles.row1}>
                            <View style={styles.total}>
                                <Text style={styles.total}>Total Points : </Text>  
                            </View>        
                            <View style={styles.points}>
                                <Text style={styles.points} >  365</Text>
                            </View>
                </View> 
                <View style={styles.condition}>
                        <Text style={styles.condition}> เงื่อนไข : ทางร้านขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องเเจ้งให้ทราบล่วงหน้า</Text>  
                </View>    
               
                    
             </View>

            
             <View style ={styles.container}>
            
             <Image style={styles.background} source={require('./../src/images/Promotion/bg_promotion.png')} />
                <View style={styles.reward}>
                   <View style={styles.reward1}>
                        <Image style={styles.cake} source={require('./../src/images/reward/RedVelvetCookies.jpg')} />
                        <Image style={styles.rectangle} source={require('./../src/images/rectangle.png')} /> 
                        <Image style={styles.crown} source={require('./../src/images/reward/crown2.jpg')} />
                        <View style={styles.text1}>      
                                <Text style={styles.text1} >Red Velvet Cookies</Text>
                        </View>
                        <View style={styles.pointreward}>      
                                <Text style={styles.pointreward} >Points : 9</Text>
                        </View>
                        
                   </View>
                
                   <View style={styles.reward2}>
                        <Image style={styles.cupcake} source={require('./../src/images/reward/cupcake.jpg')} />
                        <Image style={styles.rectangle1} source={require('./../src/images/rectangle.png')} /> 
                        <Image style={styles.crown1} source={require('./../src/images/reward/crown2.jpg')} />
                        <View style={styles.text2} >      
                                <Text style={styles.text2} >Fancy Cupcakes</Text>
                        </View>
                        <View style={styles.pointreward1}>      
                                <Text style={styles.pointreward1} >Points : 12</Text>
                        </View>
                   </View>
                 

                </View>
                <View style={styles.row1}>
                            <View style={styles.total}>
                                <Text style={styles.total}>Total Points : </Text>  
                            </View>        
                            <View style={styles.points}>
                                <Text style={styles.points} >  365</Text>
                            </View>
                </View> 
                <View style={styles.condition}>
                        <Text style={styles.condition}> เงื่อนไข : ทางร้านขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องเเจ้งให้ทราบล่วงหน้า</Text>  
                </View>    
               
                    
             </View>
             </ScrollView>
             </SafeAreaView>
            
            
        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },
    reward:{  
        width: 331,
        height: 350,
        alignItems: 'center',

    },
    reward1:{
        width: 331,
        height: 350,
        alignItems: 'center',
    },
    reward2:{
        
        width: 331,
        height: 350,
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right:0 ,
        width: 550 ,
        height: 760 ,
        },
    cake: {
        position: 'absolute',
        width: 331,
        height: 200,
        marginTop:-5,
        marginLeft:800,
        borderRadius: 20,
          //android
          elevation: 5,
          //ios    
        shadowOpacity: 3,
        shadowRadius: 10,
        shadowOffset: {
          height: 10,
          width: 10
        }
       
    },
    rectangle:{
        position: 'absolute',
        width: 350,
        height:80,
        marginTop:100,
        marginLeft:800,
    },
    rectangle1:{
        position: 'absolute',
        width: 348,
        height:70,
        marginBottom:200,
        marginLeft:800,
    },
    crown:{
        position: 'absolute',
        width: 40,
        height:40,
        marginTop:138,
        left: 10,
        
    },
    crown1:{
        position: 'absolute',
        width: 40,
        height:40,
        marginTop:30,
        left: 10,
        
    },
    cupcake: {
        position: 'absolute',
        width: 331,
        height: 200,
        borderRadius: 20,
        marginTop: -120,
        //android
        elevation: 5,
        //ios    
      shadowOpacity: 3,
      shadowRadius: 10,
      shadowOffset: {
        height: 10,
        width: 10
      }
    },
    text1:{
        textAlign: 'left',
        color: 'black',
        padding: 5,
        height:100,
        padding: 1,
        margin: 3,
        marginRight:60,
        marginTop:60,
        fontSize: 20,
        fontWeight:'bold',

    },
    pointreward:{
       marginRight: 80,
       marginTop: -6,
       color:'black',
       fontSize: 16,
       fontWeight:'bold',
    },
    pointreward1:{
        marginRight: 80,
        bottom: 30,
        color:'black',
        fontSize: 16,
        fontWeight:'bold',
     },
    text2:{
        textAlign: 'left',
        color: 'black',
        padding: 5,
        height:100,
        padding: 1,
        margin: 3,
        marginRight:60,
        marginTop:3,
        fontSize: 20,
        fontWeight:'bold',

    },
    text3:{
        textAlign: 'center',
        color: 'black',
        padding: 5,
        height:60,
        padding: 1,
        margin: 3,
        marginRight:10,
        marginTop:70,
        fontSize: 20,
        fontWeight:'bold',

    },
    text4:{
        textAlign: 'center',
        color: 'red',
        padding: 5,
        height:60,
        padding: 1,
        margin: 3,
        marginRight:10,
        marginTop:70,
        fontSize: 20,
        fontWeight:'bold',

    },
    row1:{
        flexDirection:'row',
        margin: 5,
      },
    condition :{
        flexDirection:'row',
        margin: 5,
        fontSize:10,
     
      },
    total:{
        fontWeight:'bold',
        color:'black',
        alignItems:'flex-end',
        marginTop:80,
        fontSize:16, 
      },
    points:{
        fontWeight:'bold',
        color: '#ff8080',
        marginTop:80.5,
    },
    safeArea: {
        flex: 1,
        backgroundColor: "#eee"
    },
    
});