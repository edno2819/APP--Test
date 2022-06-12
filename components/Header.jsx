import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    width: 70,
  }
})


const Header = () => {
  function press() {
    console.log('print pres button')
  }

  return (
    <View style={styles.header}>
      <Button title='CHATS' style={styles.title}/>
      <Button title='STATUS' style={styles.title}/>
      <Button onPress={press} title='CALLS' style={styles.title}/>
    </View>
  );
}

export default Header





