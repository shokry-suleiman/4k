export default {
    bind(el, binding) {
        try {
            const { value } = binding;
            const loader = require('@/assets/images/4k-placeholder.png');
            const fallBackImage = require('@/assets/images/4k-placeholder.png');
            const img = new Image();
            let loading = loader;
            let error = fallBackImage;
            let original = el.src;
            if (typeof value === 'string') {
                loading = value;
                error = value;
            }
            if (value instanceof Object) {
                loading = value.imageLoader || loader;
                error = value.fallBackImage || fallBackImage;
            }
            img.src = original;
            el.src = loading;
            img.onload = () => {
                el.src = original;

            };
            img.onerror = () => {
                el.src = error;
                el.classList.remove('w-100');
            };
        } catch (e) {
            console.log(e)
        }
    }
}