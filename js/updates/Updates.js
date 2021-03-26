import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import NavigationBar from '../navigationbar/NavigationBar'
import UserIcon from '../common/UserIcon'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Updates = () => {

    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>Updates</Text>
                <UserIcon />
            </View>
        )
    }

    return (
        <>
            <NavigationBar title='Updates' />
            <FlatList
                style={styles.list}
                ListHeaderComponent={Header}
            />                                                                   
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        marginLeft: 20,
        marginRight: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 52,
        borderBottomWidth: 0.5,
        //TODO: 将分割线颜色设为全局
        borderBottomColor: '#ebf1f3',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Updates