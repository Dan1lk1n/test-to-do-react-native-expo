/** 
 * Block of showing, deleting list items
*/

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteHandler}) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity> // touch effect
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: "#ced0f4",
    borderColor: '#2e7e2f',
    borderWidth: 2,
    marginTop: 20,
    width: '70%',
    marginLeft: '15%',
    fontSize: 18
  },
});