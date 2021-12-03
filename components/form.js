/** 
 * Block of button 
*/

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form({addHandler}) {

    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };


  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите задачу' />
        <Button color='#1eb9d7' onPress={() => addHandler(text)}  title='Добавить'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: '20%',
    width: '60%'
  },
});