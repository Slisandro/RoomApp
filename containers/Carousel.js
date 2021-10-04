import React, { Component, useState} from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import ItemSlider from '../components/ItemSlider'
import Carousel from 'react-native-snap-carousel';

import { scrollInterpolator, animatedStyles } from '../utils/animation';

export default function CarouselContainer () {
  const items = [0, 1, 2, 3]
  const slider_width = Dimensions.get('window').width;
  const item_width = Math.round(slider_width * 0.9);
  const item_height = Math.round(item_width / 2)

  return (
    <View>
      <Carousel
        ref={(c) => this.carousel = c}
        data={items}
        renderItem={ItemSlider}
        sliderWidth={slider_width}
        itemWidth={item_width}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}          
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "95%",
    maxHeight: 200,
    // alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  }
});
