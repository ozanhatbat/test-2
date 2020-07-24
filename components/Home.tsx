import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
type User = {
    username:string;
    password:string;
}

type HomeProps = {
    user: User;
    setUser: (user: User | null) => void;
}


export default function Home(props:HomeProps){
    const {user,setUser} = props; 
    return (
        <View>
            <Text>{user.username}</Text>
            <TouchableOpacity onPress={() => {
                setUser(null);
            }}>
                <Text>Signout</Text>
            </TouchableOpacity>
        </View>
    );
}