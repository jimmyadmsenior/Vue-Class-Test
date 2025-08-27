<script setup>
    import { ref } from 'vue'
    let texto = ref('')
</script>

<template>
    <input type="text" v-model="texto" >
    <p>O valor do imput: {{ texto }}</p>
</template>