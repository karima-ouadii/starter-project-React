import React, { Component } from 'react'
import {auth} from "../../utils/firebase"

//create authContext from react
const AuthContext=React.createContext();

export  class AuthProvider extends Component {

   //data shared
   constructor(props){
       super(props)
       this.state={
           currentUser:{}
       }
   }
   gererStock=()=>{

   }

    
    register=(email,password)=>{
                   return auth.createUserWithEmailAndPassword(email,password);
    }

    //shared feautures
    login=()=>{
        alert("login")
}
    logout=()=>{
                  alert("logout")
    }
    render() {
        return (

            <AuthContext.Provider value={
                {
                currentUser:this.state.currentUser,
                login:this.login,
                logout:this.logout,
                register:this.register
                }
                
            }>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContext;