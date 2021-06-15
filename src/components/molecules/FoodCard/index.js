import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../../assets';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    marginRight: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  content: {
    padding: 12,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
