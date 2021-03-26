import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const NavigationBar = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },
    title: {
        fontWeight: 'bold'
    }
})

export default NavigationBar