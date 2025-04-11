<template>
    <div class="group">
        <div class="relative overflow-hidden rounded-lg mb-3">
            <img :src="image" :alt="title"
                class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
        </div>
        <h3 class="font-semibold">{{ title }}</h3>
        <p class="text-gray-400 text-sm">{{ duration }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        default: ''
    },
});
</script>