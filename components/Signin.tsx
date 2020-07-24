import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

type User = {
    username:string;
    password:string;
}

type SigninProps = {
    setUser: (user:User) => void;
}


export default function Signin(props:SigninProps){
    const [state,setState] = useState({
        username:'',
        password:''
    });
    const {setUser} = props;
    
    return (
        <View>
        <TextInput placeholder='username' onChangeText={(username)=>{
            setState({
                ...state,
                username
            })
        }}></TextInput>
        <TextInput placeholder='password' onChangeText={(password)=>{
            setState({
                ...state,
                password
            })
        }}></TextInput>
        <TouchableOpacity onPress={() => {
            setUser(state)
        }}>
            <Text>Sign in</Text>
        </TouchableOpacity>
     </View>
    );
}