import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const databaseURL = "https://inknow-2753d.firebaseio.com/";


class ourmislist extends Component {
    constructor() {
        super();
        this.state = {
            boardList: {}
        }
    }
    _get() {
        fetch(`${databaseURL}/boardList.json`).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(boardList => this.setState({ boardList: boardList }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.boardList != this.state.boardList;
    }
    componentDidMount() {
        this._get();
    }
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
                    <Text style={{fontSize : 35, fontWeight : '500'}}>실수게시판</Text>
                    <Text style={{ fontSize: 20, fontWeight: '300' }}>회원들에 실수를 피드백 해주세요.</Text>
                </View>

                
                <View style={styles.ourBody}>
                    <ScrollView
                        contentContainerStyle={styles.middleScroll}
                        horizontal={false}
                        showsHorizontalScrollIndicator={true}
                    >    
                        {Object.keys(this.state.boardList).map(id => {
                            const boardList = this.state.boardList[id];
                            return (
                                <View key={id}>
                                <View style={styles.ourUserImg}>
                                    <ImageBackground style={{ width: "100%", height: "100%", borderRadius: 60, borderWidth: 0.2, marginTop: 62 }}
                                        source={require("./assets/headericon.png")}
                                        imageStyle={{ borderRadius: 60 }}
                                        resizeMode="cover">
                                    </ImageBackground>
                                </View>

                                <View style={{ marginLeft: 80 }}>
                                        <Text style={{ fontSize: 25 , fontWeight: '400', }}>{boardList.writer}</Text>  
                                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
                                           {boardList.title}
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>
                                            {boardList.contents}
                                        </Text> 
                                    </View>            
                                </View>
                                );
                        })}
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
export default ourmislist;

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
        marginTop: 15
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
