app.component('review-list', {
    props : {
        reviews : {
            type: Array,
            requied : true
        }
    },
    template : 
    /*html*/
    `
        <div class="review-container"> 
            <h3> Reviews : </h3>
            <ul> 
                <li v-for="(review, index) in reviews" :key="index"> 
                    {{review.name}} gave this {{review.rating}} stars
                    <br/>
                    "{{review.review}}"

                    <br/>

                    <strong v-if="review.recommend"> Recommend </strong>
                </li>
            </ul>
        </div>
    `,
    methods : {

    },
    computed : {

    }
});