import React from "react";
import { View, Text, ImageBackground, StatusBar, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { image } from "../../constants";
const Weather = (props:any) =>{
  const {weatherData} =props;
  let imageBackground = image.main_background;
  if(weatherData?.weather[0]?.main=='Haze')
      imageBackground = image.haze
  else if(weatherData?.weather[0]?.main=='Snow')
      imageBackground = image.snow
  else if(weatherData?.weather[0]?.main=='rainy')
      imageBackground = image.rainy
  else if(weatherData?.weather[0]?.main=='Sunny')
    imageBackground = image.sunny   

  return(
    <View style = {styles.container}>
    
       <ImageBackground source={imageBackground} style={styles.imageBackground} imageStyle={styles.imageBackgroundStyle} >
       <View style={styles.searchContainer}>
       <TextInput placeholder="Search city" style={styles.searchField} ></TextInput>
        <TouchableOpacity style={styles.searchButton}>
        <Image source={image.search_icon} style={styles.searchIcon} /> 
        </TouchableOpacity>
       </View>
         <Text style={styles.stateText}>{weatherData?.name}</Text>
         <View>
           <Text style={styles.tempratureText}>{weatherData?.main?.temp}°C</Text>
           <Text style = {styles.tempratureDescription}>{weatherData?.weather[0]?.main}</Text>
         </View>

<View style={styles.bottomContainer}>
         <View>
           <Text style={styles.leftFieldText}>Minimum Temprature</Text>
           <Text style={styles.leftFieldText}>Maximum Temprature</Text>
           <Text style={styles.leftFieldText}>Humidity</Text>
           <Text style={styles.leftFieldText}>Pressure</Text>
           <Text style={styles.leftFieldText}>Wind Speed</Text>
         </View>

         <View>
      <Text style={styles.rightValueText}>{weatherData?.main.temp_min}°C</Text>
      <Text style={styles.rightValueText}>{weatherData?.main.temp_max}°C</Text>
      <Text style={styles.rightValueText}>{weatherData?.main.humidity}</Text>
      <Text style={styles.rightValueText}>{weatherData?.main.pressure}</Text>
      <Text style={styles.rightValueText}>{weatherData?.wind.speed} m/s</Text>
  
         </View>
         </View>
           </ImageBackground>
       

    </View>
)
}
export default Weather; 