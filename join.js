import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, input} from 'react-native';

const databaseURL = "https://inknow-2753d.firebaseio.com/";

class Join extends Component {

    constructor() {
        super();
        this.state = {
            user: {},
            name: '',
            id: '',
            password: '',
            phoneNumber: '',
            job : ''
        }
    }

    _post(user) {
        return fetch(`${databaseURL}/user.json`, {
            method : 'POST',
            body : JSON.stringify(user)
        }).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
    }

    joinSubmit = () => {
        const user = {
            name: this.state.name,
            id: this.state.id,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            job: this.state.job
        }
        if (!user.id && !user.job && !user.name && !user.password && !user.phoneNumber) {
            return;
        }
        this._post(user);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.joinHeader}>
                    <Text style={{ fontSize: 45, marginBottom : 0, marginTop : 10 }}>Mistake Note</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>지금 가입해서 실수를 기록하세요.</Text>
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
                        <input style={styles.inputBox}
                            placeholder="NAME"
                            name = "name"
                        ></input>
                        <input style={styles.inputBox}
                            placeholder='ID'
                            name="id"
                        ></input>
                        <input style={styles.inputBox}
                            placeholder='PASSWORD'
                            name="password"
                        ></input>
                        <input style={styles.inputBox}
                            placeholder='PHONE-NUMBER'
                            name="phoneNumber"
                        ></input>
                        <input style={styles.inputBox}
                            placeholder='JOB'
                            name="job"
                        ></input>
                        </ScrollView>
                </View>

                <View style={styles.joinMiddleBottom}>
                    <TouchableOpacity
                        onPress={this.joinSubmit}
                    >
                        <View style={styles.joinBtn} ><Text style={{ color: 'white' }}>가입하기</Text></View>
                    </TouchableOpacity>
                </View>

                <View style={styles.joinBottom}>
                    <Text style={{fontSize : 10, color : 'gray'}}>가입하면 MistakeNote의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</Text>
                </View>


            </View>
        );
    }
}
export default Join;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    joinHeader: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems : 'center',
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
        marginTop : 45
    },
    inputBox: {
        width: 270,
        height : 50,
        borderWidth: 0.7,
        borderColor : 'gray',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 15,
        backgroundColor : 'white'
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
