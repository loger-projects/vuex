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
        <h2>Get value of modules' state: {{ name }}</h2>
        <h2>Get value of state in submodules ( namespace = true ): {{ age }}</h2>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ProductListOne',
    computed: {
        products() {
            return this.$store.state.products
        },
        count() {
            return this.$store.getters.getCount
        },
        name() {
            return this.$store.state.account.firstName
        },
        age() {
            return this.$store.state.account.info.age
        }
    },
    methods: {
        increaseProductPrice(product) {
            this.$store.commit('increaseProductPrice', {
                name: product.name, 
                price: product.price + 10, 
                inStock: product.inStock
            })
        },
        ...mapActions([
           'increment',
           'doubleIncrement',
        ]),
        ...mapActions({
            asyncActions: 'actionA'
        }),
    },
    mounted() {
        // async function f() {
        //     return 'async function has to wait until the await function finish its job'
        // }
        // f().then((data) => alert(data))
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