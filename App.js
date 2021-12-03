/** 
 * Main script
 * all starts here
*/

import React, {useState } from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/list_item';
import Form from './components/form';

export default function App() {
  
  const [listOfItems, setListOfItems] = useState([ //  list with tasks
    {text: "Познакомиться с react", key: '1'},
    {text: "Написать документацию", key: '2'},
    {text: "Отправить Олегу Грибанову", key: '3'},
    {text: "Перейти к React CLI", key:'4'},
  ])
  
  const addHandler = (text) => {// add element to list
    setListOfItems((list)=> {
      return[
        {text: text, key: Math.random.toString(36).substring(7)},
        ...list
      ]
    });
  }

  const deleteHandler = (key) => { // delete clicked element
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    }); 
  }

  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => ( // render of tasks
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
