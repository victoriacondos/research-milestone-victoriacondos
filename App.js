import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[name, setName] = useState('Victoria'); {/*Use this for when you are taking inputted titles and adding them to summary for actual project */}
  const[entryTitle, setEntryTitle] = useState('none'); {/*for adding together, do entry.amount addition*/}
  const[entryAmount, setEntryAmount] = useState(0);
  const[netTotal, setNetTotal] = useState(0)

  const clickAddEntry = () => {
    {/* add function here to save last entry to list and add value to running total 
    (using entryTitle and entryAmount variables (append them to a string?) add to total variable*/}
    setNetTotal(parseInt(netTotal)+parseInt(entryAmount)); {/*Add amount to net total*/}
 
  }

  const clickCalculate = () => {
    {/*add function here to display all entries and calcualte net total of entries*/}
    <Text>Net Total: {netTotal}</Text>
  }



  return (
    <View  style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.boldText}>Welcome to {name}'s Research Milestone Sample Project!</Text>
        <Text  style={styles.body}>Create expense entries by inputting a title and a positive or negative value below then hitting 'Add Entry', and hit 'Calculate Net Total' to calculate the net total of your income and expenses!</Text>
        <Text>Entry Title:</Text>
        <TextInput 
          style={styles.inputContainer} 
          placeholder= 'i.e. Groceries'
          onChangeText={(val) => setEntryTitle(val)}
        />
        <Text>Entry Value:</Text>
        <TextInput 
          style={styles.inputContainer} 
          placeholder = 'i.e. -24.75'
          onChangeText={(val) => setEntryAmount(parseInt(val))}
        />
        
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title='Add Entry' onPress={clickAddEntry}/>
        </View>
        <Text></Text>
        <Text>Net Total: {netTotal}</Text>
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
  
  
});
