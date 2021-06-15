import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={Styles.profileContainer}>
      <View>
        <Text style={Styles.appName}>FoodMarket</Text>
        <Text style={Styles.desc}>Let's get some foods</Text>
      </View>
      <Image style={Styles.profile} source={ProfileDummy} />
    </View>
  );
};

export default HomeProfile;

const Styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
