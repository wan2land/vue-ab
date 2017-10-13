
import Cookie from 'js-cookie'
import {pick} from './helpers';

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
        return {
            candidate: null,
        };
    },
    mounted() {
        var restoredCandidate = Cookie.get(this.cookieName);
        var candidate;
        var picked = false;
        if (restoredCandidate && restoredCandidate in this.$slots) {
            candidate = this.candidate = restoredCandidate;
        } else {
            picked = true;
            candidate = this.candidate = pick(this.$slots, this.weight);
            Cookie.set(this.cookieName, this.candidate, {expires: this.cookieExpires});
        }
        var index = Object.keys(this.$slots).indexOf(candidate);

        this.$emit('load', candidate, index);
        if (picked) this.$emit('pick', candidate, index);
        this.$emit('sample', candidate, index);
    },
    render(h) {
        if (!this.candidate) return;
        let candidateSlot = this.$slots[this.candidate];
        if (candidateSlot.length == 1 && candidateSlot[0].tag) {
            return candidateSlot[0];
        }
        return h(this.tag, candidateSlot);
    },
    methods: {
        resample() {
            var candidate = this.candidate = pick(this.$slots, this.weight);
            var index = Object.keys(this.$slots).indexOf(candidate);
            Cookie.set(this.cookieName, this.candidate, {expires: this.cookieExpires});
            this.$emit('pick', candidate, index);
            this.$emit('sample', candidate, index);
        },
    },
}
