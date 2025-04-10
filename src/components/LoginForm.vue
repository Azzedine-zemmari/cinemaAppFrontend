<template>
    <div>
        <form @submit.prevent="login">
            <input v-model="email" type="email">
            <input v-model="password" type="password">
            <button>login</button>
        </form>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import axios from 'axios';

// Reactive for email
const email = ref('');
const password = ref('')

const login = async()=>{
    if(email.value && password.value){        
        try{
            const response = await axios.post('http://localhost:8000/api/login',{
                email:email.value,
                password:password.value
            })
            const {token,user} = response.data

            localStorage.setItem('token',token)
            localStorage.setItem('user',JSON.stringify(user))
            console.log('User logged in :' , user)
        }catch(error){
            console.error('Login failed :',error.message)
        }
    }else{
        console.log('Please fill in both email');
    }
}
</script>