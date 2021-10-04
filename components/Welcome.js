import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome({name}) {
  return (
    <View style={styles.containerWelcome}>
      <Text style={styles.title}>Hola, <Text style={styles.titleBold}>{name}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    containerWelcome: {
        width: '100%',
        height: 70,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        color: '#000000',
        opacity: 0.75,
        fontFamily: "MontserratRegular"
    },
    titleBold: {
        fontFamily: "MontserratSemiBold"
    }
});