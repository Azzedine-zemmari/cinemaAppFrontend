<template>
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
</template>