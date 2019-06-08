<template>
  <div id="app">
    <product-list-one></product-list-one>
    <hr>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

export default {
  components: {
    ProductListOne,
    ProductListTwo
  }
}
</script>