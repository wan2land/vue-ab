<template>
    <div id="app" class="container pt-4">
        <h4>Simple Example</h4>
        <h5>Demo.</h5>
        <div>
            <button type="button" class="btn btn-primary" @click="resample">ReSample</button>
        </div>
        <Ab @sample="sample" ref="ab">
            <div slot="candidate1">
                Candidate 1, Div :-)
            </div>
            <p slot="candidate2">
                Candidate 2, p :-)
            </p>
            <template slot="candidate3">
                Candidate 3, String :-)
            </template>
            <template slot="candidate4">
                <div>Candidate 4</div>
                <p>Has Many Children :-)</p>
            </template>
            <!-- nothing :-) -->
            <template slot="candidate5"></template>
        </Ab>

        <h5>Example.</h5>

        <div>
            <pre><code class="html" ref="example1"></code></pre>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                example1: `<Ab>
    <div slot="candidate1">
        Candidate 1, Div :-)
    </div>
    <p slot="candidate2">
        Candidate 2, p :-)
    </p>
    <template slot="candidate3">
        Candidate 3, String :-)
    </template>
    <template slot="candidate4">
        <div>Candidate 4</div>
        <p>Has Many Children :-)</p>
    </template>
    <!-- nothing :-) -->
    <template slot="candidate5"></template>
</Ab>
`,
            };
        },
        mounted() {
            this.$refs.example1.textContent = this.example1;
            hljs.highlightBlock(this.$refs.example1);
        },
        methods: {
            sample(candidate) {
                console.log("sample!", candidate);
            },
            resample() {
                this.$refs.ab.resample();
            },
        },
    };
</script>
