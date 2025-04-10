<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div class="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
            <h2 class="text-gray-800 text-2xl font-semibold mb-2">Welcome Back</h2>
            <p class="text-gray-600 text-sm mb-8">Please sign in to continue</p>

            <form @submit.prevent="login" class="space-y-6">
                <div class="space-y-2">
                    <label for="email" class="block text-gray-700 text-sm font-medium">Email</label>
                    <input id="email" v-model="email" type="email" placeholder="Enter your email" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                </div>

                <div class="space-y-2">
                    <label for="password" class="block text-gray-700 text-sm font-medium">Password</label>
                    <input id="password" v-model="password" type="password" placeholder="Enter your password" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                </div>

                <button type="submit"
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 active:scale-98 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Sign In
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
const router = useRouter();


const email = ref('');
const password = ref('');

const login = async () => {
    if (email.value && password.value) {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email.value,
                password: password.value
            });
            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log('User logged in:', user);
            router.push('/')
        } catch (error: any) {
            console.error('Login failed:', error.message);
        }
    } else {
        console.log('Please fill in both email and password');
    }
};
</script>