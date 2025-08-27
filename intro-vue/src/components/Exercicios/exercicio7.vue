

<script setup>
import { ref } from 'vue'
let altura = ref('')
let peso = ref('')
</script>

<template>
    <div>
        <input type="text" v-model="altura" placeholder="Altura (m)">
        <input type="text" v-model="peso" placeholder="Peso (kg)">
        <div v-if="altura && peso">
            <p>IMC: {{ (parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))).toFixed(2) }}</p>
            <p>
                Classificação:
                <span v-if="(parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))) < 18.5">Baixo peso</span>
                <span v-else-if="(parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))) < 25">Normal</span>
                <span v-else-if="(parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))) < 30">Sobrepeso</span>
                <span v-else>Obesidade</span>
            </p>
        </div>
    </div>
</template>