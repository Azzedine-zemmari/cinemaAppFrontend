<template>
    <div class="min-h-screen bg-gray-900 text-white p-6">
        <Nav />

        <div class="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold mb-6">Create New Film Session</h1>

            <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Film Selection -->
                <div>
                    <label for="filmId" class="block text-sm font-medium mb-2">Select Film</label>
                    <select id="filmId" v-model="form.filmId"
                        class="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                        required>
                        <option value="" disabled>Select a film</option>
                        <option v-for="film in films" :key="film.id" :value="film.id">
                            {{ film.titre }}
                        </option>
                    </select>
                </div>

                <!-- Session Type -->
                <div>
                    <label for="type" class="block text-sm font-medium mb-2">Session Type</label>
                    <select id="type" v-model="form.type"
                        class="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                        required>
                        <option value="" disabled>Select session type</option>
                        <option value="normal">Normal</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>

                <!-- Theater Selection -->
                <div>
                    <label for="salleId" class="block text-sm font-medium mb-2">Select Theater</label>
                    <select id="salleId" v-model="form.salleId"
                        class="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                        required>
                        <option value="" disabled>Select a theater</option>
                        <option v-for="salle in salles" :key="salle.id" :value="salle.id">
                            {{ salle.nom }}
                        </option>
                    </select>
                </div>

                <!-- Start Date -->
                <div>
                    <label for="start_date" class="block text-sm font-medium mb-2">Start Date & Time</label>
                    <input type="datetime-local" id="start_date" v-model="form.start_date"
                        class="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                        required />
                </div>

                <!-- End Date -->
                <div>
                    <label for="end_date" class="block text-sm font-medium mb-2">End Date & Time</label>
                    <input type="datetime-local" id="end_date" v-model="form.end_date"
                        class="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                        required />
                </div>

                <!-- Form Actions -->
                <div class="flex justify-end space-x-4">
                    <button type="button" @click="resetForm"
                        class="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md transition">
                        Reset
                    </button>
                    <button type="submit" class="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md transition">
                        Create Session
                    </button>
                </div>

                <!-- Error Message -->
                <div v-if="error" class="p-4 bg-red-900/50 border border-red-600 rounded-md">
                    <p class="text-red-200">{{ error }}</p>
                </div>

                <!-- Success Message -->
                <div v-if="success" class="p-4 bg-green-900/50 border border-green-600 rounded-md">
                    <p class="text-green-200">Session created successfully!</p>
                </div>
            </form>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/footer.vue'
import axios from 'axios'

// Form data
const form = ref({
    filmId: '',
    start_date: '',
    end_date: '',
    type: '',
    salleId: ''
})

// State
const films = ref([])
const salles = ref([])
const error = ref('')
const success = ref(false)
let loading = ref(true)

onMounted(async () => {
    try {
        const [filmsResponse, sallesResponse] = await Promise.all([
            axios.get('http://localhost:8000/api/allFilms'),
            axios.get('http://localhost:8000/api/salles')
        ])
        films.value = filmsResponse.data
        salles.value = sallesResponse.data
        console.log('films:', salles.value)
    } catch (err) {
        error.value = 'Failed to load required data'
        console.error(err)
    }
})

// Form submission
const submitForm = async () => {
    loading.value = true
    error.value = ''
    success.value = false

    try {
        const response = await axios.post('http://localhost:8000/api/filmtosession', form.value)

        if (response.data) {
            success.value = true
            resetForm()
        }
    } catch (err) {
        if (err.response) {
            // Handle validation errors from backend
            if (err.response.data.errors) {
                error.value = Object.values(err.response.data.errors).join(' ')
            } else {
                error.value = err.response.data.message || 'Failed to create session'
            }
        } else {
            error.value = 'Network error. Please try again.'
        }
        console.error(err)
    } finally {
        loading.value = false
    }
}

// Reset form
const resetForm = () => {
    form.value = {
        filmId: '',
        start_date: '',
        end_date: '',
        type: '',
        salleId: ''
    }
    error.value = ''
}

</script>