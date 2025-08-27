<script setup>
    import { ref } from 'vue'
    let nome= ref('')
    let email = ref('')
    let idade = ref('')
    let bio = ref('')
</script>

<template>
    <input type="text" v-model="nome">
    <p>Digite seu nome: {{ nome }}</p>
    <input type="text" v-model="email">
    <p>Digite seu email: {{email }}</p>
    <input type="text" v-model="idade">
    <p>Digite sua idade: {{ idade }}</p>
    <input type="text" v-model="bio">
    <p>Digite sua bio: {{ bio }}</p>
</template>