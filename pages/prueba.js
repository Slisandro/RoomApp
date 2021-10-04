import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Prueba() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'red' }}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE8D6',
        width: '100%',
        color: 'rgba(0,0,0,.8)',
        paddingTop: 25,
    },
    containerCards: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 100
    },
});
