import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[name, setName] = useState('Victoria'); {/*Use this for when you are taking inputted titles and adding them to summary for actual project */}
 //const[entryTitle, setEntryTitle] = useState('none'); {/*for adding together, do entry.amount addition*/}
  const[entryAmount, setEntryAmount] = useState(0);
  const[netTotal, setNetTotal] = useState(0);
  //const[allEntries, setAllEntries] = useState('');

  const clickAddEntry = () => {
    {/* add function here to save last entry to list and add value to running total 
    (using entryTitle and entryAmount variables (append them to a string?) add to total variable*/}
    setNetTotal((parseFloat(netTotal)+parseFloat(entryAmount)).toFixed(2)); {/*Add amount to net total*/}
    
  }


  {/*
  const clickCalculate = () => {
    add function here to display all entries and calcualte net total of entries
    <Text>Net Total: {netTotal}</Text>
  }
  */}


  return (
    <View  style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.boldText}>Welcome to {name}'s Research Milestone Sample Project!</Text>
        <Text  style={styles.body}>Calculate the net total of your expenses by entering a positive value for income or negative value for expense and hit 'Add Entry' to update the total calculation!</Text>
        {/*<Text>Entry Title:</Text>
        <TextInput 
          style={styles.inputContainer} 
          placeholder= 'i.e. Groceries'
          onChangeText={(val) => setEntryTitle(val)}
        /> */}
        <Text>Entry Value:</Text>
        <TextInput 
          style={styles.inputContainer} 
          placeholder = 'i.e. -24.75'
          keyboardType = 'numeric'
          onChangeText={(val) => setEntryAmount(parseFloat(val))}
        />
        
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title='Add Entry' onPress={clickAddEntry}/>
        </View>
        <Text></Text>
        <Text style={styles.outputDisplay}>Net Total: {netTotal}</Text>
        {/* Add this back in later
        <View style={styles.buttonContainer}>
          <Button title='Calculate Net Total' onPress={clickCalculate}/>
        </View> */}
      </View>
  </View> 
  );
}



const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'rgb(99, 143, 148)',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  header: {
    
    padding: 20,
    textAlignVertical: 'top',
    
  },

  boldText:{
    textAlign: 'center', 
    textAlignVertical: 'top',
    fontWeight: 'bold',
  },
  
  body:{
    padding: 20,
    textAlign: 'center', 
  },

  buttonContainer:{
    marginTop: 20,
    marginHorizontal: 40,
    borderWidth: 2,
    borderColor: 'rgb(48, 103, 110)',
    backgroundColor: '#fff',

  },

  inputContainer:{
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 8,
    borderWidth: 2,
    borderColor: 'rgb(48, 103, 110)',
    backgroundColor: '#fff',
  },

  outputDisplay: {
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 4,
    borderColor: 'rgb(48, 103, 110)',
    backgroundColor: 'rgb(151, 196, 201)',

  },
  
  
});
