import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    Button
} from 'react-native'
import NavigationBar from '../navigationbar/NavigationBar'
import CommonHeader from '../common/CommonHeader'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
import GamesDetail from './GameDetail'

let title = 'Games'

let cellDataSource = [
    "Add a Payment Method",
    "Parents' Guide to the App",
    "About In-App Purchases",
    "About Apps & Games for Your Kids",
    "About Personalisation",
    "New to the App Store",
]

let cardDataSource = [
    {
        feature: 'MAJOR UPDATE',
        name: 'Onmyoji',
        desc: 'Cards',
        image: require('./card1.jpeg'),
    },
    {
        feature: 'NEW GAME',
        name: 'Clash Royale',
        desc: 'Strategy',
        image: require('./card2.jpeg'),
    },
    {
        feature: 'REDISCOVER THIS',
        name: 'Fantasy Westward Journey',
        desc: 'Adventure',
        image: require('./card3.jpeg'),
    },
]

const Stack = createStackNavigator();

const GamesScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='GamesScreen'
                component={Games} 
                options={{
                    headerTitle: 'Games',
                    headerStyle: {
                        shadowColor: 'transparent'
                    }
                }}                   
            />
            <Stack.Screen
                name='GamesDetailsScreen'
                component={GamesDetail}
                options={{
                    headerShown: false,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}
            />                
        </Stack.Navigator>
    )
}

const Games = () => {
    return(
        <FlatList
            style={styles.list}
            data={cellDataSource}
            renderItem={({item})=>{
                return (
                    <View style={bottomSeparator}>
                        <Text style={styles.cell}>{item}</Text>
                    </View>
                )
            }}
            keyExtractor={(_, index)=>index.toString()}
            ListHeaderComponent={ () => {
                    return (
                        <>
                            <CommonHeader title={title} />
                            <Recommend/>
                            <Playing/>
                        </>
                    )
                }                    
            }
        />
    )
}


const Recommend = () => {
    return(
        <ScrollView
            style={styles.scrollView}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                cardDataSource.map((item,index) => <RecommendCell data={item} key={index}/>)
            }
        </ScrollView>
    )
}

const Playing = () => {

    const dataSource1 = [
        {
            name: 'Bullet Hell',
            desc: 'Casual',
            image: require('../updates/broadcast.jpeg'),
        },
        {
            name: 'Hot Wheels',
            desc: 'Strategy',
            image: require('../updates/car.jpg'),
        },
        {
            name: 'SpellForce - Heroes',
            desc: 'Card',
            image: require('../updates/jump.jpg'),
        },
    ]

    const dataSource2 = [
        {
            name: 'Farm Punks',
            desc: 'Role-Playing',
            image: require('../updates/smile.jpg'),
        },
        {
            name: 'Super Spinball',
            desc: 'A musical journey awaits',
            image: require('../updates/weibo.jpeg'),
        },
    ]

    return(
        <>
            <View style={PlayingStyles.container}>
                <Text style={PlayingStyles.leftText}>What We're Playingssss</Text>
                <Text style={PlayingStyles.rightText}>See All</Text>
            </View>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                <PlayingList dataSource={dataSource1} Listkey={'0'}/>
                <PlayingList dataSource={dataSource2} Listkey={'1'}/>
            </ScrollView>
        </>        
    )
}

const PlayingList = (props) => {
    return (
        <FlatList
            style={[{ paddingBottom: 10 }, bottomSeparator]}
            data={props.dataSource}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=>{
                return (
                    <PlayingCell data={item}/>
                )
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ height: 18, justifyContent: 'center' }} >
                        <View style={{ backgroundColor: separatorColor, height: 0.5}}/>
                    </View>
                )
            }}  
            listKey={props.Listkey}
        />
    )
}

const PlayingCell = (props) => {

    const navigation = useNavigation()

    return (
        <View style={PlayingCellStyles.container}>
            <Image source={props.data.image} style={[appIconSize]} />
            <View style={PlayingCellStyles.box}>
                <View>
                    <Text style={PlayingCellStyles.name}>{props.data.name}</Text>
                    <Text style={PlayingCellStyles.desc}>{props.data.desc}</Text>
                </View>
                <TouchableWithoutFeedback 
                    onPress={() => navigation.navigate('GamesDetailsScreen')}
                >
                    <Text style={PlayingCellStyles.get}>Get</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const PlayingCellStyles = StyleSheet.create ({
    container: {
        width: kScreenW - 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    box: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        marginTop: 18,
        marginLeft: 8
    },
    desc: {
        marginLeft: 8,
        marginTop: 5,
    },
    get: {
        marginTop: 22,
        borderRadius: 15,
        overflow: 'hidden',
        width: 73,
        height: 30,
        backgroundColor: 'rgb(244,243,250)',
        color: blueTextColor,
        lineHeight: 30,
        textAlign: 'center',
    }
})

const PlayingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    leftText: {
        fontSize: 22,
        fontWeight: mediumFont,
    },
    rightText: {
        fontSize: 17,
    }
})

const RecommendCell = (props) => {
    const navigation = useNavigation()
    return(
        <View style={bottomSeparator}>
            <Text style={recommendStyles.feature}>{props.data.feature}</Text>
            <Text style={recommendStyles.name}>{props.data.name}</Text>
            <Text style={recommendStyles.desc}>{props.data.desc}</Text>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('GamesDetailsScreen')}
            >
                <Image source={props.data.image} style={recommendStyles.image} />
            </TouchableWithoutFeedback>
            
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    cell: {
        height: 45,
        lineHeight: 45,
        color: blueTextColor,
        fontSize: 19
    },    
    scrollView: {
        flex: 1,
        flexDirection: 'row',
    }
})

const recommendStyles = StyleSheet.create({
    feature: {
        marginTop: 10,
        height: 14,
        color: blueTextColor,
        fontSize: 11,
        fontWeight: mediumFont,
    },
    name: {
        marginTop: 5,
        height: 27,
        fontSize: 22,
    },
    desc: {
        marginTop: 5,
        height: 24,
        fontSize: 22,
        color: 'rgb(170,170,170)'
    },
    image: {
        marginTop: 14,
        marginBottom: 32,
        width: kScreenW - 40,
        height: 200,
        borderRadius: 5,
    }
})

export default GamesScreen