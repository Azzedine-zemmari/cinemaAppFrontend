<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <Nav></Nav>
        
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex items-center justify-center h-screen">
            <div class="text-center p-6 bg-gray-800 rounded-lg">
                <h2 class="text-2xl font-bold mb-2">Error Loading Film</h2>
                <p class="text-gray-300 mb-4">{{ error }}</p>
                <button @click="fetchFilmDetails" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                    Retry
                </button>
            </div>
        </div>

        <!-- Content (only shown when film is loaded) -->
        <div v-else-if="film">
            <!-- Hero Section with Film Details -->
            <section class="relative h-96 flex items-center">
                <div class="absolute inset-0 bg-black opacity-60"></div>
                <img :src="film.image || 'https://via.placeholder.com/1920x1080'" :alt="film.titre"
                    class="absolute inset-0 w-full h-full object-cover">
                <div class="container mx-auto relative z-10 px-6">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ film.titre }}</h1>
                    <div class="flex items-center space-x-4 mb-6">
                        <span class="bg-red-600 px-2 py-1 text-sm rounded">HD</span>
                        <span>{{ film.duree || 'Duration not available' }}</span>
                        <span>★ 8.4/10</span>
                    </div>
                    <div class="flex space-x-4 mb-8">
                        <button
                            class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium transition flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Watch Trailer</span>
                        </button>
                        <button
                            class="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md font-medium transition flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                            </svg>
                            <span>View Showtimes</span>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Main Content Section -->
            <section class="py-12 container mx-auto px-6">
                <div class="flex flex-col md:flex-row gap-8">
                    <!-- Left Column -->
                    <div class="md:w-2/3">
                        <h2 class="text-2xl font-bold mb-4">Overview</h2>
                        <p class="text-gray-300 mb-8">{{ film.description || 'No description available' }}</p>
                        
                        <div class="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Details</h3>
                                <ul class="text-gray-400 space-y-2">
                                    <li><strong>Duration:</strong> {{ film.duree || 'Not specified' }}</li>
                                    <li><strong>Release Date:</strong> Coming Soon</li>
                                    <li><strong>Genre:</strong> {{ film.genre }}</li>
                                    <li><strong>Min age :</strong> {{ film.ageMin }}</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Cast</h3>
                                <ul class="text-gray-400 space-y-2">
                                    <li>Robert Actor</li>
                                    <li>Emma Actress</li>
                                    <li>Chris Star</li>
                                    <li>Scarlett Lead</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold mb-4">Showtimes</h2>
                            <div class="bg-gray-800 rounded-lg p-6">
                                <h3 class="text-xl font-semibold mb-4">CineMax Downtown</h3>
                                <div class="flex flex-wrap gap-3">
                                    <button class="bg-gray-700 hover:bg-red-600 px-4 py-2 rounded">10:00 AM</button>
                                    <button class="bg-gray-700 hover:bg-red-600 px-4 py-2 rounded">1:30 PM</button>
                                    <button class="bg-gray-700 hover:bg-red-600 px-4 py-2 rounded">4:45 PM</button>
                                    <button class="bg-gray-700 hover:bg-red-600 px-4 py-2 rounded">8:00 PM</button>
                                    <button class="bg-gray-700 hover:bg-red-600 px-4 py-2 rounded">10:30 PM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column -->
                    <div class="md:w-1/3">
                        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6">
                            <img :src="film.image || 'https://via.placeholder.com/300x450'" :alt="film.titre" class="w-full h-auto object-cover">
                        </div>
                        
                        <div class="bg-gray-800 rounded-lg p-6">
                            <h3 class="text-xl font-semibold mb-4">You Might Also Like</h3>
                            <div class="space-y-4">
                                <div class="flex items-center space-x-4">
                                    <img src="https://via.placeholder.com/80x120" alt="Movie" class="w-16 h-24 object-cover rounded">
                                    <div>
                                        <h4 class="font-medium">Similar Movie 1</h4>
                                        <p class="text-sm text-gray-400">2h 15m</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <img src="https://via.placeholder.com/80x120" alt="Movie" class="w-16 h-24 object-cover rounded">
                                    <div>
                                        <h4 class="font-medium">Similar Movie 2</h4>
                                        <p class="text-sm text-gray-400">1h 50m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Fallback if no film found -->
        <div v-else class="flex items-center justify-center h-screen">
            <div class="text-center p-6 bg-gray-800 rounded-lg">
                <h2 class="text-2xl font-bold mb-2">Film Not Found</h2>
                <p class="text-gray-300 mb-4">The requested film could not be loaded.</p>
                <router-link to="/" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded inline-block">
                    Return Home
                </router-link>
            </div>
        </div>
        
        <Footer></Footer>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/footer.vue';

const route = useRoute()
const film = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchFilmDetails = async () => {
    try {
        loading.value = true
        error.value = null
        const response = await axios.get(`http://localhost:8000/api/film/${route.params.id}`)
        film.value = response.data
        console.log(film.value)
    } catch(err) {
        console.error('Error fetching film details:', err)
        error.value = err.message || 'Failed to load film details'
        film.value = null
    } finally {
        loading.value = false
    }
}

onMounted(fetchFilmDetails)
</script>