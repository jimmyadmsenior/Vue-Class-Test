<script setup>
    function mensagen(){
        alert('Trabalhando com eventos de click')
    }
</script>
<template>
    <button @click="mensagen">Clique aqui</button>
</template>