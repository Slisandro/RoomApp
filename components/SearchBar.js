import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar() {
  const [text, onChangeText] = React.useState("Buscar propiedades");
  
  return (
      <View style={styles.containerSearchBar}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <EvilIcons name="search" size={25} color="black" style={styles.icon} />            
    </View>
  );
}

const styles = StyleSheet.create({
  containerSearchBar: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    backgroundColor: '#CB997E',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .5,
    shadowRadius: 2.5,  
    elevation: 5,
  },
  input: {
    height: 35,
    textAlign: 'left',
    paddingLeft: 5,
    color: '#000000',
    opacity: 0.75,
    width: '85%',
    fontSize: 16,
    fontFamily: 'MontserratRegular',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    paddingBottom: 0,
  }
});