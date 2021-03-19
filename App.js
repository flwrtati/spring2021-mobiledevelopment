import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import new components
import Name from './components/Name';
import Food from './components/Food';

//include new components in view
export default function App() {
  return (
    <View style={styles.container}>
      <Name/>
      <Food/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
