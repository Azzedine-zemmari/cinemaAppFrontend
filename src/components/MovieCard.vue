<template>
    <div class="group">
        <div class="relative overflow-hidden rounded-lg mb-3">
            <img :src="image" :alt="title"
                class="w-full h-64 object-cover group-hover:scale-105 transition duration-300">
        </div>
        <RouterLink :to="`/film/${id}`" class="font-semibold">{{ title }}</RouterLink>
        <p class="text-gray-400 text-sm">{{ duration }}</p>
    </div>
</template>

<script setup>
defineProps({
    id:{
        type:Number,
        required:true,
    },
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