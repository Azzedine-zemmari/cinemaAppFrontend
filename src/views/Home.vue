<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <!-- Navigation Bar -->
        <nav class="bg-black py-4 px-6 shadow-lg">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-8h1V5h-1v2zm2 4h1V9h-1v2zm0 4h1v-2h-1v2zm-4 0h1v-2h-1v2zm-4 0h1v-2H7v2zm-1-4h1V9H6v2zm-1-4h1V5H5v2zm4 8h1v-2H9v2zm-4 0h1v-2H5v2z"
                            clip-rule="evenodd" />
                    </svg>
                    <span class="text-xl font-bold">CineMax</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="hover:text-red-500 transition">Movies</a>
                    <a href="#" class="hover:text-red-500 transition">Cinemas</a>
                    <a href="#" class="hover:text-red-500 transition">Offers</a>
                    <a href="#" class="hover:text-red-500 transition">About</a>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition">
                        Sign In
                    </button>
                    <button class="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative h-96 flex items-center">
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <img src="https://via.placeholder.com/1920x1080" alt="Featured Movie"
                class="absolute inset-0 w-full h-full object-cover">
            <div class="container mx-auto relative z-10 px-6">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Avengers: Endgame</h1>
                <div class="flex items-center space-x-4 mb-6">
                    <span class="bg-red-600 px-2 py-1 text-sm rounded">IMAX</span>
                    <span>3h 1m</span>
                    <span>★ 8.4/10</span>
                </div>
                <p class="max-w-2xl mb-8">The grave course of events set in motion by Thanos that wiped out half the
                    universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand.
                </p>
                <button
                    class="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium transition flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                    <span>Watch Trailer</span>
                </button>
            </div>
        </section>

        <!-- Now Showing Section -->
        <section class="py-12 container mx-auto px-6">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold">Now Showing</h2>
                <a href="#" class="text-red-500 hover:underline">View All</a>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <MovieCard v-for="movie in nowShowing" :key="movie.id" :title="movie.title" :image="movie.image"
                    :rating="movie.rating" :duration="movie.duration" />
            </div>
        </section>

        <!-- Coming Soon Section -->
        <section class="py-12 bg-gray-800">
            <div class="container mx-auto px-6">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-2xl font-bold">Coming Soon</h2>
                    <a href="#" class="text-red-500 hover:underline">View All</a>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <MovieCard v-for="movie in comingSoon" :key="movie.id" :title="movie.title" :image="movie.image"
                        :rating="movie.rating" :duration="movie.duration" :coming-soon="true" />
                </div>
            </div>
        </section>

        <!-- Cinemas Section -->
        <section class="py-12 container mx-auto px-6">
            <h2 class="text-2xl font-bold mb-8">Our Cinemas</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="cinema in cinemas" :key="cinema.id"
                    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img :src="cinema.image" :alt="cinema.name" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">{{ cinema.name }}</h3>
                        <p class="text-gray-400 mb-4">{{ cinema.location }}</p>
                        <button class="text-red-500 hover:underline">View Details</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">CineMax</h3>
                        <p class="text-gray-400">The ultimate movie experience with state-of-the-art technology and
                            premium comfort.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Movies</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Cinemas</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Pricing</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Contact Us</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li>123 Cinema Street</li>
                            <li>Movie City, MC 10001</li>
                            <li>info@cinemax.com</li>
                            <li>(123) 456-7890</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Newsletter</h4>
                        <p class="text-gray-400 mb-4">Subscribe to get updates on new movies and special offers.</p>
                        <div class="flex">
                            <input type="email" placeholder="Your email"
                                class="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none w-full">
                            <button
                                class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>© 2023 CineMax. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Movie Card Component
const MovieCard = {
    props: {
        title: String,
        image: String,
        rating: Number,
        duration: String,
        comingSoon: Boolean
    },
    template: `
      <div class="group">
        <div class="relative overflow-hidden rounded-lg mb-3">
          <img :src="image" :alt="title" class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
          <div v-if="comingSoon" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span class="text-xl font-bold">Coming Soon</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div class="flex items-center space-x-2">
              <span class="text-yellow-400">★</span>
              <span class="text-white">{{ rating }}</span>
            </div>
          </div>
        </div>
        <h3 class="font-semibold">{{ title }}</h3>
        <p class="text-gray-400 text-sm">{{ duration }}</p>
      </div>
    `
};

// Sample Data
const nowShowing = ref([
    { id: 1, title: 'Dune: Part Two', image: 'https://via.placeholder.com/300x450', rating: 8.8, duration: '2h 46m' },
    { id: 2, title: 'The Batman', image: 'https://via.placeholder.com/300x450', rating: 7.9, duration: '2h 56m' },
    { id: 3, title: 'No Time to Die', image: 'https://via.placeholder.com/300x450', rating: 7.3, duration: '2h 43m' },
    { id: 4, title: 'Shang-Chi', image: 'https://via.placeholder.com/300x450', rating: 7.4, duration: '2h 12m' },
    { id: 5, title: 'Black Widow', image: 'https://via.placeholder.com/300x450', rating: 6.7, duration: '2h 14m' }
]);

const comingSoon = ref([
    { id: 6, title: 'Avatar 3', image: 'https://via.placeholder.com/300x450', rating: 0, duration: 'TBA' },
    { id: 7, title: 'Mission: Impossible 8', image: 'https://via.placeholder.com/300x450', rating: 0, duration: 'TBA' },
    { id: 8, title: 'Fantastic Beasts 4', image: 'https://via.placeholder.com/300x450', rating: 0, duration: 'TBA' },
    { id: 9, title: 'Deadpool 3', image: 'https://via.placeholder.com/300x450', rating: 0, duration: 'TBA' },
    { id: 10, title: 'Spider-Man: Beyond', image: 'https://via.placeholder.com/300x450', rating: 0, duration: 'TBA' }
]);

const cinemas = ref([
    { id: 1, name: 'CineMax Downtown', location: '123 Movie Street, Downtown', image: 'https://via.placeholder.com/600x400' },
    { id: 2, name: 'CineMax Westside', location: '456 Film Avenue, Westside', image: 'https://via.placeholder.com/600x400' },
    { id: 3, name: 'CineMax Eastend', location: '789 Cinema Road, Eastend', image: 'https://via.placeholder.com/600x400' }
]);
</script>