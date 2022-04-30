import React,{useEffect, useState} from "react";
import HomeScreen from "../views/HomeScreen/homeScreen";
import API_KEY from '../../env ';
import { Text, View } from "react-native";

const HomeModel = ()=>{
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loaded, setLoaded] = useState(true);    
    
  const fetchWeatherData = async (cityName: string) => {
    setLoaded(false);
    console.log(cityName, API_KEY);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      console.log(response)
      if (response.status == 200) {
        const data = await response.json();
        console.log(data);
        setWeatherData(data);  
      } else {
        setWeatherData({});
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(()=>{
    fetchWeatherData('jammu');
  },[])


  return(
    
      <HomeScreen weatherData = {weatherData}/>
  )

} 

export default HomeModel;