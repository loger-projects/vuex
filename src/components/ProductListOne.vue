<template>
    <div id="productListOne">
        <h1 class="list-title">All Products</h1>
        <div class="list">
            <ul>
                <li v-for="product in products" :key="product.id">
                    {{ product.name }} <span class="price">${{ product.price }}</span>
                    <div><button class="button" @click="increaseProductPrice(product)">Increase by 10$</button></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductListOne',
    computed: {
        products() {
            return this.$store.state.products
        },
        count() {
            return this.$store.getters.getCount
        }
    },
    methods: {
        increaseProductPrice(product) {
            this.$store.commit('increaseProductPrice', {
                name: product.name, 
                price: product.price + 10, 
                inStock: product.inStock
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    #productListOne {
        background-color: skyblue;
        padding-bottom: 20px;
        text-align: center;
        .list-title {
            color: #3a1d15;
            padding: 20px 0;
        }
        .list ul li {
            background-color: rgb(253, 252, 182);
            display: inline-block;
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