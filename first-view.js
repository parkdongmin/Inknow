import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

class First extends Component {
    render() { 
        const { navigation } = this.props;
    return(
        <View style={styles.container}>
            <View style={styles.headerFirst}>
                


                <Image source={require('./assets/logo.jpg')} style={{ marginBottom: 15 }} />

                <TouchableOpacity onPress={() => { navigation.navigate("Main") }}>
                    <Text style={{ color: 'black' }}>메인들어가기</Text>
                </TouchableOpacity>
                
                <Text></Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <View style={styles.logBtn} ><Text style={{color : 'white'}}>Login</Text></View>
                </TouchableOpacity>


                <Text></Text>
                <Text></Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Join") }}>
                    <View style={styles.joinBtn} ><Text style={{color : 'white'}}>Join</Text></View>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}
export default First;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle : "normal"
    },
    headerFirst: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80

    },
    logBtn: {
        backgroundColor: '#0b0e51',
        borderRadius : 10,
        width: 250,
        height: 50,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    joinBtn: {
        borderRadius: 10,
        backgroundColor: '#0b0e51',
        width: 250,
        height: 50,
        fontSize : 17,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
