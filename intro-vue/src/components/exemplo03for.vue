<script setup>
let nomes = ['Daniel', 'Diego', 'Fulano']
</script>
<template>
    <ul>
     <li v-for="nome in nomes ">{{ nome }}</li>
    </ul>
</template>