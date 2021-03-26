import React from 'react'
import {
    StyleSheet,
    Image,
} from 'react-native'

const UserIcon = () => {
    return (
        <Image source={require('./user_icon.png')} style={styles.icon} />
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
        width: 35,
        height: 35,
        borderColor: 'rgb(239,240,241)',
        borderWidth: 0.8,
        borderRadius: 17.5
    },
})

export default UserIcon