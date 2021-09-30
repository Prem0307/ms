import React from 'react';
import {View ,StyleSheet,Image} from 'react-native';

export default class Maths extends React.Component{
 render(){
    return(
        <View>
            <Image
          style={styles.imageIcon}
          source={require('./assets/NS.jpg')}
          
        />
        </View>
    )

 }
 
}
const styles=StyleSheet.create({
    imageIcon:{
width:0%dt,
        height:'100%',
        resizeMode:'contain'
    }
})