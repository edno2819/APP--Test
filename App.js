import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Header from './components/Header'
import Body from './components/Body'
import Top from './components/Top'



const styles = StyleSheet.create({
  main: {
    backgroundColor: '#141526',
    height: '100%',    
  },
})

function App() {
  return (
    <View style={styles.main}>
      <Top />
      <Header />
      <Body />
    </View>

  );
}

export default App;

