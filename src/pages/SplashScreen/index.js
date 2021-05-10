import React from 'react';
import {View, Text} from 'react-native';
import {Logo} from '../../assets';

export default function i() {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        Food Market
      </Text>
    </View>
  );
}
