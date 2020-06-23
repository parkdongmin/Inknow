import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/*
import { Fonts } from './src/Fonts';
fontFamily: Fonts.NanumSquare_acR

<TouchableOpacity onPress={() => { navigation.goBack() }}>
</TouchableOpacity>
*/
class Main extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerDetail1}>     
                            <Text style={styles.headerText}>박동민님</Text>
                        <Text style={styles.headerSubText}>2020-06-09</Text>
                    </View>
                    <View style={styles.headerDetail2}>
                        <Text style={styles.headerIcon}>
                            <Icon name="ios-notifications-outline" size={28} color="gray" />
                            <Text>     </Text>
                            <Icon style={styles.headericon2} name="ios-notifications-outline" size={28} color="gray" />
                        </Text>
                    </View>
                </View>

                <View style={styles.middleHeader}>
                    <Icon style={styles.middleHeaderIcon1}
                        name="ios-list"
                        size={35}
                        color="gray"
                        style={{ marginRight: 40 }}
                    />
                    <View style={styles.userIcon}>
                        <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 60, borderWidth: 0.2 }}
                            source={require("./assets/headericon.png")}
                            imageStyle={{ borderRadius: 60 }}
                            resizeMode="cover">
                        </ImageBackground>
                        <Text></Text>
                        <Text style={styles.middleLogout}>로그아웃</Text>
                    </View>
                    <Icon style={styles.middleHeaderIcon2}
                        name="ios-add-circle-outline"
                        size={35}
                        color="gray"
                        style={{ marginLeft: 40 }}
                    />
                </View>
                <View style={styles.middle}>
                    <ScrollView
                        contentContainerStyle={styles.middleScroll}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity onPress={() => { navigation.navigate("MistakeNote") }}>
                        <View style={styles.middleMenu1}>
                            <Text>
                                  <Icon style={styles.middleIcon1} name="ios-notifications-outline" size={50} color="gray" />
                            </Text>
                            <Text style={styles.middleMenu1Text1}>Mistake</Text>
                                <Text style={styles.middleMenu1Text2}>Mistake-note</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate("MistakeBoard") }}>
                        <View style={styles.middleMenu2}>
                            <Text>
                                <Icon style={styles.middleIcon2} name="ios-notifications-outline" size={50} color="white" />
                            </Text>
                                <Text style={styles.middleMenu2Text1}>InKnow</Text>
                                <Text style={styles.middleMenu2Text2}>InKnow - YGD</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.middleMenu3}>
                            <Text>
                                <Icon style={styles.middleIcon3} name="ios-notifications-outline" size={50} color="white" />
                            </Text>
                            <Text style={styles.middleMenu3Text1}>Calendar</Text>
                            <Text style={styles.middleMenu3Text2}>Your Calendar!</Text>
                        </View>

                    </ScrollView>
                </View>

                <View style={styles.middleBottom}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.middleBottomLeft}>
                            <Icon style={styles.middleIcon3} name="ios-hourglass" size={40} color="white" />
                        </View>
                        <Text></Text>
                        <Text
                            style={{ marginLeft: 15, fontWeight: "500" }}>
                            MainList
                        </Text>
                        <Text
                            style={{ fontWeight: "300" }}>
                            Additional List
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={styles.middleBottomRight}>
                            <Icon style={styles.middleIcon3} name="ios-attach" size={40} color="black"/>
                        </View>
                        <Text></Text>
                        <Text
                            style={{ marginLeft: 15, fontWeight: "500" }}>
                            MainList
                    </Text>
                        <Text
                            style={{ fontWeight: "300" }}>
                            Additional List
                    </Text>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.bottomIcon1} >
                        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
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
    };
};
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row"
    },
    headerText: {
        marginLeft: 20,
        fontSize: 20,
        marginTop: 32,

    },
    headerIcon: {
        marginTop: 32,
    },
    headerSubText: {
        marginLeft: 20,
        marginTop: 5
    },
    headerDetail1: {
        flex: 4.5
    },
    headerDetail2: {
        flex: 1
    },
    middleHeader: {
        flex: 2,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
    },
    userIcon: {
        width: 110,
        height: 110,
    },
    middleLogout: {
        color: 'gray',
        marginLeft: 35
    },
    middle: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleMenu1: {
        width: 145,
        height: 160,
        backgroundColor: 'white',
        marginRight: 33,
        marginLeft: 33,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        paddingLeft: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom : 20,
    },
    middleMenu1Text1: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: "500"
    },
    middleMenu1Text2: {
        marginTop: 10,
        fontWeight: "200"
    },
    middleMenu2: {
        width: 145,
        height: 160,
        backgroundColor: '#0b0e51',
        borderWidth: 0.25,
        borderColor: 'gray',
        borderRadius: 20,
        paddingLeft: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 20,
        marginRight: 33,
    },
    middleMenu2Text1: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: "500",
        color: 'white'
    },
    middleMenu2Text2: {
        marginTop: 10,
        fontWeight: "200",
        color: 'white'
    },
    middleMenu3: {
        width: 145,
        height: 160,
        backgroundColor: '#5038c0',
        marginRight: 33,
        borderWidth: 0.25,
        borderColor: 'gray',
        borderRadius: 20,
        paddingLeft: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 20,
    },
    middleMenu3Text1: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: "500",
        color: 'white',
    },
    middleMenu3Text2: {
        marginTop: 10,
        fontWeight: "200",
        color: 'white',
    },
    middleScroll: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleBottom: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: "row",
        marginLeft : 80
    },
    middleBottomLeft: {
        backgroundColor: '#2d1485',
        width: 80,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    middleBottomRight: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderWidth : 1,
    },

    bottom: {
        flex: 0.6,
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
