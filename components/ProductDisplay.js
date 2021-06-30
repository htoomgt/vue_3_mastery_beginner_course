app.component('product-display', {
    props : {
        premimum : {
            type : Boolean,
            required : true
        }
    },
    template: 
    /*html*/
    `
    <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" alt="" :class="{ outOfStockImg : !inStock}">
            
        </div>
        <div class="product-info">
            <h1 v-show="onSale"> {{ title }}</h1>

            <p v-if="invetory > 10"> In stock</p>
            <p v-else-if="invetory <= 10 && invetory > 0"> Almost sold out</p>
            <p v-else> Out of stock</p>

            <p> 
                Shipping : {{shipping}}
            </p>

            <product-detail :details="details"></product-detail>
            
            <div 
                v-for="variant, index in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :class="{active : activeProduct}"                     
                :style="{ backgroundColor : variant.color}">                       
            </div>

            <button 
                class="button" 
                v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{disabledButton : !inStock}"
                >
                Add to cart
            </button>
            <button 
                class="removeButton"
                v-on:click="removeFromCart" 
                :disabled="!inStock"
                :class="{disabledButton : !inStock}"
                >
                Remove from cart
            </button>
        


            

        </div>
    </div>
</div>  
    `,
    data : function() {
        return {
            product : 'Socks',
            // image : './assets/images/socks_blue.jpg',
            vueMasteryUrl : 'https://www.vuemastery.com/',
            brand : 'Vue Mastery',
            invetory : 100,
            // inStock : false,
            // onSale : true,
            // activeProduct: true,
            details : ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {id : 2234, color: 'green', image : './assets/images/socks_green.jpg', quantity: 50},
                {id : 2235, color: 'blue', image : './assets/images/socks_blue.jpg', quantity: 0}
            ],
            selectedVariant: 0,
            sizes : ['small', 'medium', 'large'],
        }
    },
    methods: {
        addToCart(){
            // this.cart += 1;
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index){
            this.selectedVariant = index;        
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        }
        
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        activeProduct(){
            return false;
        },
        onSale(){
            return true;
        },
        shipping(){
            if(this.premimum)
            {
                return "Free"
            }
                return 2.99
        }
    }

})