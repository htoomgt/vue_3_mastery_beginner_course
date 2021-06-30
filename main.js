const app = Vue.createApp({
    data : function() {
        return {
            product : 'Socks',
            image : './assets/images/socks_blue.jpg',
            vueMasteryUrl : 'https://www.vuemastery.com/',
            brand : 'Vue Mastery',
            invetory : 100,
            inStock : false,
            onSale : true,
            activeClass: true,
            details : ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {id : 2234, color: 'green', image : './assets/images/socks_green.jpg'},
                {id : 2235, color: 'blue', image : './assets/images/socks_blue.jpg'}
            ],
            sizes : ['small', 'medium', 'large'],
            cart : 0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateImage(image){
            this.image = image;
        },
        removeFromCart(){
            this.cart -= 1;
        }
        
    }
})