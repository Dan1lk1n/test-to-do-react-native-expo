/** 
 * Block of top bar
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
        <View style={styles.main}> 
        <Text style={styles.text}>Список дел</Text>
    </View> // main view
  );
}

const styles = StyleSheet.create({
  main: { // style of header
    paddingTop: 10,
    height: 50,
    backgroundColor:"green"
  },
  text: {  // style of header text
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
});