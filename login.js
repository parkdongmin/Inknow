import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';


class Login extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.joinHeader}>
                    <Text style={{ fontSize: 45, marginBottom: 0, marginTop: 10 }}>Mistake Note</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>여러분의 피드백을 기다리고있어요!</Text>
                </View>

                <View style={styles.joinMiddleHeader}>
                    <Text>-----------------------------------</Text>
                </View>

                <View style={styles.joinBody}>
                    <ScrollView
                        contentContainerStyle={styles.middleScroll}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TextInput style={styles.inputBox}
                            placeholder='ID'
                        ></TextInput>
                        <TextInput style={styles.inputBox}
                            placeholder='PASSWORD'
                        ></TextInput>

                    </ScrollView>
                </View>

                <View style={styles.joinMiddleBottom}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('로그인 버튼')}
                    >
                        <View style={styles.joinBtn} ><Text style={{ color: 'white' }}>로그인</Text></View>
                    </TouchableOpacity>
                </View>

                <View style={styles.joinBottom}>
                    <Text style={{ fontSize: 10, color: 'gray' }}>가입하면 MistakeNote의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</Text>
                </View>


            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    joinHeader: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    joinMiddleHeader: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.3
    },

    joinBody: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
        marginTop: 45
    },
    inputBox: {
        width: 270,
        height: 50,
        borderWidth: 0.7,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 15,
        backgroundColor: 'white'
    },

    joinMiddleBottom: {
        flex: 0.5,
        alignItems: 'center',
    },
    joinBtn: {
        backgroundColor: 'purple',
        borderRadius: 10,
        width: 270,
        height: 50,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },

    joinBottom: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
