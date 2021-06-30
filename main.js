const app = Vue.createApp({
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
            cart : 0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateVariant(index){
            this.selectedVariant = index;        
        },
        removeFromCart(){
            this.cart -= 1;
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
        }
    }
})