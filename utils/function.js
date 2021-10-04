import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet} from 'react-native';

export function star (num) {
  if(num === 5) {
    return (
      <>
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
      </>
    )
  } else if (num === 4) {
      return (
        <>
          <FontAwesome name="star" style={styles.icon} size={10} />
          <FontAwesome name="star" style={styles.icon} size={10} />
          <FontAwesome name="star" style={styles.icon} size={10} />
          <FontAwesome name="star" style={styles.icon} size={10} />
          <FontAwesome name="star" style={styles.iconWhite} size={10} />
        </>
      )
  } else if (num === 3) {
    return (
      <>
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
      </>
    )
  } else if (num === 2) {
    return (
      <>
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
      </>
    )
  } else if (num === 1) {
    return (
      <>
        <FontAwesome name="star" style={styles.icon} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
      </>
    )
  } else if (num === 0) {
    return (
      <>
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
        <FontAwesome name="star" style={styles.iconWhite} size={10} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#FFBF00',
    marginLeft: 1,
    marginRight: 1,
  },
  iconWhite: {
    color: 'white',
    marginLeft: 1,
    marginRight: 1,
  }
});
