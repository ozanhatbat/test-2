import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import SigninProvider from './components/SigninProvider';
import Home from './components/Home';
import Signin from './components/Signin';



export default function App() {
  return (
    <SigninProvider
      Home={Home}
      Signin={Signin}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText:{
    backgroundColor:'green',
    fontSize:'19px',
  }
});
