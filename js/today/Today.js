import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import UserIcon from '../common/UserIcon'

const Today = () => {

    const imageArr = [require('./photo_1.jpeg'), require('./photo_2.jpeg')];
    const header = () => {
        return (
            <Header />
        )
    }

    return (
        <FlatList
            style={styles.flatList}
            ListHeaderComponent={header}
            data={imageArr}
            renderItem={(item) =>
                <View style={{ height: 440 }}>
                    <View style={styles.cellBackground}>
                        <Image source={imageArr[item.index]} style={styles.cell} />
                    </View>
                </View>
            }
            keyExtractor={item => item}
        />
    )
}

const Header = () => {
    return (
        <View style={{ height: 96 }}>
            <View style={{ height: 33 }} />
            <View style={{ flex: 1 }}>
                <Text style={styles.headerTop}>TUESDAY, JULY 10</Text>
                <View style={styles.headerBottom}>
                    <Text style={styles.weekday}>Today</Text>
                    <UserIcon />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTop: {
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold',
    },
    headerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weekday: {
        fontSize: 34,
        fontWeight: 'bold',
    },    
    flatList: {
        paddingLeft: 20, 
        paddingRight: 20, 
        marginTop: 10,
    },
    cell: {
        height: 410, 
        width: '100%',
        borderRadius: 15,        
    },
    cellBackground: {
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 1 },
    }
})

export default Today