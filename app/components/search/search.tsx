import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

interface InputProps{
    fetchWeatherData: (cityName: string) => Promise<void>

}

const Search  = (props:InputProps)=>{
    return(
        <View>
            
        </View>
    )
}
export default Search;