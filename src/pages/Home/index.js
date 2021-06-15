import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import {
  FoodCard,
  HomeTabSection,
  HomeProfile,
} from '../../components/molecules';
import {Gap} from '../../components';

const Home = () => {
  return (
    <View style={Styles.page}>
      <HomeProfile />
      <View>
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
      <View style={Styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
