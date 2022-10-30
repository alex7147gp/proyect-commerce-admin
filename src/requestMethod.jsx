import axios from 'axios';
import {useState, useEffect} from 'react';

const BASE_URL = "https://data-shop-jcc.herokuapp.com/api/"


let TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

  	const getStorage = async () =>{     
        try{
            const res = await JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;      
            return res;

        }
        catch(err){
        	console.log(err)
        }
        
    }
    
    

console.log(TOKEN);
console.log(getStorage())


export const publicRequest = axios.create({
	baseURL: BASE_URL
}) 

export const useRequest = axios.create({
	baseURL: BASE_URL,
	headers:{token:`Bearer ${TOKEN}`}
}) 