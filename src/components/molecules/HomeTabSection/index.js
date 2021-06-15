import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 2,
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{borderColor: 'black', width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const newTaste = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy1} menu="Sop Bumil" />
        <ItemListFood image={FoodDummy2} menu="Telur Balado Pedas" />
        <ItemListFood image={FoodDummy3} menu="Rendang Sapi" />
        <ItemListFood image={FoodDummy4} menu="kopi Mocachino" />
      </View>
    </ScrollView>
  );
};

const recomended = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy4} menu="Kopi Mocachino" />
        <ItemListFood image={FoodDummy1} menu="Sop Bumil" />
        <ItemListFood image={FoodDummy2} menu="Telur Balado Pedas" />
      </View>
    </ScrollView>
  );
};

const popular = () => {
  return (
    <ScrollView>
      <View style={{paddingTop: 8}}>
        <ItemListFood image={FoodDummy3} menu="Rendang Sapi" />
        <ItemListFood image={FoodDummy4} menu="kopi Mocachino" />
        <ItemListFood image={FoodDummy2} menu="Telur Balado Pedas" />
        <ItemListFood image={FoodDummy1} menu="Sop Bumil" />
      </View>
    </ScrollView>
  );
};
const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: newTaste,
    2: popular,
    3: recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
