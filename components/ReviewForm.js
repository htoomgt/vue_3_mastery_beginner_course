app.component('review-form', {
    props : {

    },
    template: 
    /*html*/
    `
        <form class="review-form" @submit.prevent="onSubmit" id="reviewForm"> 
            <h3> Leave a review </h3>
            <label for="name"> Name : </label>
            <input type="text" id="name" v-model="name" />


            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for="willRecommend"> Will you recommend this product? : </label>
            <input type="checkbox" v-model="recommend" id="willRecommend"  />

            <input type="submit" class="button" value="Submit" />

        </form>`
    ,
    data(){
        return {
            name : '',
            review : '',
            rating : null,
            recommend : false,
        }
    },
    methods : {
        onSubmit(){

            if(this.name === "" || this.review === "" || this.rating == null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            
            let productReview = {
                name : this.name,
                review : this.review,
                rating : this.rating,
                recommend : this.recommend
            };

            this.$emit('review-submitted', productReview);

            this.name = "";
            this.review = "";
            this.rating = null;
            this.recommend=false;
        }
    } 

})