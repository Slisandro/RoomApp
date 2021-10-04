import React from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Room from '../assets/room_1.jpeg';
import { AntDesign, Feather } from '@expo/vector-icons';

const slider_width = Dimensions.get('window').width;
const item_width = Math.round(slider_width * 0.9);
const item_height = Math.round(item_width / 2);

export default function ItemSlider () {
  return (
    <ImageBackground 
      resizeMode="cover" 
      source={Room} 
      style={styles.imgContainer}
      imageStyle={{ 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        opacity: 0.6,
      }}
    >
      <Text style={styles.title}>{'Habitación 1'}</Text>
      <Text style={styles.description}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. '}</Text>
      <View style={styles.containerIcon}> 
        <AntDesign name="message1" style={styles.icon} size={18} color="black" />
        <AntDesign name="hearto" style={styles.icon} size={18} color="black" />
        <Feather name="more-horizontal" style={styles.icon} size={18} color="black" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: item_width, 
    height: item_height,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  }, 
  title: {
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'MontserratBold',
    color: 'black'
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
    color: 'rgba(0,0,0,1)',
    fontFamily: 'MontserratMedium'
  },
  containerIcon: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
  }
});
