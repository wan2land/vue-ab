
import Cookie from 'js-cookie'

function pick(collection, weight = {}) {
    var keys = Object.keys(collection);
    var thresholds = [];
    var sumOfWeights = 0;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let currWeight = weight[key];
        if (!currWeight) continue;
        thresholds.push([key, sumOfWeights + currWeight]);
        sumOfWeights += currWeight;
    }
    if (sumOfWeights) {
        var pickedKey = Math.floor(Math.random() * sumOfWeights);
        for (let i = 0; i < thresholds.length; i++) {
            if (thresholds[i][1] > pickedKey) return thresholds[i][0];
        }
    }
    return keys[Math.floor(Math.random() * keys.length)];
}
export default {
    props: {
        tag: {
            type: String,
            default: "div",
        },
        weight: Object,
        cookieName: {
            type: String,
            default: "vue-ab-cookie",
        },
        cookieExpires: {
            type: Number,
            default: 7,
        },
        cookiePath: null,
    },
    data() {
        var restoredCandidate = Cookie.get(this.cookieName);
        var candidate;
        if (restoredCandidate) {
            candidate = restoredCandidate;
        } else {
            candidate = pick(this.$slots, this.weight);
            Cookie.set(this.cookieName, candidate, {expires: this.cookieExpires});
        }
        return {
            candidate: candidate,
        };
    },
    mounted() {
        this.$emit('sample', this.candidate);
    },
    render(h) {
        let candidateSlot = this.$slots[this.candidate];
        if (candidateSlot.length == 1 && candidateSlot[0].tag) {
            return candidateSlot[0];
        }
        return h(this.tag, candidateSlot);
    },
    methods: {
        resample() {
            var candidate = pick(this.$slots, this.weight);
            this.$nextTick(() => this.$emit('sample', candidate));
            Cookie.set(this.cookieName, candidate, {expires: this.cookieExpires});
            this.candidate = candidate;
        },
    },
}
