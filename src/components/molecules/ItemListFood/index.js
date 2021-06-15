import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image, menu}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 24,
          paddingVertical: 8,
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            overflow: 'hidden',
            marginRight: 12,
          }}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#020202',
            }}>
            {menu}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: 'Poppins-Regular',
              color: '#8d92a3',
            }}>
            IDR 289.000
          </Text>
        </View>
        <Rating />
      </View>
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
