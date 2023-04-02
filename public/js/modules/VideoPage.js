export default {
    template: `
    <section>
        <!-- <h2>{{ message }}</h2> -->

        <section>
            <img src="./public/images/" class="album">
        </section>

        <section class="video-details app-details">
            <div class="title">
                <i class="ri-movie-2-line"></i><h3>Video Title Goes Here</h3>
            </div>
        </section>

        <!-- <button @click="registerUser">Register for Awesome Swag!</button> -->
    </section>
    `,

    data: function() {
        return {
            // message: "Welcome to my Super Awesome App!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked the video button');
        }
    }
}