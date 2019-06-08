<template>
    <div id="productListTwo">
        <h1 class="list-title">Product List Two</h1>
        <div class="list">
            <ul>
                <li v-for="product in saleProducts" :key="product.id">{{ product.name }} <span class="price">${{ product.price }}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductListTwo',
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts
        }
    }
}
</script>

<style lang="scss" scoped>
    #productListTwo {
        background-color: rgb(240, 239, 198);
        padding-bottom: 20px;
        text-align: center;
        .list-title {
            color: #3a1d15;
            padding: 20px 0;
        }
        .list ul li {
            background-color: rgb(182, 245, 253);
            font-size: 20px;
            padding: 30px 20px;
            margin: 15px;
            .price {
                font-weight: bold;
                font-size: 20px;
                color: rgb(196, 114, 38);
            }
        }
    }
</style>