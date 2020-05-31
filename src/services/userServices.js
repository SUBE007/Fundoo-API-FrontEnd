import axios from "axios";
import { toast } from 'react-toastify';
import React, {Component } from 'react';
const BaseURL = "http://localhost:8080/user/";

class Services extends Component{
   
    userRegister(data){
        console.log(" data in service ",data);
        toast.success("link is send to your email id. Please check Email", {
            position: toast.POSITION.TOP_CENTER
        });
        return axios.post(`${BaseURL}/register`,data,   {
            headers: {
              "Content-Type": "application/json" }
            })   
    }
    
    loginService(data){
        return axios.post(`${BaseURL}/login`, data)
    }

    forgotPassowrdService(data){
        console.log(" data in service ",data);
        return axios.post(`${BaseURL}/forgetpassword`,data)
    }

    resetPassowrdService(token,data){
        console.log(" data in service ",data);
        console.log("url is ${BaseURL}/resetpassword/"+token)
        return axios.put(`${BaseURL}/resetpassword/`+token,data)
    }

}

export default Services; 

//export default userRegistration;