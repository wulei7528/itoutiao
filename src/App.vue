<template>
  <app-layout>
    <div slot="content-view">
      <router-view/>
    </div>
  </app-layout>
</template>

<script>
import { AppLayout } from '@/plugins/components/layout'

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
