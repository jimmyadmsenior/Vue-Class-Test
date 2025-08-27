<script setup>
import { ref } from 'vue'

let validacao = ref(false)
let iserror = ref(false)
let isactive = ref(true)
let isdisable = ref(false)
let contador = ref(0)
let statusClass = ref('normal')

function alternarEstado() {
    // Alterna entre os estados
    isactive.value = !isactive.value
    iserror.value = !iserror.value
    
    // Incrementa contador
    contador.value++
    
    // Alterna o status da classe baseado no contador
    if (contador.value % 3 === 0) {
        statusClass.value = 'critico'
    } else if (contador.value % 3 === 1) {
        statusClass.value = 'alerta'
    } else {
        statusClass.value = 'normal'
    }
}

function desabilitarBotao() {
    isdisable.value = true
    setTimeout(() => {
        isdisable.value = false
    }, 3000) // Reabilita o botão após 3 segundos
}
</script>

<template>
    <div class="exemplo-container">
        <h3>Exemplo de Classes Dinâmicas</h3>
        
        <div class="secao">
            <h4>Classes com objeto</h4>
            <!-- Usando objeto para classes condicionais -->
            <p :class="{
                'ok': isactive,
                'falha': iserror,
                'pulse': isactive && !iserror
            }">Testando diretiva :class com objeto</p>
            
            <div class="contador-info">
                <p>Cliques: <span :class="statusClass">{{ contador }}</span></p>
                <p class="status">Status: 
                    <span :class="statusClass">
                        {{ statusClass === 'normal' ? 'NORMAL' : 
                           statusClass === 'alerta' ? 'ALERTA' : 'CRÍTICO' }}
                    </span>
                </p>
            </div>
        </div>
        
        <div class="secao">
            <h4>Classes com expressão ternária</h4>
            <p :class="validacao ? 'ok' : 'falha'">
                Utilizando a diretiva class com expressão ternária
            </p>
        </div>
        
        <div class="secao">
            <h4>Classes com array</h4>
            <p :class="['text-large', isactive ? 'ativo' : 'inativo', statusClass]">
                Utilizando a diretiva class com array
            </p>
        </div>
        
        <div class="controles">
            <button :disabled="isdisable" @click="alternarEstado" class="btn-alternar">
                {{ isactive ? 'Desativar' : 'Ativar' }}
            </button>
            
            <button @click="desabilitarBotao" class="btn-desabilitar">
                Desabilitar botões por 3s
            </button>
            
            <button @click="validacao = !validacao" class="btn-toggle">
                {{ validacao ? 'Invalidade' : 'Validar' }}
            </button>
        </div>
        
        <div class="legenda">
            <div class="legenda-item">
                <span class="color-box normal"></span> Normal
            </div>
            <div class="legenda-item">
                <span class="color-box alerta"></span> Alerta
            </div>
            <div class="legenda-item">
                <span class="color-box critico"></span> Crítico
            </div>
        </div>
    </div>
</template>

<style scoped>
.exemplo-container {
    border: 1px solid var(--primary);
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
}

.secao {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px dashed var(--primary);
}

.falha {
    color: var(--danger);
    font-weight: bold;
}

.ok {
    color: var(--success);
    font-weight: bold;
}

.pulse {
    animation: pulse 2s infinite;
}

.contador-info {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-left: 3px solid var(--primary);
}

.status {
    margin-top: 0.5rem;
}

.normal {
    color: var(--success);
}

.alerta {
    color: var(--warning);
}

.critico {
    color: var(--danger);
    animation: blink 0.5s infinite;
}

.text-large {
    font-size: 1.2rem;
}

.ativo {
    border-bottom: 2px solid var(--success);
}

.inativo {
    border-bottom: 2px solid var(--danger);
}

.controles {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
}

.btn-alternar, .btn-desabilitar, .btn-toggle {
    background-color: #111;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-alternar:hover, .btn-toggle:hover {
    background-color: var(--primary);
    color: #000;
}

.btn-desabilitar:hover {
    background-color: var(--warning);
    color: #000;
    border-color: var(--warning);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.legenda {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--primary);
}

.legenda-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.color-box {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
}

.color-box.normal {
    background-color: var(--success);
}

.color-box.alerta {
    background-color: var(--warning);
}

.color-box.critico {
    background-color: var(--danger);
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
}
</style>