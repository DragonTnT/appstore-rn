import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import UserIcon from '../common/UserIcon'

const CommonHeader = (props) => {
    return (
        <View style={[styles.header, bottomSeparator]}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <UserIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 52,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
})

export default CommonHeader