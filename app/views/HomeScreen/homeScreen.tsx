import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StatusBar} from 'react-native';
import {Search, Weather} from '../../components';
import styles from './style';
const HomeScreen = (props:any) => {
  const {weatherData,loaded}=props;
  return(
  <View style={styles.container}>
    <StatusBar hidden/>
    <Weather weatherData ={weatherData} />  
  </View>);
};
export default HomeScreen;
