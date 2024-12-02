<script setup>
  const msg = 'Hello World'
  const testSetup = () => {
    console.log('testSetup')
  }
</script>
<template>
  <h1>{{ msg }}</h1>
  <button @click="testSetup">testSetup in console</button>
</template>
