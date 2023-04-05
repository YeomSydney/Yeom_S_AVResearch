export default {
    template: `
    <section class="video-page">
        <div class="video-heading">
            <h3>Stream</h3>
        </div>

        <div class="video-content">
            <div>
                <video controls>
                    <source src="./public/includes/.mp4" type="video/mp4">
                    <track kind="captions" src="/captions/sample.vtt" srclang="en" label="English Captions">
                </video>

                <div class="transcript"></div>
            </div>
        </div>
    </section>
    `,

    data() {
        return {
        }
    },

    methods: {
        registerUser() {
            console.log('clicked the video button');
        }
    }
}