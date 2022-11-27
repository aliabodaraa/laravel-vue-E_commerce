<template>
    
<div class="min-h-full bg-gray-200 flex">
        <!-- Slidebr _start -->
       <Sidebar class="pt-[60px]"/>
        <!-- Slidebr _end -->
    
        <div class="flex-1">
            <Navbar/>
                <!-- Content _start -->
            <main class="p-6">
                <!-- <router-view></router-view> -->
                <!-- each of dashboard and products children components -->
            </main>
                <!-- Content _end -->
    
        </div>
    
    </div>
    </template>
    
    <script setup>
    import Sidebar from '../components/Sidebar.vue'
    import Navbar from '../components/Navbar.vue'
    </script>