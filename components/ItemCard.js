import React from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { star } from '../utils/function';

export default function ItemCard ({props}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.img}
        resizeMode="cover" 
        style={styles.imgContainer}
        imageStyle={{ 
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15
        }}
      ></ImageBackground>
      <View style={styles.descriptionContainer}>
        <View style={styles.section}>
          <View style={styles.starContainer}>
            {star(props.star)}
            <Text style={styles.opinion}>
              {props.countComments}
            </Text>
          </View>
          <Image style={styles.avatarUser} source={props.avatar}/>
        </View>
        <View style={styles.section}>
          <View style={styles.starContainer}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.benefits}>
            {props.description}
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.containerDistance}>
            <FontAwesome5 name="map-marker-alt" size={10} color="black" />
            <Text style={styles.distance}>
              {props.distance}
            </Text>
          </View>
          <View style={styles.containerPrice}>
            <FontAwesome5 name="dollar-sign" size={10} color="black" />
            <Text style={styles.distance}>
              {props.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.textButton}>
            {'Ver más'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .5,
    shadowRadius: 2.5,  
    elevation: 5,
  },
  imgContainer: {
    width: '100%',
    height: 151,
  },
  descriptionContainer: {
    backgroundColor: '#6B705C',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  starContainer: {
    flexDirection: 'row'
  },
  opinion: {
    fontSize: 8,
    fontFamily: 'Montserrat-Light',
    marginLeft: 5
  },
  avatarUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 0,
    left: '70%'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 5,
    marginTop: 5
  }, 
  benefits: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5
  },
  containerDistance: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  distance: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    margin: 5
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
  },
  button: {
    backgroundColor: '#A5A58D',
    marginTop: 5,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15, 
    padding: 10
  },
  textButton: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold'
  }
});
