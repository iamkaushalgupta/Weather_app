import { StyleSheet,Dimensions } from "react-native";
import { color } from "../../constants";
const {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    imageBackground:{
        flex:1,
        padding:10,
    },
    imageBackgroundStyle:{
        width:width,
        height:height,
        resizeMode:'stretch'
    },
    stateText:{
        textAlign:'center',
        fontSize:30,
        color:color.stateTextColor,
        paddingTop:10,
    },
    tempratureText:{
        fontSize:50,
        textAlign:'center',
        color:color.tempratureText  
    },
    tempratureDescription:{
        color:color.tempratureDescriptionText,
        fontSize:30,
        textAlign:'center'
    },
    bottomContainer:{
        marginTop:20,
        flexDirection:'row',
         justifyContent:'space-between'
    },
    leftFieldText:{
        color:color.leftFieldText,
        fontSize:18
    },
    rightValueText:{
        fontSize:18,
        color:color.RightValueText,
    },
    searchContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'darkblue',
        borderRadius:8
    },
    searchField:{
        color:'darkblue'
    }
})
export default styles;