<style scoped>
    .demo {
        padding: .5rem;
        background: #F8F8F8;
    }
</style>
<template>
    <div id="app" class="container pt-4">
        <h1>Vue AB</h1>
        <div>
            <h4 class="mt-4">Basic</h4>
            <hr />
            <h5 class="mt-4">Demo</h5>
            <div>
                <button type="button" class="btn btn-primary" @click="$refs.ab1.resample()">Re-Sample</button>
                <button type="button" class="btn btn-primary" @click="cleanCookie">Clean All Cookie</button>
            </div>
            <div class="candidate">candidate = <strong>{{ candidate1 }}</strong></div>
            <div class="demo mt-4">
                <Ab @sample="(candidate) => candidate1 = candidate" cookie-name="vue-ab-example1" ref="ab1">
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
            </div>
            <h5 class="mt-4">Code</h5>
            <div>
                <pre><code class="html" ref="example1"></code></pre>
            </div>
        </div>
        <div>
            <h4 class="mt-4">Weight</h4>
            <hr />
            <h5 class="mt-4">Demo</h5>
            <div>
                <button type="button" class="btn btn-primary" @click="$refs.ab2.resample()">Re-Sample</button>
                <button type="button" class="btn btn-primary" @click="cleanCookie">Clean All Cookie</button>
            </div>
            <div class="candidate">candidate = <strong>{{ candidate2 }}</strong></div>
            <div class="demo mt-4">
                <Ab @sample="(candidate) => candidate2 = candidate" cookie-name="vue-ab-example2" :weight="{candidate1: 100, candidate2: 100, candidate3: 10, candidate4: 10}" ref="ab2">
                    <div slot="candidate1">
                        Candidate 1, (weight = 100)
                    </div>
                    <div slot="candidate2">
                        Candidate 2, (weight = 100)
                    </div>
                    <div slot="candidate3">
                        Candidate 3, (weight = 10)
                    </div>
                    <div slot="candidate4">
                        Candidate 4, (weight = 10)
                    </div>
                    <div slot="candidate5">
                        Candidate 5, (weight = 0), Never
                    </div>
                </Ab>
            </div>
            <h5 class="mt-4">Code</h5>
            <div>
                <pre><code class="html" ref="example2"></code></pre>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                candidate1: null,
                candidate2: null,
                example1: `<Ab
    @sample="(candidate) => candidate1 = candidate"
    cookie-name="vue-ab-example1"
>
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
</Ab>`,
                example2: `<Ab
    @sample="(candidate) => candidate2 = candidate"
    cookie-name="vue-ab-example2"
    :weight="{candidate1: 100, candidate2: 100, candidate3: 10, candidate4: 10}"
>
    <div slot="candidate1">
        Candidate 1, (weight = 100)
    </div>
    <div slot="candidate2">
        Candidate 2, (weight = 100)
    </div>
    <div slot="candidate3">
        Candidate 3, (weight = 10)
    </div>
    <div slot="candidate4">
        Candidate 4, (weight = 10)
    </div>
    <div slot="candidate5">
        Candidate 5, (weight = 0), Never
    </div>
</Ab>`,
            };
        },
        mounted() {
            this.$refs.example1.textContent = this.example1;
            hljs.highlightBlock(this.$refs.example1);
            this.$refs.example2.textContent = this.example2;
            hljs.highlightBlock(this.$refs.example2);
        },
        methods: {
            cleanCookie() {
                document.cookie.split(";").forEach((c) => {
                    document.cookie = c
                        .replace(/^ +/, "")
                        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
            },
        },
    };
</script>
