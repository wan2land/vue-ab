
import Ab from './Ab';

export function install(Vue, options) {
    options = options || {};
    Vue.component(options.name || 'Ab', Ab);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
};
