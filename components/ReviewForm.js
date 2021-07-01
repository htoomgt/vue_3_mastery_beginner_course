app.component('review-form', {
    props : {

    },
    template: 
    /*html*/
    `
        <form class="review-form" @submit.prevent="onSubmit" id="reviewForm" name="reviewForm"> 
            <h3> Leave a review </h3>
            <label for="name"> Name : </label>
            <!--<div class="error" > Name is required</div>-->
            <input type="text" id="name" v-model="productReview.name" />


            <label for="review">Review:</label>
            <textarea id="review" v-model="productReview.review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="productReview.rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for="willRecommend"> Will you recommend this product? : </label>
            <input type="checkbox" v-model="productReview.recommend" id="willRecommend"  />

            <input type="submit" class="button" value="Submit" />

        </form>`
    ,
    data(){
        return {
            productReview : {
                name : '',
                review : '',
                rating : null,
                recommend : false,
            },
            formStatus : "",
            
            
            
        }
    },
    methods : {
        onSubmit(){
            

            if(this.productReview.name === "" || this.productReview.review === "" || this.productReview.rating == null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }

            
            let productReview = this.productReview;

            this.$emit('review-submitted', productReview);

            

            

            this.productReview = {
                name : '',
                review : '',
                rating : null,
                recommend : false,
            }
        }
    } 

})