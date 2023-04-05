export default {
    template: `
    <section>
        <!-- <h2>{{ message }}</h2> -->

        

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