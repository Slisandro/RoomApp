import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE8D6',
        width: '100%',
        height: '100%',
        color: 'rgba(0,0,0,.8)',
        paddingTop: 25,
    },
    circle: {
        backgroundColor: '#CB997E',
        opacity: .8
    }
})