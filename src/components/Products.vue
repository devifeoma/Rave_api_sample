<template>
    <div class="container product_container">
        <div class="row">
            <div class="col-md-3 product_margin mobile_view" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.image" class="card-img-top" :alt="item.name">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text"><s>N</s>{{item.price}}</p>
                        <div class="row justify-content-end">
                            <button class="btn btn-primary" @click="addToCart(item.invId)">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Script } from 'vm';
export default {
    data(){
        return{
            filters: {
                dollars: num => `$${num / 100}`,
            }
        }
    },

    computed: {
        items() { return this.$store.getters.items; },
        inCart() { return this.$store.getters.inCart; }
    },

    // mounted (){
    //     console.log('Mounted:', this.inCart);
    // },

    methods: {
        addToCart(invId) {
            this.$store.dispatch('addToCart', invId);
            console.log(invId);
        }
    }
}
</script>

<style>
    .product_container {
        margin-top: 30px;
    }

    .product_margin{
        margin-bottom: 30px;
    }

    @media (min-width: 768px){
        .mobile_view {
            margin-bottom: 30px;
        }
    }
</style>