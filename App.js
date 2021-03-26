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
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Tabbar from './js/tabbar/Tabbar'

const App: () => Node = () => {
  return (
    <>
      <SafeAreaView style={styles.topArea}>
        {/* 可添加naivigation */}
      </SafeAreaView>
      {/* 可添加navigation */}
      <View style={styles.container}>        
        <Tabbar />
      </View>
      <SafeAreaView style={styles.bottomArea}>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topArea: {
    flex: 0,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
   bottomArea: {
    flex: 0,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
