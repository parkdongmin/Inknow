import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image} from 'react-native';
    import Icon from 'react-native-vector-icons/Ionicons';


class sololist extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.ourHeader}>
                    <View style={styles.ourHicon1}>
                        <Icon name="ios-notifications-outline" size={28} color="gray" />
                    </View>

                    <View style={styles.ourHicon2}>
                        <Icon name="ios-notifications-outline" size={28} color="gray" />
                    </View>
                    
                </View>

                <View style={styles.ourmiddleHeader}>
                    <Text style={{fontSize : 35, fontWeight : '500'}}>실수노트</Text>
                    <Text style={{ fontSize: 20, fontWeight: '300' }}>당신에 실수를 기록해보세요.</Text>
                </View>

                
                <View style={styles.ourBody}>
                    <ScrollView
                        contentContainerStyle={styles.middleScroll}
                        horizontal={false}
                        showsHorizontalScrollIndicator={true}     
                    >    
                    <View style={styles.ourUserImg}>
                        <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 60, borderWidth: 0.2 , marginTop : 62 }}
                            source={require("./assets/headericon.png")}
                            imageStyle={{ borderRadius: 60 }}
                            resizeMode="cover">
                            </ImageBackground>
                    </View>
                    
                    <View style={{marginLeft : 80}}>
                            <Text style={{ fontSize: 25, fontWeight: '400',}}>박동민</Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray'}}>
                            시작화면 : 회원가입 및 로그인 (작성요소 : 아이디, 비밀번호, 직업, 나이) && ( 직업 선택 시 해당 직업마다 아이콘이 있었으면 좋겠음) (이미지)
                        </Text>
                        </View>

                        <View style={styles.ourUserImg}>
                            <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 60, borderWidth: 0.2, marginTop: 62 }}
                                source={require("./assets/iconje.jpg")}
                                imageStyle={{ borderRadius: 60 }}
                                resizeMode="cover">
                            </ImageBackground>
                        </View>

                        <View style={{marginLeft: 80 }}>
                            <Text style={{ fontSize: 25, fontWeight: '400', }}>전용태</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
                                나는 전용태다 나는 전용태다나는 전용태다 나는 전용태다나는 전용태다 
                        </Text>
                        </View>
                        <View style={styles.ourUserImg}>
                            <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 60, borderWidth: 0.2, marginTop: 62 }}
                                source={require("./assets/iconjo.jpg")}
                                imageStyle={{ borderRadius: 60 }}
                                resizeMode="cover">
                            </ImageBackground>
                        </View>

                        <View style={{marginLeft: 80 }}>
                            <Text style={{ fontSize: 25, fontWeight: '400', }}>주형탁</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
                                나는 주형탁이다 나는 주형탁이다나는 주형탁이다나는 주형탁이다나는 주형탁이다나는 주형탁이다나는 
                        </Text>
                        </View>
                    </ScrollView>
                    </View>
                

                <View style={styles.ourFooter}>
                        <View style={styles.bottomIcon1} >
                            <TouchableOpacity onPress={() => { navigation.navigate("Main") }}>
                                <Image source={require("./assets/footerIcon/home.png")} style={{ width: 50, height: 50 }} ></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomIcon2} >
                            <Image source={require("./assets/footerIcon/writing.png")} style={{ width: 50, height: 50 }} ></Image>
                        </View>
                        <View style={styles.bottomIcon3} >
                            <Image source={require("./assets/footerIcon/search.png")} style={{ width: 50, height: 50 }} ></Image>
                        </View>
                        <View style={styles.bottomIcon4} >
                            <Image source={require("./assets/footerIcon/calendar.png")} style={{ width: 50, height: 50 }} ></Image>
                        </View>
                        <View style={styles.bottomIcon5} >
                            <Image source={require("./assets/footerIcon/mypage.png")} style={{ width: 50, height: 50 }} ></Image>
                        </View>
                </View>
            </View>
        );
    }
}
export default sololist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        fontStyle: "normal"
    },
    ourHeader: {
        flex: 0.6,
        backgroundColor: 'white',
        flexDirection: "row",
        paddingTop : 10,

    },
    ourHicon1: {
        flex: 8,
        marginLeft : 17
    },
    ourHicon2: {
        flex: 1,
    },
    ourmiddleHeader: {
        flex: 2,
        backgroundColor: 'white',
        paddingLeft: 17,
        marginTop : 15
    },
    ourBody: {
        flex: 13,
        backgroundColor: 'white',
        paddingRight: 17,
        paddingLeft: 17,
        paddingBottom : 10
    },
    ourUserImg: {
        width: 60,
        height: 60,
    },
    ourFooter: {
        flex: 1.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        flexDirection: "row",
        borderWidth: 0.2,
        borderTopColor: 'gray',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: 'white',
    },

    bottomIcon1: {
        marginRight: 26,

    },
    bottomIcon2: {
        marginRight: 26
    },
    bottomIcon3: {
        marginRight: 26
    },
    bottomIcon4: {
        marginRight: 26
    },
    bottomIcon5: {
        marginRight: 38
    },

});
