<template>
    <div class="min-h-screen bg-gray-900 text-white">
        <Nav></Nav>
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

        <section class="py-12 bg-gray-800">
            <div class="container mx-auto px-6">
                <div class="flex justify-between items-center mb-8">
                    <h2 class="text-2xl font-bold">Coming Soon</h2>
                    <a href="#" class="text-red-500 hover:underline">View All</a>
                </div>
                <div v-if="loading">Loading movies...</div>
                <div v-else class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <MovieCard v-for="movie in films" :id="movie.id" :key="movie.id" :title="movie.titre" :image="movie.image"
                    :duration="movie.duree" />
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
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/footer.vue';
import axios from 'axios';
import MovieCard from '@/components/MovieCard.vue';

const films = ref([])

const loading = ref(true)
const fetchMovies = async () =>{
    try{
        const response = await axios.get('http://localhost:8000/api/allFilms');
        films.value = response.data;
        console.log(films.value)
    }catch(error){
        console.error('Error fetching movies :',error);
    }finally{
        loading.value = false
    }
}
onMounted(fetchMovies)
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