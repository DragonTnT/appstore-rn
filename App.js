/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from 'react-native';


// import TabNavigator from 'react-native-tab-navigator';
// import Tabbar from './js/tabbar/Tabbar'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodayScreen from './js/today/TodayScreen'
import GamesScreen from './js/games/GamesScreen'
import UpdatesScreen from './js/updates/UpdatesScreen'
import SearchScreen from './js/search/SearchScreen'

const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  const today = 'Today'
  const games = 'Games'
  const updates = 'Updates'
  const search = 'Search'

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let asource
              switch (route.name) {
                case today: {
                  asource = require('./image/today.png')
                  break
                }
                case games: {
                  asource = require('./image/games.png')
                  break
                }
                case updates: {
                  asource = require('./image/updates.png')
                  break
                }
                case search: {
                  asource = require('./image/search.png')
                  break
                }
              }
              if (focused) {
                return <Image source={asource} style={styles.tabbarIconFocused} />;
              } else {
                return <Image source={asource} style={styles.tabbarIcon} />;
              }              
            },
            
          })}
        >
          <Tab.Screen name={today} component={TodayScreen} tabb />
          <Tab.Screen name={games} component={GamesScreen} />
          <Tab.Screen name={updates} component={UpdatesScreen} />
          <Tab.Screen name={search} component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabbarIcon: {
    tintColor: 'gray'
  },
  tabbarIconFocused: {
    tintColor: blueTextColor
  },
});

export default App;
