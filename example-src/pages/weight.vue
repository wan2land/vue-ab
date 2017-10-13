<template>
  <div>
    <h2 class="mt-4">{{ $route.meta.title }}</h2>
    <h5 class="mt-4">Demo</h5>
    <div>
      <button type="button" class="btn btn-primary" @click="$refs.ab.resample()">Re-Sample</button>
    </div>
    <div class="candidate">candidate = <strong>{{ candidate }}</strong></div>
    <div class="demo mt-4">
      <v-ab
        cookie-name="cookie-example-weight"
        @sample="(_candidate) => candidate = _candidate"
        :weight="{candidate1: 100, candidate2: 100, candidate3: 10, candidate4: 10}"
        ref="ab"
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
      </v-ab>
    </div>
    <h5 class="mt-4">Code</h5>
    <div>
      <pre><code class="html" ref="example"></code></pre>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        candidate: null,
        example: `<v-ab
  cookie-name="cookie-example-weight"
  @sample="(_candidate) => candidate = _candidate"
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
</v-ab>`,
      };
    },
    mounted() {
      this.$refs.example.textContent = this.example;
      hljs.highlightBlock(this.$refs.example);
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
