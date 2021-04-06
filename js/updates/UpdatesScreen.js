import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Image,
} from 'react-native'
import NavigationBar from '../navigationbar/NavigationBar'
import CommonHeader from '../common/CommonHeader'
import { createStackNavigator } from '@react-navigation/stack';

const dataSource = [
    {
        title: 'Huajiao Live',
        date: 'Today',
        image: require('./broadcast.jpeg'),
        desc: "[Play] Music radio broadcasting page revision, more immersed in music exploration \n\n[Mine] Rewriting sets the position of the night mode \n\n[Radio] Let's go with DJ and get up!",
        version: '2.0.0',
        size: 35.7,
    },
    {
        title: 'Sina Weibo',
        date: 'Today',
        image: require('./weibo.jpeg'),
        desc: '-Performance improvements and bug fixed',
        version: '5.3.3',
        size: 32.5,
    },
    {
        title: 'Sougou-input',
        date: 'Yesterday',
        image: require('./smile.jpg'),
        desc: 'Fix bug and to be better for you',
        version: '2.1.1',
        size: 42.2,
    },
    {
        title: 'Guazi Car',
        date: 'Yesterday',
        image: require('./car.jpg'),
        desc: 'Sometimes, a polish is all you need. No big chages, just a shine',
        version: '1.5.0',
        size: 28.0,
    },
    {
        title: 'Fly-chat',
        date: '2021/3/20',
        image: require('./jump.jpg'),
        desc: 'This update includes bug fixed and user interface improvements',
        version: '1.5.6',
        size: 33.0,
    },
]

const Stack = createStackNavigator();

const UpdatesScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Updates'
                component={Updates}
                options={{
                    
                    headerStyle: {
                        shadowColor: 'transparent'
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const title = 'Updates'

const Updates = () => {    
    return (
        <>
            <FlatList
                style={styles.list}
                ListHeaderComponent={() => {
                    return (
                        <CommonHeader title={title}></CommonHeader>
                    )
                }}
                data={dataSource}
                renderItem={({item})=> {
                        return (
                            <FlatCell data={item} />
                        )
                    } 
                }  
                keyExtractor={(item)=>item.title}              
            />                                                                   
        </>
    )
}

const FlatCell = (props) => {

    let footerText = 'Version ' + props.data.version + ' · ' + props.data.size + ' MB'
    return (
        <>
            <View style={styles.cellContent}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={props.data.image} style={[styles.icon, appIconSize]} />
                    <View>
                        <Text style={styles.cellTitle}>{props.data.title}</Text>
                        <Text style={styles.cellDate}>{props.data.date}</Text>
                    </View>
                </View>
                <Text style={styles.updateBtn}>Update</Text>
            </View>
            <View>
                <Text>{props.data.desc}</Text>
                <Text style={styles.cellFooter}>{footerText}</Text>
                {/* 未添加more按钮 */}
                {/* <TouchableWithoutFeedback>
                    <Text>more</Text>
                </TouchableWithoutFeedback> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },    
    cellContent: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 101,
    },
    icon: {
        marginTop: 16,
    },
    cellTitle: {
        marginTop: 29,
        marginLeft: 12,
        fontSize: 17,
    },
    cellDate: {
        marginTop: 3,
        marginLeft: 12,
        fontSize: 13,
        color: 'gray',
    },
    updateBtn: {
        width: 70,
        height: 30,
        marginTop: 30,
        backgroundColor: 'rgb(244,243,250)',
        color: blueTextColor,
        borderRadius: 15,
        overflow: 'hidden',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,
    },
    cellFooter: {
        marginTop: 30,
        color: 'gray',
        fontSize: 16,
    }
})



export default UpdatesScreen