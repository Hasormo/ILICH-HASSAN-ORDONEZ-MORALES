<template>
    <div>
      <table>
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
    props: {
      tableData: Array
    }
  };
  </script>

<style scoped>

</style>