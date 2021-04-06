import React from 'react'
import {
    View,
    FlatList,
    Text,
    StyleSheet,
} from 'react-native'
import NavigationBar from '../navigationbar/NavigationBar'
import CommonHeader from '../common/CommonHeader'
import { createStackNavigator } from '@react-navigation/stack'

const title = 'Search'

const dataSource = [
    'Hot Search',
    'Daily life',
    'League of Legends',
    'Wechat',
    'Game of Thrones',
    'Hupu JRS',
    'Game Center',
    'QQ Music',
]

const Stack = createStackNavigator()

const SearchScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={Search}
                options={{
                    headerStyle: {
                        shadowColor: 'transparent'
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const Search = () => {
    return (
        <>
            <FlatList
                style={styles.list}
                ListHeaderComponent={() => {
                    return (
                        <CommonHeader title={title} />
                    )
                }}
                data={dataSource}
                renderItem={({ item }) => {
                    return (
                        <View style={bottomSeparator}>
                            <Text style={styles.cell}>{(item)}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    cell: {
        height: 45,
        lineHeight: 45,
        color: blueTextColor,
        fontSize: 19
    }
})

export default SearchScreen