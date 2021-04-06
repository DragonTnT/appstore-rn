import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Animated,
    Button,
} from 'react-native'
import { event } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'



function GamesDetail() {

    const listOffsetY = useRef(new Animated.Value(0)).current

    const navBgColorAni = listOffsetY.interpolate({
        inputRange: [0, 100],
        outputRange: ['#fff0', '#ffff'],
        extrapolate: 'clamp',  //阻止输出值超过outputRange
    })

    const btnColorAni = listOffsetY.interpolate({
        inputRange: [0, 100],
        outputRange: ['#fff', '#007aff'],
        extrapolate: 'clamp',  
    })

    const colorAnimated = listOffsetY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',  
    })

    const topImageHeight = listOffsetY.interpolate({
        inputRange: [-200, 200],
        outputRange: [400, 0],
        extrapolate: 'clamp',  
    })

    return (
        <>                 
            <Animated.FlatList 
                style={whiteBack}
                contentContainerStyle={{paddingTop: 200}}
                data={cellDataSource}
                renderItem={({item,index}) => <Cell data={item}/>}
                keyExtractor={(_,index)=>{index}}
                ListHeaderComponent={ListHeader}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: listOffsetY } } }],
                    {
                        useNativeDriver: false
                    }
                )}
                showsVerticalScrollIndicator={false}
            />  
            <Animated.Image
                source={require('./detail3.jpg')}
                style={
                    [
                        styles.topImage,
                        {
                            height: topImageHeight
                        }
                    ]
                }
            />
            <Navigation navBgColorAni={navBgColorAni} btnColorAni={btnColorAni}/>
        </>
    )
}

const Navigation = (props) => {

    const navigation = useNavigation()

    return (
        <Animated.View style={[styles.navigation, { backgroundColor: props.navBgColorAni  }]}>
            <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                <View style={[flexRow, justifyCenter, alignCenter, styles.backView]} >
                    <Animated.Image style={{ width: 21, height: 21, tintColor: props.btnColorAni }} source={require('./back.png')} />
                    <Animated.Text style={{ color: props.btnColorAni, fontWeight: mediumFont }}>Games</Animated.Text>
                </View>
            </TouchableWithoutFeedback>                         
        </Animated.View>
    )
}

const ListHeader = () => {
    return (
        <View>      
            <Introduce />
            <News />
            <Preview />
        </View>
    )
}



const Introduce = () => {
    return (
        <View style={[bottomSeparator, { marginHorizontal: 20, paddingBottom: 20}]}>
            <View style={[whiteBack,flexRow]}>  
                <Image source={require('./logo.jpg')} style={styles.logo}/>
                <View style={[flexRow, justifyBetween, flex1]}>
                    <View style={[{ marginLeft: 20 }, justifyBetween]}>
                        <View>
                            <Text style={{ marginTop: 30, fontSize: 22 }}>Onmyoji</Text>
                            <Text style={{ marginTop: 6, color: 'gray' }}>The best game</Text>
                        </View>
                        <Image source={require('./download.png')}/>
                    </View>
                    <View style={[justifyEnd, alignEnd]}>
                        <Image source={require('./more.png')} />
                    </View>                
                </View>            
            </View >
            <View style={[{ marginTop: 30 }, flexRow, justifyBetween]}>
                <View>
                    {/* FIXME: star换成星星 */}
                    <Text style={{lineHeight: 30}}>star</Text>
                    <Text style={{marginTop: 6, fontSize: 12, color: 'gray'}}>4.0, 250rateings</Text>
                </View>
                <View style={[flexRow]}>
                    <View style={{marginRight: 45, alignItems: 'center'}}>
                        <Text style={[{fontSize: 22, color: 'gray'}, mediumFont]}>#31</Text>
                        <Text style={[{ marginTop: 10, fontSize: 12, color: 'gray' }, mediumFont]}>strategy</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[{ fontSize: 22, color: 'gray' }, mediumFont]}>9+</Text>
                        <Text style={[{ marginTop: 10, fontSize: 12, color: 'gray' }, mediumFont]}>Age</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const News = () => {
    return (
        <View style={[{ marginHorizontal: 20 }, bottomSeparator]}>
            <View style={[flexRow, justifyBetween, alignCenter, { marginTop: 14 }]}>
                <Text style={[mediumFont,{fontSize: 22}]}>What's News</Text>
                <Text style={[{ fontSize: 17, color: blueTextColor }]}>Version History</Text>
            </View>
            <View style={[flexRow, justifyBetween, { marginTop: 14 }]}>
                <Text style={{color: 'gray'}}>Version 1.0.5</Text>
                <Text style={{ color: 'gray' }}>two days ago</Text>
            </View >
            <Text style={{marginTop: 14, marginBottom: 20}}>Here are more styles for playing. You can chose more than 2 characters for yourself. Just have a try!</Text>
        </View>
    )
}

const Preview = () => {
    return (
        <View style={[{ paddingHorizontal: 20, paddingBottom: 20 }, bottomSeparator] }>
            <View style={[{ height: 42}, flexRow, justifyBetween, alignCenter]}>
                <Text style={[mediumFont], {fontSize: 22}}>Review</Text>
                <Text style={[{ fontSize: 17, color: blueTextColor}]}>See All</Text>
            </View>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    previewDataSource.map((item,index) => <PreviewCell data={item} key={index}/>)
                }
            </ScrollView>
        </View>
    )
}

const PreviewCell = (props) => {
    return (
        <Image 
            source={props.data} 
            style={{
                width: kScreenW - 40,
                 height: 155, 
                 borderRadius: 15,
            }}
        />
    )
}


const Cell = (props) => {
    return (
        <View style={[styles.cell, flexRow, justifyBetween, alignCenter, bottomSeparator]}>
            <Text>{props.data.info}</Text>
            <Text>{props.data.desc}</Text>
        </View>
    )
}

const previewDataSource = [
    require('./detail1.jpg'),
    require('./detail2.jpg'),
    require('./detail3.jpg'),
]

const cellDataSource = [
    {
        info: 'Seller',
        desc: 'Hangzhou NetEase Leihuo Technology Co., Ltd.'
    },
    {
        info: 'Size',
        desc: '2.5GB'
    },
    {
        info: 'Category',
        desc: 'Games: Strategy'
    },
    {
        info: 'Compatibility',
        desc: 'Works on this iphone'
    },
    {
        info: 'Languages',
        desc: 'Simplified Chinese'
    },
    {
        info: 'Age Rating',
        desc: '9+'
    },
    {
        info: 'In-App Purchases',
        desc: 'Yes'
    },
    {
        info: 'Copyright',
        desc: '©1997-2019 网易公司版权所有'
    },
]

const styles = StyleSheet.create({
    cell: {
        paddingHorizontal: 20,
        height: 50,
    },
    logo: {
        marginTop: 20,
        width: 118,
        height: 118,
        borderRadius: 26,   
    },
    navigation: {
        position: 'absolute',
        top: 0,
        left: 0,
        //FIXME: navigation的高度应该适配安卓和ios的各种机型
        height: 88,
        width: kScreenW,
        backgroundColor: 'white',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: kScreenW,
    },
    backView: {
        position: 'absolute',
        left: 5,
        bottom: 5,
        width: 80,
        height: 30
    }
})



export default GamesDetail