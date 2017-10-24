
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
    mounted() {
        let candidate = this.candidate;
        let index = Object.keys(this.$slots).indexOf(candidate);
        this.$emit('sample', candidate, index);
        this.$emit('load', candidate, index);
    },
    computed: {
        candidate() {
            var restoredCandidate = Cookie.get(this.cookieName);
            if (restoredCandidate && restoredCandidate in this.$slots) {
                return restoredCandidate;
            } else {
                return this._pick();
            }
        },
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
        _pick() {
            let candidate = pick(this.$slots, this.weight);
            Cookie.set(this.cookieName, candidate, {expires: this.cookieExpires});
            this.$emit('pick', candidate, Object.keys(this.$slots).indexOf(candidate));
            return candidate;
        },
        resample() {
            let candidate = this._pick();
            this.$emit('sample', candidate, Object.keys(this.$slots).indexOf(candidate));
        },
    },
}
