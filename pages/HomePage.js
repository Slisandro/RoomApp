import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import CarouselComponent from '../containers/Carousel';
import ItemCard from '../components/ItemCard';
import ImgUser1 from '../assets/user_1.jpeg';
import ImgUser2 from '../assets/user2.jpeg';
import ImgRoom1 from '../assets/room_1.jpeg';
import ImgRoom2 from '../assets/room_2.jpeg';
import Marker from '../assets/Marker.png';
import { Link } from "react-router-native";
import {
  Ionicons,
  AntDesign,
  FontAwesome5
} from '@expo/vector-icons';

export default function HomePage() {

  const renderItem = ({ item }) => (
    <ItemCard props={item} />
  );

  const data = [
    {
      title: 'Habitación 1',
      star: 2,
      description: 'WiFi - Cocina compartida -  Expensas incluidas - Pileta - Estacionamiento gratis',
      avatar: ImgUser1,
      img: ImgRoom1,
      distance: 'A menos de 1 km.',
      price: '5000 / mes',
      countComments: '5 opiniones'
    },
    {
      title: 'Habitación 2',
      star: 5,
      description: 'WiFi - Cocina compartida - Pileta - Espacio libre de humo - TV - Aire acondicionado',
      img: ImgRoom2,
      avatar: ImgUser2,
      distance: 'A más de 1 km.',
      price: '8000 / mes',
      countComments: '10 opiniones'
    },
    {
      title: 'Habitación 3',
      star: 2,
      description: 'WiFi - Cocina compartida -  Expensas incluidas - Pileta - Estacionamiento gratis',
      avatar: ImgUser1,
      img: ImgRoom1,
      distance: 'A menos de 1 km.',
      price: '5000 / mes',
      countComments: '5 opiniones'
    },
    {
      title: 'Habitación 4',
      star: 5,
      description: 'WiFi - Cocina compartida - Pileta - Espacio libre de humo - TV - Aire acondicionado',
      img: ImgRoom2,
      avatar: ImgUser2,
      distance: 'A más de 1 km.',
      price: '8000 / mes',
      countComments: '10 opiniones'
    }
  ]

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Welcome name={'Lisandro'} />
        <SearchBar />
        <CarouselComponent />
        <Text style={styles.title}>{'Nuestras rooms más visitas'}</Text>
        <View style={styles.containerCards}>
          <FlatList
            numColumns={2}
            data={data}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Link
          to="/login"
          underlayColor="#f0f4f7"
        >
          <Ionicons name="md-home-outline" size={20} color="black" />
        </Link>
        <AntDesign name="message1" size={20} color="black" />
        <AntDesign name="hearto" size={20} color="black" />
        <Image source={Marker} style={{ width: 20, height: 20 }} />
      </View>
    </>
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
  // rooms: {
  //   fontSize: 25,
  //   textAlign: 'left',
  //   width: '100%',
  //   marginTop: 20,
  //   marginLeft: '2.5%',
  //   fontFamily: 'Montserrat-ExtraBold',
  //   shadowColor: '#000',
  //   shadowOffset: { width: -2, height: 2 },
  //   shadowOpacity: .7,
  //   shadowRadius: 1,
  //   elevation: 10,
  // },
  title: {
    fontSize: 20,
    color: '#000000',
    opacity: 0.75,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "MontserratSemiBold"
  },
  footer: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,.8)',
    height: 60,
    zIndex: 10,
    padding: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
