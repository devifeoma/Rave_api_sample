<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar_style">
      <a class="navbar-brand" href="#">Ebook Store</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
          <li class="nav-item">
            <button class="nav-link btn btn-primary text-white" data-toggle="modal" data-target="#exampleModal">Cart({{numInCart}})</button>
          </li>
        </ul>
      </div>
    </nav>


    
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Your Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td><img :src="item.image" :alt="item.name"></td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td></td>
            <td><b><s>N</s>{{ total }}</b></td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="modal-footer">
        <!-- <router-link to="/" tag="button" class="btn btn-secondary">Keep Shopping</router-link> -->
        <button type="button" class="btn btn-primary" @click="payWithRave">Checkout</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  name: "Navbar",
  data(){
    return{
      items: items(),
      cart: cart()
      // filters: {
      //   dollars: num => `$${num / 100}`,
      // }
    }
  },

  methods: {
    payWithRave() {
      var x = getpaidSetup({
        PBFPubKey:"FLWPUBK-64cf56cece44fe6351676a08a3f88eca-X",
        customer_email: "judith@gmail.com",
        amount: this.total,
        currency: "NGN",
        txref: "rave-123456",
        subaccounts: [
        {
          id: "RS_1770B4221C5E9352F4BAD9ED1AA689A5"
        }
        ],
        meta: [{
          metaname: "flightID",
          metavalue: "AP1234"
        }],
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect flwRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
                this.$router.push('Redirect'); 
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
      });
    }
  },

  // mounted() {
  //   console.log(this.items);
  // },

  computed: {
    // To get items 
    items() { 
      return this.$store.getters.items; 
    },
    
    inCart() { 
      return this.$store.getters.inCart; 
    },

    // To get items in the cart
    numInCart() { 
      return this.inCart.length; 
    },

    
    // To display the items in the cart.
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.items.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },

// Total price of the products in the cart
    total() {
      let amount = this.cart.reduce((acc, cur) => acc + cur.price, 0);
      return amount;
    }
  }
}
</script>

<style scoped>
  .modal-header{
    border-bottom: none !important;
  }

  .navbar_style{
    background: #d4d7dd !important;
  }
</style>