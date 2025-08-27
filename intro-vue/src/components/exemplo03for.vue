<script setup>
import { ref } from 'vue'

let nomes = ref([
  { id: 1, nome: 'Daniel', idade: 25, profissao: 'Desenvolvedor Frontend' },
  { id: 2, nome: 'Diego', idade: 28, profissao: 'Desenvolvedor Backend' },
  { id: 3, nome: 'Fulano', idade: 30, profissao: 'DevOps Engineer' },
  { id: 4, nome: 'Amanda', idade: 27, profissao: 'UX Designer' },
  { id: 5, nome: 'Lucas', idade: 32, profissao: 'Product Manager' }
])

let novoNome = ref('')
let novaProfissao = ref('')
let novaIdade = ref('')

function adicionarPessoa() {
  if (novoNome.value.trim() && novaIdade.value && novaProfissao.value.trim()) {
    nomes.value.push({
      id: nomes.value.length + 1,
      nome: novoNome.value,
      idade: parseInt(novaIdade.value),
      profissao: novaProfissao.value
    })
    novoNome.value = ''
    novaIdade.value = ''
    novaProfissao.value = ''
  }
}

function removerPessoa(id) {
  nomes.value = nomes.value.filter(pessoa => pessoa.id !== id)
}
</script>

<template>
  <div class="exemplo-container">
    <h3>Lista de Pessoas</h3>
    
    <table class="tabela-pessoas">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Profissão</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in nomes" :key="pessoa.id" class="pessoa-item">
          <td>{{ pessoa.id }}</td>
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.idade }} anos</td>
          <td>{{ pessoa.profissao }}</td>
          <td>
            <button @click="removerPessoa(pessoa.id)" class="btn-remover">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div class="formulario">
      <h4>Adicionar Nova Pessoa</h4>
      <div class="form-group">
        <label>Nome:</label>
        <input type="text" v-model="novoNome" placeholder="Digite o nome" />
      </div>
      <div class="form-group">
        <label>Idade:</label>
        <input type="number" v-model="novaIdade" placeholder="Digite a idade" />
      </div>
      <div class="form-group">
        <label>Profissão:</label>
        <input type="text" v-model="novaProfissao" placeholder="Digite a profissão" />
      </div>
      <button @click="adicionarPessoa" class="btn-adicionar">Adicionar</button>
    </div>
    
    <div class="estatisticas">
      <p>Total de pessoas: <span class="highlight">{{ nomes.length }}</span></p>
      <p>Média de idade: <span class="highlight">{{ 
        Math.round(nomes.reduce((acc, pessoa) => acc + pessoa.idade, 0) / nomes.length) 
      }}</span> anos</p>
    </div>
  </div>
</template>

<style scoped>
.exemplo-container {
  border: 1px solid var(--primary);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
}

.tabela-pessoas {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.tabela-pessoas th, .tabela-pessoas td {
  padding: 0.5rem;
  border: 1px solid var(--primary);
  text-align: left;
}

.tabela-pessoas th {
  background-color: rgba(0, 255, 0, 0.2);
}

.tabela-pessoas tr:hover {
  background-color: rgba(0, 255, 0, 0.1);
}

.formulario {
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px dashed var(--primary);
}

.form-group {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.form-group label {
  min-width: 80px;
  margin-right: 0.5rem;
}

.form-group input {
  padding: 0.25rem;
  background-color: #111;
  border: 1px solid var(--primary);
  color: var(--primary);
  flex-grow: 1;
}

.btn-adicionar, .btn-remover {
  background-color: #111;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.btn-adicionar:hover {
  background-color: var(--primary);
  color: #000;
}

.btn-remover:hover {
  background-color: var(--danger);
  color: #000;
  border-color: var(--danger);
}

.estatisticas {
  margin-top: 1rem;
  padding: 0.5rem;
  border-top: 1px solid var(--primary);
}

.highlight {
  color: var(--accent);
  font-weight: bold;
}
</style>