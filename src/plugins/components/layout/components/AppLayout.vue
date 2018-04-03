<template>
  <div>
    <app-header></app-header>
    <div>
      <slot name="content-view"></slot>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
  data() {
      return {
          
      }
  },
  components: {
    AppHeader
  }
};
</script>
