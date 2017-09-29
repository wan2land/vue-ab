
import Cookie from 'js-cookie'

function pick(collection) {
    var keys = Object.keys(collection);
    return keys[Math.floor(Math.random() * keys.length)];
}

export default {
    props: {
        tag: {
            type: String,
            default: "div",
        },
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
            candidate = pick(this.$slots);
            Cookie.set(this.cookieName, candidate, {expires: this.cookieExpires});
            this.$nextTick(() => this.$emit('sample', candidate));
        }
        return {
            candidate: candidate,
        };
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
            var candidate = pick(this.$slots);
            this.$nextTick(() => this.$emit('sample', candidate));
            Cookie.set(this.cookieName, candidate, {expires: this.cookieExpires});
            this.candidate = candidate;
        },
    },
}
