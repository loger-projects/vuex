<template>
    <div id="productListOne">
        <h1 class="list-title">Product List One</h1>
        <div class="list">
            <ul>
                <li v-for="product in products" :key="product.id">{{ product.name }} <span class="price">${{ product.price }}</span></li>
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
        saleProduct() {
            return this.$store.state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
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