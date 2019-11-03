//jarukit
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity , StyleSheet, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {Permissions, Location} from 'expo'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Loc extends React.Component {
     
    static navigationOptions = {
        title: 'Location',
        headerStyle: {
            // backgroundColor: '#f9eeee',
            backgroundColor: '#F9EEEE'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    }
    
    constructor(props){
        super(props);
        this.state = {
            region: {
                latitude: 13.7469,
                longitude: 100.5349,
                latitudeDelta: 0.000833,
                longitudeDelta: 0.00518,
            },
            markers: [
                {
                    key: 1,
                    latlng: {
                        latitude: 13.7469,
                        longitude: 100.5349,
                    },
                    title: "Siam Paragon",
                    description: "สยามพารากอน ถนน พระราม 1 Khwaeng Pathum Wan, Khet Pathum Wan, Krung Thep Maha Nakhon 10330"
                },
                {
                    key: 2,
                    latlng: {
                        latitude: 13.740663704,
                        longitude: 100.524664568,
                    },
                    title: "MBK Center",
                    description: "this place is MBK"
                },
                {
                    key: 3,
                    latlng: {
                        latitude: 13.7399887067,
                        longitude: 100.526547894,
                    },
                    title: "Chulalongkorn University Dhammasatan",
                    description: "ธรรมสถาน จุฬาลงกรณ์ มหาวิทยาลัย"
                },
            ]
        }
    }

    onRegionChange = () => {
        this.setState({ 
            region: {
                latitude: 13.740663704,
                longitude: 100.524664568,
                latitudeDelta: 0.000833,
                longitudeDelta: 0.00518,
            }, 
        });
        console.log('changelocation')
    }

    findnearest=()=>{
        const x = '0';
        const y = '0';
        const z = '0';
        const temp = '0';
        const keynearest = '';
        this.state.markers.map(marker => {
            y = marker.latlng.latitude - this.state.region.latitude;
            x = marker.latlng.longitude - this.state.region.longitude;
            temp = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
            console.log('temp : '+temp)
            if(temp<z){
                z = temp;
                console.log('z : '+z)
                keynearest = marker.key;
            }
        })
        return keynearest;
    }
      
    componentDidMount = async() => {
        // await console.log(Permissions.LOCATION)
        // console.log(Location.geocodeAsync(latitude))
        // let location = await Location.getCurrentPositionAsync({});
    }

    render() {
        return (
            <View>
                <MapView
                    provider={ PROVIDER_GOOGLE }
                    style={styles.container}
                    region={this.state.region}
                    // onRegionChange={this.onRegionChange}
                    showsUserLocation={true}
                    // followsUserLocation={true}
                    zoomEnabled={true}
                >
                    {
                        this.state.markers.map(marker => (
                            <Marker
                                key={marker.key}
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))
                    }
                    {/* <View style={styles.button}>
                        <TouchableOpacity
                            onPress={this.onRegionChange}
                            underlayColor="white"
                            style={{}}
                        >
                            <IconM name="map-marker-circle" size={50} style={{color: "white"}}/>
                        </TouchableOpacity>
                    </View> */}
                </MapView>
                <View style={styles.button}>
                        <TouchableOpacity
                            onPress={this.findnearest}
                            underlayColor="white"
                            style={{}}
                        >
                            <IconM name="map-marker-circle" size={50} style={{color: "white"}}/>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '100%',
    },
    button: {
        position: 'absolute',
        top: Dimensions.get('screen').height*0.75,
        right: Dimensions.get('screen').width*0.045,
        alignSelf: 'flex-end',
        backgroundColor: 'grey',
        borderRadius: 100,
        width: 52,
        height: 52,
    }

})
