<script setup>
let estado = 'ativo'
</script>

<template>
    <button @click="estado = 'ativo'">Ativo</button>
    <button @click="estado = 'inativo'">Inativo</button>
    <button @click="estado = 'carregando'">Carregando</button>
    <br><br>
    <button :class="estado" :disabled="estado !== 'ativo'">
        {{ estado === 'carregando' ? 'Carregando...' : (estado === 'ativo' ? 'Botão Ativo' : 'Botão Inativo') }}
    </button>
</template>

<style scoped>
.ativo {
    background: #4caf50;
    color: #fff;
}
.inativo {
    background: #e57373;
    color: #fff;
}
.carregando {
    background: #ffb300;
    color: #fff;
}
button {
    padding: 8px 18px;
    border: none;
    border-radius: 4px;
    margin: 2px;
    font-size: 1rem;
    cursor: pointer;
}
button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
</style>