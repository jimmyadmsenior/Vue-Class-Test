<script setup>
const props = defineProps({
    nome: String,
    email: String,
    telefone: String,
    idade: Number,
    ativo: Boolean,
});
</script>

<template>
    <div class="card" v-if="nome">
        <h3>{{ nome }}</h3>
        <p v-if="email">Email:{{ email }}</p>
        <p v-if="telefone">Telefone:{{ telefone }}</p>
        <p v-if="idade">Idade:{{ idade }}</p>
        <div :class="ativo ? 'ativo' : 'inativo'">{{ ativo ? 'Ativo' : 'Inativo' }}
        </div>
    </div>
</template>
<style scoped>
.card {
    border: 1px solid #605e5e;
    padding: 1rem;
    margin: 1rem;
}
.ativo {
        color: green;
}
.inativo{
    color: red;
}
</style>
