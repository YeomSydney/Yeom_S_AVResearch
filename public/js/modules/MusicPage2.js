export default {
    template: `
    <section>
        <section>
            <img src="./public/images/" class="album">
        </section>

        <section class="video-details app-details">
            <div class="music-title">
                <h3>Music Title Goes Here</h3>
                <p>Singer</p>
            </div>

            <div class="play-controller">
                <div class="previous"><i class="ri-arrow-left-s-fill"></i></div>
                <div class="play"><i class="ri-play-circle-line"></i></div>
                <div class="next"><i class="ri-arrow-right-s-fill"></i></div>
            </div>
            
            <button>View Lyrics</button>

            <div class="lyrics"></div>
        </section>

        <!-- <form id="my-form">
            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">

            <input @click="submitData" type="submit" value="Submit">
        </form> -->
    </section>
    `,

    data: function() {
        return {
            uname: "",
            pword: "",
            // message: "Welcome to my Super Awesome App!"
        }
    },

    methods: {
        submitData() {
            // hit an api with a Fetch call
            // refer to the mailForm example from last semester -> the node mailer setup
            debugger;
        }
    }
}