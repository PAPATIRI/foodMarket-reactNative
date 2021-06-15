import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import {FoodCard} from '../../components/molecules';
import {Gap} from '../../components';

const Home = () => {
  return (
    <View>
      <View style={Styles.profileContainer}>
        <View>
          <Text style={Styles.appName}>FoodMarket</Text>
          <Text style={Styles.desc}>Let's get some foods</Text>
        </View>
        <Image style={Styles.profile} source={ProfileDummy} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={Styles.foodCardContainer}>
          <Gap width={24} />
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
          <FoodCard image={FoodDummy4} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
  foodCardContainer: {
    flexDirection: 'row',
  },
});