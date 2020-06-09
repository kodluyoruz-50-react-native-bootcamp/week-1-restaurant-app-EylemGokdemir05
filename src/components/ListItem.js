import React from 'react'
import {View,StyleSheet} from 'react-native'


const ListItem=props=>{
    let popState=props.myData.isPopular ? popular:unpopular
    return(
        <View style={popState.container}>
        <View style={{flexDirection:'row'}}>
        </View>
        </View>
    )
}
const popular=StyleSheet.create({
    container:{
        backgroundColor:'#e67e22'
    }
})
const unpopular=StyleSheet.create({
    container:{
        backgroundColor:'#bdc3c7'
    }
})
export default ListItem