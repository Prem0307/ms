import React from 'react';
import { Text,View ,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
export default class Maths extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Header
                   backgroundColor={'#9c8210'}
                   centerComponent={{
                     text: 'Maths ',
                     style: { color: '#fff', fontSize: 20,width:120 },
                   }}
                />

                <View style={styles.all}>
                    <View >
                    <TouchableOpacity style={styles.c1}>
                        <Text style={styles.t1}>NumberSystems</Text>
                    </TouchableOpacity>
                    </View>
          

                  <View >
                    <TouchableOpacity style={[styles.c1,{backgroundColor:"blue"}]}>
                        <Text style={styles.t1}>Polynomials</Text>
                    </TouchableOpacity>
                    </View>
                
                    <View >
                    <TouchableOpacity style={[styles.c1,{backgroundColor:"yellow"}]}>
                        <Text style={styles.t1}>CoordinateZemotry</Text>
                    </TouchableOpacity>
                    </View>




                    </View>     
            </View>

        )
    }
}
const styles =StyleSheet.create({
    ch1:{
          },
    all:{
        flex:0.8,
        margin:20,
        padding:20
    },
    c1:{
        justifyContent:'centre',
        margin:20,
        height:50,
        width:300,
        backgroundColor:'red',
        alignItems:'center',
        alignSelf:'center'
    },
    t1:{
     fontSize:30,
     fontWeight:'bold',
   textAlign:'center'
    }
})