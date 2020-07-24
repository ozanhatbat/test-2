import React,{useState} from 'react';

export type SigninProviderProps = {
    Signin:React.FC;
    Home:React.FC;
}


export default function SigninProvider(props:SigninProviderProps){
    const [user,setUser] = useState(null);
    const {Signin,Home} = props;

        if(user){
            return <Home user={user} setUser={setUser} />
        }else{
            return <Signin setUser={setUser}/>
        }
    

}