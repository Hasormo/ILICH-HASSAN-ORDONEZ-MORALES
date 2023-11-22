<template>
    <div>
      <input v-model="numericValue" type="text" placeholder="Valor numérico" />
      <button @click="generateTable">GENERAR</button>
      <table v-if="tableData.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>TEXT</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.text }}</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numericValue: '',
        tableData: []
      };
    },
    methods: {
      generateTable() {
        const numericLimit = parseInt(this.numericValue);
        if (!isNaN(numericLimit)) {
          this.tableData = Array.from({ length: numericLimit }, (_, index) => ({
            id: Math.floor(Math.random() * 10000),
            text: (index + 1) * 100
          }));
        }
      }
    }
  };
  </script>

<style scoped>

</style>