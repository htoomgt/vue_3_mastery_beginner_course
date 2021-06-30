const app = Vue.createApp({
    data : function() {
        return {
            product : 'Socks',
            image : './assets/images/socks_blue.jpg',
            vueMasteryUrl : 'https://www.vuemastery.com/',
            invetory : 100,
            onSale : true,
            details : ['50% cotton', '30% wool', '20% polyester']
        }
    }
})